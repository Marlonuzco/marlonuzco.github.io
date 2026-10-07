import { useTranslation } from 'react-i18next';

import { useLocale } from '@/hooks/useLocale';
import { getCvPath } from '@/utils/links';

const primaryClass =
  'inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-contrast';
const secondaryClass =
  'inline-flex items-center justify-center rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink';

export const Hero = () => {
  const { t } = useTranslation();
  const { language } = useLocale();

  return (
    <section className="relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 sm:pt-40 sm:pb-28">
      <div aria-hidden="true" className="hero-stage">
        <div className="hero-dots" />
        <p className="hero-symbols">
          <span>{'</>'}</span>
          <span>{'{ }'}</span>
          <span>{'=>'}</span>
        </p>
      </div>
      <div className="relative mx-auto max-w-6xl">
        <p className="text-accent text-sm font-semibold tracking-[0.16em] uppercase">
          {t('hero.role')}
        </p>
        <div className="hero-rule" />
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          {t('hero.name')}
        </h1>
        <p className="text-primary mt-5 text-lg font-medium">{t('hero.stack')}</p>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-8">{t('hero.summary')}</p>
        <p className="text-muted mt-4 text-sm">{t('hero.availability')}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className={primaryClass} href="#contact">
            {t('hero.contact')}
          </a>
          <a className={secondaryClass} href="#projects">
            {t('hero.projects')}
          </a>
          <a className={secondaryClass} download href={getCvPath(language)}>
            {t('hero.downloadCv')}
          </a>
        </div>
      </div>
    </section>
  );
};
