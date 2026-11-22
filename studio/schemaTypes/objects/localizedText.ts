import { defineField, defineType } from 'sanity';
import { nonBlank } from '../validation.ts';

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Localized text',
  type: 'object',
  fields: [
    defineField({ name: 'en', title: 'English', type: 'text', validation: (Rule) => Rule.required().custom(nonBlank) }),
    defineField({ name: 'tr', title: 'Türkçe', type: 'text', validation: (Rule) => Rule.required().custom(nonBlank) }),
  ],
});
