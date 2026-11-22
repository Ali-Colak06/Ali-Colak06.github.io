import { defineArrayMember, defineField, defineType } from 'sanity';

export const aboutPage = defineType({
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  fields: [
    defineField({ name: 'introduction', type: 'localizedText', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'education',
      type: 'array',
      of: [defineArrayMember({ type: 'educationEntry' })],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});
