import { business } from "../site-content";

export function GET() {
  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${business.website}/sitemap.xml\n`,
    { headers: { "content-type": "text/plain; charset=utf-8" } },
  );
}
