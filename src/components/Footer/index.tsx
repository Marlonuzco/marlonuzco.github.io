import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-line border-t px-5 py-8 sm:px-8">
      <div className="text-muted mx-auto flex max-w-6xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>{t('nav.shortName')}</p>
        <p>{t('footer.note')}</p>
      </div>
    </footer>
  );
};
