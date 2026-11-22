import { siteSettings } from './documents/siteSettings.ts';
import { homePage } from './documents/homePage.ts';
import { aboutPage } from './documents/aboutPage.ts';
import { contactPage } from './documents/contactPage.ts';
import { localizedString } from './objects/localizedString.ts';
import { localizedText } from './objects/localizedText.ts';
import { educationEntry } from './objects/educationEntry.ts';

export const schemaTypes = [
  siteSettings, homePage, aboutPage, contactPage,
  localizedString, localizedText, educationEntry,
];
