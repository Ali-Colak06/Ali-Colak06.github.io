import type { Locale } from './config.ts';

export const routes = {
  home: { en: '/', tr: '/tr' },
  about: { en: '/about', tr: '/tr/about' },
  contact: { en: '/contact', tr: '/tr/contact' },
} as const satisfies Record<string, Record<Locale, string>>;

export type Page = keyof typeof routes;

export function routeFor(page: Page, locale: Locale): string {
  return routes[page][locale];
}

/** Unknown URLs (including 404) have no equivalent content page. */
export function equivalentRoute(pathname: string, locale: Locale): string | undefined {
  const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  for (const page of Object.keys(routes) as Page[]) {
    if (routes[page].en === path || routes[page].tr === path) {
      return routeFor(page, locale);
    }
  }
  return undefined;
}
