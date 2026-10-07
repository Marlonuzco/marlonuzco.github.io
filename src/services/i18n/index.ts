import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import type { Language } from '@/services/i18n/types';

import { LANGUAGE_KEY, readStorage, writeStorage } from '@/services/preferences';

const isLanguage = (value: null | string | undefined): value is Language =>
  value === 'en' || value === 'es';

const getInitialLanguage = (): Language => {
  const stored = readStorage(LANGUAGE_KEY);

  if (isLanguage(stored)) {
    return stored;
  }

  if (typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('es')) {
    return 'es';
  }

  return 'en';
};

const loadTranslation = async (language: Language) => {
  const url = new URL(
    `${import.meta.env.BASE_URL}translations/${language}/general.js`,
    window.location.href
  );
  const translationModule = (await import(/* @vite-ignore */ url.href)) as { default: object };

  return translationModule.default;
};

void i18n.use(initReactI18next).init({
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
  lng: getInitialLanguage(),
  resources: {},
  supportedLngs: ['en', 'es'],
});

export const changeAppLanguage = async (language: Language) => {
  if (!i18n.hasResourceBundle(language, 'translation')) {
    const translation = await loadTranslation(language);
    i18n.addResourceBundle(language, 'translation', translation, true, true);
  }

  await i18n.changeLanguage(language);
  writeStorage(LANGUAGE_KEY, language);
};

export const ready = changeAppLanguage(getInitialLanguage());

export default i18n;
