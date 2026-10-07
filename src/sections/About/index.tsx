import { useTranslation } from 'react-i18next';

import { Section } from '@/components/Section';

import type { Fact } from './types';

export const About = () => {
  const { t } = useTranslation();
  const facts = t('about.facts', { returnObjects: true }) as Fact[];

  return (
    <Section id="about">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t('about.title')}</h2>
          <p className="text-muted mt-5 text-base leading-8">{t('about.summary')}</p>
        </div>
        <div className="border-line bg-surface rounded-3xl border p-6 shadow-(--shadow)">
          <ul className="space-y-4">
            {facts.map((fact) => (
              <li key={fact.label}>
                <p className="text-muted text-sm">{fact.label}</p>
                <p className="mt-1 text-lg font-semibold">{fact.value}</p>
              </li>
            ))}
          </ul>
          <h3 className="text-accent mt-6 text-sm font-semibold tracking-wide uppercase">
            {t('about.languagesTitle')}
          </h3>
          <p className="mt-3 text-sm">{t('about.spanish')}</p>
          <p className="mt-1 text-sm">{t('about.english')}</p>
        </div>
      </div>
    </Section>
  );
};
