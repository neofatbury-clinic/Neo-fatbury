// src/app/(website)/[category]/[slug]/page.tsx
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import LeadForm from '@/components/LeadForm';
import { notFound } from 'next/navigation';

export const revalidate = 60;

async function getService(category: string, slug: string) {
  const query = `*[_type == "service" && category == $category && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    description,
    shortDescription,
    category,
    "image": mainImage.asset->url,
    features,
    faqs
  }`;
  return await client.fetch(query, { category, slug });
}

export default async function ServicePage({ params }: { params: { category: string, slug: string } }) {
  const service = await getService(params.category, params.slug);

  if (!service) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {service.image && (
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">{service.shortDescription}</p>
        </div>
      </section>

      {/* CONTENT GRID */}
      <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MAIN INFO */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold text-cyan-700 mb-6">About the Treatment</h2>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-12">
            {service.description}
          </div>

          {/* FEATURES */}
          {service.features && (
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Benefits</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((f: any, i: number) => (
                  <li key={i} className="flex items-center gap-3 bg-cyan-50 p-4 rounded-xl border border-cyan-100">
                    <span className="text-cyan-600 text-xl">✅</span>
                    <span className="font-semibold text-cyan-900">{f.feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* FAQs */}
          {service.faqs && (
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {service.faqs.map((q: any, i: number) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <h4 className="font-bold text-lg text-cyan-800 mb-2">Q: {q.question}</h4>
                    <p className="text-gray-600">A: {q.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR FORM */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white p-6 rounded-3xl shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-center mb-6">Book a Free Consultation</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
