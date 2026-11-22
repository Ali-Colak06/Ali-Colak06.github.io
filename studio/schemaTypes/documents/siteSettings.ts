import { defineField, defineType } from 'sanity';
import { nonBlank } from '../validation.ts';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'name', type: 'string', validation: (Rule) => Rule.required().custom(nonBlank) }),
    defineField({ name: 'professionalTitle', type: 'localizedString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'email', type: 'string', validation: (Rule) => Rule.required().email() }),
    defineField({ name: 'githubUrl', type: 'url', validation: (Rule) => Rule.required().uri({ scheme: ['https', 'http'] }) }),
    defineField({ name: 'linkedinUrl', type: 'url', validation: (Rule) => Rule.required().uri({ scheme: ['https', 'http'] }) }),
  ],
});
