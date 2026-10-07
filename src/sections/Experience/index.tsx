import { useTranslation } from 'react-i18next';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

import type { ExperienceJob } from './types';

import { Job } from './Job';

export const Experience = () => {
  const { t } = useTranslation();
  const jobs = t('experience.jobs', { returnObjects: true }) as ExperienceJob[];

  return (
    <Section id="experience">
      <SectionHeading intro={t('experience.intro')} title={t('experience.title')} />
      <ol className="border-line mt-12 border-l">
        {jobs.map((job) => (
          <Job job={job} key={job.company} />
        ))}
      </ol>
    </Section>
  );
};
