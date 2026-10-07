import { useTranslation } from 'react-i18next';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

import type { CaseStudy } from './types';

import { Study } from './Study';

export const CaseStudies = () => {
  const { t } = useTranslation();
  const items = t('projects.items', { returnObjects: true }) as CaseStudy[];

  return (
    <Section id="projects">
      <SectionHeading intro={t('projects.intro')} title={t('projects.title')} />
      <div className="mt-12 space-y-6">
        {items.map((item) => (
          <Study
            decisionsLabel={t('projects.decisions')}
            item={item}
            key={item.id}
            problemLabel={t('projects.problem')}
            solutionLabel={t('projects.solution')}
            technologiesLabel={t('projects.technologies')}
          />
        ))}
      </div>
    </Section>
  );
};
