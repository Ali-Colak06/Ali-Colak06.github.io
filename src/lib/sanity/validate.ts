import { localize, type LocalizedValue } from '../../i18n/localize.ts';
import type { EducationEntry, SiteContent } from './types.ts';

function object(value: unknown, field: string): Record<string, unknown> {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`Missing or invalid required content: ${field}`);
  }
  return value as Record<string, unknown>;
}

function text(value: unknown, field: string): string {
  if (typeof value !== 'string' || value.trim().length === 0) {
    throw new Error(`Missing or invalid required content: ${field}`);
  }
  return value;
}

function localized(value: unknown, field: string): LocalizedValue {
  return { en: localize(value, 'en', field), tr: localize(value, 'tr', field) };
}

function url(value: unknown, field: string): string {
  const result = text(value, field);
  try {
    const parsed = new URL(result);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') return result;
  } catch { /* The field-specific error below also covers malformed URLs. */ }
  throw new Error(`Invalid content: ${field} must be an absolute HTTP(S) URL.`);
}

function year(value: unknown, field: string): number {
  if (typeof value !== 'number' || !Number.isSafeInteger(value)) {
    throw new Error(`Invalid content: ${field} must be an integer year.`);
  }
  return value;
}

function educationEntry(value: unknown, index: number): EducationEntry {
  const path = `aboutPage.education[${index}]`;
  const entry = object(value, path);
  const startYear = year(entry.startYear, `${path}.startYear`);
  const endYear = entry.endYear == null ? null : year(entry.endYear, `${path}.endYear`);
  if (endYear !== null && endYear < startYear) {
    throw new Error(`Invalid content: ${path}.endYear must be >= startYear.`);
  }
  return {
    institution: localized(entry.institution, `${path}.institution`),
    program: localized(entry.program, `${path}.program`),
    startYear,
    endYear,
  };
}

/** CMS API writes can bypass Studio rules; validate again at the build boundary. */
export function validateSiteContent(value: unknown): SiteContent {
  const content = object(value, 'siteContent');
  const settings = object(content.siteSettings, 'siteSettings');
  const home = object(content.homePage, 'homePage');
  const about = object(content.aboutPage, 'aboutPage');
  const contact = object(content.contactPage, 'contactPage');
  const currently = object(home.currently, 'homePage.currently');
  const email = text(settings.email, 'siteSettings.email');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('Invalid content: siteSettings.email must be a valid email address.');
  }
  if (!Array.isArray(about.education) || about.education.length === 0) {
    throw new Error('Missing required content: aboutPage.education needs at least one entry.');
  }
  return {
    siteSettings: {
      name: text(settings.name, 'siteSettings.name'),
      professionalTitle: localized(settings.professionalTitle, 'siteSettings.professionalTitle'),
      email,
      githubUrl: url(settings.githubUrl, 'siteSettings.githubUrl'),
      linkedinUrl: url(settings.linkedinUrl, 'siteSettings.linkedinUrl'),
    },
    homePage: {
      heroDescription: localized(home.heroDescription, 'homePage.heroDescription'),
      currently: {
        studying: localized(currently.studying, 'homePage.currently.studying'),
        learning: localized(currently.learning, 'homePage.currently.learning'),
        workingOn: localized(currently.workingOn, 'homePage.currently.workingOn'),
      },
      contactCtaDescription: localized(home.contactCtaDescription, 'homePage.contactCtaDescription'),
    },
    aboutPage: {
      introduction: localized(about.introduction, 'aboutPage.introduction'),
      education: about.education.map(educationEntry),
    },
    contactPage: { description: localized(contact.description, 'contactPage.description') },
  };
}
