// Environment configuration helper
export const config = {
  apiUrl: import.meta.env.VITE_API_URL || '',
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://meghamsys.com',
  
  features: {
    animations: import.meta.env.VITE_ENABLE_ANIMATIONS === 'true',
    analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  },
  
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;

export default config;
