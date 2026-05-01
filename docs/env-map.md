# Environment Variable Map

This repository intentionally keeps the runtime surface small.

## Active Variables

### `NEXT_PUBLIC_API_BASE_URL`

Purpose:

- base URL for the socialrightlabs backend
- used by the server-side API proxy in `src/app/api/[...path]/route.ts`
- browser requests stay on the same origin and go through `/api/*`

Examples:

- local: `http://127.0.0.1:8000`
- staging: `https://staging-api.example.com`
- production: `https://api.example.com`

Rules:

- do not include a trailing slash
- do not hardcode the backend URL in page components
- do not call the backend directly from client components
- keep the proxy target configurable through deployment variables

### `NEXT_PUBLIC_SITE_URL`

Purpose:

- canonical public site URL for metadata and robots behavior
- used to keep staging and production metadata separated

Examples:

- local: `http://localhost:3000`
- staging: `https://staging.sosyalhakrehberi.com`
- production: `https://sosyalhakrehberi.com`

Rules:

- do not include a trailing slash
- set a staging URL for non-production deployments
- keep production pointed at the public domain only after approval
- do not rely on implicit production fallbacks

Fallback behavior:

- local development falls back to `http://localhost:3000`
- preview deployments may fall back to `https://$VERCEL_URL`
- production must set `NEXT_PUBLIC_SITE_URL` explicitly

## Environment Plan

### Local

- `.env.local`
- points to local backend or local tunnel

### Staging

- set in the staging host dashboard or deployment system
- must point to the staging backend
- must also set the staging site URL explicitly

### Production

- set only after staging validation is complete
- must point to the production backend
- must also set the public site URL explicitly

## Backend Dependencies

The backend team or backend deployment must confirm:

- canonical endpoint availability
- any required gateway, rate limit, or access constraints
- whether public API paths should remain open or require a service key
