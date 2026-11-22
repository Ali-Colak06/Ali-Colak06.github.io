import assert from 'node:assert/strict';
import test from 'node:test';
import { createClient } from '@sanity/client';
import { validateDocument } from '@sanity/validation';
import { createSchema, type SanityDocument } from 'sanity';
import { schemaTypes } from '../schemaTypes/index.ts';

const schema = createSchema({ name: 'test', types: schemaTypes });
// Validation is local. Any accidental network request must fail on loopback.
const client = createClient({
  projectId: 'scaffold', dataset: 'production', apiVersion: '2026-09-01',
  useCdn: false, apiHost: 'http://127.0.0.1:1', maxRetries: 0,
});
const localized = () => ({ en: 'Test English', tr: 'Test Türkçe' });
const doc = (type: string, fields: Record<string, unknown>): SanityDocument => ({
  _id: type, _type: type, _rev: 'test',
  _createdAt: '2026-09-01T00:00:00Z', _updatedAt: '2026-09-01T00:00:00Z', ...fields,
});
const errors = async (document: SanityDocument) => {
  const result = await validateDocument({ document, schema, client });
  assert.equal(result.complete, true, 'Validation must finish without execution errors');
  return result.markers.filter((marker) => marker.level === 'error');
};

test('valid bilingual V0 documents pass the real Sanity validator', async () => {
  const documents = [
    doc('siteSettings', { name: 'Test', professionalTitle: localized(), email: 'test@example.invalid', githubUrl: 'https://example.invalid/github', linkedinUrl: 'https://example.invalid/linkedin' }),
    doc('homePage', { heroDescription: localized(), currently: { studying: localized(), learning: localized(), workingOn: localized() }, contactCtaDescription: localized() }),
    doc('aboutPage', { introduction: localized(), education: [{ _key: 'first', _type: 'educationEntry', institution: localized(), program: localized(), startYear: 2025 }] }),
    doc('contactPage', { description: localized() }),
  ];
  for (const document of documents) assert.deepEqual(await errors(document), [], document._type);
});

test('required translations and entire missing objects block publication', async () => {
  for (const description of [undefined, { en: 'English' }, { tr: 'Türkçe' }, { en: 'English', tr: '   ' }]) {
    assert.ok((await errors(doc('contactPage', { description }))).length > 0);
  }
});

test('invalid email and URL produce field errors', async () => {
  const result = await errors(doc('siteSettings', {
    name: 'Test', professionalTitle: localized(), email: 'invalid',
    githubUrl: 'javascript:alert(1)', linkedinUrl: 'invalid',
  }));
  for (const field of ['email', 'githubUrl', 'linkedinUrl']) {
    assert.ok(result.some((marker) => marker.path[0] === field), field);
  }
});

test('education requires entries and validates year ranges', async () => {
  assert.ok((await errors(doc('aboutPage', { introduction: localized(), education: [] }))).length > 0);
  for (const endYear of [2024, 2025.5]) {
    const result = await errors(doc('aboutPage', {
      introduction: localized(),
      education: [{ _key: 'first', _type: 'educationEntry', institution: localized(), program: localized(), startYear: 2025, endYear }],
    }));
    assert.ok(result.some((marker) => marker.path.includes('endYear')));
  }
});

test('all V0 document fields are required except education endYear', async () => {
  for (const type of ['siteSettings', 'homePage', 'aboutPage', 'contactPage']) {
    assert.ok((await errors(doc(type, {}))).length > 0, type);
  }
});
