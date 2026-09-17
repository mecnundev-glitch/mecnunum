# MECNUN — Production Deployment & Post-Launch Guide

This document provides step-by-step instructions for deploying MECNUN to production on Vercel, configuring custom domains, setting up DNS records, verifying with Google Search Console, and enabling analytics telemetry.

---

## 1. Vercel Production Deployment

### Option A: Via Vercel Dashboard (Recommended)
1. Push your repository to GitHub: `https://github.com/mecnundev-glitch/mecnunum`
2. Navigate to [Vercel Dashboard](https://vercel.com/new).
3. Select your repository `mecnunum` and click **Import**.
4. Configure Build Settings (Defaults are auto-detected):
   - **Framework Preset:** `Next.js`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
5. Add Environment Variables:
   - `NEXT_PUBLIC_SITE_URL`: `https://mecnunum.com`
   - `STUDIO_CONTACT_EMAIL`: `contact@mecnunum.com`
6. Click **Deploy**.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to your account
vercel login

# Deploy to production
vercel --prod
```

---

## 2. Custom Domain Configuration

1. In the Vercel Project Dashboard, navigate to **Settings** $\rightarrow$ **Domains**.
2. Enter your custom domain: `mecnunum.com`.
3. Select **Add**.
4. Vercel will recommend adding both:
   - `mecnunum.com` (Primary Apex domain)
   - `www.mecnunum.com` (Redirect to Apex)

---

## 3. DNS Records Configuration

Log in to your domain registrar (e.g., Cloudflare, Namecheap, GoDaddy, Google Domains) and configure the following DNS records:

### Apex Domain (`mecnunum.com`):
| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` (or leave blank) | `76.76.21.21` | Auto / 3600 |

### Subdomain (`www.mecnunum.com`):
| Type | Name / Host | Target / Value | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `cname.vercel-dns.com.` | Auto / 3600 |

### SSL / TLS Certificate:
* Vercel automatically provisions and renews a free Let's Encrypt / DigiCert SSL certificate once DNS records propagate (typically 5–30 minutes).

---

## 4. Google Search Console Setup

1. Open [Google Search Console](https://search.google.com/search-console).
2. Click **Add Property**.
3. Choose **Domain** verification:
   * Enter: `mecnunum.com`
   * Copy the `google-site-verification=...` TXT record token.
   * Add the **TXT** record to your DNS settings at your domain registrar.
   * Click **Verify**.
4. Submit your Dynamic XML Sitemap:
   * In Search Console sidebar, navigate to **Sitemaps**.
   * Under **Add a new sitemap**, enter: `sitemap.xml` (Full URL: `https://mecnunum.com/sitemap.xml`).
   * Click **Submit**.
   * Status will display `Success` and show 27 indexed URLs.

---

## 5. Analytics & Telemetry Setup

### A. Vercel Web Analytics & Speed Insights (Zero-Configuration)
1. In Vercel Project Dashboard, click the **Analytics** tab.
2. Click **Enable Web Analytics**.
3. Click the **Speed Insights** tab and click **Enable**.

### B. Google Analytics 4 (GA4) Integration (Optional)
1. Create a GA4 property at [Google Analytics](https://analytics.google.com).
2. Obtain your **Measurement ID** (`G-XXXXXXXXXX`).
3. Add `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` to your Vercel Environment Variables.

---

## 6. Pre-Launch Verification Checklist

- [x] Production build passes with 0 errors (`npm run build`).
- [x] ESLint and TypeScript report 0 errors (`npm run lint`, `npx tsc --noEmit`).
- [x] Canonical URLs point to `https://mecnunum.com`.
- [x] Dynamic OpenGraph images render at `/opengraph-image`.
- [x] Favicons render at `/icon`.
- [x] Web App Manifest loads at `/manifest.webmanifest`.
- [x] Robots.txt disallows `/api/` and points to `/sitemap.xml`.
- [x] 404 page handles invalid routes gracefully.
- [x] Error boundary handles runtime exceptions with reset capability.
- [x] Form transmission endpoint (`/api/contact`) sanitizes input and validates email syntax.
