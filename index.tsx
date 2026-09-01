import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { I18nProvider } from './i18n';
import './index.css';

const enableDevTools =
  import.meta.env.DEV &&
  import.meta.env.VITE_DISABLE_REACT_DEVTOOLS !== '1';

if (enableDevTools) {
  void import('react-grab');
  void import('react-scan');
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </React.StrictMode>
);
