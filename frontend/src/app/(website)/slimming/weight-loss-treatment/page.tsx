import { getServicePageData } from "@/sanity/fetchers/services";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";

export default async function WeightLossTreatment() {
  const d = await getServicePageData('weight-loss-treatment') as Record<string, any>;
  const addressedConcerns = ["Belly fat", "Obesity management", "Post-pregnancy weight", "Lifestyle weight gain"];

  return (
    <>
      <ReplicaHero 
        titleTeal1={(d.heroHeadline as string) || ""}
        titleTeal2=""
        titleOrange1={(d.heroAccentLine as string) || ""}
        titleOrange2=""
        subtext={(d.heroSubtext as string) || ""}
        imageSrc={(d.image as string) || "/images/neofatbury-slimming-hero.png"}
        leadFormTitle="Book Metabolism Analysis"
      />

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Struggling to <span className="text-accent">Lose Weight?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {[
              { title: "Stubborn belly fat", desc: "Fat in the abdominal region that refuses to move despite your diet efforts." },
              { title: "Weight gain despite dieting", desc: "Feeling frustrated when healthy eating doesn't reflect on the scale." },
              { title: "Low energy & slow metabolism", desc: "Feeling constantly tired and struggling with a metabolism that feels sluggish." },
              { title: "Yo-yo weight loss", desc: "The cycle of losing weight only to gain it all back shortly after." }
            ].map(item => (
              <div key={item.title} className="card">
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                <p className="text-muted" style={{ fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="Medical Weight Loss Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">Medical Weight Loss?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Medical weight loss involves personalized programs based on your specific body type, lifestyle, and health conditions to achieve safe and sustainable fat loss.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title text-center">Real <span className="text-accent">Transformations</span></h2>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src={(d.baImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="Weight Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Weight Loss Journey</Link>
        </div>
      </section>

      <section className="section bg-surface">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="section-title" style={{ textAlign: 'left' }}>Advanced Weight <br/><span className="text-accent">Loss Approach</span></h2>
            <p className="text-muted" style={{ marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We combine medical expertise, advanced technology, and personalized care.
            </p>
          </div>
          <div style={{ position: 'relative', height: '380px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src={(d.techImage as string) || "/images/derma-procedure-fixed.webp"} alt="Weight Loss Technology" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .card { background: white; padding: 2rem; border-radius: 12px; border: 1px solid #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
      `}} />
    </>
  );
}
