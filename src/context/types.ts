import type { Theme } from '@/services/i18n/types';

export type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};
