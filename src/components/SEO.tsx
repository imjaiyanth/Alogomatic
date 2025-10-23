import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string;
}

const DEFAULT_SEO = {
  title: 'Meghamsys | AI Automation & Copilot Development | Enterprise AI Solutions',
  description: 'Transform your business with AI automation. Meghamsys builds production-ready AI copilots, intelligent workflows, and enterprise automation that delivers 12x productivity gains. Trusted globally.',
  image: 'https://www.meghamsys.com/social-share.png',
  url: 'https://www.meghamsys.com',
  type: 'website',
  keywords: 'AI automation, AI copilots, AI development, enterprise AI, workflow automation, AI consulting, machine learning, digital transformation, AI agents, intelligent automation'
};

export default function SEO({ 
  title = DEFAULT_SEO.title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  url = DEFAULT_SEO.url,
  type = DEFAULT_SEO.type,
  keywords = DEFAULT_SEO.keywords
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Meghamsys');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('bingbot', 'index, follow');

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', 'Meghamsys', true);

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Additional SEO
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('author', 'Meghamsys');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('theme-color', '#52f0ff');
    
    // Add canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

  }, [title, description, image, url, type, keywords]);

  return null;
}

// Structured Data Component
export function StructuredData() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Meghamsys",
      "url": "https://meghamsys.com",
      "logo": "https://meghamsys.com/logo.png",
      "description": "AI-native digital partner crafting intelligent copilots and automation solutions",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "sales@meghamsys.com",
        "contactType": "Sales"
      },
      "address": [
        {
          "@type": "PostalAddress",
          "addressCountry": "India"
        },
        {
          "@type": "PostalAddress",
          "addressCountry": "USA"
        }
      ],
      "sameAs": [
        // Add social media links here
      ]
    });
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
