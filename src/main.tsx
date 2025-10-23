import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

const container = document.getElementById('root') as HTMLElement;

const appWithErrorBoundary = (
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

if (container?.hasChildNodes()) {
  hydrateRoot(container, appWithErrorBoundary);
} else if (container) {
  createRoot(container).render(appWithErrorBoundary);
}
