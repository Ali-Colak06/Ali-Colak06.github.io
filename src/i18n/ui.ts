import type { Locale } from './config.ts';

// Fixed interface copy from CONTENT.md. Editorial values belong in Sanity.
interface UiCopy {
  navigation: string;
  theme: { dark: string; light: string };
  greeting: (name: string) => string;
  nav: { home: string; about: string; contact: string };
  currently: { heading: string; studying: string; learning: string; workingOn: string };
  aboutCta: string;
  contactCta: { heading: string; button: string };
  education: string;
  present: string;
  contact: { email: string; github: string; linkedin: string };
  footer: string;
  notFound: { heading: string; description: string; cta: string };
}

export const ui = {
  en: {
    navigation: 'Main navigation',
    theme: { dark: 'Switch to dark theme', light: 'Switch to light theme' },
    greeting: (name: string) => `Hi, I’m ${name}`,
    nav: { home: 'Home', about: 'About', contact: 'Contact' },
    currently: { heading: 'Currently', studying: 'Studying', learning: 'Learning', workingOn: 'Working on' },
    aboutCta: 'About Me',
    contactCta: { heading: "Let's Connect", button: 'Contact Me' },
    education: 'Education',
    present: 'Present',
    contact: { email: 'Email', github: 'GitHub', linkedin: 'LinkedIn' },
    footer: 'Built with Astro & Sanity',
    notFound: {
      heading: '404 — Page Not Found',
      description: "The page you're looking for doesn't exist or may have been moved.",
      cta: 'Back to Home',
    },
  },
  tr: {
    navigation: 'Ana menü',
    theme: { dark: 'Koyu temaya geç', light: 'Açık temaya geç' },
    greeting: (name: string) => `Merhaba, ben ${name}`,
    nav: { home: 'Ana Sayfa', about: 'Hakkımda', contact: 'İletişim' },
    currently: { heading: 'Şu anda', studying: 'Eğitim', learning: 'İlgi alanları', workingOn: 'Mevcut çalışmalar' },
    aboutCta: 'Hakkımda',
    contactCta: { heading: 'İletişime Geçelim', button: 'İletişime Geç' },
    education: 'Eğitim',
    present: 'Günümüz',
    contact: { email: 'E-posta', github: 'GitHub', linkedin: 'LinkedIn' },
    footer: 'Built with Astro & Sanity',
    notFound: {
      heading: '404 — Sayfa bulunamadı',
      description: 'Aradığınız sayfa mevcut değil veya taşınmış olabilir.',
      cta: 'Ana Sayfaya Dön',
    },
  },
} as const satisfies Record<Locale, UiCopy>;
