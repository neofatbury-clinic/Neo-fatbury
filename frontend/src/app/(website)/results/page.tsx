// src/app/(website)/results/page.tsx
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getResultsData() {
  const query = `{
    "page": *[_type == "resultsPage"][0] {
      ...,
      "heroImage": heroImage.asset->url
    },
    "items": *[_type == "gallery"] | order(_createdAt desc) {
      title,
      category,
      description,
      "img": image.asset->url,
      "slug": treatmentReference->slug.current
    }
  }`;
  return await client.fetch(query);
}

export default async function Results() {
  const { page, items } = await getResultsData();

  const heroStyle = page?.heroImage 
    ? { background: `linear-gradient(rgba(240, 247, 246, 0.9), rgba(255, 255, 255, 0.9)), url(${page.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '5rem 0 4rem', textAlign: 'center' as const }
    : { background: 'linear-gradient(135deg, #f0f7f6 0%, #ffffff 100%)', padding: '5rem 0 4rem', textAlign: 'center' as const };

  return (
    <>
      {/* 1. HERO */}
      <section style={heroStyle}>
        <div className="container">
          <p style={{ color: 'var(--color-accent)', fontWeight: '600', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Real Client Transformations</p>
          <h1 style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>
            {page?.title || 'Our Results Gallery'}
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '650px', margin: '0 auto 2rem', lineHeight: 1.8 }}>
            {page?.subtitle || 'Real transformations from real NeoFatbury clients. Every result here was achieved under the direct supervision of our certified dermatologists.'}
          </p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontStyle: 'italic' }}>
            * Results may vary from person to person depending on individual body types, genetics, and treatment adherence.
          </p>
        </div>
      </section>

      {/* 2. RESULTS GRID */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3" style={{ gap: '2rem' }}>
            {items?.map((r: any, i: number) => (
              <div key={i} className="card" style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{ position: 'relative', height: '280px' }}>
                  <Image src={r.img || '/images/neofatbury-clinical-standard.png'} alt={`${r.title} results`} fill style={{ objectFit: 'cover' }} />
                  <div style={{
                    position: 'absolute', top: '1rem', left: '1rem',
                    backgroundColor: 'var(--color-accent)', color: 'white',
                    fontSize: '0.75rem', fontWeight: '700', padding: '0.25rem 0.75rem',
                    borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '1px',
                  }}>
                    {r.category || 'Clinical'}
                  </div>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--color-primary)' }}>{r.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{r.description}</p>
                  {r.slug && (
                    <Link href={`/skin/${r.slug}`} style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '0.9rem' }}>
                      Learn about this treatment →
                    </Link>
                  )}
                </div>
              </div>
            )) || (
              <p className="text-center" style={{ gridColumn: '1/-1', opacity: 0.5 }}>Upload transformation photos in Sanity to see them here.</p>
            )}
          </div>
        </div>
      </section>

      {/* 3. CONSULTATION FORM */}
      <section className="section bg-surface" id="book">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)', gap: '4rem', alignItems: 'center' }}>
          <div className="mobile-hide">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Want Results <span className="text-accent">Like These?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every transformation starts with a conversation. Meet our experts for a detailed analysis of your skin, hair, or body goals. 
            </p>
          </div>
          <div>
            <LeadForm title="Book Your Transformation" />
          </div>
        </div>
      </section>
    </>
  );
}
