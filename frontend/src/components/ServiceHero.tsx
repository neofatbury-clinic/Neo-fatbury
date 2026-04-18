"use client";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";

interface TrustBadge {
  icon: string;
  label: string;
}

interface ServiceHeroProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  accentLine: string;
  subtext: string;
  badges: TrustBadge[];
}

export default function ServiceHero({
  imageSrc,
  imageAlt,
  headline,
  accentLine,
  subtext,
  badges,
}: ServiceHeroProps) {
  return (
    <section className="service-hero">
      <div className="container">
        <div className="service-hero-grid">

          {/* ── Pillar 1: Foreground Clinical Visual ── */}
          <div className="hero-visual-pillar">
            <div className="visual-image-wrapper">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={680}
                priority
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>

          {/* ── Pillar 2: Strategic Content ── */}
          <div className="service-hero-text">
            <h1>
              {headline}
              <br />
              <span className="accent">{accentLine}</span>
            </h1>
            <p>{subtext}</p>
            <div className="hero-trust-badges">
              {badges.map((b, i) => (
                <div key={i} className="hero-trust-badge">
                  <span>{b.icon}</span>
                  <span>{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Pillar 3: Lead Conversion Form ── */}
          <div className="service-hero-form">
            <LeadForm />
          </div>

        </div>
      </div>
    </section>
  );
}
