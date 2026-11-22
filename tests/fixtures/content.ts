import type { SiteContent } from '../../src/lib/sanity/types.ts';

// Synthetic test data only. Never seed or render it as portfolio content.
const localized = () => ({ en: 'Test English', tr: 'Test Türkçe' });

export function validContent(): SiteContent {
  return {
    siteSettings: {
      name: 'Test', professionalTitle: localized(), email: 'test@example.invalid',
      githubUrl: 'https://example.invalid/github', linkedinUrl: 'https://example.invalid/linkedin',
    },
    homePage: {
      heroDescription: localized(),
      currently: { studying: localized(), learning: localized(), workingOn: localized() },
      contactCtaDescription: localized(),
    },
    aboutPage: {
      introduction: localized(),
      education: [
        { institution: localized(), program: localized(), startYear: 2025, endYear: null },
        { institution: localized(), program: localized(), startYear: 2020, endYear: 2024 },
      ],
    },
    contactPage: { description: localized() },
  };
}
