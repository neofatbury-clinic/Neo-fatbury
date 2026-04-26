import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import CustomSchema from "@/components/CustomSchema";
import PageBuilder from "@/components/PageBuilder";

export default async function GenericPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await client.fetch(
    `*[_type == "genericPage" && slug.current == $slug][0] {
      ...,
      content[] {
        ...,
        "image": image.asset->url
      },
      seo
    }`,
    { slug }
  );

  if (!page) {
    notFound();
  }

  return (
    <div className="page-builder">
      <CustomSchema schema={page.seo?.customSchema} />

      {page.content ? (
        <PageBuilder content={page.content} />
      ) : (
        <section className="section text-center">
          <div className="container">
            <h1>{page.title}</h1>
            <p>Page is being built...</p>
          </div>
        </section>
      )}
    </div>
  );
}
