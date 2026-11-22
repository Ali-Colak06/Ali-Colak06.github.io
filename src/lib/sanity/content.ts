import { siteContentQuery } from './queries.ts';
import { validateSiteContent } from './validate.ts';
import type { SiteContent } from './types.ts';

type ContentFetcher = (query: string) => Promise<unknown>;

async function fetchPublishedContent(query: string): Promise<unknown> {
  if (!import.meta.env?.SANITY_PROJECT_ID?.trim()) {
    throw new Error('Set SANITY_PROJECT_ID in the root .env before requesting Sanity content.');
  }
  // Use only from Astro frontmatter/build-time code. No second client instance.
  const { sanityClient } = await import('sanity:client');
  return sanityClient.fetch<unknown>(query);
}

/** Optional fetch function makes network failure behavior testable offline. */
export async function getSiteContent(fetchContent: ContentFetcher = fetchPublishedContent): Promise<SiteContent> {
  let result: unknown;
  try {
    result = await fetchContent(siteContentQuery);
  } catch (cause) {
    throw new Error('Unable to read required published Sanity content. Check configuration and connection.', { cause });
  }
  return validateSiteContent(result);
}
