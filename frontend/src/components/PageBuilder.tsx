
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import ReplicaHero from './ReplicaHero';

interface PageBuilderProps {
  content: any[];
}

const PageBuilder: React.FC<PageBuilderProps> = ({ content }) => {
  if (!content || !Array.isArray(content)) return null;

  return (
    <>
      {content.map((section: any, index: number) => {
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
                      <Image src={section.image || "/images/clinic-reception.webp"} alt={section.heading || "Section Image"} fill style={{ objectFit: 'cover' }} />
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

          case 'videoSection':
            return (
              <section key={index} className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                  {section.heading && <h2 className="section-title text-center" style={{ marginBottom: '2rem' }}>{section.heading}</h2>}
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                    <iframe 
                      src={section.url?.replace('watch?v=', 'embed/')} 
                      title={section.heading || "Video"}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allowFullScreen
                    />
                  </div>
                  {section.caption && <p style={{ textAlign: 'center', marginTop: '1rem', fontStyle: 'italic', color: '#666' }}>{section.caption}</p>}
                </div>
              </section>
            );

          default:
            return null;
        }
      })}
    </>
  );
};

export default PageBuilder;
