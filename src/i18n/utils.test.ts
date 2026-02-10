import { describe, it, expect } from 'vitest';
import { t, getLangFromUrl, getLocalizedPath, languages, defaultLang } from './utils';

describe('i18n utilities', () => {
  describe('t() - translation function', () => {
    it('should return Spanish translation for a simple key', () => {
      expect(t('es', 'nav.home')).toBe('Inicio');
    });

    it('should return English translation for a simple key', () => {
      expect(t('en', 'nav.home')).toBe('Home');
    });

    it('should return German translation for a simple key', () => {
      expect(t('de', 'nav.home')).toBe('Startseite');
    });

    it('should return nested translation', () => {
      expect(t('es', 'home.hero.title')).toBe('Ingeniero de Software Staff');
      expect(t('en', 'home.hero.title')).toBe('Staff Software Engineer');
      expect(t('de', 'home.hero.title')).toBe('Staff Software Engineer');
    });

    it('should return deeply nested translation', () => {
      expect(t('es', 'home.highlights.engineering.title')).toBe('Ingeniería de Software');
      expect(t('en', 'home.highlights.engineering.title')).toBe('Software Engineering');
      expect(t('de', 'home.highlights.engineering.title')).toBe('Software Engineering');
    });

    it('should return array for array translations', () => {
      const topics = t('en', 'blog.comingSoon.topics');
      expect(Array.isArray(topics)).toBe(true);
      expect(topics).toHaveLength(6);
      expect(topics[0]).toBe('✨ AI-augmented development workflows');
    });

    it('should return key if translation not found', () => {
      expect(t('es', 'nonexistent.key')).toBe('nonexistent.key');
    });

    it('should handle missing language gracefully', () => {
      // @ts-ignore - testing invalid input
      expect(t('fr', 'nav.home')).toBe('nav.home');
    });
  });

  describe('getLangFromUrl()', () => {
    it('should return "es" for root URL', () => {
      const url = new URL('http://localhost:4321/');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return "en" for English URL', () => {
      const url = new URL('http://localhost:4321/en');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should return "en" for English nested URL', () => {
      const url = new URL('http://localhost:4321/en/about');
      expect(getLangFromUrl(url)).toBe('en');
    });

    it('should return "de" for German URL', () => {
      const url = new URL('http://localhost:4321/de');
      expect(getLangFromUrl(url)).toBe('de');
    });

    it('should return "de" for German nested URL', () => {
      const url = new URL('http://localhost:4321/de/work');
      expect(getLangFromUrl(url)).toBe('de');
    });

    it('should return default language for unknown language code', () => {
      const url = new URL('http://localhost:4321/fr');
      expect(getLangFromUrl(url)).toBe('es');
    });

    it('should return default language for non-language path', () => {
      const url = new URL('http://localhost:4321/about');
      expect(getLangFromUrl(url)).toBe('es');
    });
  });

  describe('getLocalizedPath()', () => {
    it('should return root path for Spanish (default)', () => {
      expect(getLocalizedPath('/', 'es')).toBe('/');
    });

    it('should return localized path for Spanish pages', () => {
      expect(getLocalizedPath('/about', 'es')).toBe('/about');
      expect(getLocalizedPath('/work', 'es')).toBe('/work');
    });

    it('should return /en for English root', () => {
      expect(getLocalizedPath('/', 'en')).toBe('/en');
    });

    it('should return localized path for English pages', () => {
      expect(getLocalizedPath('/about', 'en')).toBe('/en/about');
      expect(getLocalizedPath('/work', 'en')).toBe('/en/work');
      expect(getLocalizedPath('/contact', 'en')).toBe('/en/contact');
    });

    it('should return /de for German root', () => {
      expect(getLocalizedPath('/', 'de')).toBe('/de');
    });

    it('should return localized path for German pages', () => {
      expect(getLocalizedPath('/about', 'de')).toBe('/de/about');
      expect(getLocalizedPath('/music', 'de')).toBe('/de/music');
      expect(getLocalizedPath('/blog', 'de')).toBe('/de/blog');
    });

    it('should handle paths with trailing slashes', () => {
      expect(getLocalizedPath('/about/', 'en')).toBe('/en/about/');
    });
  });

  describe('languages constant', () => {
    it('should contain all three languages', () => {
      expect(languages).toHaveProperty('es');
      expect(languages).toHaveProperty('en');
      expect(languages).toHaveProperty('de');
    });

    it('should have correct language names', () => {
      expect(languages.es).toBe('Español');
      expect(languages.en).toBe('English');
      expect(languages.de).toBe('Deutsch');
    });

    it('should have exactly 3 languages', () => {
      expect(Object.keys(languages)).toHaveLength(3);
    });
  });

  describe('defaultLang constant', () => {
    it('should be Spanish', () => {
      expect(defaultLang).toBe('es');
    });
  });

  describe('integration tests', () => {
    it('should handle complete translation workflow for Spanish page', () => {
      const url = new URL('http://localhost:4321/work');
      const lang = getLangFromUrl(url);
      expect(lang).toBe('es');
      expect(t(lang, 'work.heading')).toBe('Experiencia Laboral');
      expect(getLocalizedPath('/about', lang)).toBe('/about');
    });

    it('should handle complete translation workflow for English page', () => {
      const url = new URL('http://localhost:4321/en/music');
      const lang = getLangFromUrl(url);
      expect(lang).toBe('en');
      expect(t(lang, 'music.heading')).toBe('Music');
      expect(getLocalizedPath('/contact', lang)).toBe('/en/contact');
    });

    it('should handle complete translation workflow for German page', () => {
      const url = new URL('http://localhost:4321/de/contact');
      const lang = getLangFromUrl(url);
      expect(lang).toBe('de');
      expect(t(lang, 'contact.heading')).toBe('Lass uns verbinden');
      expect(getLocalizedPath('/work', lang)).toBe('/de/work');
    });

    it('should preserve language when navigating between pages', () => {
      const url = new URL('http://localhost:4321/en/about');
      const lang = getLangFromUrl(url);

      // Simulate navigation to different pages
      expect(getLocalizedPath('/work', lang)).toBe('/en/work');
      expect(getLocalizedPath('/music', lang)).toBe('/en/music');
      expect(getLocalizedPath('/contact', lang)).toBe('/en/contact');

      // All should maintain English
      expect(lang).toBe('en');
    });
  });
});
