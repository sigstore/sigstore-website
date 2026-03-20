import Link from "next/link";
import { getContentFromDirectory } from "@/lib/content";
import { buildPageMetadata, buildJsonLd } from "@/lib/metadata";
import { HeaderThemeSetter } from "@/components/HeaderThemeSetter";

export function generateMetadata() {
  return buildPageMetadata(
    { slug: "docs", title: "Documentation", body: "" },
    "/docs/"
  );
}

export default function DocsIndex() {
  const docs = getContentFromDirectory("docs");
  const jsonLd = buildJsonLd("/docs/");

  return (
    <>
      <HeaderThemeSetter bgColour="bg-white" textColour="text-gray-dark" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="py-64 md:py-128 bg-white"
        data-header-text="text-gray-dark"
      >
        <div className="container inner text-gray-dark">
          <h1 className="text-48 mb-44">Documentation</h1>
          <ul>
            {docs.map((doc) => (
              <li key={doc.slug} className="mb-16">
                <Link
                  href={`/docs/${doc.slug}`}
                  className="text-blue-medium hover:underline text-24"
                >
                  {(doc.title as string) || doc.slug}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
