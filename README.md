# Finch and Folio Events

Website source for Finch and Folio Events, LLC, serving Topeka and Northeast Kansas.

- Repository: https://github.com/vfinney409/Finch-and-Folio-Events
- Intended domain: https://www.finchandfolioevents.com
- Stack: React 19, TypeScript, Tailwind CSS, and Vinext on Cloudflare Workers through Sites.

## Run locally

Use Node.js 22.13.0 or newer:

```sh
npm ci
npm run dev
```

The development and production start launchers support Windows and Unix shells. The existing CI install/build scripts require Linux, Bash, `flock`, `curl`, and GNU `timeout`.

```sh
npm run build
npm test
```

The test command builds the application and runs the existing Node test suite. A successful source upload does not establish that the application has built or deployed successfully.

## Update the website

- `app/service-data.json`: business identity, services, pricing, and inclusions.
- `app/site-content.ts`: contact details, FAQs, testimonials, and shared copy.
- `app/` and `components/`: pages and shared website components.
- `public/`: logos, photographs, favicon, and social-sharing image.

See [OWNER-GUIDE.md](OWNER-GUIDE.md) for editing and inquiry-form details.

## Hosting and domain

The existing Site identity is retained in `.openai/hosting.json`. This repository stores the source; no automatic deployment from this new repository has been configured. Publish the updated source through the existing Sites hosting workflow before expecting the new branding on the live website.

See [domain-setup/CONNECT-CLOUDFLARE.md](domain-setup/CONNECT-CLOUDFLARE.md) for the domain setup and the ready-to-import DNS records. The existing host has registered both `finchandfolioevents.com` and `www.finchandfolioevents.com`; both were pending DNS and SSL validation when checked on November 5, 2026.
