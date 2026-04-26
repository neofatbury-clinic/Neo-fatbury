// /slimming/inch-loss/page.tsx — CMS-driven, layout unchanged
export const revalidate = 0;
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function InchLoss() {
  const d = await getServicePageData('inch-loss') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probHead   = (d.problemHeading    as string) || 'Stubborn Fat &';
  const probAccent = (d.problemAccentText as string) || 'Loose Skin?';
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'🫃', title:'Loose Belly Skin',    desc:'Sagging or loose skin around the abdomen that diet cannot fix.' },
    { icon:'🦵', title:'Flabby Thighs',        desc:'Excess fat and skin on thighs affecting body shape.' },
    { icon:'💪', title:'Arm Flab',              desc:'Loose skin and fat on upper arms that resists exercise.' },
    { icon:'⌛', title:'Love Handle Stubborn',  desc:'Flanks and waist fat that stays no matter how much you exercise.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Non-surgical contouring can';
  const probBotAccent = (d.problemBottomAccent as string) || 'reshape and tighten targeted areas.';
  const wiLabel   = (d.whatIsLabel       as string) || 'Advanced Contouring';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Body Contouring?';
  const wiBody    = (d.whatIsBody        as string) || 'Body contouring treatments use HIFU, radiofrequency, and vacuum therapy to disrupt fat cells, stimulate collagen, and tighten skin — delivering visible inch loss without surgery or downtime.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Our technologies include:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'🔬', text:'HIFU' }, { icon:'📡', text:'Radiofrequency' }, { icon:'💆', text:'Vacuum + RF' }, { icon:'⚡', text:'EMS' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY BODY STANDARD';
  const targetAreas = (d.targetAreas as {heading:string;accentWord:string;items:{icon:string;text:string}[]}) || { heading:'Target', accentWord:'Areas', items:[{ icon:'🫃', text:'Abdomen' }, { icon:'⌛', text:'Waist & Flanks' }, { icon:'🦵', text:'Thighs' }, { icon:'💪', text:'Arms' }, { icon:'👤', text:'Double chin' }] };
  const baHead    = (d.baHeading    as string) || 'Visible Inch Loss';
  const baAccent  = (d.baAccentWord as string) || 'Results';
  const baSub     = (d.baSubtext    as string) || 'See measurable reduction in circumference and visibly tighter skin.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Body Contouring Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Journey';
  const benHead   = (d.benefitsHeading    as string) || 'Why Choose';
  const benAccent = (d.benefitsAccentWord as string) || 'Body Contouring?';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'🛡️', text:'No surgery' }, { icon:'🕐', text:'Zero downtime' }, { icon:'📏', text:'Measurable inch loss' }, { icon:'✨', text:'Tighter skin' }, { icon:'🌟', text:'Confidence' }];
  const faqHead    = (d.faqHeading as string) || 'Frequently Asked Questions';
  const faqItems   = (d.faqItems as {question:string;answer:string}[]) || [{ question:'How many inches can I lose?', answer:'Most clients lose 2–5 cm in circumference per area.' }, { question:'Is this the same as weight loss?', answer:'Body contouring targets specific fat deposits.' }, { question:'Is there any downtime?', answer:'No downtime at all.' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'🔬', text:'Advanced HIFU tech' }, { icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'📏', text:'Visible inch loss' }, { icon:'🏆', text:'Proven results' }];
  const ctaHead  = (d.finalCtaHeading      as string) || "Get the Body Shape You've Always Wanted";
  const ctaSub   = (d.finalCtaSubtext      as string) || 'FREE body contouring consultation — our specialists will measure and map your plan.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2=""
        titleOrange1={heroAccent}
        titleOrange2=""
        subtext={heroDesc}
        imageSrc={(d.image as string) || "/images/neofatbury-slimming-hero.png"}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
      />

      <section className="section bg-surface text-center" style={{ padding: '4.5rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title">{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.5rem' }}>
            {probCards.map(item=>(<div key={item.title} className="card-sleek"><div style={{fontSize:'2.4rem',marginBottom:'1.25rem'}}>{item.icon}</div><h3 style={{fontSize:'1.1rem',marginBottom:'0.75rem',color:'var(--color-primary)',fontWeight:'800'}}>{item.title}</h3><p style={{fontSize:'0.9rem',color:'#666',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
          <p style={{ fontSize: '1.25rem', marginTop: '3.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>
            {probBotText} <span className="text-accent">{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-standard.png"} alt="Body Contouring System" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '10px', fontSize: '0.85rem', fontWeight: '800', color: 'var(--color-primary)' }}>{wiBadge}</div>
          </div>
          <div className="split-text-block">
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.75rem',fontWeight:'800',color:'#004d4f',fontSize:'1rem'}}><span style={{fontSize:'1.3rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">{targetAreas.heading} <span className="text-accent">{targetAreas.accentWord}</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '4.5rem' }}>
            {targetAreas.items.map(p=>(<div key={p.text} className="chip-sleek" style={{padding:'1.25rem 2.5rem',fontSize:'1.05rem'}}><span style={{marginRight:'0.75rem'}}>{p.icon}</span> {p.text}</div>))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title">{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '480px', margin: '3.5rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}><Image src={(d.baImage as string) || "/images/neofatbury-body-ba.png"} alt="Inch Loss Results" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', padding: '1.5rem', display: 'flex', justifyContent: 'center', gap: '20vw' }}>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.9rem' }}>BEFORE</span>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'3px', fontSize:'0.9rem' }}>AFTER</span>
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

      <section className="section">
        <div className="container" style={{ maxWidth: '850px' }}>
          <h2 className="section-title text-center">{faqHead}</h2>
          <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {faqItems.map((faq,i)=>(<div key={i} className="card-sleek" style={{textAlign:'left',padding:'1.5rem'}}><h4 style={{fontSize:'1.1rem',fontWeight:'800',marginBottom:'0.5rem',color:'var(--color-primary)'}}>{faq.question}</h4><p style={{color:'#666',fontSize:'0.95rem',lineHeight:'1.6'}}>{faq.answer}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">{trustHead} <span className="text-accent">{trustAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {trustItems.map(item=>(<div key={item.text} className="card-trust"><div style={{fontSize:'2.8rem',marginBottom:'1rem'}}>{item.icon}</div><h4 style={{fontSize:'1.05rem',fontWeight:'800',color:'var(--color-primary)'}}>{item.text}</h4></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-white text-center" style={{ padding: '5rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 3.2rem)', color: 'white', marginBottom: '1.5rem', fontWeight: '900' }}>{ctaHead}</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', marginBottom: '3rem', fontWeight: '500' }}>{ctaSub}</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>{ctaBtn1}</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.25rem 3.5rem', fontSize: '1.1rem', fontWeight: '900' }}>{ctaBtn2}</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .card-sleek{background:white;padding:2.5rem 1.5rem;border-radius:12px;border:1px solid #f0f0f0;box-shadow:0 6px 20px rgba(0,0,0,0.03);transition:transform 0.3s ease}
        .card-sleek:hover{transform:translateY(-5px)}
        .card-benefit{background:white;border-radius:16px;border:1px solid #f2f2f2;transition:transform 0.3s ease}
        .card-benefit:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.05)}
        .card-trust{background:white;padding:3rem 1.5rem;border-radius:12px;display:flex;flex-direction:column;align-items:center;text-align:center;border:1px solid #f0f0f0;transition:transform 0.3s ease}
        .card-trust:hover{transform:translateY(-5px)}
        .chip-sleek{background:white;padding:1.25rem 2.5rem;border-radius:60px;border:1px solid #f0f0f0;font-weight:800;color:var(--color-primary);transition:all 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.03)}
        .chip-sleek:hover{border-color:var(--color-accent);transform:scale(1.05)}
      `}} />
    </>
  );
}
