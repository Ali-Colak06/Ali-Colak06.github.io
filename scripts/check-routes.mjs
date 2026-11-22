import assert from 'node:assert/strict';
import { access, readdir, readFile } from 'node:fs/promises';

const expected = [
  ['index.html', 'en', 'Hi, I’m '],
  ['about/index.html', 'en', 'About'],
  ['contact/index.html', 'en', 'Contact'],
  ['tr/index.html', 'tr', 'Merhaba, ben '],
  ['tr/about/index.html', 'tr', 'Hakkımda'],
  ['tr/contact/index.html', 'tr', 'İletişim'],
  ['404.html', 'en', '404 — Page Not Found'],
];

const output = new URL('../dist/', import.meta.url);
const files = await readdir(output, { recursive: true });
const htmlFiles = files.filter((file) => file.endsWith('.html')).map((file) => file.replaceAll('\\', '/'));
assert.deepEqual(htmlFiles.sort(), expected.map(([file]) => file).sort());
for (const file of files) {
  assert.doesNotMatch(file.replaceAll('\\', '/'), /(^|\/)(?:\.env(?:\.[^/]*)?|\.git|node_modules|studio)(?:\/|$)/, `Unexpected deployment file: ${file}`);
}

// User-site deployment lives at the domain root; verify generated local links
// and assets resolve in the uploaded artifact, including nested content pages.
const site = 'https://ali-colak06.github.io';
let localReferences = 0;

for (const [file, locale, heading] of expected) {
  const html = await readFile(new URL(file, output), 'utf8');
  assert.match(html, new RegExp(`<html lang="${locale}">`), file);
  assert.match(html, /<meta charset="utf-8"/i, file);
  assert.match(html, /<main[\s>]/, file);
  assert.equal((html.match(/<h1[\s>]/g) ?? []).length, 1, file);
  assert.ok(html.includes(heading), file);
  assert.doesNotMatch(html, /astro-island|api\.sanity\.io/i, file);
  const pagePath = file === 'index.html' ? '/' : `/${file.replace(/index\.html$/, '')}`;
  for (const [, value] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const target = new URL(value.replaceAll('&amp;', '&'), `${site}${pagePath}`);
    if (target.origin !== site) continue;
    const relative = decodeURIComponent(target.pathname).replace(/^\//, '');
    const candidates = target.pathname.endsWith('/')
      ? [`${relative}index.html`]
      : [relative, `${relative}/index.html`];
    const exists = await Promise.all(candidates.map((path) => access(new URL(path, output)).then(() => true, () => false)));
    assert.ok(exists.some(Boolean), `${file}: missing local target ${value}`);
    localReferences++;
  }
  if (file !== '404.html') {
    assert.match(html, /<header\b/, file);
    assert.match(html, /<footer\b/, file);
    assert.match(html, /aria-current="page"/, file);
    assert.match(html, /portfolio-theme/, file);
    assert.ok(html.includes(`© ${new Date().getFullYear()}`), file);
    assert.match(html, /<p\b[^>]*>\s*[^<\s]/, `${file}: editorial content`);
    const opposite = locale === 'en' ? 'tr' : 'en';
    assert.doesNotMatch(html, new RegExp(`\\slang="${opposite}"`), file);
  }
  if (file === 'index.html' || file === 'tr/index.html') {
    const prefix = locale === 'en' ? '' : '/tr';
    assert.ok(html.includes(`href="${prefix}/about"`), file);
    assert.ok(html.includes(`href="${prefix}/contact"`), file);
    assert.equal((html.match(/<dt>/g) ?? []).length, 3, file);
  }
  if (file.endsWith('about/index.html')) {
    assert.match(html, /<li class="education-entry">\s*<div>\s*<h3>[^<]+<\/h3>/, `${file}: education`);
    assert.match(html, /\d{4} — (?:\d{4}|Present|Günümüz)/, file);
  }
  if (file.endsWith('contact/index.html')) {
    assert.match(html, /href="mailto:[^"\s]+@[^"\s]+"/, file);
    assert.equal((html.match(/<a\b[^>]*href="https?:\/\//g) ?? []).length, 2, file);
  }
}

const notFound = await readFile(new URL('404.html', output), 'utf8');
assert.match(notFound, /id="error-heading">404 — Page Not Found<\/h1>/);
assert.match(notFound, /data-locale="en"[^>]*aria-pressed="true"/);
assert.match(notFound, /data-locale="tr"[^>]*aria-pressed="false"/);
assert.doesNotMatch(notFound, /<nav\b/);
assert.match(notFound, /href="\/"[^>]*id="error-home"/);
console.log('Verified six content pages and one English-initialized global 404 with language controls; no browser CMS calls or framework hydration.');
console.log(`Verified ${localReferences} local link/asset references and excluded private/Studio artifacts.`);
