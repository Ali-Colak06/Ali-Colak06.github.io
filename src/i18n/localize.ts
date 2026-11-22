import { requireLocale, type Locale } from './config.ts';

export type LocalizedValue = Record<Locale, string>;

/** Select exact editorial copy without rewriting it or falling back to EN. */
export function localize(value: unknown, locale: Locale, field: string): string {
  requireLocale(locale);
  const text = value !== null && typeof value === 'object' && !Array.isArray(value)
    ? (value as Record<string, unknown>)[locale]
    : undefined;
  if (typeof text !== 'string' || text.trim().length === 0) {
    throw new Error(`Missing required content: ${field}.${locale}`);
  }
  return text;
}
