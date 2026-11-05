import assert from "node:assert/strict";
import test from "node:test";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;

async function renderPage(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request(new URL(path, "http://localhost"), {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  return response.text();
}

test("renders current business metadata without development preview tags", async () => {
  const html = await renderPage();
  assert.match(html, /Finch and Folio Events/);
  assert.match(html, /https:\/\/www\.finchandfolioevents\.com/);
  assert.doesNotMatch(html, /Love Bird Weddings|lovebirdbyvfinney\.com/);
  assert.doesNotMatch(html, developmentPreviewMeta);
});

test("renders all current wedding package prices and the event minimum", async () => {
  const html = await renderPage("/services");
  for (const [id, name, price] of [
    ["the-first-chapter", "The First Chapter", "$150"],
    ["the-short-story", "The Short Story", "$175"],
    ["the-heart-of-the-story", "The Heart of the Story", "$450"],
    ["the-plot-comes-together", "The Plot Comes Together", "$750"],
    ["the-duology", "The Duology", "$1,100"],
  ]) {
    const card = html.match(new RegExp(`id="${id}"[\\s\\S]*?</article>`))?.[0];
    assert.ok(card, `Missing service card: ${name}`);
    assert.ok(card.includes(name), `Missing service name: ${name}`);
    assert.ok(card.includes(price), `Incorrect fee for ${name}`);
    assert.ok(card.includes(`/contact?service=${id}#inquiry-form`));
  }
  assert.match(html, /Starting at \$40 per hour/);
  assert.match(html, /3-hour minimum/);
  assert.doesNotMatch(html, /\$650\b|\$350\b|\$900\b/);
});

test("supports a preselected event inquiry with current email branding and redirects", async () => {
  const html = await renderPage("/contact?service=event-services");
  assert.match(html, /<option(?=[^>]*value="Event Services")(?=[^>]*selected)[^>]*>/);
  assert.match(html, /New Finch and Folio Events inquiry/);
  assert.match(html, /https:\/\/www\.finchandfolioevents\.com\/thank-you/);
  assert.match(html, /Wedding or event details/);
  assert.match(html, /the-first-chapter|The First Chapter/);
  assert.match(html, /The Duology/);
  assert.doesNotMatch(html, /Love Bird Weddings|lovebirdbyvfinney\.com/);
});
