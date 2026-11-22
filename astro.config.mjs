import { defineConfig } from 'astro/config';
import sanity from '@sanity/astro';
import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';
import { defaultLocale, locales } from './src/i18n/config.ts';

const envFile = new URL('./.env', import.meta.url);
if (existsSync(envFile)) loadEnvFile(envFile);
const projectId = process.env.SANITY_PROJECT_ID?.trim();
if (!projectId) throw new Error('Set SANITY_PROJECT_ID in the root .env before running Astro.');

export default defineConfig({
  site: 'https://ali-colak06.github.io',
  output: 'static',
  build: { format: 'directory' },
  i18n: {
    defaultLocale,
    locales: [...locales],
    routing: { prefixDefaultLocale: false },
  },
  devToolbar: { enabled: false },
  integrations: [sanity({
    projectId,
    dataset: 'production',
    apiVersion: '2026-09-01',
    useCdn: false,
    perspective: 'published',
  })],
});
