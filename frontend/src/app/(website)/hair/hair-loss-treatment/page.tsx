// /hair/hair-loss-treatment/page.tsx — CMS-driven, layout unchanged
export const revalidate = 0;
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function HairLossTreatment() {
  const d = await getServicePageData('hair-loss-treatment') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'📉', title:'Excessive Hair Fall', desc:'Significant hair loss during washing or brushing.' },
    { icon:'🔍', title:'Thinning Hair',        desc:'Visible reduction in density and widening partitions.' },
    { icon:'📏', title:'Receding Hairline',    desc:'Gradual retreat of hair from the forehead and temples.' },
    { icon:'🩹', title:'Patchy Loss',          desc:'Occurrence of bald patches or weak, lifeless hair.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Hair loss is common —';
  const probBotAccent = (d.problemBottomAccent as string) || "and it's treatable with expert care.";
  const wiLabel   = (d.whatIsLabel       as string) || 'Scientific Restoration';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Hair Loss Treatment?';
  const wiBody    = (d.whatIsBody        as string) || 'Hair loss treatment focuses on identifying the root cause and using advanced techniques to strengthen hair follicles and promote regrowth.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Treatments may include:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'💉', text:'PRP Therapy' }, { icon:'⚡', text:'Laser Therapy' }, { icon:'💊', text:'Medical treatments' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY CLINICAL STANDARD';
  const causes     = (d.causesSection as {heading:string;accentWord:string;items:{icon:string;title:string}[]}) || { heading:'Common Causes of', accentWord:'Hair Loss', items:[{ icon:'🧬', title:'Genetics' }, { icon:'⚖️', title:'Hormones' }, { icon:'🧠', title:'Stress' }, { icon:'🍎', title:'Nutrition' }, { icon:'🏃', title:'Lifestyle' }] };
  const baHead    = (d.baHeading    as string) || 'Visible Hair';
  const baAccent  = (d.baAccentWord as string) || 'Transformation';
  const baSub     = (d.baSubtext    as string) || 'See improvements in hair density, thickness, and strength.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Hair Regrowth Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Journey';
  const benHead   = (d.benefitsHeading    as string) || 'Benefits of';
  const benAccent = (d.benefitsAccentWord as string) || 'Hair Loss Treatment';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'📉', text:'Reduced hair fall' }, { icon:'⚓', text:'Stronger roots' }, { icon:'💇‍♂️', text:'Improved density' }, { icon:'🧴', text:'Healthier scalp' }, { icon:'🌟', text:'Confidence' }];
  const procSteps = (d.processSteps as {icon:string;title:string;desc:string}[]) || [{ icon:'🔬', title:'Hair Analysis', desc:'Detailed analysis to identify the cause of loss.' }, { icon:'📋', title:'Custom Plan', desc:'A tailored restoration roadmap for your profile.' }, { icon:'⚕️', title:'Sessions', desc:'Safe, medical-grade procedures to stimulate regrowth.' }, { icon:'🛡️', title:'Care', desc:'Guidance to maintain results and protect growth.' }];
  const techHead   = (d.techHeading    as string) || 'Advanced';
  const techAccent = (d.techAccentWord as string) || 'Hair Technology';
  const techBody   = (d.techBody       as string) || 'We use modern dermatology techniques and clinically proven treatments to safely restore hair growth.';
  const techFeat   = (d.techFeatures as {icon:string;text:string}[]) || [{ icon:'🛡️', text:'Safe & effective' }, { icon:'🕒', text:'Minimal downtime' }, { icon:'👥', text:'Suitable for men & women' }];
  const whoFor     = (d.whoIsItFor as {heading:string;accentWord:string;items:{icon:string;text:string}[]}) || { heading:'Who Can', accentWord:'Benefit?', items:[{ icon:'👴', text:'Men with hair loss' }, { icon:'👩', text:'Women with thinning hair' }, { icon:'⏳', text:'Early baldness' }, { icon:'📉', text:'Weak hair' }] };
  const faqItems   = (d.faqItems as {question:string;answer:string}[]) || [{ question:'Can hair loss be reversed?', answer:'Yes, early treatment and consistent procedures give best outcomes.' }, { question:'How many sessions?', answer:'This depends on the severity and root cause of your loss.' }, { question:'Is PRP safe?', answer:'Absolutely. It uses your own blood components to stimulate follicles.' }, { question:'When are results visible?', answer:'Improvement in density is typically seen in a few months.' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'🔬', text:'Advanced tech' }, { icon:'🤝', text:'Personal care' }, { icon:'🏆', text:'Proven results' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Ready to Regrow Your Hair?';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Take the first step towards thicker, healthier hair today.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={heroH1 || "Expert Hair"}
        titleTeal2=""
        titleOrange1={heroAccent || "Loss Solutions."}
        titleOrange2=""
        subtext={heroDesc || "Regrow your confidence with our advanced clinical hair restoration protocols."}
        imageSrc={(d.heroImage as string) || "/images/hair-loss-treatment-new.png"}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
        slug="hair-loss-treatment"
      />

      <section className="section bg-surface text-center">
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">Facing Hair Loss <span className="text-accent">or Thinning?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {probCards.map(item=>(<div key={item.title} className="card-sleek"><div style={{fontSize:'2rem',marginBottom:'1rem'}}>{item.icon}</div><h3 style={{fontSize:'1.05rem',marginBottom:'0.75rem',color:'var(--color-primary)',fontWeight:'700'}}>{item.title}</h3><p style={{fontSize:'0.85rem',color:'#666',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
          <p className="problem-bottom-wrap" style={{ fontSize: '1.2rem', marginTop: '3.5rem', fontWeight: '600', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            {probBotText} <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.2)' }}>{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-4 mobile-stack">
          <div className="image-container" style={{ position: 'relative', height: '450px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.08)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-hair-standard.png"} alt="Hair Loss Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>{wiBadge}</div>
          </div>
          <div className="content-block" style={{ paddingLeft: '2.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '800', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', textAlign: 'left' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '700' }}>{wiSubHead}</h4>
            <div className="grid grid-2" style={{ gap: '1rem', marginBottom: '2.5rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.6rem',fontWeight:'700',color:'#00acb1',fontSize:'0.95rem'}}><span style={{fontSize:'1.2rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center" style={{ background: '#f8fdfd' }}>
        <div className="container">
          <h2 className="section-title">{causes.heading} <span className="text-accent">{causes.accentWord}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4rem' }}>
            {causes.items.map(type=>(<div key={type.title} className="card-cause"><div className="cause-icon">{type.icon}</div><h4 style={{fontSize:'0.95rem',fontWeight:'700',color:'var(--color-primary)'}}>{type.title}</h4></div>))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}><Image src={(d.baImage as string) || "/images/before-after-laser.webp"} alt="Hair Regrowth Results" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '2rem', display: 'flex', justifyContent: 'center', gap: '20vw' }}>
              <span style={{ color:'white', fontWeight:'800', letterSpacing:'4px', fontSize:'1.1rem' }}>BEFORE</span>
              <span style={{ color:'white', fontWeight:'800', letterSpacing:'4px', fontSize:'1.1rem' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '2.5rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">{benHead} <span className="text-accent">{benAccent}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '3.5rem' }}>
            {benItems.map(benefit=>(<div key={benefit.text} className="card-benefit" style={{padding:'2rem 1rem',textAlign:'center'}}><div style={{fontSize:'2rem',marginBottom:'1rem'}}>{benefit.icon}</div><p style={{fontWeight:'700',fontSize:'0.9rem',color:'var(--color-primary)'}}>{benefit.text}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">Our <span className="text-accent">Treatment Process</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem' }}>
            {procSteps.map(item=>(<div key={item.title} className="card-process"><div style={{fontSize:'2rem',marginBottom:'1rem'}}>{item.icon}</div><h3 style={{marginBottom:'0.75rem',fontSize:'1.05rem',fontWeight:'700'}}>{item.title}</h3><p className="text-muted" style={{fontSize:'0.85rem',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-4 mobile-stack">
          <div className="content-block" style={{ paddingRight: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{techHead} <span className="text-accent">{techAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem' }}>{techBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {techFeat.map(p=>(<div key={p.text} style={{display:'flex',alignItems:'center',gap:'0.75rem',fontWeight:'700'}}><span style={{fontSize:'1.2rem'}}>{p.icon}</span> {p.text}</div>))}
            </div>
          </div>
          <div className="image-container" style={{ position: 'relative', height: '380px', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.06)' }}>
            <Image src={(d.techImage as string) || "/images/neofatbury-hair2-banner.webp"} alt="Hair Restoration" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{whoFor.heading} <span className="text-accent">{whoFor.accentWord}</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', marginTop: '3.5rem' }}>
            {whoFor.items.map(p=>(<div key={p.text} className="chip-sleek"><span style={{marginRight:'0.5rem'}}>{p.icon}</span> {p.text}</div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title text-center">Frequently Asked <span className="text-accent">Questions</span></h2>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqItems.map((faq,i)=>(<div key={i} className="card-sleek" style={{textAlign:'left',padding:'1.5rem 2rem'}}><h4 style={{fontSize:'1.05rem',fontWeight:'800',marginBottom:'0.75rem',color:'var(--color-primary)'}}>Q: {faq.question}</h4><p style={{color:'#666',fontSize:'0.95rem',lineHeight:'1.6'}}>{faq.answer}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem' }}>
            {trustItems.map(item=>(<div key={item.text} className="card-trust"><div className="trust-icon" style={{background:'none',fontSize:'2rem'}}>{item.icon}</div><h4 style={{fontSize:'0.95rem',fontWeight:'700',color:'var(--color-primary)'}}>{item.text}</h4></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
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
        .card-sleek{background:white;padding:2.5rem 1.5rem;border-radius:12px;border:1px solid #f0f0f0;box-shadow:0 4px 20px rgba(0,0,0,0.03);transition:transform 0.3s ease}
        .card-sleek:hover{transform:translateY(-5px)}
        .card-cause{background:white;padding:2.5rem 1.5rem;border-radius:16px;border:1px solid #eef2f2;box-shadow:0 8px 25px rgba(0,0,0,0.02);display:flex;flex-direction:column;align-items:center;gap:1.5rem;transition:transform 0.3s ease}
        .card-cause:hover{transform:translateY(-5px)}
        .cause-icon{width:60px;height:60px;background:#f0fdfc;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.8rem;border:1px solid #e0f2f1}
        .card-benefit{background:white;padding:2.5rem 1.5rem;border-radius:16px;border:1px solid #f2f2f2;transition:transform 0.3s ease}
        .card-benefit:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.05)}
        .card-process{background:white;padding:2.5rem 1.75rem;border-radius:14px;text-align:center;border:1px solid #f0f4f4;transition:transform 0.3s ease}
        .card-process:hover{transform:translateY(-5px)}
        .card-trust{background:white;padding:2.5rem 1.5rem;border-radius:12px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:1.25rem;border:1px solid #f0f0f0;transition:transform 0.3s ease}
        .card-trust:hover{transform:translateY(-5px)}
        .chip-sleek{background:white;padding:1rem 2rem;border-radius:50px;border:1px solid #f0f0f0;font-weight:700;color:var(--color-primary);transition:all 0.3s ease}
        .chip-sleek:hover{border-color:var(--color-accent);transform:scale(1.05)}
      `}} />
    </>
  );
}
