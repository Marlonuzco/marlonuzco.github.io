import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Github, Linkedin } from '@/assets/icons';
import { ExternalLink } from '@/components/ExternalLink';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { contactLinks } from '@/utils/links';

const cardClass = 'rounded-3xl border border-line bg-surface p-6 transition hover:border-primary';
const iconClass = 'text-accent size-5';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <SectionHeading intro={t('contact.intro')} title={t('contact.title')} />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <a className={cardClass} href={contactLinks.email}>
          <Mail aria-hidden="true" className={iconClass} size={20} />
          <p className="text-muted mt-4 text-sm">{t('contact.email')}</p>
          <p className="mt-2 font-semibold break-all">{t('contact.address')}</p>
        </a>
        <ExternalLink className={cardClass} href={contactLinks.linkedin}>
          <Linkedin aria-hidden="true" className={iconClass} />
          <p className="text-muted mt-4 text-sm">{t('contact.linkedin')}</p>
          <p className="mt-2 font-semibold break-all">{t('contact.linkedinHandle')}</p>
        </ExternalLink>
        <ExternalLink className={cardClass} href={contactLinks.github}>
          <Github aria-hidden="true" className={iconClass} />
          <p className="text-muted mt-4 text-sm">{t('contact.github')}</p>
          <p className="mt-2 font-semibold break-all">{t('contact.githubHandle')}</p>
        </ExternalLink>
      </div>
    </Section>
  );
};
