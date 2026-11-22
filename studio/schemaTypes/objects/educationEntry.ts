import { defineField, defineType } from 'sanity';

export const educationEntry = defineType({
  name: 'educationEntry',
  title: 'Education entry',
  type: 'object',
  fields: [
    defineField({ name: 'institution', type: 'localizedString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'program', type: 'localizedString', validation: (Rule) => Rule.required() }),
    defineField({ name: 'startYear', type: 'number', validation: (Rule) => Rule.required().integer() }),
    defineField({
      name: 'endYear',
      type: 'number',
      description: 'Leave empty for Present / Günümüz.',
      validation: (Rule) => Rule.integer().custom((value, context) => {
        if (value == null) return true;
        const { startYear } = (context.parent ?? {}) as { startYear?: number };
        return typeof startYear !== 'number' || value >= startYear
          ? true
          : 'End year must be greater than or equal to start year.';
      }),
    }),
  ],
  preview: {
    select: { title: 'institution.en', subtitle: 'program.en' },
  },
});
