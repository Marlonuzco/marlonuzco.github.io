import { useTranslation } from 'react-i18next';

import type { Language } from '@/services/i18n/types';

import { changeAppLanguage } from '@/services/i18n';

const isLanguage = (value: string | undefined): value is Language =>
  value === 'en' || value === 'es';

export const useLocale = () => {
  const { i18n } = useTranslation();
  const language: Language = isLanguage(i18n.resolvedLanguage) ? i18n.resolvedLanguage : 'es';

  const changeLanguage = (nextLanguage: Language) => {
    void changeAppLanguage(nextLanguage);
  };

  return { changeLanguage, language };
};
