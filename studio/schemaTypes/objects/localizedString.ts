import { defineField, defineType } from 'sanity';
import { nonBlank } from '../validation.ts';

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Localized string',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'string', validation: (Rule) => Rule.required().custom(nonBlank) }),
    defineField({ name: 'tr', title: 'Türkçe', type: 'string', validation: (Rule) => Rule.required().custom(nonBlank) }),
  ],
});
