import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { dataset, projectId } from './environment.ts';
import { schemaTypes } from './schemaTypes/index.ts';
import { singletonTypes, structure } from './structure/index.ts';

const singletonActions = new Set(['publish', 'discardChanges', 'restore', 'unpublish']);

export default defineConfig({
  name: 'portfolio',
  title: 'Ali Çolak Portfolio',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter((template) => !singletonTypes.has(template.schemaType)),
  },
  document: {
    newDocumentOptions: (options) => options.filter((option) => !singletonTypes.has(option.templateId)),
    actions: (actions, context) => singletonTypes.has(context.schemaType)
      ? actions.filter((action) => action.action && singletonActions.has(action.action))
      : actions,
  },
});
