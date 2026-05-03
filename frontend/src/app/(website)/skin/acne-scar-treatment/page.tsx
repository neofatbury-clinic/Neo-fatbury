import ReplicaHero from "@/components/ReplicaHero";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ComparisonSlider from "@/components/ComparisonSlider";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function AcneScarTreatment() {
  const d = await getServicePageData('acne-scar-treatment') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probHead   = (d.problemHeading    as string) || 'Are Acne Scars Affecting';
  const probAccent = (d.problemAccentText as string) || 'Your Confidence?';
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'🌋', title:'Pitted Scars',     desc:'Deep indentations (Ice-pick, Boxcar, Rolling) that affect skin texture.' },
    { icon:'🌊', title:'Uneven Texture',   desc:'Rough skin surface that makes makeup application difficult.' },
    { icon:'🌑', title:'Hyperpigmentation',desc:'Stubborn dark or red marks left behind after acne.' },
    { icon:'⛰️', title:'Raised Scars',    desc:'Keloids or hypertrophic scars that cause visible bumps.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Scars are not permanent —';
  const probBotAccent = (d.problemBottomAccent as string) || "we help restore your skin's natural smoothness.";
  const wiLabel   = (d.whatIsLabel       as string) || 'Scientific Restoration';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Acne Scar Treatment?';
  const wiBody    = (d.whatIsBody        as string) || 'Acne scar treatment involves specialized clinical procedures aimed at reducing the visibility of scars, remodeling collagen, and restoring a smooth, healthy skin texture.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Precision techniques include:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'⚡', text:'Laser Resurfacing' }, { icon:'🧴', text:'Chemical Peels' }, { icon:'💉', text:'Microneedling / MNRF' }, { icon:'💧', text:'Dermal Fillers' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY SURGICAL STANDARD';
  const baHead    = (d.baHeading    as string) || 'Real Results.';
  const baAccent  = (d.baAccentWord as string) || 'Visible Improvement.';
  const baSub     = (d.baSubtext    as string) || 'See natural-looking skin refining results from our elite clients.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Skin Refining Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Journey';
  const benHead   = (d.benefitsHeading    as string) || 'Benefits of';
  const benAccent = (d.benefitsAccentWord as string) || 'Scar Treatment';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'🧼', text:'Even texture' }, { icon:'🎯', text:'Reduced marks' }, { icon:'✨', text:'Natural radiance' }, { icon:'🛡️', text:'Healthy skin' }, { icon:'🌟', text:'Confidence' }];
  const techHead   = (d.techHeading    as string) || 'Advanced';
  const techAccent = (d.techAccentWord as string) || 'Scar Technology';
  const techBody   = (d.techBody       as string) || 'We use the latest FDA-approved technology and precision equipment to ensure safe and effective scar restoration for all skin types.';
  const techFeat   = (d.techFeatures as {icon:string;text:string}[]) || [{ icon:'💎', text:'Precision lasers' }, { icon:'🧼', text:'Sterile environment' }, { icon:'👨‍⚕️', text:'Expert doctors' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'🔬', text:'Advanced tech' }, { icon:'🏆', text:'Proven results' }, { icon:'🛡️', text:'Safe care' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Ready for Smooth Skin?';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Schedule your skin analysis and start your scar restoration journey today.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      <ReplicaHero 
        titleTeal1={heroH1 || "Smooth Skin."}
        titleOrange1={heroAccent || "Zero Acne Scars."}
        subtext={heroDesc || "Advanced clinical scar restoration using surgical-grade technology."}
        imageSrc={d.heroImage || "/images/acne-scar-treatment.png"}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
      />

      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title">{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3rem' }}>
            {probCards.map((item, i) => (
              <div key={i} className="aesthetic-card" style={{ 
                backgroundColor: 'white', 
                padding: '2rem 1.5rem', 
                borderRadius: '24px', 
                textAlign: 'center', 
                boxShadow: '0 10px 30px rgba(0,172,177,0.04)',
                border: '1px solid rgba(0,172,177,0.06)',
                transition: 'all 0.4s ease',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}>
                <div className="icon-wrapper" style={{ 
                  width: '60px', 
                  height: '60px', 
                  margin: '0 auto 1.5rem', 
                  backgroundColor: '#f0f9fa', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '1.8rem',
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '800', color: '#1a1a1a', marginBottom: '0.75rem' }}>{item.title}</h3>
                <p style={{ color: '#666', lineHeight: 1.6, fontSize: '0.9rem', fontWeight: '500' }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="problem-bottom-wrap" style={{ fontSize: '1.4rem', marginTop: '3.5rem', fontWeight: '800', color: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            {probBotText} <span className="text-accent" style={{ borderBottom: '3px solid rgba(0, 172, 177, 0.2)' }}>{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6 mobile-stack">
          <div className="image-container" style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/acne-scar-treatment.png" alt="Acne Scar Procedure" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>{wiBadge}</div>
          </div>
          <div className="content-block" style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem', textAlign: 'left' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div className="grid grid-2" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.8rem',fontWeight:'800',color:'#004d4f',fontSize:'1.05rem'}}><span style={{fontSize:'1.4rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '720px', margin: '3rem auto' }}>
            <ComparisonSlider 
              before="/images/acne-before-after.webp" 
              after="/images/acne-before-after.webp" 
              label="Severe Acne Scar Restoration"
              autoSlide={true}
            />
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">{benHead} <span className="text-accent">{benAccent}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4.5rem' }}>
            {benItems.map(benefit=>(<div key={benefit.text} className="card-benefit" style={{padding:'2.5rem 1.5rem',textAlign:'center'}}><div style={{fontSize:'2.5rem',marginBottom:'1.25rem'}}>{benefit.icon}</div><p style={{fontWeight:'800',fontSize:'1rem',color:'var(--color-primary)'}}>{benefit.text}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6 mobile-stack">
          <div className="content-block" style={{ paddingRight: '3.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>{techHead} <span className="text-accent">{techAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>{techBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {techFeat.map(p=>(<div key={p.text} style={{display:'flex',alignItems:'center',gap:'1rem',fontWeight:'800',fontSize:'1.1rem'}}><span style={{fontSize:'1.4rem'}}>{p.icon}</span> {p.text}</div>))}
            </div>
          </div>
          <div className="image-container" style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src="/images/neofatbury-cheek-banner.webp" alt="Clinical Precision" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '5rem', gap: '1.5rem' }}>
            {trustItems.map(item=>(<div key={item.text} className="card-trust"><div style={{fontSize:'2.8rem',marginBottom:'1.5rem'}}>{item.icon}</div><h4 style={{fontSize:'1.1rem',fontWeight:'800',color:'var(--color-primary)'}}>{item.text}</h4></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center" style={{ padding: '4rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>{ctaHead}</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>{ctaSub}</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>{ctaBtn1}</Link>
            <a href="tel:7729955577" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>{ctaBtn2}</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .aesthetic-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 60px rgba(0,172,177,0.12);
          border-color: rgba(0,172,177,0.2);
        }
        .aesthetic-card:hover .icon-wrapper {
          background-color: #00acb1;
          transform: rotate(10deg);
          transition: all 0.3s ease;
        }
        .card-benefit{background:white;padding:2.5rem;border-radius:32px;border:1px solid #f2f2f2;transition:all 0.3s ease;box-shadow:0 10px 30px rgba(0,172,177,0.04)}
        .card-benefit:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(0,172,177,0.08)}
        .card-trust{background:white;padding:3.5rem 2rem;border-radius:32px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:1.5rem;border:1px solid #f2f2f2;transition:all 0.3s ease;box-shadow:0 10px 30px rgba(0,172,177,0.04)}
        .card-trust:hover{transform:translateY(-8px);border-color:var(--color-accent)}
      `}} />
    </>
  );
}
