# Connect finchandfolioevents.com through Cloudflare

These instructions connect the domain to the existing Sites host. Both hostnames are already registered there. The host reported both as pending DNS and SSL validation on November 5, 2026.

Publishing the updated website is a separate step. Uploading the source to GitHub does not configure deployment from this new repository. Connecting these DNS records routes visitors to the version published on the existing Site.

1. Open Cloudflare and select `finchandfolioevents.com`.
2. If Cloudflare is not yet managing the domain's DNS, add the domain, preserve its existing records, and set the registrar's nameservers to the exact nameservers Cloudflare assigns. Wait for the zone to become active. Skip this step if the domain is already active in Cloudflare.
3. Open **DNS > Records > Import and Export** and choose **Import DNS records**.
4. Select the accompanying `cloudflare-dns-records.txt`. Uncheck **Proxy imported DNS records**, then import the file. The A and CNAME records should show **DNS only** (gray cloud).
5. Review records for the root domain (`@`) and `www`. Replace any old website A, AAAA, or CNAME records that conflict with the intended records below. Preserve mail records and unrelated verification records.
6. Refresh domain verification in the existing Site's domain settings. Wait until both domain verification and SSL are active, then open both `https://finchandfolioevents.com` and `https://www.finchandfolioevents.com`.

The import file includes all seven required records, including four TXT verification records. If entering records manually, use these Cloudflare names and values:

| Type | Name | Value | Proxy |
| --- | --- | --- | --- |
| A | `@` | `162.159.143.30` | DNS only |
| A | `@` | `172.66.3.26` | DNS only |
| CNAME | `www` | `custom-domains.chatgpt.site` | DNS only |
| TXT | `_openai-site-verification` | `openai-site-verification=Yv6dr-obs76lT2LBWLum9DjUo5c3KwXs-i2wUT66NWY` | n/a |
| TXT | `_cf-custom-hostname` | `bcf8b5e4-7364-4917-8240-614d7fbff379` | n/a |
| TXT | `_openai-site-verification.www` | `openai-site-verification=gGuul10Zlo4s6-32cwqwcNWtVYAAyLUEThmz7kbahaE` | n/a |
| TXT | `_cf-custom-hostname.www` | `86e8ee03-6682-4843-ad3a-3c507206eb70` | n/a |

DNS targets and verification values above came from the existing Site's live domain configuration. They apply to this Site and these hostnames.

Cloudflare documentation: [Import DNS records](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/) and [Update nameservers](https://developers.cloudflare.com/dns/nameservers/update-nameservers/).
