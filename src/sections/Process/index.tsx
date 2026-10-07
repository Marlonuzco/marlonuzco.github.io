import { useTranslation } from 'react-i18next';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

import type { ProcessStep } from './types';

import { Step } from './Step';

export const Process = () => {
  const { t } = useTranslation();
  const steps = t('process.steps', { returnObjects: true }) as ProcessStep[];

  return (
    <Section id="process">
      <SectionHeading intro={t('process.intro')} title={t('process.title')} />
      <ol className="border-line mt-12 max-w-3xl border-l">
        {steps.map((step, index) => (
          <Step index={index} key={step.title} step={step} />
        ))}
      </ol>
      <p className="text-muted mt-8 max-w-3xl text-sm leading-6">{t('process.note')}</p>
    </Section>
  );
};
