import { defineField, defineType } from 'sanity';

export const homePage = defineType({
  name: 'homePage',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({ name: 'heroDescription', type: 'localizedText', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'currently',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({ name: 'studying', type: 'localizedText', validation: (Rule) => Rule.required() }),
        defineField({ name: 'learning', type: 'localizedText', validation: (Rule) => Rule.required() }),
        defineField({ name: 'workingOn', type: 'localizedText', validation: (Rule) => Rule.required() }),
      ],
    }),
    defineField({ name: 'contactCtaDescription', type: 'localizedText', validation: (Rule) => Rule.required() }),
  ],
});
