# 🚀 Pre-Deployment Checklist

## Before Going Live

### ✅ Configuration
- [ ] Set up `.env.production` with real values
- [ ] Configure `VITE_FORM_ENDPOINT` (Formspree/Web3Forms)
- [ ] Add `VITE_GA_TRACKING_ID` for analytics
- [ ] Update `VITE_SITE_URL` to production domain
- [ ] Verify all API endpoints are production-ready

### ✅ Content
- [ ] Replace placeholder images with real assets
- [ ] Optimize all images (convert to WebP)
- [ ] Add `alt` text to all images
- [ ] Verify all links work
- [ ] Proofread all copy for typos
- [ ] Update contact email if needed
- [ ] Add social media links in Footer

### ✅ SEO & Meta
- [ ] Create and add `og-image.png` (1200x630px)
- [ ] Update meta descriptions
- [ ] Verify structured data in SEO component
- [ ] Create and submit `sitemap.xml`
- [ ] Set up Google Search Console
- [ ] Verify `robots.txt` is correct

### ✅ Performance
- [ ] Run Lighthouse audit (target 90+)
- [ ] Check Core Web Vitals
- [ ] Test on 3G/4G networks
- [ ] Verify bundle size < 500KB
- [ ] Test lazy loading works
- [ ] Optimize font loading

### ✅ Functionality
- [ ] Test contact form submission
- [ ] Verify form validation works
- [ ] Test error states
- [ ] Verify navigation scroll behavior
- [ ] Test mobile menu toggle
- [ ] Check all anchor links (#about, #services, etc.)
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### ✅ Responsive Design
- [ ] Test on mobile (375px - 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (1024px+)
- [ ] Test on ultra-wide (2560px+)
- [ ] Verify text is readable at all sizes
- [ ] Check touch targets (minimum 44x44px)

### ✅ Accessibility
- [ ] Test keyboard navigation (Tab, Enter, Esc)
- [ ] Verify skip link works
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Check color contrast (WCAG AA minimum)
- [ ] Verify focus indicators are visible
- [ ] Test with browser zoom (200%)

### ✅ Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### ✅ Security
- [ ] Add Content Security Policy headers
- [ ] Enable HTTPS (SSL certificate)
- [ ] Set up security headers (Vercel/Netlify)
- [ ] Add rate limiting to form
- [ ] Verify no sensitive data in client code
- [ ] Check for XSS vulnerabilities

### ✅ Analytics & Monitoring
- [ ] Set up Google Analytics 4
- [ ] Configure event tracking
- [ ] Set up Sentry (error tracking)
- [ ] Configure Web Vitals monitoring
- [ ] Test analytics in production

### ✅ Legal & Compliance
- [ ] Add Privacy Policy (if collecting data)
- [ ] Add Terms of Service (if applicable)
- [ ] Add Cookie banner (if using cookies)
- [ ] Verify GDPR compliance (if EU traffic)
- [ ] Add copyright notice

### ✅ Documentation
- [ ] Update README.md with deployment steps
- [ ] Document environment variables
- [ ] Add troubleshooting guide
- [ ] Document build process
- [ ] Create runbook for common issues

### ✅ Backup & Recovery
- [ ] Set up automatic backups
- [ ] Test restore process
- [ ] Document rollback procedure
- [ ] Keep previous build artifacts
- [ ] Set up staging environment

---

## Deployment Steps

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   vercel
   ```

2. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all `VITE_*` variables

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Netlify

1. **Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `dist`

2. **Environment Variables**
   - Add in Site Settings → Build & Deploy → Environment

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

---

## Post-Deployment

### ✅ Verification
- [ ] Visit production URL
- [ ] Test all critical paths
- [ ] Submit test form
- [ ] Check analytics tracking
- [ ] Verify error tracking
- [ ] Test from mobile device
- [ ] Check page load speed

### ✅ SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Open Graph preview (Facebook Debugger)
- [ ] Test Twitter Card (Twitter Card Validator)
- [ ] Check LinkedIn preview

### ✅ Monitoring Setup
- [ ] Set up uptime monitoring (UptimeRobot)
- [ ] Configure alert notifications
- [ ] Set up performance budgets
- [ ] Enable real user monitoring (RUM)

---

## Emergency Rollback

If something goes wrong:

### Vercel
```bash
# List deployments
vercel ls

# Rollback to specific deployment
vercel rollback [deployment-url]
```

### Netlify
```bash
# Via UI: Deploys → Click previous deploy → "Publish deploy"
```

---

## Quick Fixes

### Form not working?
1. Check `VITE_FORM_ENDPOINT` in environment variables
2. Verify CORS settings on form service
3. Check browser console for errors

### Animations broken?
1. Verify GSAP loaded correctly
2. Check for JavaScript errors
3. Test with `VITE_ENABLE_ANIMATIONS=false`

### SEO issues?
1. Verify meta tags in browser DevTools
2. Test with Google Rich Results Test
3. Check structured data validity

---

## Useful Commands

```bash
# Type check
pnpm type-check

# Build
pnpm build

# Preview build
pnpm preview

# Check bundle size
npx vite-bundle-visualizer
```

---

## Resources

- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)
- [Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**Last Updated:** October 20, 2025
