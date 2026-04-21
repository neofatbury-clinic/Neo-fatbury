// /skin/laser-hair-reduction/page.tsx — CMS-driven, layout unchanged
import ReplicaHero from "@/components/ReplicaHero";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function LaserHairReduction() {
  const d = await getServicePageData('laser-hair-reduction') as Record<string, unknown>;

  // Hero
  const heroH1     = (d.heroHeadline   as string) || 'Smooth Skin.';
  const heroAccent = (d.heroAccentLine as string) || 'Laser Precision.';
  const heroDesc   = (d.heroSubtext    as string) || 'Advanced clinical hair reduction for permanent, smooth results. Experience US-FDA approved technology designed for surgical precision and lasting confidence.';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [{ icon:'🛡️', label:'US-FDA APPROVED' }, { icon:'💎', label:'GOLD STANDARD' }];

  // Problem
  const probHead   = (d.problemHeading    as string) || 'Tired of Constant';
  const probAccent = (d.problemAccentText as string) || 'Shaving & Waxing?';
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'🪒', title:'Frequent Growth',  desc:'The constant, exhausting need to shave or wax every few days to maintain smoothness.' },
    { icon:'🩹', title:'Ingrown Hair',     desc:'Painful bumps and skin irritation caused by traditional hair removal methods.' },
    { icon:'🕒', title:'Time Consuming',   desc:'Spending hours every month on temporary routines that never give lasting freedom.' },
    { icon:'🌑', title:'Skin Darkening',   desc:'Roughness and dark spots caused by constant friction and chemical hair removal.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || "There's a permanent solution —";
  const probBotAccent = (d.problemBottomAccent as string) || 'experience the freedom of smooth, hair-free skin forever.';

  // What Is
  const wiLabel   = (d.whatIsLabel       as string) || 'Permanent Freedom';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Laser Hair Reduction?';
  const wiBody    = (d.whatIsBody        as string) || 'Laser hair reduction uses concentrated light to target hair follicles, preventing future growth while ensuring your surrounding skin remains safe, smooth, and healthy.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Why choose our technology:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'❄️', text:'Pain-free cooling' }, { icon:'👥', text:'All skin types' }, { icon:'🎯', text:'Precision targeting' }, { icon:'♾️', text:'Long-term results' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY LASER STANDARD';

  // Before & After
  const baHead    = (d.baHeading    as string) || 'Experience';
  const baAccent  = (d.baAccentWord as string) || 'Smoothness';
  const baSub     = (d.baSubtext    as string) || 'See noticeable hair reduction and smoother skin results from our elite sessions.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Journey to Smooth Skin Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Journey';

  // Benefits
  const benHead    = (d.benefitsHeading    as string) || 'Benefits of';
  const benAccent  = (d.benefitsAccentWord as string) || 'Laser Hair Reduction';
  const benItems   = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'♾️', text:'Permanent reduction' }, { icon:'⚡', text:'Pain-free tech' }, { icon:'🩹', text:'No ingrown hair' }, { icon:'✨', text:'Smoother skin' }, { icon:'🕒', text:'Time saving' }];

  // Technology
  const techHead    = (d.techHeading    as string) || 'Advanced';
  const techAccent  = (d.techAccentWord as string) || 'Soprano Technology';
  const techBody    = (d.techBody       as string) || 'We use clinically proven, FDA-approved Soprano technology to ensure virtually painless and highly effective hair reduction for all skin types.';
  const techFeat    = (d.techFeatures as {icon:string;text:string}[]) || [{ icon:'😌', text:'Pain-free sessions' }, { icon:'⚡', text:'Fast & effective' }, { icon:'🛡️', text:'All skin types safe' }];

  // Trust
  const trustHead    = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent  = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems   = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'🔬', text:'Advanced tech' }, { icon:'🏆', text:'Proven results' }, { icon:'🛡️', text:'Safe care' }];

  // CTA
  const ctaHead  = (d.finalCtaHeading     as string) || 'Ready for Smooth Skin?';
  const ctaSub   = (d.finalCtaSubtext     as string) || 'Schedule your skin analysis and start your journey towards hair-free skin today.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn  as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2={heroAccent}
        titleOrange1="LASER"
        titleOrange2="FREEDOM"
        subtext={heroDesc}
        imageSrc={(d.image as string) || "/images/Laser Hair Reduction.png"}
      />

      {/* 2. PROBLEM */}
      <section className="section bg-surface text-center" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {probCards.map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem', color: 'var(--color-primary)', fontWeight: '800' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.7' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            {probBotText} <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>{probBotAccent}</span>
          </p>
        </div>
      </section>

      {/* 3. WHAT IS */}
      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-clinical-standard.png"} alt="Laser Hair Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>{wiBadge}</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {wiPoints.map(point => (
                <div key={point.text} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: '800', color: '#004d4f', fontSize: '1.05rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{point.icon}</span> {point.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BEFORE / AFTER */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '480px', margin: '2rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src={(d.baImage as string) || "/images/neofatbury-laser-ba.png"} alt="Laser Treatment Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '15vw' }}>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '3px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color: 'white', fontWeight: '900', letterSpacing: '3px', fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      {/* 6. BENEFITS */}
      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">{benHead} <span className="text-accent">{benAccent}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4.5rem', gap: '1.5rem' }}>
            {benItems.map(benefit => (
              <div key={benefit.text} className="card-benefit" style={{ padding: '2.5rem 1.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1.25rem' }}>{benefit.icon}</div>
                <p style={{ fontWeight: '800', fontSize: '1rem', color: 'var(--color-primary)' }}>{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY */}
      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ paddingRight: '3.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>{techHead} <span className="text-accent">{techAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>{techBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {techFeat.map(p => (
                <div key={p.text} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: '800', fontSize: '1.1rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{p.icon}</span> {p.text}
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={(d.techImage as string) || "/images/neofatbury-cooling-tech.png"} alt="Soprano ICE Technology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* 11. TRUST */}
      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {trustItems.map(item => (
              <div key={item.text} className="card-trust">
                <div style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--color-primary)' }}>{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>{ctaHead}</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>{ctaSub}</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn1}</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn2}</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .service-hero-container { position:relative; z-index:2; width:100%; animation:fadeInUp 0.8s ease-out forwards; }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .card-sleek { background:white; padding:3rem 2rem; border-radius:16px; border:1px solid #f2f2f2; box-shadow:0 6px 25px rgba(0,0,0,0.04); transition:all 0.4s cubic-bezier(0.175,0.885,0.32,1.275); }
        .card-sleek:hover { transform:translateY(-10px); box-shadow:0 15px 45px rgba(0,0,0,0.08); border-color:var(--color-accent); }
        .card-benefit { background:white; padding:2.5rem; border-radius:20px; border:1px solid #f2f2f2; transition:all 0.3s ease; }
        .card-benefit:hover { transform:translateY(-8px); box-shadow:0 15px 40px rgba(0,0,0,0.06); }
        .card-trust { background:white; padding:3.5rem 2rem; border-radius:16px; display:flex; flex-direction:column; align-items:center; text-align:center; gap:1.5rem; border:1px solid #f2f2f2; transition:all 0.3s ease; }
        .card-trust:hover { transform:translateY(-8px); border-color:var(--color-accent); }
        @media(max-width:768px){ .card-sleek{padding:1.5rem 1rem} .card-trust{padding:1.5rem 1rem;gap:1rem} }
      `}} />
    </>
  );
}
