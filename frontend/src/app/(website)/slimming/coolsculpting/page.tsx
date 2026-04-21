// /slimming/coolsculpting/page.tsx — CMS-driven, layout unchanged
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function CoolSculpting() {
  const d = await getServicePageData('coolsculpting') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || 'Freeze Fat.';
  const heroAccent = (d.heroAccentLine as string) || 'Shape Your Body.';
  const heroDesc   = (d.heroSubtext    as string) || 'Non-surgical fat reduction with advanced body contouring technology. Achieve your desired shape with zero surgery and zero downtime.';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [{ icon:'❄️', label:'ZERO DOWNTIME' }, { icon:'🛡️', label:'FDA APPROVED' }];
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'🧥', title:'Belly Fat',    desc:'Target persistent fat around the abdomen area for a flatter profile.' },
    { icon:'⌛', title:'Love Handles', desc:'Eliminate stubborn fat on the flanks and waist permanently.' },
    { icon:'🦵', title:'Thigh Fat',    desc:'Reduce fat on inner and outer thighs for improved body contour.' },
    { icon:'👤', title:'Double Chin',  desc:'Non-surgical reduction of submental fat for a slim neck profile.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Even with diet & exercise, some fat stays —';
  const probBotAccent = (d.problemBottomAccent as string) || 'we help remove it safely and permanently.';
  const wiLabel   = (d.whatIsLabel       as string) || 'Precision Contouring';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'CoolSculpting?';
  const wiBody    = (d.whatIsBody        as string) || 'CoolSculpting is a non-invasive fat reduction treatment that uses controlled cooling to freeze and eliminate stubborn fat cells. The body naturally removes these fat cells over time, resulting in a slimmer, better-contoured physique.';
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY CLINICAL STANDARD';
  const authNote  = (d.whatIsAuthorityNote as {label:string;text:string}) || { label:'⚠️ CLINICAL AUTHORITY NOTE', text:'"This is not a weight-loss treatment, but a specialized body contouring procedure designed for safe and permanent fat reduction."' };
  const targetAreas = (d.targetAreas as {heading:string;accentWord:string;items:{icon:string;text:string}[]}) || { heading:'Target', accentWord:'Areas', items:[{ icon:'🥋', text:'Abdomen' }, { icon:'⌛', text:'Love handles' }, { icon:'🦵', text:'Thighs' }, { icon:'💪', text:'Arms' }, { icon:'👤', text:'Double chin' }] };
  const baHead    = (d.baHeading    as string) || 'See the';
  const baAccent  = (d.baAccentWord as string) || 'Difference';
  const baSub     = (d.baSubtext    as string) || 'Visible reduction in fat and improved body contour across target areas.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Body Transformation Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Start Your Transformation';
  const benHead   = (d.benefitsHeading    as string) || 'Why Choose';
  const benAccent = (d.benefitsAccentWord as string) || 'CoolSculpting?';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'🛡️', text:'Non-surgical' }, { icon:'🕐', text:'No downtime' }, { icon:'♾️', text:'Permanent' }, { icon:'✅', text:'Safe & effective' }, { icon:'🌿', text:'Natural results' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'🧬', text:'Advanced tech' }, { icon:'👨‍⚕️', text:'Expert doctors' }, { icon:'🛡️', text:'Safe procedures' }, { icon:'🏆', text:'Proven results' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Ready to Sculpt Your Body?';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Achieve your desired shape without surgery or downtime today.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2={heroAccent}
        titleOrange1="ZERO"
        titleOrange2="SURGERY"
        subtext={heroDesc}
        imageSrc={(d.image as string) || "/images/neofatbury-slimming-hero.png"}
      />

      <section className="section bg-surface text-center" style={{ padding: '6rem 0' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>Stubborn Fat <span className="text-accent">That Won&apos;t Go Away?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.5rem' }}>
            {probCards.map(item=>(<div key={item.title} className="card-sleek"><div style={{fontSize:'2.5rem',marginBottom:'1.5rem'}}>{item.icon}</div><h3 style={{fontSize:'1.15rem',marginBottom:'1rem',color:'var(--color-primary)',fontWeight:'800'}}>{item.title}</h3><p style={{fontSize:'0.9rem',color:'#666',lineHeight:'1.7'}}>{item.desc}</p></div>))}
          </div>
          <p style={{ fontSize: '1.3rem', marginTop: '4.5rem', fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
            {probBotText} <span className="text-accent" style={{ borderBottom: '2px solid rgba(39, 166, 156, 0.3)' }}>{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ position: 'relative', height: '550px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 25px 55px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-standard.png"} alt="CoolSculpting Technology" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', background: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', fontSize: '0.9rem', fontWeight: '800', color: 'var(--color-primary)', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>{wiBadge}</div>
          </div>
          <div style={{ paddingLeft: '3.5rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2.5px', fontSize: '1rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '2.8rem' }}>What is <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <div style={{ background: '#f8fdfd', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(39, 166, 156, 0.15)', marginBottom: '3.5rem' }}>
              <h4 style={{ color: 'var(--color-primary)', fontWeight: '900', marginBottom: '0.75rem', fontSize: '1rem' }}>{authNote.label}</h4>
              <p style={{ fontSize: '1rem', color: '#444', fontWeight: '700', lineHeight: '1.6' }}>{authNote.text}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">{targetAreas.heading} <span className="text-accent">{targetAreas.accentWord}</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginTop: '4.5rem' }}>
            {targetAreas.items.map(p=>(<div key={p.text} className="chip-sleek" style={{padding:'1.5rem 3rem',fontSize:'1.1rem'}}><span style={{marginRight:'0.75rem'}}>{p.icon}</span> {p.text}</div>))}
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.8rem' }}>{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '480px', margin: '4.5rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}><Image src={(d.baImage as string) || "/images/neofatbury-body-ba.png"} alt="CoolSculpting Results" fill style={{ objectFit: 'cover' }} /></div>
            <div style={{ position: 'absolute', bottom: '0', left: '0', width: '100%', background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)', padding: '3rem', display: 'flex', justifyContent: 'center', gap: '25vw' }}>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'5px', fontSize:'1.3rem', textShadow:'0 2px 4px rgba(0,0,0,0.5)' }}>BEFORE</span>
              <span style={{ color:'white', fontWeight:'900', letterSpacing:'5px', fontSize:'1.3rem', textShadow:'0 2px 4px rgba(0,0,0,0.5)' }}>AFTER</span>
            </div>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '3rem', color: 'var(--color-primary)' }}>{baCtaTxt}</p>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '1.25rem 4rem', fontSize: '1.1rem' }}>{baCtaBtn}</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container">
          <h2 className="section-title text-center">{benHead} <span className="text-accent">{benAccent}</span></h2>
          <div className="grid grid-5" style={{ marginTop: '4.5rem', gap: '1.5rem' }}>
            {benItems.map(benefit=>(<div key={benefit.text} className="card-benefit" style={{padding:'3rem 1.5rem',textAlign:'center'}}><div style={{fontSize:'2.5rem',marginBottom:'1.5rem'}}>{benefit.icon}</div><p style={{fontWeight:'800',fontSize:'1rem',color:'var(--color-primary)'}}>{benefit.text}</p></div>))}
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

      <section className="section bg-primary text-white text-center" style={{ padding: '10rem 0' }} id="book">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)', color: 'white', marginBottom: '2rem', fontWeight: '900' }}>{ctaHead}</h2>
          <p style={{ fontSize: '1.5rem', color: 'rgba(255,255,255,0.95)', marginBottom: '4.5rem', fontWeight: '500' }}>{ctaSub}</p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact-us" className="btn btn-accent" style={{ padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn1}</Link>
            <a href="tel:9700641000" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', padding: '1.5rem 4.5rem', fontSize: '1.2rem', fontWeight: '900' }}>{ctaBtn2}</a>
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
        .chip-sleek{background:white;padding:1.25rem 2.5rem;border-radius:60px;border:1px solid #f0f0f0;font-weight:800;color:var(--color-primary);transition:all 0.3s ease;box-shadow:0 4px 12px rgba(0,0,0,0.03)}
        .chip-sleek:hover{border-color:var(--color-accent);transform:scale(1.05)}
      `}} />
    </>
  );
}
