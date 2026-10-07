import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useLocale } from '@/hooks/useLocale';

export const DocumentMeta = () => {
  const { t } = useTranslation();
  const { language } = useLocale();
  const description = t('meta.description');
  const title = t('meta.title');

  useEffect(() => {
    document.title = title;
    document.documentElement.lang = language;

    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document
      .querySelector('meta[property="og:locale"]')
      ?.setAttribute('content', language === 'en' ? 'en_US' : 'es_ES');
  }, [description, language, title]);

  return null;
};
