import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { evaluate, parse } from 'groq-js';

const config = JSON.parse(await readFile(new URL('../studio/webhooks/github-pages.json', import.meta.url), 'utf8'));
const filter = parse(config.rule.filter, { mode: 'delta' });
const projection = parse(config.rule.projection, { mode: 'delta' });
const document = (type: string, id = type) => ({ _id: id, _type: type, privateDraft: 'never send editorial fields' });
const matches = async (before: unknown, after: unknown) =>
  (await evaluate(filter, { before, after })).get();

test('webhook matches published singleton creation, update and deletion', async () => {
  for (const type of ['siteSettings', 'homePage', 'aboutPage', 'contactPage']) {
    const value = document(type);
    assert.equal(await matches(null, value), true, `create ${type}`);
    assert.equal(await matches(value, { ...value, updated: true }), true, `update ${type}`);
    assert.equal(await matches(value, null), true, `delete/unpublish ${type}`);
  }
});

test('webhook excludes draft, release, duplicate and unrelated documents', async () => {
  for (const value of [
    document('homePage', 'drafts.homePage'),
    document('homePage', 'versions.release.homePage'),
    document('homePage', 'duplicate-homePage'),
    document('sanity.imageAsset'),
    document('project'),
    document('unrelated', 'homePage'),
  ]) {
    assert.equal(await matches(null, value), false);
    assert.equal(await matches(value, value), false);
    assert.equal(await matches(value, null), false);
  }
});

test('webhook sends only a fixed main dispatch payload and ships without credentials', async () => {
  for (const [before, after] of [[null, document('homePage')], [document('homePage'), null]]) {
    assert.deepEqual(await (await evaluate(projection, { before, after })).get(), { ref: 'main' });
  }
  assert.equal(config.dataset, 'production');
  assert.equal(config.includeDrafts, false);
  assert.equal(config.includeAllVersions, false);
  assert.deepEqual(config.rule.on, ['create', 'update', 'delete']);
  assert.equal(config.isDisabledByUser, true);
  assert.equal(config.headers.Authorization, undefined);
});
