import { business } from "../site-content";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${["", "about", "services", "process", "gallery", "testimonials", "faq", "contact"].map((path, index) => `  <url>
    <loc>${business.website}/${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${index === 0 ? "1.0" : "0.7"}</priority>
  </url>`).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "content-type": "application/xml; charset=utf-8" },
  });
}
