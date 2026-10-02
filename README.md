# Parmar Built — Vercel / Next.js Website

This version is a **dynamic Next.js website** intended for Vercel.

## What is dynamic?

- Responsive React navigation with mobile menu.
- Interactive project/sector filter.
- Server-rendered Next.js page.
- `/api/projects` API endpoint.
- Real quote form using `/api/contact`.
- Quote requests can be emailed through Resend.
- Honeypot spam protection.
- SEO metadata, sitemap, and robots route.
- Easy to expand with a database/CMS later.

## 1. Local test

Install Node.js 20+.

```bash
npm install
npm run dev
```

Open the local URL shown by Next.js.

## 2. Vercel deployment

The easiest route:

1. Create a GitHub repository.
2. Upload this project.
3. Sign in to Vercel.
4. Add/import the GitHub repository.
5. Vercel should detect Next.js automatically.
6. Deploy.

You do **not** need to build a separate static site for Vercel.

## 3. Connect your domain

In Vercel:
Project → Settings → Domains → Add your domain.

Vercel will show the DNS records required for your domain provider.

## 4. Make the quote form send emails

The website already has a server-side endpoint at:

`POST /api/contact`

Set these environment variables in Vercel:

- `RESEND_API_KEY` — your Resend API key.
- `QUOTE_TO_EMAIL` — the email address that should receive quote requests.
- `QUOTE_FROM_EMAIL` — optional verified sender, for example:
  `Parmar Built <quotes@yourdomain.com>`
- `NEXT_PUBLIC_SITE_URL` — your production website URL.

After adding/changing environment variables, redeploy.

### Why Resend?

It gives the Vercel-hosted form a real email delivery path without needing a traditional server. You can replace the email provider later if you prefer.

## 5. Replace business placeholders

Search the project for:

- `YOUR PHONE`
- `YOUR EMAIL`
- `YOUR SERVICE AREA`
- `https://parmarbuilt.com`

Replace them with the real business details.

## 6. Adding real projects

Project content currently lives in:

`data/projects.js`

Add real project photos to:

`public/images/`

Then add the project to the array in `data/projects.js`.

The interactive Projects section will automatically display it.

## 7. Future upgrades

This structure is ready to be extended with:

- Admin dashboard
- Database-backed projects
- Customer testimonials
- Project case studies
- Service-request tracking
- Maintenance-plan reminders
- Google Analytics / Vercel Analytics
- Online booking
- Customer portal
- Before/after galleries
- CMS editing without touching code

## Important

Review all service/licensing claims before publishing. Only advertise services that Parmar Built is legally permitted and qualified to perform or coordinate in the jurisdictions where it operates.
