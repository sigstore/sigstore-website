import { notFound } from "next/navigation";
import { getDocSlugs } from "@/lib/content";
import { buildPageMetadata, buildJsonLd } from "@/lib/metadata";
import { MarkdownRenderer } from "@/components/ui/MarkdownRenderer";
import { HeaderThemeSetter } from "@/components/HeaderThemeSetter";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function generateStaticParams() {
  const slugs = getDocSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocBySlug(slug);
  if (!doc) return {};

  return buildPageMetadata(
    { slug, title: doc.title as string, body: doc.body },
    `/docs/${slug}/`
  );
}

interface DocData {
  slug: string;
  body: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
}

function getDocBySlug(slug: string): DocData | null {
  const docsDir = path.join(process.cwd(), "content", "docs");
  const filePath = path.join(docsDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { slug, body: content, ...data } as DocData;
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doc = getDocBySlug(slug);

  if (!doc) {
    notFound();
  }

  const jsonLd = buildJsonLd(`/docs/${slug}/`);

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
          <h1 className="text-48 mb-16">{doc.title as string}</h1>
          {doc.description && (
            <p className="text-18 text-gray-medium mb-44">
              {doc.description as string}
            </p>
          )}
          <div className="markdown prose max-w-none">
            <MarkdownRenderer content={doc.body} />
          </div>
        </div>
      </section>
    </>
  );
}
