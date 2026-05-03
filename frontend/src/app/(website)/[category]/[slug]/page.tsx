// src/app/(website)/[category]/[slug]/page.tsx
import { client, urlFor } from '@/sanity/client';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import ReplicaHero from '@/components/ReplicaHero';
import CustomSchema from '@/components/CustomSchema';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';

export const revalidate = 0;

const BASE_URL = 'https://neofatbury.co.in';

async function getService(category: string, slug: string) {
  // We use the flat schema fields as defined in src/sanity/schemaTypes/service.ts
  const query = `*[_type == "service" && category->slug.current == $category && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    "categorySlug": category->slug.current,
    "image": heroImage,
    heroHeadline,
    heroAccentLine,
    heroSubtext,
    heroCtaText,
    heroTrustBadges,
    
    problemHeading,
    problemAccentText,
    problemCards,
    problemBottomText,
    problemBottomAccent,
    
    whatIsLabel,
    whatIsHeading,
    whatIsAccentWord,
    whatIsBody,
    whatIsListHeading,
    whatIsPoints,
    whatIsImage,
    whatIsImageBadge,
    whatIsAuthorityNote,
    
    baHeading,
    baAccentWord,
    baSubtext,
    baImage,
    baCtaText,
    baCtaBtnText,
    
    benefitsHeading,
    benefitsAccentWord,
    benefitItems,
    
    processHeading,
    processAccentWord,
    processSteps,
    
    techHeading,
    techAccentWord,
    techBody,
    techImage,
    techFeatures,
    
    trustHeading,
    trustAccentWord,
    trustItems,
    
    faqHeading,
    faqItems,
    
    finalCtaHeading,
    finalCtaSubtext,
    finalCtaPrimaryBtn,
    finalCtaSecondaryBtn,
    
      seo {
        metaTitle,
        metaDescription,
        canonicalUrl,
        customSchema
      }
    }`;
  return await client.fetch(query, { category, slug });
}

export async function generateMetadata({ params }: { params: Promise<{ category: string, slug: string }> }): Promise<Metadata> {
  const { category, slug } = await params;
  const service = await getService(category, slug);
  if (!service) return { title: 'Not Found' };

  const finalTitle = service.seo?.metaTitle || `${service.name} | Best Clinic in Hyderabad | NeoFatbury`;
  const finalDesc = service.seo?.metaDescription || service.heroSubtext || `Professional ${service.name} at NeoFatbury Clinic.`;
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
      <CustomSchema schema={service.seo?.customSchema} />
      {/* ── HERO BANNER ────────────────────────────────── */}
      <ReplicaHero 
        titleTeal1={service.heroHeadline || ''}
        titleTeal2=""
        titleOrange1={service.heroAccentLine || ''}
        titleOrange2=""
        subtext={service.heroSubtext || ''}
        imageSrc={(service.image?.asset) ? urlFor(service.image).url() : undefined}
        trustPoints={service.heroTrustBadges || []}
        slug={slug}
      />

      {/* ── PROBLEM SECTION ───────────────────────────── */}
      {service.problemHeading && (
        <section className="py-10 md:py-20 bg-gray-50 text-center">
          <div className="max-w-[1100px] mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-5xl font-black text-cyan-950 mb-8 md:mb-16">
              {service.problemHeading} <span className="text-orange-500">{service.problemAccentText}</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 pr-14 md:pr-0">
              {service.problemCards?.map((item: any, i: number) => (
                <div key={i} className="bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col items-center">
                  <div className="text-3xl md:text-4xl mb-2 md:mb-4">{item.icon}</div>
                  <h3 className="text-sm md:text-lg font-bold text-cyan-900 mb-1 md:mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            {service.problemBottomText && (
              <p className="text-lg md:text-2xl mt-8 md:mt-16 font-bold text-cyan-900">
                {service.problemBottomText} <span className="text-orange-500">{service.problemBottomAccent}</span>
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── WHAT IS SECTION ───────────────────────────── */}
      {service.whatIsHeading && (
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={(service.whatIsImage?.asset) ? urlFor(service.whatIsImage).url() : '/images/neofatbury-clinical-standard.png'} 
                alt={service.name} 
                fill 
                className="object-cover" 
              />
              {service.whatIsImageBadge && (
                <div className="absolute bottom-8 left-8 bg-white px-6 py-3 rounded-xl font-black text-cyan-900 text-sm shadow-xl uppercase tracking-widest">
                  {service.whatIsImageBadge}
                </div>
              )}
            </div>
            <div>
              <span className="text-orange-500 font-black tracking-[4px] uppercase text-sm block mb-4">{service.whatIsLabel}</span>
              <h2 className="text-4xl md:text-5xl font-black text-cyan-950 mb-8">
                {service.whatIsHeading} <span className="text-orange-500">{service.whatIsAccentWord}</span>
              </h2>
              <p className="text-lg text-gray-600 leading-loose mb-10">{service.whatIsBody}</p>
              {service.whatIsListHeading && <h4 className="text-xl font-bold mb-6">{service.whatIsListHeading}</h4>}
              <div className="grid grid-cols-2 gap-6">
                {service.whatIsPoints?.map((p: any, i: number) => (
                  <div key={i} className="flex items-center gap-4 text-cyan-900 font-bold">
                    <span className="text-2xl">{p.icon}</span> {p.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── BEFORE & AFTER ───────────────────────────── */}
      {(() => {
        const fallbacks: Record<string, string> = {
          skin: '/images/skin-before-after.png',
          hair: '/images/hair-before-after.png',
          slimming: '/images/slimming-before-after.png',
        };
        const baImg = service.baImage || fallbacks[service.categorySlug] || '/images/skin-before-after.png';
        return (
          <section className="py-24 bg-gray-50 text-center">
            <div className="max-w-[900px] mx-auto px-6">
              <h2 className="text-4xl font-black text-cyan-950 mb-4">
                {service.baHeading || 'Real'} <span className="text-orange-500">{service.baAccentWord || 'Results'}</span>
              </h2>
              <p className="text-gray-600 mb-12">{service.baSubtext || 'Visible results from our expert clinical treatments.'}</p>
              <div className="relative aspect-[16/7] rounded-3xl overflow-hidden shadow-xl mb-12">
                <Image src={(service.baImage?.asset) ? urlFor(service.baImage).url() : baImg} alt="Before and After Results" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 py-4 bg-black/40 backdrop-blur-sm flex justify-around text-white font-black tracking-widest text-sm italic">
                  <span>BEFORE</span>
                  <span>AFTER</span>
                </div>
              </div>
              <Link href="/contact-us" className="inline-block bg-cyan-800 text-white px-12 py-4 rounded-full font-bold hover:bg-cyan-900 transition-colors">
                {service.baCtaBtnText || 'Book Your Free Analysis'}
              </Link>
            </div>
          </section>
        );
      })()}

      {/* ── BENEFITS SECTION ──────────────────────────── */}
      {service.benefitItems && (
        <section className="py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <h2 className="text-4xl font-black text-cyan-950 text-center mb-16">
              {service.benefitsHeading} <span className="text-orange-500">{service.benefitsAccentWord}</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {service.benefitItems?.map((item: any, i: number) => (
                <div key={i} className="bg-white border border-gray-100 p-8 rounded-3xl text-center min-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <p className="font-bold text-cyan-900">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ SECTION ──────────────────────────────── */}
      {service.faqItems && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-[800px] mx-auto px-6">
            <h2 className="text-4xl font-black text-cyan-950 text-center mb-16">
              {service.faqHeading || 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {service.faqItems?.map((faq: any, i: number) => (
                <details key={i} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <summary className="p-6 font-bold text-cyan-900 cursor-pointer flex justify-between items-center list-none">
                    {faq.question}
                    <span className="text-orange-500 text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FINAL CTA ────────────────────────────────── */}
      <section className="py-24 bg-cyan-900 text-white text-center">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-8">{service.finalCtaHeading || `Ready for ${service.name}?`}</h2>
          <p className="text-lg text-cyan-100 mb-12">{service.finalCtaSubtext}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full font-black transition-colors uppercase tracking-widest text-sm shadow-xl">
              {service.finalCtaPrimaryBtn || 'Book Free Consultation'}
            </Link>
            <a href="tel:9700641000" className="bg-white hover:bg-gray-100 text-cyan-900 px-10 py-4 rounded-full font-black transition-colors uppercase tracking-widest text-sm shadow-xl">
              {service.finalCtaSecondaryBtn || 'Call Now'}
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
