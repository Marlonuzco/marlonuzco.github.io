export const LANGUAGE_KEY = 'portfolio-language';
export const THEME_KEY = 'portfolio-theme';

export const readStorage = (key: string): null | string => {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
};

export const writeStorage = (key: string, value: string): void => {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    return;
  }
};
