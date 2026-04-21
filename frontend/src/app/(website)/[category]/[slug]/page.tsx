// src/app/(website)/[category]/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import ReplicaHero from '@/components/ReplicaHero';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';

export const revalidate = 0;

const BASE_URL = 'https://neofatbury.com';

async function getService(category: string, slug: string) {
  const query = `*[_type == "service" && category->slug.current == $category && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    "image": heroImage.asset->url,
    heroHeadline,
    heroAccentLine,
    heroSubtext,
    heroTrustBadges,
    contentSections[] {
      _type,
      sectionTitle,
      body,
      "image": image.asset->url,
      imagePosition,
      backgroundColor,
      faqs[] { question, answer },
      items[] { title, description, icon },
      headline,
      subtext,
      buttonText,
      results[] { label, "image": image.asset->url }
    },
    seo {
      metaTitle,
      metaDescription,
      canonicalUrl
    }
  }`;
  return await client.fetch(query, { category, slug });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const service = await getService(category, slug);
  if (!service) return { title: 'Not Found' };

  const finalTitle = service.seo?.metaTitle || `${service.name} | Best Skin, Hair & Slimming Clinic Hyderabad | NeoFatbury`;
  const finalDesc = service.seo?.metaDescription || service.heroSubtext || `Advanced clinical ${service.name} at NeoFatbury Clinic. Expert dermatologists, US-FDA approved technology, and visible results.`;
  const canonical = service.seo?.canonicalUrl || `${BASE_URL}/${category}/${slug}`;

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: { canonical: canonical }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const { category, slug } = await params;
  const service = await getService(category, slug);
  if (!service) notFound();

  return (
    <article className="min-h-screen bg-white">
      {/* ── HERO BANNER ────────────────────────────────── */}
      <ReplicaHero 
        titleTeal1={service.heroHeadline || service.name}
        titleTeal2=""
        titleOrange1={category.toUpperCase()}
        titleOrange2="EXCELLENCE"
        subtext={service.heroSubtext || ''}
        imageSrc={service.image || '/images/neofatbury-clinical-standard.png'}
      />

      {/* ── CONTENT SECTIONS ───────────────────────────── */}
      <div style={containerStyle} className="py-16">
        <div className="max-w-[850px] mx-auto">
           {service.contentSections?.map((section: any, idx: number) => {
              switch (section._type) {
                case 'textSection':
                  return (
                    <section key={idx} className="mb-24">
                       <h2 className="text-4xl font-black text-cyan-900 mb-8 leading-tight">{section.sectionTitle}</h2>
                       <div className="flex flex-col gap-10">
                          <div className="prose prose-xl text-gray-700 max-w-none">
                             <PortableText value={section.body} />
                          </div>
                          {section.image && (
                            <div className="relative h-[480px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
                               <Image src={section.image} alt={section.sectionTitle} fill className="object-cover" />
                            </div>
                          )}
                       </div>
                    </section>
                  );

                case 'benefitsSection':
                  return (
                    <section key={idx} className="mb-24 bg-cyan-50/40 p-12 rounded-[3.5rem] border border-cyan-50">
                       <h3 className="text-3xl font-black text-cyan-950 mb-10 text-center">{section.sectionTitle}</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {section.items?.map((item: any, i: number) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-cyan-100/50">
                               <div className="text-4xl mb-4">{item.icon}</div>
                               <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                               <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                       </div>
                    </section>
                  );

                case 'faqSection':
                  return (
                    <section key={idx} className="mb-24">
                       <h3 className="text-3xl font-black text-cyan-900 mb-8 text-center">{section.sectionTitle}</h3>
                       <div className="space-y-4 max-w-[700px] mx-auto">
                          {section.faqs?.map((q: any, i: number) => (
                            <details key={i} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
                               <summary className="flex justify-between items-center p-8 font-bold text-lg cursor-pointer hover:bg-gray-50 list-none">
                                  {q.question}
                                  <span className="transition-transform group-open:rotate-45 text-cyan-500 text-2xl">＋</span>
                               </summary>
                               <div className="p-8 pt-0 text-gray-600 leading-loose border-t border-gray-50 bg-gray-50/30">
                                  {q.answer}
                                </div>
                            </details>
                          ))}
                       </div>
                    </section>
                  );

                default: return null;
              }
           })}
        </div>
      </div>
    </article>
  );
}

const containerStyle: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 1.5rem',
};
