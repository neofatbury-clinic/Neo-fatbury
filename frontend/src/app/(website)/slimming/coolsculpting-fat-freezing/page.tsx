export const revalidate = 0;
import { getServicePageData } from "@/sanity/fetchers/services";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";

export default async function CoolSculpting() {
  const d = await getServicePageData('coolsculpting-fat-freezing') as Record<string, any>;

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={(d.heroHeadline as string) || ''}
        titleTeal2=""
        titleOrange1={(d.heroAccentLine as string) || ''}
        titleOrange2=""
        subtext={(d.heroSubtext as string) || ''}
        imageSrc={(d.image as string) || "/images/neofatbury-cooling-tech.png"}
      />

      {/* 2. PROBLEM SECTION */}
      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Stubborn Fat <span className="text-accent">That Won’t Go Away?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {[
              { title: "Belly Fat", desc: "Target persistent fat around the abdomen area.", icon: "🥋" },
              { title: "Love Handles", desc: "Eliminate stubborn fat on the flanks and waist.", icon: "⌛" },
              { title: "Thigh Fat", desc: "Reduce fat on inner and outer thighs for better contour.", icon: "🦵" },
              { title: "Double Chin", desc: "Non-surgical reduction of submental fat for a slim profile.", icon: "👤" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.75rem', color: 'var(--color-primary)', fontWeight: '700' }}>{item.title}</h3>
                <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-standard.png"} alt="CoolSculpting Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary)' }}>NEOFATBURY CLINICAL STANDARD</div>
          </div>
          <div className="split-text-block">
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>Precision Contouring</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">CoolSculpting?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">See the <span className="text-accent" style={{ color: '#00acb1' }}>Difference</span></h2>
          <div style={{ maxWidth: '1000px', margin: '3.5rem auto', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <Image src={(d.baImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="CoolSculpting Results" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '2.5rem', display: 'flex', justifyContent: 'center', gap: '30vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.25rem' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.25rem' }}>AFTER</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-4">
          <div className="split-text-block">
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Precision <span className="text-accent">Freezing Tech</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              We use modern, clinically proven fat reduction technology designed for safe and effective results across all body types.
            </p>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
            <Image src={(d.techImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="Body Sculpting Excellence" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .service-hero { position: relative; overflow: hidden; min-height: 600px; display: flex; align-items: center; padding: 3rem 0; }
        .service-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; width: 100%; }
        @media (max-width: 1024px) { .service-hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2rem; } }
        .card-sleek { background: white; padding: 2.5rem 1.5rem; border-radius: 12px; border: 1px solid #f0f0f0; box-shadow: 0 4px 20px rgba(0,0,0,0.03); transition: transform 0.3s ease; }
        .card-sleek:hover { transform: translateY(-5px); }
        .card-benefit { background: white; padding: 2rem; border-radius: 16px; border: 1px solid #f2f2f2; transition: transform 0.3s ease; }
        .card-benefit:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
      `}} />
    </>
  );
}
