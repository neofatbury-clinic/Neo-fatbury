"use client";

import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80')" }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Clinical Excellence in <br/><span className="text-[#00acb1]">Skin, Hair & Slimming</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Founded on the pillars of precision, safety, and results, NeoFatbury is Hyderabad's leading destination for world-class clinical treatments.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Decorative Background Element (Fixed Scale) */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#1a2b3c] fill-current transform translate-x-1/4">
             <path d="M50 0 L90 20 L90 70 L50 100 L10 70 L10 20 Z" />
          </svg>
        </div>

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
                About NeoFatbury <br/>Clinical Skin & Hair
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  At NeoFatbury, we believe that true beauty is rooted in health and confidence. Our clinic was established to bring the world's most advanced US-FDA approved technologies to India, delivered by a team of highly qualified dermatologists and clinical experts.
                </p>
                <p>
                  With facilities in Kukatpally and Himayatnagar, we specialize in a "Subject-First" approach, ensuring every treatment plan is as unique as the patient we serve.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm transform hover:-translate-y-1 transition-all">
                    <div className="text-4xl font-bold text-[#00acb1] mb-2">10k+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Patients Served</div>
                  </div>
                  <div className="p-6 bg-teal-50 rounded-2xl border border-teal-100 shadow-sm transform hover:-translate-y-1 transition-all">
                    <div className="text-4xl font-bold text-[#00acb1] mb-2">15+</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Years Experience</div>
                  </div>
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
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00acb1] mb-8 group-hover:bg-[#00acb1] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide safe, effective, and scientifically backed aesthetic solutions that help our patients look and feel their absolute best.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00acb1] mb-8 group-hover:bg-[#00acb1] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted name in clinical dermatology and slimming across India, known for integrity and excellence.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-teal-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-[#00acb1] mb-8 group-hover:bg-[#00acb1] group-hover:text-white transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2b3c] mb-4">Core Promise</h3>
              <p className="text-gray-600 leading-relaxed">
                Safe clinical procedures, transparent pricing, and results that speak for themselves. You are in safe hands.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#00acb1] to-[#008c91] rounded-[40px] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Start Your Journey Today</h2>
          <p className="text-xl text-teal-50 mb-10 max-w-2xl mx-auto relative z-10">
            Book your free clinical scalp or skin analysis with our বিশেষজ্ঞরা and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
            <Link 
              href="/contact-us"
              className="px-10 py-5 bg-[#e8a317] text-white rounded-full font-bold text-lg hover:bg-white hover:text-[#00acb1] transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Book Complimentary Analysis
            </Link>
            <a 
              href="tel:+919700641000"
              className="text-white hover:text-[#e8a317] font-bold text-lg transition-colors flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 005.47 5.47l.772-1.548a1 1 0 011.06-.539l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
              Call Our Experts
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
