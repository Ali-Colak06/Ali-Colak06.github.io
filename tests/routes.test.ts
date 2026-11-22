import assert from 'node:assert/strict';
import test from 'node:test';
import { requireLocale } from '../src/i18n/config.ts';
import { equivalentRoute, routeFor } from '../src/i18n/routes.ts';

test('all six routes preserve the page in both language directions', () => {
  for (const [page, en, tr] of [
    ['home', '/', '/tr'],
    ['about', '/about', '/tr/about'],
    ['contact', '/contact', '/tr/contact'],
  ] as const) {
    assert.equal(routeFor(page, 'en'), en);
    assert.equal(routeFor(page, 'tr'), tr);
    assert.equal(equivalentRoute(en, 'tr'), tr);
    assert.equal(equivalentRoute(tr, 'en'), en);
    assert.equal(equivalentRoute(tr + '/', 'en'), en);
    assert.equal(equivalentRoute(en, 'en'), en);
  }
});

test('unknown pages do not silently switch to Home', () => {
  for (const path of ['/404', '/missing', '/en/about', '/tr/hakkimda', '/projects']) {
    assert.equal(equivalentRoute(path, 'tr'), undefined);
  }
});

test('locale context must be explicitly supported', () => {
  assert.equal(requireLocale('en'), 'en');
  assert.equal(requireLocale('tr'), 'tr');
  assert.throws(() => requireLocale(undefined), /Unsupported locale/);
  assert.throws(() => requireLocale('de'), /Unsupported locale/);
});
