import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import CustomSchema from "@/components/CustomSchema";
import ReplicaHero from "@/components/ReplicaHero";

type Section = any;

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
        page.content.map((section: Section, index: number) => {
          switch (section._type) {
            case 'pageHero':
              return (
                <ReplicaHero 
                  key={index}
                  titleTeal1={section.title || "NeoFatbury"}
                  titleTeal2=""
                  titleOrange1={section.subtitle || ""}
                  titleOrange2=""
                  imageSrc={section.image || "/images/clinic-reception.webp"}
                  showForm={section.showForm}
                />
              );

            case 'textImage':
              return (
                <section key={index} className="section" style={{ padding: '4rem 0' }}>
                  <div className="container">
                    <div className={`grid grid-2 mobile-grid-1 items-center`} style={{ gap: '4rem', direction: section.reverse ? 'rtl' : 'ltr' }}>
                      <div style={{ direction: 'ltr' }}>
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{section.heading}</h2>
                        <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>{section.text}</p>
                      </div>
                      <div style={{ position: 'relative', height: '400px', borderRadius: '12px', overflow: 'hidden', direction: 'ltr' }}>
                        <Image src={section.image || "/images/clinic-reception.webp"} alt={section.heading} fill style={{ objectFit: 'cover' }} />
                      </div>
                    </div>
                  </div>
                </section>
              );

            case 'richText':
              return (
                <section key={index} className="section">
                  <div className="container" style={{ maxWidth: '850px' }}>
                    <div className="prose text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                      <PortableText value={section.content} />
                    </div>
                  </div>
                </section>
              );

            case 'ctaBox':
              return (
                <section key={index} className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }}>
                  <div className="container">
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{section.text}</h2>
                    <Link href={section.link || "/contact-us"} className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', scale: '1.2' }}>
                      {section.buttonText}
                    </Link>
                  </div>
                </section>
              );

            case 'faqSection':
                return (
                  <section key={index} className="section bg-surface">
                    <div className="container" style={{ maxWidth: '800px' }}>
                      <h2 className="section-title text-center">{section.heading || "Frequently Asked Questions"}</h2>
                      <div style={{ marginTop: '3rem' }}>
                        {section.items?.map((faq: any, i: number) => (
                          <details key={i} style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '8px', padding: '1rem', textAlign: 'left', backgroundColor: 'white' }}>
                            <summary style={{ fontWeight: '700', cursor: 'pointer', color: 'var(--color-primary)' }}>{faq.question}</summary>
                            <p style={{ marginTop: '1rem', color: '#555', lineHeight: 1.6 }}>{faq.answer}</p>
                          </details>
                        ))}
                      </div>
                    </div>
                  </section>
                );

            case 'block': // Legacy support for plain portable text
              return (
                <section key={index} className="section">
                    <div className="container" style={{ maxWidth: '850px' }}>
                        <div className="prose text-muted">
                            <PortableText value={[section]} />
                        </div>
                    </div>
                </section>
              );

            default:
              return null;
          }
        })
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
