import type { ReactNode } from 'react';

import { useEffect, useState } from 'react';

import type { Theme } from '@/services/i18n/types';

import { readStorage, THEME_KEY, writeStorage } from '@/services/preferences';

import { ThemeContext } from './theme';

const isTheme = (value: null | string | undefined): value is Theme =>
  value === 'dark' || value === 'light';

const readInitialTheme = (): Theme => {
  const current = document.documentElement.dataset.theme;

  if (isTheme(current)) {
    return current;
  }

  const stored = readStorage(THEME_KEY);

  if (isTheme(stored)) {
    return stored;
  }

  return 'dark';
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    writeStorage(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
