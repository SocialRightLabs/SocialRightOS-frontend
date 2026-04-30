# Student Pack Ops Stack

## Selected Tools

This project should use the following GitHub Student Developer Pack tools first:

1. Heroku
2. Sentry
3. BrowserStack

## Why These Three

### Heroku

- fastest path to a controlled live or staging frontend deployment
- student offer is monthly platform credit for 24 months
- fits the existing Next.js standalone start path with minimal repo changes

### Sentry

- catches frontend and backend runtime failures in one place
- useful for the admin surface where silent production failures are expensive
- student pack currently includes a student plan allocation for errors, transactions, attachments, and replays

### BrowserStack

- gives repeatable cross-browser and real-device validation after each live deployment
- useful for admin and public tool flows before and after releases

## Recommended Operating Model

- deploy `web-legacy` first as the canonical live frontend and admin surface
- keep `backend-socialrightos` as the backend system of record
- route frontend calls through `NEXT_PUBLIC_API_BASE_URL`
- use frontend CI as the release gate before deployment
- add Sentry after DSN, org, and project values are issued
- use BrowserStack on smoke-critical routes after the first staging deploy

## Immediate Activation Order

1. Enable Heroku app for `web-legacy`
2. Set `NEXT_PUBLIC_SITE_URL`
3. Set `NEXT_PUBLIC_API_BASE_URL`
4. Confirm frontend CI is green
5. Deploy from `main`
6. Connect Sentry
7. Run BrowserStack smoke checks on the deployed app
