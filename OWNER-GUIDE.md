# Finch and Folio Events — Website Owner Guide

## Business and hosting

| Item | Details |
| --- | --- |
| Business name | Finch and Folio Events |
| Footer name | Finch and Folio Events, LLC |
| Requested website address | `https://www.finchandfolioevents.com` |
| Business email | `victoria.finney91@gmail.com` |
| Business phone | `785-260-0497` |
| Existing Instagram account | `@lovebirdweddingsbyvfinney` |
| GitHub repository supplied by the owner | `vfinney409/Finch-and-Folio-Events` |
| Existing Sites project | `appgprj_6a95944f5ff481919602aef686daffe3` |

The source retains the existing Sites project identity. At the time of this update, Sites reported the live URL as `https://www.lovebirdbyvfinney.com`. Updating the URL in the source does not connect the new domain or change DNS. The requested Finch and Folio domain must be connected to the existing hosting before its canonical URLs and inquiry confirmation redirects can work there.

The existing email, phone number, and Instagram account are retained because replacement contact information was not supplied.

## Edit services and prices

Edit `app/service-data.json` for package names, descriptions, prices, inclusions, service conditions, event-service copy, and add-ons. Prices are numeric USD amounts. `app/site-content.ts` formats this data for the site, including the pricing summary and inquiry menu.

| Wedding service | Fee |
| --- | ---: |
| The First Chapter — Budget, timeline, and vendor assistance | $150 |
| The Short Story — Micro-Wedding Officiant | $175 |
| The Heart of the Story — Custom Officiant Services | $450 |
| The Plot Comes Together — Day-of Coordination | $750 |
| The Duology — Officiant & Day-of Coordination | $1,100 |

Event Services starts at $40 per hour with a three-hour minimum. The website uses the first Event Services paragraph from the supplied document and invites visitors to inquire for details, availability, and pricing.

The service document's internal worksheets and contract time blanks are not customer-facing website content. License-return wording directs couples to the issuing court's instructions.

The FAQs in `app/site-content.ts` also describe fees and package differences. Review them whenever the service data changes.

## Edit branding and contact information

Business name, legal name, website URL, and service area are in the `business` object in `app/service-data.json`. Contact details and testimonials are in `app/site-content.ts`.

The circular botanical logo is `public/assets/finch-and-folio-round.svg`. The simplified monogram is used in the header and favicon. The social-sharing image is `public/og.png`. Keep the site metadata, social image, and favicon consistent when changing branding.

## Inquiry form

The form sends inquiries to the existing business email through FormSubmit. It includes all five wedding services, Event Services, and a Not Sure Yet option. Service-card inquiry links preselect the corresponding service. Event inquiries can leave the partner field blank.

The subject line, automatic reply, and confirmation redirect use Finch and Folio Events branding. The redirect and source URL use the configured business website address.

If the receiving email is not yet activated with FormSubmit, the owner must complete the provider's activation email. Confirm delivery with an owner-authorized test after deployment. Local checks do not establish that emails have been delivered. The honeypot and the provider's existing spam protection remain in place.

## Publish and verify

For local development, run `npm ci` followed by `npm run dev` from the project folder in a terminal with network access. The development and production start launchers support Windows and Unix shells. `npm start` requires an existing production build. The retained CI install/build helpers target Linux.

1. Review the source changes and run the project's build and tests in an environment with its dependencies available.
2. Push the exact updated source to `vfinney409/Finch-and-Folio-Events`. This new repository stores the source; no automatic deployment from it has been configured. Publish the same source through the existing hosting workflow.
3. Save and deploy a new version of the existing Site, preserving its audience and project identity. If the GitHub mirror is the active deployment source, follow that repository's configured publishing flow.
4. Connect and verify `www.finchandfolioevents.com` on the hosting service.
5. Check the services, FAQ, contact-service selections, mobile navigation, favicon, sharing image, sitemap, and inquiry confirmation flow on the deployed domain.

The source includes a homepage business/service catalog and FAQ structured data, canonical metadata, `robots.txt`, and a sitemap. Submit the new domain's sitemap in the owner's Search Console after domain verification.

No deployment or email delivery should be assumed from a local source update alone.

## Photography

Brand portraits are credited to Faith Valentine Photography. Existing stock and owner-supplied photographs are retained.

The Process page's cup-and-saucer photograph is by [Drew Gilliam on Unsplash](https://unsplash.com/photos/white-ceramic-cup-on-saucer-on-top-of-wooden-table-UEIkj1N2LlE), saved locally as `public/assets/cup-and-saucer-on-table.webp`.
