import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";
import { client } from "@/sanity/lib/client";

export const metadata = {
  title: 'Slimming & Weight Loss Clinic in Hyderabad - NeoFatbury',
  description: 'Top-rated body contouring and weight loss in Hyderabad. Offering US-FDA approved CoolSculpting, Cryolipolysis, and clinical weight loss programs.',
};

export default async function SlimmingPage() {
  // Fetch slimming services dynamically
  const query = `*[_type == "service" && (category->slug.current == "slimming" || slug.current in ["coolsculpting", "weight-loss", "inch-loss", "coolsculpting-fat-freezing", "inch-loss-treatment"])] | order(order asc) {
    name,
    shortDescription,
    "slug": slug.current,
    "image": heroImage.asset->url
  }`;
  const services = await client.fetch(query);

  return (
    <>
      <ReplicaHero 
        titleTeal1="All Slimming"
        titleTeal2=""
        titleOrange1="Treatments"
        titleOrange2=""
        subtext=""
        imageSrc="/images/neofatbury-slimming-hero.png"
        leadFormTitle="Book Body Analysis"
      />

      <section className="section" id="treatments">
        <div className="container">
          <h2 className="section-title text-center">Body & <span className="text-accent">Slimming</span></h2>
          <p className="section-subtitle text-center">Targeted fat reduction and comprehensive inch-loss programs.</p>
          
          <div className="grid grid-2" style={{ marginTop: '3rem', maxWidth: '1000px', margin: '3rem auto 0' }}>
            {services.map((s: any) => (
              <div key={s.name} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '260px', marginBottom: '1.5rem', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                  <Image src={s.image || '/images/neofatbury-clinical-standard.png'} alt={s.name} fill style={{ objectFit: 'cover' }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{s.name}</h3>
                <p className="text-muted" style={{ marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>{s.shortDescription}</p>
                <Link href={`/slimming/${s.slug}`} className="btn btn-outline" style={{ width: 'fit-content' }}>Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Why NeoFatbury <span className="text-accent">Slimming?</span></h2>
          <div className="grid grid-3 mobile-grid-1" style={{ marginTop: '3rem' }}>
             {[
               { title: 'US-FDA Approved', desc: 'We only use clinically validated technologies like CoolSculpting.' },
               { title: 'Medical Supervision', desc: 'All weight loss plans are designed by certified clinical nutritionists.' },
               { title: 'Sustainable Results', desc: 'Focus on healthy metabolism for results that last long-term.' },
             ].map(p => (
               <div key={p.title} className="card" style={{ padding: '2.5rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{p.title}</h4>
                  <p className="text-muted" style={{ fontSize: '0.95rem' }}>{p.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="section bg-primary text-center">
        <div className="container">
          <h3 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Start Your Body Transformation</h3>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginBottom: '2.5rem' }}>Reach your weight goals with expert medical guidance.</p>
          <Link href="/contact-us" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-primary)', fontWeight: '700' }}>Book Body Analysis</Link>
        </div>
      </section>
    </>
  );
}
