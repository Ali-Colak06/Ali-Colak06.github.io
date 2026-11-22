export const locales = ['en', 'tr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Use Astro.currentLocale; unknown locales are configuration errors. */
export function requireLocale(value: unknown): Locale {
  if (value === 'en' || value === 'tr') return value;
  throw new Error(`Unsupported locale: ${String(value)}`);
}
