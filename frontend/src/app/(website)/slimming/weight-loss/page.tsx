// /slimming/weight-loss/page.tsx — CMS-driven, layout unchanged
export const revalidate = 0;
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function WeightLoss() {
  const d = await getServicePageData('weight-loss') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probHead   = (d.problemHeading    as string) || 'Why Diets';
  const probAccent = (d.problemAccentText as string) || 'Keep Failing You?';
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'📉', title:'Weight Rebounds',    desc:'Crash diets lead to rapid weight regain once you stop.' },
    { icon:'🧠', title:'No Root Cause Fix',   desc:'Generic programs ignore metabolic issues, hormones, and gut health.' },
    { icon:'😔', title:'Loss of Motivation',  desc:'Slow or stalled results cause frustration and give-up.' },
    { icon:'🍽️', title:'Nutrient Deficiency', desc:'Extreme restriction leads to muscle loss and health problems.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Medical weight loss addresses';
  const probBotAccent = (d.problemBottomAccent as string) || 'root causes — not just calories.';
  const wiLabel   = (d.whatIsLabel       as string) || 'Clinical Approach';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Medical Weight Loss?';
  const wiBody    = (d.whatIsBody        as string) || 'Our MD-certified programs begin with comprehensive metabolic testing to find why your body stores fat. We then design a personalised protocol combining medical nutrition therapy, prescription support, and body contouring.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Our approach includes:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'🔬', text:'Metabolic testing' }, { icon:'🥗', text:'Medical nutrition therapy' }, { icon:'💊', text:'Prescription support' }, { icon:'📊', text:'InBody scans' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY WELLNESS STANDARD';
  const baHead    = (d.baHeading    as string) || 'Real Weight Loss';
  const baAccent  = (d.baAccentWord as string) || 'Transformations';
  const baSub     = (d.baSubtext    as string) || 'Clients losing 6–12 kg in 3 months sustainably with our MD-certified program.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Weight Loss Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Journey';
  const benHead   = (d.benefitsHeading    as string) || 'Benefits of';
  const benAccent = (d.benefitsAccentWord as string) || 'Medical Weight Loss';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'📉', text:'Fat loss' }, { icon:'💪', text:'Muscle preserved' }, { icon:'🧠', text:'Root cause fixed' }, { icon:'🔋', text:'More energy' }, { icon:'🌟', text:'Confidence' }];
  const faqHead    = (d.faqHeading as string) || 'Frequently Asked Questions';
  const faqItems   = (d.faqItems as {question:string;answer:string}[]) || [{ question:'How much weight can I lose?', answer:'Most clients lose 6–12 kg in the first 3 months.' }, { question:'Is this a crash diet?', answer:'No. We design medically balanced plans — no starvation.' }, { question:'Do I need medications?', answer:'Only when medically appropriate.' }, { question:'Is it safe with diabetes or PCOS?', answer:'Yes. We have specialist protocols for metabolic conditions.' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'🏥', text:'MD-certified program' }, { icon:'🔬', text:'Metabolic testing' }, { icon:'🍎', text:'Clinical nutrition' }, { icon:'🏆', text:'Proven results' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Start Your Medical Weight Loss Journey';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Book a FREE consultation with our weight management doctors.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={heroH1 || "Scientific"}
        titleOrange1={heroAccent || "Weight Loss."}
        subtext={heroDesc || "Achieve sustainable weight management with our MD-certified metabolic protocols."}
        imageSrc={d.heroImage || "/images/neofatbury-slimming-hero.png"}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
      />

      <section className="section bg-surface text-center" style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ fontSize: '2.6rem' }}>{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {probCards.map(item=>(<div key={item.title} className="card-sleek"><div style={{fontSize:'2.2rem',marginBottom:'1.25rem'}}>{item.icon}</div><h3 style={{fontSize:'1.1rem',marginBottom:'0.75rem',color:'var(--color-primary)',fontWeight:'800'}}>{item.title}</h3><p style={{fontSize:'0.9rem',color:'#666',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '3.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>
            {probBotText} <span className="text-accent">{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '480px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-standard.png"} alt="Medical Weight Loss" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-primary)' }}>{wiBadge}</div>
          </div>
          <div style={{ paddingLeft: '2.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.6rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.75rem',fontWeight:'800',color:'#004d4f',fontSize:'1rem'}}><span style={{fontSize:'1.3rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.6rem' }}>{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '450px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1/1' }}><Image src={(d.baImage as string) || "/images/neofatbury-body-ba.png"} alt="Weight Loss Results" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '1rem', display: 'flex', justifyContent: 'center', gap: '15vw' }}>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.85rem' }}>BEFORE</span>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.85rem' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '2.5rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">{benHead} <span className="text-accent">{benAccent}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {benItems.map(benefit=>(<div key={benefit.text} className="card-benefit" style={{padding:'2.5rem 1rem',textAlign:'center'}}><div style={{fontSize:'2.4rem',marginBottom:'1.25rem'}}>{benefit.icon}</div><p style={{fontWeight:'800',fontSize:'0.9rem',color:'var(--color-primary)'}}>{benefit.text}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface pt-0">
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="section-title text-center">{faqHead}</h2>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqItems.map((faq,i)=>(<div key={i} className="card-sleek" style={{textAlign:'left',padding:'1.5rem'}}><h4 style={{fontSize:'1.1rem',fontWeight:'800',marginBottom:'0.5rem',color:'var(--color-primary)'}}>{faq.question}</h4><p style={{color:'#666',fontSize:'0.95rem',lineHeight:'1.6'}}>{faq.answer}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {trustItems.map(item=>(<div key={item.text} className="card-trust"><div style={{fontSize:'2.6rem',marginBottom:'1rem'}}>{item.icon}</div><h4 style={{fontSize:'1.05rem',fontWeight:'800',color:'var(--color-primary)'}}>{item.text}</h4></div>))}
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
        .card-sleek{background:white;padding:2.5rem 1.5rem;border-radius:12px;border:1px solid #f0f0f0;box-shadow:0 6px 20px rgba(0,0,0,0.03);transition:transform 0.3s ease}
        .card-sleek:hover{transform:translateY(-5px)}
        .card-benefit{background:white;border-radius:16px;border:1px solid #f2f2f2;transition:transform 0.3s ease}
        .card-benefit:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.05)}
        .card-trust{background:white;padding:2.5rem 1.5rem;border-radius:12px;display:flex;flex-direction:column;align-items:center;text-align:center;border:1px solid #f0f0f0;transition:transform 0.3s ease}
        .card-trust:hover{transform:translateY(-5px)}
      `}} />
    </>
  );
}
