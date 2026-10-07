import type { Language } from '@/services/i18n/types';

export const contactLinks = {
  email: 'mailto:marlonjoseuzca@gmail.com',
  github: 'https://github.com/Marlonuzco',
  linkedin: 'https://www.linkedin.com/in/marlon-jos%C3%A9-uzc%C3%A1tegui-61a0a123b',
} as const;

export const getCvPath = (language: Language): string =>
  `${import.meta.env.BASE_URL}cv/marlon-uzcategui-cv-${language}.pdf`;
