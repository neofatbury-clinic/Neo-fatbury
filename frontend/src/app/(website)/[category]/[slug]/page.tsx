// src/app/(website)/[category]/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

const BASE_URL = 'https://neofatbury.com';

async function getService(category: string, slug: string) {
  const query = `*[_type == "service" && category == $category && slug.current == $slug][0] {
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

export async function generateMetadata({ params }: { params: { category: string, slug: string } }): Promise<Metadata> {
  const service = await getService(params.category, params.slug);
  if (!service) return { title: 'Not Found' };

  const finalTitle = service.seo?.metaTitle || `${service.name} | Best Skin, Hair & Slimming Clinic Hyderabad | NeoFatbury`;
  const finalDesc = service.seo?.metaDescription || service.heroSubtext || `Advanced clinical ${service.name} at NeoFatbury Clinic. Expert dermatologists, US-FDA approved technology, and visible results.`;
  const canonical = service.seo?.canonicalUrl || `${BASE_URL}/${params.category}/${params.slug}`;

  return {
    title: finalTitle,
    description: finalDesc,
    alternates: { canonical: canonical }
  };
}

export default async function ServicePage({ params }: { params: { category: string, slug: string } }) {
  const service = await getService(params.category, params.slug);
  if (!service) notFound();

  return (
    <article className="min-h-screen bg-white">
      {/* ── HERO BANNER ────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-gray-900" style={{ paddingTop: '80px' }}>
        {service.image && (
          <Image src={service.image} alt={service.name} fill className="object-cover opacity-50" priority />
        )}
        <div style={containerStyle} className="relative z-20 text-white">
          <div className="max-w-4xl">
             <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-12 bg-cyan-400"></span>
                <span className="text-cyan-400 font-extrabold uppercase tracking-[.25em] text-sm">{params.category} excellence</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-black mb-4 leading-[1.1]">
                {service.heroHeadline || service.name} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200">
                   {service.heroAccentLine}
                </span>
             </h1>
             <p className="text-xl md:text-2xl opacity-90 max-w-2xl font-light leading-relaxed mb-10">
                {service.heroSubtext}
             </p>
             <div className="flex flex-wrap gap-6">
                {service.heroTrustBadges?.map((b: any, i: number) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold border border-white/5">
                     <span>{b.icon}</span> {b.label}
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* ── CONTENT SECTIONS ───────────────────────────── */}
      <div style={containerStyle} className="py-12 px-4 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8">
           {service.contentSections?.map((section: any, idx: number) => {
              switch (section._type) {
                case 'textSection':
                  return (
                    <section key={idx} className="mb-20">
                       <h2 className="text-4xl font-black text-cyan-900 mb-8 leading-tight">{section.sectionTitle}</h2>
                       <div className={`flex flex-col ${section.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}>
                          <div className="flex-1 prose prose-xl text-gray-700">
                             <PortableText value={section.body} />
                          </div>
                          {section.image && (
                            <div className="flex-1 relative h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                               <Image src={section.image} alt={section.sectionTitle} fill className="object-cover" />
                            </div>
                          )}
                       </div>
                    </section>
                  );

                case 'benefitsSection':
                  return (
                    <section key={idx} className="mb-20 bg-cyan-50/30 p-12 rounded-[3rem] border border-cyan-50">
                       <h3 className="text-3xl font-black text-cyan-900 mb-10">{section.sectionTitle}</h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {section.items?.map((item: any, i: number) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-cyan-100/50">
                               <div className="text-3xl mb-4">{item.icon}</div>
                               <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                               <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </div>
                          ))}
                       </div>
                    </section>
                  );

                case 'faqSection':
                  return (
                    <section key={idx} className="mb-20">
                       <h3 className="text-3xl font-black text-cyan-900 mb-8">{section.sectionTitle}</h3>
                       <div className="space-y-4">
                          {section.faqs?.map((q: any, i: number) => (
                            <details key={i} className="group bg-white border border-gray-100 rounded-3xl overflow-hidden">
                               <summary className="flex justify-between items-center p-8 font-bold text-lg cursor-pointer hover:bg-gray-50 list-none">
                                  {q.question}
                                  <span className="transition-transform group-open:rotate-45 text-cyan-500">＋</span>
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

        {/* ── SIDEBAR FORM ───────────────────────────────── */}
        <div className="lg:col-span-4">
           <div className="sticky top-32">
              <div className="bg-white p-8 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">
                 <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 to-teal-400"></div>
                 <h3 className="text-2xl font-black text-cyan-950 mb-6 text-center">Book Clinical Analysis</h3>
                 <LeadForm />
                 <p className="text-xs text-center text-gray-400 mt-6">Results may vary. Consulting a dermatologist is recommended.</p>
              </div>
           </div>
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
