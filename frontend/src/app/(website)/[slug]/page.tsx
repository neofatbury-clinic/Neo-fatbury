
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import CustomSchema from "@/components/CustomSchema";

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await client.fetch(
    `*[_type == "genericPage" && slug.current == $slug][0] {
      ...,
      seo {
        ...,
        customSchema
      }
    }`,
    { slug }
  );

  if (!page) {
    notFound();
  }

  return (
    <section className="section" style={{ minHeight: '60vh' }}>
      <CustomSchema schema={page.seo?.customSchema} />
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title text-primary" style={{ textAlign: 'left', marginBottom: '2rem' }}>
          {page.title}
        </h1>
        <div className="prose max-w-none text-muted">
          {page.content ? (
            <PortableText value={page.content} />
          ) : (
            <p>Content is being updated. Please check back soon.</p>
          )}
        </div>
      </div>
    </section>
  );
}
