import { defineField, defineType } from 'sanity';

export const contactPage = defineType({
  name: 'contactPage',
  title: 'Contact',
  type: 'document',
  fields: [
    defineField({ name: 'description', type: 'localizedText', validation: (Rule) => Rule.required() }),
  ],
});
