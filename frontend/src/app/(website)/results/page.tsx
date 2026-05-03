import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import ComparisonSlider from "@/components/ComparisonSlider";
import { client } from '@/sanity/lib/client';

export const revalidate = 60;

async function getResultsData() {
  const query = `{
    "page": *[_type == "resultsPage"][0] {
      ...,
      "heroImage": heroImage.asset->url
    },
    "items": *[_type == "resultsPage"][0].galleryItems[]-> {
      "title": treatment,
      "category": relatedService->category->slug.current,
      "description": patientQuote,
      "beforeImg": beforeImage.asset->url,
      "afterImg": afterImage.asset->url,
      "combinedImg": combinedImage.asset->url,
      "slug": relatedService->slug.current
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
      <ReplicaHero 
        titleTeal1={page?.title || ''}
        titleTeal2=""
        titleOrange1=""
        titleOrange2=""
        subtext={page?.subtitle || ''}
        imageSrc={page?.heroImage || "/images/neofatbury-home-hero.png"}
      />

      {/* 2. RESULTS GRID */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '3rem' }}>
            {items?.map((r: any, i: number) => (
              <div key={i} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', borderRadius: '24px' }}>
                <ComparisonSlider 
                  before={r.beforeImg || '/images/neofatbury-clinical-standard.png'} 
                  after={r.afterImg || '/images/neofatbury-clinical-standard.png'} 
                  label={r.title}
                  autoSlide={true}
                />

                {/* Text Content */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary)' }}>{r.title}</h3>
                    <span style={{
                      backgroundColor: '#e6f6f6', color: 'var(--color-accent)',
                      fontSize: '0.7rem', fontWeight: '800', padding: '0.25rem 0.75rem',
                      borderRadius: '4px', textTransform: 'uppercase',
                    }}>
                      {r.category || 'Clinical Treatment'}
                    </span>
                  </div>
                  <p className="text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{r.description}</p>
                  {r.slug && (
                    <Link href={`/${r.category || 'skin'}/${r.slug}`} style={{ color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.9rem', textDecoration: 'underline' }}>
                      View Treatment Details
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
