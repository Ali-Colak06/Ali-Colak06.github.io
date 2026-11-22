import type { StructureResolver } from 'sanity/structure';

const singletons = [
  { type: 'siteSettings', title: 'Site Settings' },
  { type: 'homePage', title: 'Home' },
  { type: 'aboutPage', title: 'About' },
  { type: 'contactPage', title: 'Contact' },
] as const;

export const singletonTypes = new Set<string>(singletons.map(({ type }) => type));

export const structure: StructureResolver = (S) => S.list()
  .title('Content')
  .items(singletons.map(({ type, title }) => S.listItem()
    .id(type)
    .title(title)
    .child(S.document().schemaType(type).documentId(type))));
