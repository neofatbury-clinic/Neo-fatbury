// src/app/(website)/about-us/page.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

async function getAboutData() {
  const query = `*[_type == "aboutPage"][0] {
    title,
    "heroImage": heroImage.asset->url,
    storyTitle,
    storyText,
    stats,
    pillars,
    ctaTitle,
    ctaSubtitle,
    ctaButton
  }`;
  return await client.fetch(query);
}

export default async function AboutUs() {
  const data = await getAboutData();

  const heroImage = data?.heroImage || 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80';

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={heroImage} 
            alt="About NeoFatbury"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {data?.title || 'Clinical Excellence in Skin, Hair & Slimming'}
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Founded on the pillars of precision, safety, and results, NeoFatbury is Hyderabad's leading destination for world-class clinical treatments.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-teal-100/50 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-500 -rotate-3" />
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" 
                alt="Our Clinical Heritage"
                className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 z-10 w-full object-cover aspect-[4/3]"
              />
            </div>
            
            <div>
              <span className="text-[#e8a317] font-semibold tracking-widest uppercase mb-4 block">Our Story</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#1a2b3c] mb-8 leading-tight">
                {data?.storyTitle || 'About NeoFatbury Clinical Skin & Hair'}
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                {data?.storyText ? (
                  <PortableText value={data.storyText} />
                ) : (
                  <>
                    <p>At NeoFatbury, we believe that true beauty is rooted in health and confidence...</p>
                    <p>With facilities in Kukatpally and Himayatnagar...</p>
                  </>
                )}
                
                <div className="grid grid-cols-2 gap-6 pt-8">
                  {data?.stats?.map((stat: any, i: number) => (
                    <div key={i} className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm transform hover:-translate-y-1 transition-all">
                      <div className="text-4xl font-bold text-[#00acb1] mb-2">{stat.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">{stat.label}</div>
                    </div>
                  )) || (
                    <>
                      <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm transition-all"><div className="text-4xl font-bold text-[#00acb1] mb-2">10k+</div><div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Patients Served</div></div>
                      <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm transition-all"><div className="text-4xl font-bold text-[#00acb1] mb-2">15+</div><div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Experience</div></div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#f0f8f8]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(data?.pillars || [
              { title: 'Our Mission', description: 'To provide safe, effective, and scientifically backed aesthetic solutions...' },
              { title: 'Our Vision', description: 'To be the most trusted name in clinical dermatology...' },
              { title: 'Core Promise', description: 'Safe clinical procedures, transparent pricing...' }
            ]).map((pillar: any, i: number) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00acb1] to-[#008c91] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl opacity-20" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">{data?.ctaTitle || 'Start Your Journey Today'}</h2>
          <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto relative z-10">
            {data?.ctaSubtitle || 'Book your free clinical scalp or skin analysis and experience the difference.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Link 
              href="/contact-us"
              className="px-10 py-5 bg-[#e8a317] text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#00acb1] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              {data?.ctaButton || 'Book Complimentary Analysis'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
