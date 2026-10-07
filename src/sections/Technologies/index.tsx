import { useTranslation } from 'react-i18next';

import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';

import type { SkillGroup } from './types';

import { Group } from './Group';

export const Technologies = () => {
  const { t } = useTranslation();
  const groups = t('skills.groups', { returnObjects: true }) as SkillGroup[];

  return (
    <Section id="skills">
      <SectionHeading intro={t('skills.intro')} title={t('skills.title')} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <Group group={group} key={group.id} />
        ))}
      </div>
    </Section>
  );
};
