import type { LocalizedValue } from '../../i18n/localize.ts';

export interface SiteSettings {
  name: string;
  professionalTitle: LocalizedValue;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
}

export interface HomePage {
  heroDescription: LocalizedValue;
  currently: {
    studying: LocalizedValue;
    learning: LocalizedValue;
    workingOn: LocalizedValue;
  };
  contactCtaDescription: LocalizedValue;
}

export interface EducationEntry {
  institution: LocalizedValue;
  program: LocalizedValue;
  startYear: number;
  endYear: number | null;
}

export interface AboutPage {
  introduction: LocalizedValue;
  education: EducationEntry[];
}

export interface ContactPage {
  description: LocalizedValue;
}

export interface SiteContent {
  siteSettings: SiteSettings;
  homePage: HomePage;
  aboutPage: AboutPage;
  contactPage: ContactPage;
}
