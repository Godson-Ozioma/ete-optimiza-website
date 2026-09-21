# ETE-Optimiza Website

Production website for [ETE-Optimiza](https://ete-optimiza.com) — upstream production optimization technology and engineering services, featuring the XBM exception-based well surveillance platform.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) v4
- [Base UI](https://base-ui.com) (button primitives)
- [Motion](https://motion.dev) (animations, where used)

Structured marketing and product content lives in `content/`. Approved copy is sourced from `docs/product-context.md`.

## Prerequisites

- Node.js 20+
- npm 10+

## Setup

Install dependencies:

```bash
npm install
```

Copy environment variables when working on contact or form features:

```bash
cp .env.example .env.local
```

## Development

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Email delivery for the contact form |
| `CONTACT_TO_EMAIL` | Destination inbox (defaults to admin@ete-optimiza.com) |
| `RESEND_FROM_EMAIL` | Optional verified From address |
| `TURNSTILE_SECRET_KEY` | Optional server-side spam protection |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Optional client-side Turnstile widget |

These are optional for static page development and required when contact form functionality is enabled.

## Build

Production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com):

1. Connect the repository to a Vercel project.
2. Set production environment variables in the Vercel dashboard.
3. Deploy from the `main` branch (or your release branch).

The canonical production URL is `https://ete-optimiza.com`.

## Project Structure

```
app/              Next.js App Router pages and layout
components/       Shared UI and site chrome
content/          Structured TypeScript content modules
docs/             Product context and reference material
public/assets/    Brand and XBM product imagery
```

## Assets

| Location | Contents |
| --- | --- |
| `public/assets/brand/` | Company logo and brand files |
| `public/assets/xbm/` | Approved XBM product and marketing visuals |

Do not alter the company logo without approval. Use approved XBM visuals for product representation — do not substitute generated interface mockups.
