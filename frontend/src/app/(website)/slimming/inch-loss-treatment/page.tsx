import { getServicePageData } from "@/sanity/fetchers/services";
import Image from "next/image";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import ReplicaHero from "@/components/ReplicaHero";

export default async function InchLossTreatment() {
  const d = await getServicePageData('inch-loss-treatment') as Record<string, any>;

  return (
    <>
      <ReplicaHero 
        titleTeal1={(d.heroHeadline as string) || ""}
        titleTeal2=""
        titleOrange1={(d.heroAccentLine as string) || ""}
        titleOrange2=""
        subtext={(d.heroSubtext as string) || ""}
        imageSrc={(d.image as string) || "/images/neofatbury-slimming-hero.png"}
        leadFormTitle="Book Inch Loss Analysis"
      />

      <section className="section bg-surface text-center">
        <div className="container">
          <h2 className="section-title">Stubborn Inches <span className="text-accent">That Won't Move?</span></h2>
          <div className="grid grid-4" style={{ marginTop: '3.5rem' }}>
            {[
              { title: "Belly bulge", desc: "Persistent fat around the waistline that resists traditional exercise.", icon: "🥋" },
              { title: "Love handles", desc: "Stubborn pockets of fat on the flanks that affect your overall silhouette.", icon: "⌛" },
              { title: "Thigh gaps", desc: "Reducing inner and outer thigh fat for a more sculpted appearance.", icon: "🦵" },
              { title: "Arm fat", desc: "Toning and contouring upper arms for a firmer, tighter look.", icon: "💪" }
            ].map(item => (
              <div key={item.title} className="card-sleek">
                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{item.icon}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                <p className="text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2 items-center gap-4">
          <div style={{ position: 'relative', height: '450px', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
            <Image src={(d.whatIsImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="Inch Loss Procedure" fill style={{ objectFit: 'cover' }} />
          </div>
          <div style={{ paddingLeft: '2rem' }}>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>What is <span className="text-accent">Inch Loss?</span></h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.8' }}>
              Inch loss treatment focuses on reducing the circumference of specific body areas by eliminating localized fat through non-surgical methods.
            </p>
          </div>
        </div>
      </section>

      <section className="section text-center">
        <div className="container">
          <h2 className="section-title text-center">Visible <span className="text-accent">Inch Reduction</span></h2>
          <div style={{ maxWidth: '480px', margin: '3rem auto', position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 45px rgba(0,0,0,0.1)' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/6' }}>
              <Image src={(d.baImage as string) || "/images/neofatbury-slimming-banner.webp"} alt="Inch Loss Results" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <Link href="#book" className="btn btn-primary" style={{ padding: '1rem 3rem' }}>Start Your Inch Loss Journey</Link>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html:`
        .card-sleek { background: white; padding: 2rem; border-radius: 12px; border: 1px solid #f0f0f0; box-shadow: 0 4px 12px rgba(0,0,0,0.03); }
      `}} />
    </>
  );
}
