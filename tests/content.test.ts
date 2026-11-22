import assert from 'node:assert/strict';
import test from 'node:test';
import { evaluate, parse } from 'groq-js';
import { localize } from '../src/i18n/localize.ts';
import { getSiteContent } from '../src/lib/sanity/content.ts';
import { siteContentQuery } from '../src/lib/sanity/queries.ts';
import { validateSiteContent } from '../src/lib/sanity/validate.ts';
import { validContent } from './fixtures/content.ts';

test('localization preserves exact copy and never substitutes English', () => {
  const copy = { en: '  Original punctuation!  ', tr: 'Türkçe.' };
  assert.equal(localize(copy, 'en', 'copy'), copy.en);
  assert.equal(localize(copy, 'tr', 'copy'), copy.tr);
  for (const value of [null, undefined, [], { en: 'English only' }, { en: 'English', tr: '  ' }]) {
    assert.throws(() => localize(value, 'tr', 'copy'), /copy.tr/);
  }
});

test('valid content retains copy and education order, including current education', () => {
  const content = validContent();
  assert.deepEqual(validateSiteContent(content), content);
  assert.deepEqual(validateSiteContent(content).aboutPage.education.map((entry) => entry.endYear), [null, 2024]);
});

test('any missing singleton, including unpublish, fails validation', () => {
  for (const key of ['siteSettings', 'homePage', 'aboutPage', 'contactPage']) {
    const content = { ...validContent(), [key]: null };
    assert.throws(() => validateSiteContent(content), new RegExp(key));
  }
});

test('both languages are required for every editorial localized field', () => {
  for (const locale of ['en', 'tr'] as const) {
    const paths = [
      'siteSettings.professionalTitle', 'homePage.heroDescription',
      'homePage.currently.studying', 'homePage.currently.learning', 'homePage.currently.workingOn',
      'homePage.contactCtaDescription', 'aboutPage.introduction',
      'aboutPage.education.0.institution', 'aboutPage.education.0.program', 'contactPage.description',
    ];
    for (const path of paths) {
      const content = validContent();
      let target: unknown = content;
      for (const key of path.split('.')) target = (target as Record<string, unknown>)[key];
      delete (target as Record<string, unknown>)[locale];
      assert.throws(() => validateSiteContent(content), new RegExp(`\\.${locale}`), path);
    }
  }
});

test('malformed settings and education fail with field-specific errors', () => {
  for (const [field, value] of [['email', 'invalid'], ['githubUrl', 'javascript:alert(1)'], ['linkedinUrl', '/relative'], ['name', '  ']] as const) {
    const content = validContent();
    content.siteSettings[field] = value;
    assert.throws(() => validateSiteContent(content), new RegExp(field));
  }
  const content = validContent();
  content.aboutPage.education = [];
  assert.throws(() => validateSiteContent(content), /education/);
  for (const endYear of [2024, 2025.5, NaN]) {
    const content = validContent();
    content.aboutPage.education[0]!.endYear = endYear;
    assert.throws(() => validateSiteContent(content), /endYear/);
  }
});

test('content loader validates unknown responses and exposes network failures', async () => {
  const content = validContent();
  assert.deepEqual(await getSiteContent(async (query) => {
    assert.equal(query, siteContentQuery);
    return content;
  }), content);
  await assert.rejects(getSiteContent(async () => null), /siteContent/);
  const cause = new Error('Test connection failed');
  await assert.rejects(getSiteContent(async () => { throw cause; }), (error: Error) => {
    assert.match(error.message, /Unable to read required published Sanity content/);
    assert.equal(error.cause, cause);
    return true;
  });
});

test('unconfigured live content access fails instead of returning scaffold data', async () => {
  await assert.rejects(getSiteContent(), (error: Error) => {
    assert.ok(error.cause instanceof Error);
    assert.match(error.cause.message, /SANITY_PROJECT_ID/);
    return true;
  });
});

test('GROQ returns only fixed published singleton IDs, keeping both locales and array order', async () => {
  const content = validContent();
  const dataset = Object.entries(content).flatMap(([type, fields]) => [
    { _id: type, _type: type, ...fields },
    { _id: `drafts.${type}`, _type: type, privateDraft: 'must not appear' },
    { _id: `versions.release.${type}`, _type: type, privateRelease: 'must not appear' },
    { _id: `other-${type}`, _type: type, duplicate: 'must not appear' },
  ]);
  const result = await evaluate(parse(siteContentQuery), { dataset });
  assert.deepEqual(await result.get(), content);
});

test('GROQ exposes an unpublished singleton as missing even when a draft remains', async () => {
  const content = validContent();
  const dataset = Object.entries(content).map(([type, fields]) => ({
    _id: type === 'contactPage' ? 'drafts.contactPage' : type,
    _type: type, ...fields,
  }));
  const result = await evaluate(parse(siteContentQuery), { dataset });
  const unpublished = await result.get();
  assert.equal(unpublished.contactPage, null);
  assert.throws(() => validateSiteContent(unpublished), /contactPage/);
});
