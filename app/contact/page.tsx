import { InteriorPage } from "@/components/interior-page";
export const metadata = { title: "Wedding & Event Inquiry | Finch and Folio Events", description: "Start a wedding or event inquiry with Finch and Folio Events in Topeka and Northeast Kansas.", alternates: { canonical: "/contact" } };
export default async function Page({ searchParams }: { searchParams: Promise<{ service?: string | string[] }> }) {
  const { service } = await searchParams;
  return <InteriorPage page="contact" serviceId={typeof service === "string" ? service : undefined} />;
}
