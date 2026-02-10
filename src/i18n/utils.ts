import es from './locales/es.json';
import en from './locales/en.json';
import de from './locales/de.json';

export const languages = {
  es: 'Español',
  en: 'English',
  de: 'Deutsch'
};

export const defaultLang = 'es';

const translations = {
  es,
  en,
  de
};

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as keyof typeof translations;
  return defaultLang;
}

export function t(lang: string, key: string): any {
  const keys = key.split('.');
  let value: any = translations[lang as keyof typeof translations];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      console.warn(`Translation key not found: ${key} for language: ${lang}`);
      return key;
    }
  }

  return value;
}

export function getLocalizedPath(path: string, lang: string): string {
  if (lang === defaultLang) {
    return path;
  }

  if (path === '/') {
    return `/${lang}`;
  }

  return `/${lang}${path}`;
}

export function getCvUrl(lang: string): string {
  const langMapping: Record<string, string> = {
    'en': 'english',
    'es': 'español',
    'de': 'deutsch'
  };

  const cvLang = langMapping[lang] || 'english';
  return `https://raw.githubusercontent.com/ftrianakast/CV/main/${cvLang}/cv.pdf`;
}
