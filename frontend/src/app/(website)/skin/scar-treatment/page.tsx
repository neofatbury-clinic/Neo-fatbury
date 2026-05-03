export const revalidate = 0;
import { getServicePageData } from "@/sanity/fetchers/services";
import ReplicaHero from "@/components/ReplicaHero";
import Image from "next/image";
import Link from "next/link";

export default async function ScarTreatment() {
  const d = await getServicePageData('scar-treatment') as Record<string, any>;
  const trustHead = (d.trustHeading as string);
  const trustAccent = (d.trustAccentWord as string);

  return (
    <>
      <ReplicaHero 
        titleTeal1={(d.heroHeadline as string) || ""}
        titleTeal2=""
        titleOrange1={(d.heroAccentLine as string) || ""}
        titleOrange2=""
        subtext={(d.heroSubtext as string) || ""}
        imageSrc={(d.image as string) || "/images/neofatbury-acne-hero.png"}
      />

      <section className="section bg-surface text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Are Scars Affecting <span className="text-accent">Your Confidence?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {[
              { title: "Acne Scars", desc: "Stubborn pitting or marks left behind by past breakouts.", icon: "🌋" },
              { title: "Uneven Texture", desc: "Rough, bumpy, or irregular skin surface that affects appearance.", icon: "🌊" },
              { title: "Pigmentation", desc: "Discolored spots that make your skin tone look patchy.", icon: "🌑" },
              { title: "Injury Scars", desc: "Visible reminders of past procedures or injuries.", icon: "⛰️" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            Scars can be treated <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>effectively with the right clinical approach.</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-acne-scar-procedure.png"} alt="Scar Treatment Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>NEOFATBURY SURGICAL STANDARD</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>Scientific Restoration</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>What is <span className="text-accent">Scar Treatment?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>
              Scar treatment involves advanced dermatological procedures that improve skin texture, reduce scar visibility, and promote healthy skin regeneration.
            </p>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>Treatments include:</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              {[
                { t: 'Laser Resurfacing', i: '⚡' },
                { t: 'Chemical Peels', i: '🧴' },
                { t: 'Microneedling / MNRF', i: '💉' },
                { t: 'Dermal Fillers', i: '💧' }
              ].map(point => (
                <div key={point.t} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '800', color: '#004d4f', fontSize: '1.05rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{point.i}</span> {point.t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Real Results. <span className="text-accent">Visible Improvement.</span></h2>
          <p className="section-subtitle">See natural-looking skin refining results from our elite sessions.</p>
          <div style={{ maxWidth: '480px', margin: '3.5rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src={(d.baImage as string) || "/images/neofatbury-acne-scar-ba.png"} alt="Scar Treatment Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '3rem', display: 'flex', justifyContent: 'center', gap: '25vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '5px', fontSize: '1.3rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>Start Your Skin Refining Journey Today</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>Start Your Journey</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">Benefits of <span className="text-accent">Scar Treatment</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4.5rem', gap: '1.5rem' }}>
            {[
              { t: "Even texture", i: "🧼" },
              { t: "Reduced marks", i: "🎯" },
              { t: "Natural radiance", i: "✨" },
              { t: "Healthy skin", i: "🛡️" },
              { t: "Confidence", i: "🌟" }
            ].map(benefit => (
              <div key={benefit.t} className="card-benefit" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{benefit.i}</div>
                <p style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--color-primary)' }}>{benefit.t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ paddingRight: '3.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>Advanced <span className="text-accent">Scar Technology</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>
              We use the latest medical-grade technology to safely reduce scars and improve skin quality.
            </p>
          </div>
          <div style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={(d.techImage as string) || "/images/neofatbury-acne-scar-banner.png"} alt="Clinical Precision" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead || "Why Choose"} <span className="text-accent">{trustAccent || "Neo Clinic?"}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {[
              { t: "Expert doctors", i: "👨‍⚕️" },
              { t: "Advanced tech", i: "🔬" },
              { t: "Proven results", i: "🏆" },
              { t: "Safe care", i: "🛡️" }
            ].map(item => (
              <div key={item.t} className="card-trust">
                <div style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{item.i}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-primary)' }}>{item.t}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center" style={{ padding: '10rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', color: 'white', marginBottom: '2rem', fontWeight: '900' }}>Ready for Smooth Skin?</h2>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.95)', marginBottom: '4.5rem', fontWeight: '500' }}>Schedule your consultation and start your scar restoration journey today.</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>Book Appointment</Link>
            <a href="tel:7729955577" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>Get Free Consultation</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .card-sleek { background: white; padding: 3rem 2rem; border-radius: 16px; border: 1px solid #f2f2f2; box-shadow: 0 6px 25px rgba(0,0,0,0.04); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .card-sleek:hover { transform: translateY(-10px); box-shadow: 0 15px 45px rgba(0,0,0,0.08); border-color: var(--color-accent); }
        .card-benefit { background: white; padding: 2.5rem; border-radius: 20px; border: 1px solid #f2f2f2; transition: all 0.3s ease; }
        .card-benefit:hover { transform: translateY(-8px); box-shadow: 0 15px 40px rgba(0,0,0,0.06); }
        .card-trust { background: white; padding: 3.5rem 2rem; border-radius: 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5rem; border: 1px solid #f2f2f2; transition: all 0.3s ease; }
        .card-trust:hover { transform: translateY(-8px); border-color: var(--color-accent); }
      ` }} />
    </>
  );
}
