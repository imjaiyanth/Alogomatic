import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';
import './styles.css';

const container = document.getElementById('root') as HTMLElement;

const appWithErrorBoundary = (
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

if (container?.hasChildNodes()) {
  hydrateRoot(container, appWithErrorBoundary);
} else if (container) {
  createRoot(container).render(appWithErrorBoundary);
}
