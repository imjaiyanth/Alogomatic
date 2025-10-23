/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_FORM_ENDPOINT: string;
  readonly VITE_GA_TRACKING_ID: string;
  readonly VITE_SITE_URL: string;
  readonly VITE_ENABLE_ANIMATIONS: string;
  readonly VITE_ENABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
