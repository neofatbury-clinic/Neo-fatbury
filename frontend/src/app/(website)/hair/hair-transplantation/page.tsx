// /hair/hair-transplantation/page.tsx — CMS-driven, layout unchanged
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { getServicePageData } from "@/sanity/fetchers/services";

export default async function HairTransplantation() {
  const d = await getServicePageData('hair-transplantation') as Record<string, unknown>;

  const heroH1     = (d.heroHeadline   as string) || '';
  const heroAccent = (d.heroAccentLine as string) || '';
  const heroDesc   = (d.heroSubtext    as string) || '';
  const heroBadges = (d.heroTrustBadges as {icon:string;label:string}[]) || [];
  const probHead   = (d.problemHeading    as string) || 'Struggling with';
  const probAccent = (d.problemAccentText as string) || 'Baldness or Hair Loss?';
  const probCards  = (d.problemCards as {icon:string;title:string;desc:string}[]) || [
    { icon:'📉', title:'Progressive Baldness', desc:'Gradually worsening hair loss that leads to visible bald patches.' },
    { icon:'😔', title:'Loss of Confidence',    desc:'Hair loss significantly impacts self-esteem and social confidence.' },
    { icon:'🎭', title:'Covering Up',            desc:'Relying on hats, wigs, or concealers every day to hide hair loss.' },
    { icon:'💊', title:'Treatments Not Working', desc:'Medical treatments helping but not enough for advanced baldness.' },
  ];
  const probBotText   = (d.problemBottomText   as string) || 'Hair transplantation offers a';
  const probBotAccent = (d.problemBottomAccent as string) || 'permanent, natural-looking solution.';
  const wiLabel   = (d.whatIsLabel       as string) || 'Permanent Solution';
  const wiHead    = (d.whatIsHeading     as string) || 'What is';
  const wiAccent  = (d.whatIsAccentWord  as string) || 'Hair Transplantation?';
  const wiBody    = (d.whatIsBody        as string) || 'FUE hair transplantation involves extracting individual hair follicles from the donor area and precisely implanting them into balding areas — creating natural, permanent hair growth that lasts a lifetime.';
  const wiSubHead = (d.whatIsListHeading as string) || 'Our techniques include:';
  const wiPoints  = (d.whatIsPoints as {icon:string;text:string}[]) || [{ icon:'🔬', text:'FUE (Follicular Unit Extraction)' }, { icon:'💉', text:'DHI (Direct Hair Implantation)' }, { icon:'🎨', text:'Artistic hairline design' }, { icon:'🛡️', text:'98% graft survival rate' }];
  const wiBadge   = (d.whatIsImageBadge as string) || 'NEOFATBURY TRANSPLANT STANDARD';
  const baHead    = (d.baHeading    as string) || 'Real Transplant';
  const baAccent  = (d.baAccentWord as string) || 'Transformations';
  const baSub     = (d.baSubtext    as string) || 'See undetectable, natural-looking hair transplant results from our surgeons.';
  const baCtaTxt  = (d.baCtaText    as string) || 'Start Your Hair Restoration Journey Today';
  const baCtaBtn  = (d.baCtaBtnText as string) || 'Book Consultation';
  const benHead   = (d.benefitsHeading    as string) || 'Why Choose';
  const benAccent = (d.benefitsAccentWord as string) || 'Hair Transplantation?';
  const benItems  = (d.benefitItems as {icon:string;text:string}[]) || [{ icon:'♾️', text:'Permanent results' }, { icon:'🌿', text:'Natural looking' }, { icon:'🎨', text:'Custom hairline' }, { icon:'💇‍♂️', text:'Full density' }, { icon:'🌟', text:'Confidence restored' }];
  const procHead  = (d.processHeading     as string) || 'Our';
  const procAccent= (d.processAccentWord  as string) || 'Transplant Process';
  const procSteps = (d.processSteps as {icon:string;title:string;desc:string}[]) || [{ icon:'🔬', title:'Consultation', desc:'Scalp analysis and graft count assessment.' }, { icon:'🎨', title:'Design', desc:'Artistic hairline design tailored to your face shape.' }, { icon:'⚕️', title:'Procedure', desc:'6-8 hour procedure under local anaesthesia.' }, { icon:'🛡️', title:'Recovery & Growth', desc:'12-month follow-up until full results are visible.' }];
  const techHead   = (d.techHeading    as string) || 'Advanced';
  const techAccent = (d.techAccentWord as string) || 'FUE Technology';
  const techBody   = (d.techBody       as string) || 'Our state-of-the-art FUE and DHI equipment, combined with our surgeon-led protocol, delivers the highest graft survival rates in the industry.';
  const techFeat   = (d.techFeatures as {icon:string;text:string}[]) || [{ icon:'💎', text:'Surgeon performed — not technicians' }, { icon:'⚕️', text:'98% graft survival rate' }, { icon:'🔬', text:'Dual FUE & DHI techniques' }];
  const faqHead    = (d.faqHeading as string) || 'Frequently Asked Questions';
  const faqItems   = (d.faqItems as {question:string;answer:string}[]) || [{ question:'How many grafts do I need?', answer:'Depends on Norwood scale. Typically 1,500–5,000 grafts depending on baldness extent.' }, { question:'Is the procedure painful?', answer:'Performed under local anaesthesia — you will be comfortable throughout.' }, { question:'When will I see the final results?', answer:'Full results visible at 12–14 months after the procedure.' }, { question:'Is the transplant permanent?', answer:'Yes. Donor hair is genetically resistant to baldness and grows for life.' }, { question:'Can I shave my head after transplant?', answer:'Yes, once fully grown (after 12 months), you can cut, style, or shave normally.' }];
  const trustHead   = (d.trustHeading    as string) || 'Why Choose';
  const trustAccent = (d.trustAccentWord as string) || 'Neo Clinic?';
  const trustItems  = (d.trustItems as {icon:string;text:string}[]) || [{ icon:'👨‍⚕️', text:'Expert surgeons' }, { icon:'🔬', text:'Advanced tech' }, { icon:'🏆', text:'98% survival rate' }, { icon:'🛡️', text:'Safe procedures' }];
  const ctaHead  = (d.finalCtaHeading      as string) || 'Begin Your Hair Restoration Journey';
  const ctaSub   = (d.finalCtaSubtext      as string) || 'Book a FREE consultation to assess your donor area and get your personalised plan.';
  const ctaBtn1  = (d.finalCtaPrimaryBtn   as string) || 'Book Appointment';
  const ctaBtn2  = (d.finalCtaSecondaryBtn as string) || 'Get Free Consultation';

  return (
    <>
      {/* 1. HERO SECTION */}
      <ReplicaHero 
        titleTeal1={heroH1}
        titleTeal2={heroAccent}
        titleOrange1=""
        titleOrange2=""
        subtext={heroDesc}
        imageSrc={(typeof d.heroImage === 'string' ? d.heroImage : '') || "/images/hair-transplantation-new.png"}
        trustPoints={heroBadges.map(b => ({ icon: b.icon, text: b.label }))}
        slug="hair-transplantation"
        zoom={d.heroZoom as number}
      />

      <section className="section bg-surface text-center" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h2 className="section-title" style={{ fontSize: '2.5rem' }}>{probHead} <span className="text-accent">{probAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem', gap: '1.25rem' }}>
            {probCards.map(item=>(<div key={item.title} className="card-sleek"><div style={{fontSize:'2rem',marginBottom:'1rem'}}>{item.icon}</div><h3 style={{fontSize:'1.05rem',marginBottom:'0.75rem',color:'var(--color-primary)',fontWeight:'800'}}>{item.title}</h3><p style={{fontSize:'0.85rem',color:'#666',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
          <p style={{ fontSize: '1.2rem', marginTop: '3.5rem', fontWeight: '700', color: 'var(--color-primary)' }}>
            {probBotText} <span className="text-accent">{probBotAccent}</span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '500px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-hair-standard.png"} alt="Hair Transplant Tech" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.8rem', fontWeight: '800', color: 'var(--color-primary)' }}>{wiBadge}</div>
          </div>
          <div style={{ paddingLeft: '3rem' }}>
            <h2 className="section-subtitle" style={{ color: 'var(--color-accent)', fontWeight: '900', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>{wiLabel}</h2>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.6rem' }}>{wiHead} <span className="text-accent">{wiAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.8' }}>{wiBody}</p>
            <h4 style={{ marginBottom: '1.25rem', fontSize: '1.1rem', fontWeight: '800' }}>{wiSubHead}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {wiPoints.map(point=>(<div key={point.text} style={{display:'flex',alignItems:'center',gap:'0.75rem',fontWeight:'800',color:'#004d4f',fontSize:'1rem'}}><span style={{fontSize:'1.3rem'}}>{point.icon}</span> {point.text}</div>))}
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title" style={{ fontSize: '2.6rem' }}>{baHead} <span className="text-accent">{baAccent}</span></h2>
          <p className="section-subtitle">{baSub}</p>
          <div style={{ maxWidth: '700px', margin: '3rem auto', position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/7' }}>
              <Image src={(d.baImage as string) || "/images/before-after-laser.webp"} alt="Hair Transplant Results" fill style={{ objectFit: 'cover' }} />
            </div>
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
            {benItems.map(benefit=>(<div key={benefit.text} className="card-benefit" style={{padding:'2.5rem 1rem',textAlign:'center'}}><div style={{fontSize:'2.2rem',marginBottom:'1rem'}}>{benefit.icon}</div><p style={{fontWeight:'800',fontSize:'0.9rem',color:'var(--color-primary)'}}>{benefit.text}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title text-center">{procHead} <span className="text-accent">{procAccent}</span></h2>
          <div className="grid grid-4" style={{ marginTop: '4rem', gap: '1.25rem' }}>
            {procSteps.map(item=>(<div key={item.title} className="card-process"><div style={{fontSize:'2rem',marginBottom:'1rem'}}>{item.icon}</div><h3 style={{marginBottom:'0.75rem',fontSize:'1.05rem',fontWeight:'800'}}>{item.title}</h3><p className="text-muted" style={{fontSize:'0.85rem',lineHeight:'1.6'}}>{item.desc}</p></div>))}
          </div>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center gap-6">
          <div style={{ paddingRight: '2.5rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: '2.4rem' }}>{techHead} <span className="text-accent">{techAccent}</span></h2>
            <p className="text-muted" style={{ fontSize: '1.05rem', marginBottom: '2.5rem', lineHeight: '1.7' }}>{techBody}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {techFeat.map(p=>(<div key={p.text} style={{display:'flex',alignItems:'center',gap:'0.85rem',fontWeight:'800',fontSize:'1.05rem'}}><span style={{fontSize:'1.3rem'}}>{p.icon}</span> {p.text}</div>))}
            </div>
          </div>
          <div style={{ position: 'relative', height: '400px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <Image src={(d.techImage as string) || "/images/neofatbury-hair2-banner.webp"} alt="FUE Hair Transplant" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="section bg-surface">
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
            {trustItems.map(item=>(<div key={item.text} className="card-trust"><div style={{fontSize:'2.4rem',marginBottom:'1rem'}}>{item.icon}</div><h4 style={{fontSize:'1.05rem',fontWeight:'800',color:'var(--color-primary)'}}>{item.text}</h4></div>))}
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
        .card-sleek{background:white;padding:2rem 1.5rem;border-radius:12px;border:1px solid #f0f0f0;box-shadow:0 4px 20px rgba(0,0,0,0.03);transition:transform 0.3s ease}
        .card-sleek:hover{transform:translateY(-5px)}
        .card-benefit{background:white;border-radius:16px;border:1px solid #f2f2f2;transition:transform 0.3s ease}
        .card-benefit:hover{transform:translateY(-5px);box-shadow:0 10px 30px rgba(0,0,0,0.05)}
        .card-process{background:white;padding:2rem 1.5rem;border-radius:14px;text-align:center;border:1px solid #f0f4f4;transition:transform 0.3s ease}
        .card-process:hover{transform:translateY(-5px)}
        .card-trust{background:white;padding:2.5rem 1.5rem;border-radius:12px;display:flex;flex-direction:column;align-items:center;text-align:center;border:1px solid #f0f0f0;transition:transform 0.3s ease}
        .card-trust:hover{transform:translateY(-5px)}
      `}} />
    </>
  );
}
