import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { App } from '@/app';
import i18n, { ready } from '@/services/i18n';
import '@/styles/tailwind.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element was not found');
}

await ready;

createRoot(root).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </StrictMode>
);
