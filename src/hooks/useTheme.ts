import { useContext } from 'react';

import type { ThemeContextValue } from '@/context/types';

import { ThemeContext } from '@/context/theme';

export const useTheme = (): ThemeContextValue => {
  const value = useContext(ThemeContext);

  if (!value) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return value;
};
