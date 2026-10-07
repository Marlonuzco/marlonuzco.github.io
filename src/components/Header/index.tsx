import { Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { Language } from '@/services/i18n/types';

import { useLocale } from '@/hooks/useLocale';
import { useTheme } from '@/hooks/useTheme';

import type { NavigationItem } from './types';

const languageOptions: Language[] = ['es', 'en'];
const sectionIds = ['about', 'experience', 'projects', 'skills', 'process', 'contact'];

export const Header = () => {
  const { t } = useTranslation();
  const { changeLanguage, language } = useLocale();
  const { theme, toggleTheme } = useTheme();
  const [activeId, setActiveId] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const items: NavigationItem[] = [
    { href: '#about', label: t('nav.about') },
    { href: '#experience', label: t('nav.experience') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#process', label: t('nav.process') },
    { href: '#contact', label: t('nav.contact') },
  ];

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = 140;
      let current = '';

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= marker) {
          current = `#${id}`;
        }
      });

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const linkClass = (href: string, mobile = false) => {
    const isActive = activeId === href;

    if (mobile) {
      return isActive ? 'text-ink block py-1 text-base font-semibold' : 'block py-1 text-base';
    }

    return isActive ? 'text-ink text-sm font-semibold' : 'text-muted hover:text-ink text-sm';
  };

  return (
    <header className="border-line/80 bg-bg/90 fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
      <a
        className="focus:bg-surface sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:rounded-full focus:px-4 focus:py-2"
        href="#content"
      >
        {t('nav.skip')}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a className="text-sm font-semibold tracking-wide" href="#top">
          {t('nav.shortName')}
        </a>
        <nav aria-label={t('nav.label')} className="hidden items-center gap-5 lg:flex">
          {items.map((item) => (
            <a
              aria-current={activeId === item.href ? 'true' : undefined}
              className={linkClass(item.href)}
              href={item.href}
              key={item.href}
              onClick={() => {
                setActiveId(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <div
            aria-label={t('language.label')}
            className="border-line bg-surface flex rounded-full border p-1"
            role="group"
          >
            {languageOptions.map((option) => (
              <button
                aria-pressed={language === option}
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                  language === option ? 'bg-primary text-primary-contrast' : 'text-muted'
                }`}
                key={option}
                onClick={() => {
                  changeLanguage(option);
                }}
                type="button"
              >
                {t(`language.${option}`)}
              </button>
            ))}
          </div>
          <button
            aria-label={theme === 'dark' ? t('theme.light') : t('theme.dark')}
            className="border-line bg-surface text-ink rounded-full border p-2"
            onClick={toggleTheme}
            type="button"
          >
            {theme === 'dark' ? (
              <Sun aria-hidden="true" size={16} />
            ) : (
              <Moon aria-hidden="true" size={16} />
            )}
          </button>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={isOpen}
            aria-label={isOpen ? t('nav.close') : t('nav.open')}
            className="border-line bg-surface rounded-full border p-2 lg:hidden"
            onClick={() => {
              setIsOpen((current) => !current);
            }}
            type="button"
          >
            {isOpen ? <X aria-hidden="true" size={16} /> : <Menu aria-hidden="true" size={16} />}
          </button>
        </div>
      </div>
      {isOpen ? (
        <nav
          aria-label={t('nav.label')}
          className="border-line border-t px-5 py-4 lg:hidden"
          id="mobile-navigation"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-3">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  aria-current={activeId === item.href ? 'true' : undefined}
                  className={linkClass(item.href, true)}
                  href={item.href}
                  onClick={() => {
                    setActiveId(item.href);
                    closeMenu();
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};
