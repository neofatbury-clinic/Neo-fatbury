// /skin/skin-brightening/page.tsx — CMS-driven, layout unchanged
export const revalidate = 0;
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";
import { urlFor } from "@/sanity/client";

export default async function SkinBrightening() {
  const d = await getServicePageData('skin-brightening') as any;

  // Image helpers
  const getUrl = (source: any) => {
    if (!source || !source.asset) return null;
    try {
      return urlFor(source).url();
    } catch (e) {
      return null;
    }
  };

  const heroImageSrc = getUrl(d.heroImage) || "/images/Skin Brightening.png";
  const whatIsImageSrc = getUrl(d.whatIsImage) || "/images/neofatbury-clinical-standard.png";
  const baImageSrc = getUrl(d.baImage) || "/images/skin-brightening-ba.png";
  const techImageSrc = getUrl(d.techImage) || "/images/neofatbury-clinical-standard.png";

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probHead   = (d.problemHeading    as string) || 'Is Your Skin Looking';
  const probAccent = (d.problemAccentText as string) || 'Dull or Uneven?';
  const probCards  = (d.problemCards as {image:string;title:string;desc:string}[]) || [
    { image:'/images/skin-concern-dull.png', title:'Dull Skin',    desc:'Loss of natural radiance and a tired appearance.' },
    { image:'/images/skin-concern-uneven.png', title:'Uneven Tone',  desc:'Patchy skin color or dark spots appearing on face.' },
    { image:'/images/skin-concern-pigmentation.png', title:'Pigmentation', desc:'Darkening of skin areas caused by excess melanin.' },
    { image:'/images/skin-concern-sun.png', title:'Sun Damage',   desc:'Skin darkened or damaged by persistent UV exposure.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Skin brightening focuses on';
  const probBotAccent = (d.problemBottomAccent as string) || "restoring your skin's natural light and glow.";
  const wiLabel   = (d.whatIsLabel       as string) || 'Scientific Rejuvenation';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Skin Brightening?';
  const wiBody    = (d.whatIsBody        as string) || 'Skin brightening treatment involves procedures that reduce pigmentation, remove dead skin cells, and promote a radiant, even-toned complexion.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Our treatments include:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'⚡', text:'Laser treatments' }, { icon:'🧴', text:'Chemical peels' }, { icon:'💧', text:'IV Glow drips' }, { icon:'💆‍♀️', text:'Advanced Facials' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY RADIANCE STANDARD';
  const baHead    = (d.baHeading    as string) || 'Real Results.';
  const baAccent  = (d.baAccentWord as string) || 'Real Glow.';
  const baSub     = (d.baSubtext    as string) || 'See visible improvements in skin tone, clarity, and radiance from our elite sessions.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Glow Transformation Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Get Radiant Skin';
  const benHead   = (d.benefitsHeading    as string) || 'Benefits of';
  const benAccent = (d.benefitsAccentWord as string) || 'Skin Brightening';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'✨', text:'Glowing skin' }, { icon:'🎯', text:'Even tone' }, { icon:'🛡️', text:'Sun protection' }, { icon:'💧', text:'Deep hydration' }, { icon:'🌟', text:'Confidence' }];
  const techHead   = (d.techHeading    as string) || 'Advanced';
  const techAccent = (d.techAccentWord as string) || 'Dermatology Tech';
  const techBody   = (d.techBody       as string) || 'We use modern, clinically proven technology to ensure safe, effective, and luminescent brightening results for all skin types.';
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'🔬', text:'Advanced tech' }, { icon:'🏆', text:'Proven results' }, { icon:'🛡️', text:'Safe care' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Ready to Get Your Glow?';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Schedule your skin analysis and start your brightening journey today.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  // FORCE UPDATE: Ensure new images are used even if Sanity returns old icon-based data
  const finalProbCards = probCards.map((card: any) => {
    let img = getUrl(card.image);
    // If no image from Sanity, use local clinical assets based on title
    if (!img) {
      if (card.title.toLowerCase().includes('dull')) img = '/images/skin-concern-dull.png';
      else if (card.title.toLowerCase().includes('uneven')) img = '/images/skin-concern-uneven.png';
      else if (card.title.toLowerCase().includes('pigment')) img = '/images/skin-concern-pigmentation.png';
      else if (card.title.toLowerCase().includes('sun')) img = '/images/skin-concern-sun.png';
      else img = '/images/neofatbury-clinical-standard.png';
    }
    return { ...card, image: img };
  });

  const displayBA = baImageSrc;

  return (
    <>
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2=""
        titleOrange1={heroAccent}
        titleOrange2=""
        subtext={heroDesc}
        imageSrc={heroImageSrc}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
        slug="skin-brightening"
      />

      <section className="section bg-surface text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '5rem', gap: '2rem' }}>
            {finalProbCards.map((item: any)=>(
              <div key={item.title} className="card-premium">
                <div className="card-premium-badge">Clinical</div>
                <div className="card-premium-img-wrap">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    style={{ objectFit: 'cover' }} 
                    sizes="(max-width: 768px) 150px, 250px"
                  />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '5rem', padding: '2rem', backgroundColor: 'rgba(0, 172, 177, 0.03)', borderRadius: '20px', border: '1px dashed rgba(0, 172, 177, 0.2)' }}>
            <p style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--color-primary)', lineHeight: '1.5', margin: 0 }}>
              {probBotText} <span className="text-accent" style={{ position: 'relative', display: 'inline-block' }}>
                {probBotAccent}
                <span style={{ position: 'absolute', bottom: '2px', left: 0, width: '100%', height: '8px', backgroundColor: 'rgba(232, 163, 23, 0.2)', zIndex: -1 }}></span>
              </span>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={whatIsImageSrc} alt="Skin Brightening Tech" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>{wiBadge}</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.2rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3.5rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.8rem',fontWeight:'800',color:'#004d4f',fontSize:'1.05rem'}}><span style={{fontSize:'1.4rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '600px', margin: '2rem auto', position: 'relative', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', border: '1px solid #eee' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
              <Image src={displayBA} alt="Skin Brightening Results" fill style={{ objectFit: 'cover' }} />
            </div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20vw' }}>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.9rem', textShadow:'0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.9rem', textShadow:'0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ paddingRight: '3.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>{techHead} <span className="text-accent">{techAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem', lineHeight: '1.8' }}>{techBody}</p>
          </div>
          <div style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={techImageSrc} alt="Skin Excellence" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4 mobile-grid-2" style={{ marginTop: '5rem', gap: '1rem' }}>
            {trustItems.map(item=>(
              <div key={item.text} className="card-trust" style={{ padding: '1.5rem 1rem' }}>
                <div style={{fontSize:'2.2rem',marginBottom:'1rem'}}>{item.icon}</div>
                <h4 style={{fontSize:'0.95rem',fontWeight:'800',color:'var(--color-primary)', lineHeight: '1.2'}}>{item.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>{ctaHead}</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>{ctaSub}</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn1}</Link>
            <a href="tel:7729955577" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn2}</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .card-sleek{background:white;padding:3rem 2rem;border-radius:16px;border:1px solid #f2f2f2;box-shadow:0 6px 25px rgba(0,0,0,0.04);transition:all 0.4s cubic-bezier(0.175,0.885,0.32,1.275)}
        .card-sleek:hover{transform:translateY(-10px);box-shadow:0 15px 45px rgba(0,0,0,0.08);border-color:var(--color-accent)}
        .card-benefit{background:white;padding:2.5rem;border-radius:20px;border:1px solid #f2f2f2;transition:all 0.3s ease}
        .card-benefit:hover{transform:translateY(-8px);box-shadow:0 15px 40px rgba(0,0,0,0.06)}
        .card-trust{background:white;padding:3.5rem 2rem;border-radius:16px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:1.5rem;border:1px solid #f2f2f2;transition:all 0.3s ease}
        .card-trust:hover{transform:translateY(-8px);border-color:var(--color-accent)}
        @media(max-width:768px){.card-sleek{padding:1.5rem 1rem}.card-trust{padding:1.5rem 1rem;gap:1rem}}
      `}} />
    </>
  );
}
