"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ settings }: { settings?: any }) {
  const currentYear = new Date().getFullYear();
  const branch1 = settings?.branches?.[0];
  const branch2 = settings?.branches?.[1];
  const logoUrl = settings?.logo || "/images/neofatbury-logo-web.png";
  const phone = settings?.contact?.phone || '9700641000';
  const email = settings?.contact?.email || 'info@neofatbury.co.in';
  const whatsapp = settings?.contact?.whatsapp || '919700641000';

  return (
    <footer style={footerWrapper} className="footer-wrapper">
      <div className="container" style={footerContainer}>
        
        {/* TOP SECTION: 5-COLUMN GRID */}
        <div className="footer-grid" style={footerGrid}>
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col">
            <Link href="/" style={{ display: 'block', marginBottom: '1.25rem' }}>
              <Image 
                src={logoUrl} 
                alt="NeoFatbury" 
                width={150} 
                height={50} 
                style={{ objectFit: 'contain', height: '100%', width: 'auto' }} 
              />
            </Link>
            <p style={footerBioText}>
              NeoFatbury is Hyderabad’s premier destination for advanced Skin, Hair, and Slimming treatments. 
              Combining US-FDA approved technology with expert dermatological care, we deliver visible, long-lasting results.
            </p>
            <div style={trustBadgesWrap}>
              <span style={trustBadge}>ISO 9001:2015 Certified</span>
              <span style={trustBadge}>US-FDA Approved Equipment</span>
              <span style={trustBadge}>Certified Dermatologists</span>
            </div>
          </div>

          {/* Column 2: Skin Care Solutions */}
          <div className="footer-col">
            <h4 style={colTitleStyle}>Skin Care Solutions</h4>
            <ul style={linkListStyle}>
              <li><Link href="/skin/" style={linkStyle}>Advanced Skin Clinic in Hyderabad</Link></li>
              <li><Link href="/skin/laser-hair-reduction/" style={linkStyle}>Laser Hair Reduction for Men & Women</Link></li>
              <li><Link href="/skin/acne-scar-treatment/" style={linkStyle}>Acne Scar & Pimple Treatment</Link></li>
              <li><Link href="/skin/skin-brightening/" style={linkStyle}>Skin Brightening & Pigmentation</Link></li>
              <li><Link href="/skin/" style={linkStyle}>Anti-Aging & Rejuvenation</Link></li>
              <li><Link href="/skin/" style={linkStyle}>Chemical Peels & Hydra-Facials</Link></li>
            </ul>
          </div>

          {/* Column 3: Hair & Slimming */}
          <div className="footer-col">
            <h4 style={colTitleStyle}>Hair & Slimming</h4>
            <ul style={linkListStyle}>
              <li><Link href="/hair/hair-loss-treatment/" style={linkStyle}>Professional Hair Loss Treatment</Link></li>
              <li><Link href="/hair/anti-dandruff-treatment/" style={linkStyle}>Anti-Dandruff Clinical Solutions</Link></li>
              <li><Link href="/hair/" style={linkStyle}>Hair Regrowth Therapies</Link></li>
              <li><Link href="/slimming/coolsculpting-fat-freezing/" style={linkStyle}>CoolSculpting Fat Freezing</Link></li>
              <li><Link href="/slimming/inch-loss-treatment/" style={linkStyle}>Non-Surgical Inch Loss Treatment</Link></li>
              <li><Link href="/slimming/" style={linkStyle}>Body Contouring & Shaping</Link></li>
            </ul>
          </div>

          {/* Column 4: Quick Access & Locations */}
          <div className="footer-col">
            <h4 style={colTitleStyle}>Clinics & Contact</h4>
            {settings?.clinicLocations?.map((loc: any, i: number) => (
              <div key={i} style={locationBox}>
                <p style={locationTitle}>{loc.name}</p>
                <p style={locationAddr}>{loc.address}</p>
                {loc.mapsUrl && (
                  <a href={loc.mapsUrl} target="_blank" rel="noreferrer" style={mapLink}>View on Maps</a>
                )}
                {loc.phone && (
                  <div style={{ marginTop: '0.25rem' }}>
                    <a href={`tel:${loc.phone}`} style={{ ...mapLink, textDecoration: 'none', fontWeight: '600' }}>📞 {loc.phone}</a>
                  </div>
                )}
              </div>
            ))}
            
            <a href={`mailto:${email}`} style={{ ...contactLink, display: 'block', textDecoration: 'none', color: '#2c3e50' }}>✉ {email}</a>
            {whatsapp && (
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer" style={{ ...contactLink, display: 'block', textDecoration: 'none', color: '#25D366' }}>💬 WhatsApp Us</a>
            )}
          </div>

          {/* Column 5: Important Links */}
          <div className="footer-col">
            <h4 style={colTitleStyle}>Important Links</h4>
            <ul style={linkListStyle}>
              <li><Link href="/about-us" style={linkStyle}>About Our Experts</Link></li>
              <li><Link href="/our-doctors" style={linkStyle}>Our Specialist Doctors</Link></li>
              <li><Link href="/results" style={linkStyle}>Success Stories (Gallery)</Link></li>
              <li><Link href="/blog" style={linkStyle}>Latest Wellness Blog</Link></li>
              <li><Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" style={linkStyle}>Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: COMPLIANCE & SEO BAR */}
        <div style={complianceBar}>
          <div style={complianceRow}>
            <span style={complianceLabel}>Quick Links: </span>
            <Link href="/about-us" style={bottomLink}>About Us</Link> | 
            <Link href="/our-doctors" style={bottomLink}>Our Doctors</Link> | 
            <Link href="/blog" style={bottomLink}>Blog</Link> | 
            <Link href="/contact-us" style={bottomLink}>Contact Us</Link>
          </div>
          <div style={complianceRow}>
            <span style={complianceLabel}>Legal: </span>
            <Link href="/privacy-policy" style={bottomLink}>Privacy Policy</Link> | 
            <Link href="/terms-conditions" style={bottomLink}>Terms & Conditions</Link> | 
            <Link href="/medical-disclaimer" style={bottomLink}>Medical Disclaimer</Link>
          </div>
          <div style={disclaimerTextWrap}>
            <p style={disclaimerText}>
              {settings?.footerDisclaimer || `Results may vary from person to person depending on individual body types, genetics, and adherence to post-treatment care. All medical procedures are performed by or under the supervision of certified dermatologists.`}
            </p>
          </div>
          <div style={copyrightWrap}>
            <p style={copyrightText}>{settings?.footerCopyright || `© ${currentYear} NeoFatbury. All Rights Reserved.`}</p>
          </div>
        </div>

      </div>

      <style jsx global>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr 1fr;
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 2rem; }
          .footer-wrapper { padding-top: 3rem !important; }
        }
        .footer-col a:hover { color: #00acb1 !important; transform: translateX(3px); }
      `}</style>
    </footer>
  );
}

const footerWrapper: React.CSSProperties = {
  backgroundColor: '#ffffff',
  color: '#2c3e50',
  padding: '4rem 0 2rem',
  borderTop: '1px solid #eaeaea',
  fontFamily: 'var(--font-heading), sans-serif',
};

const footerContainer: React.CSSProperties = {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0 1.5rem',
};

const footerGrid: React.CSSProperties = {
  // Grid managed by styled-jsx
};

const footerBioText: React.CSSProperties = {
  fontSize: '0.9rem',
  lineHeight: '1.7',
  color: '#5d6d7e',
  marginBottom: '1.5rem',
};

const trustBadgesWrap: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
};

const trustBadge: React.CSSProperties = {
  fontSize: '0.75rem',
  fontWeight: '600',
  color: '#00acb1',
  backgroundColor: 'rgba(255,255,255,0.05)',
  padding: '0.4rem 0.75rem',
  borderRadius: '4px',
  width: 'fit-content',
};

const colTitleStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  fontWeight: '700',
  marginBottom: '1rem',
  color: '#2c3e50',
  borderBottom: '2px solid rgba(48,139,152,0.1)',
  paddingBottom: '0.5rem',
  width: 'fit-content',
};

const linkListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  display: 'block',
  color: '#5d6d7e',
  textDecoration: 'none',
  fontSize: '0.88rem',
  marginBottom: '0.85rem',
  transition: 'all 0.2s ease',
};

const locationBox: React.CSSProperties = {
  marginBottom: '1.25rem',
};

const locationTitle: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '700',
  color: '#00acb1',
  marginBottom: '0.25rem',
};

const locationAddr: React.CSSProperties = {
  fontSize: '0.82rem',
  color: '#85929e',
  lineHeight: '1.4',
  marginBottom: '0.25rem',
};

const mapLink: React.CSSProperties = {
  fontSize: '0.75rem',
  color: '#308b98',
  textDecoration: 'underline',
  opacity: 1,
};

const contactLink: React.CSSProperties = {
  fontSize: '0.9rem',
  fontWeight: '600',
  color: '#2c3e50',
  marginTop: '0.75rem',
};

const complianceBar: React.CSSProperties = {
  borderTop: '1px solid #f0f0f0',
  paddingTop: '2rem',
  textAlign: 'center',
};

const complianceRow: React.CSSProperties = {
  marginBottom: '0.75rem',
  fontSize: '0.9rem',
  color: '#abb2b9',
};

const complianceLabel: React.CSSProperties = {
  fontWeight: '700',
  color: '#00acb1',
  marginRight: '0.5rem',
};

const bottomLink: React.CSSProperties = {
  color: '#5d6d7e',
  textDecoration: 'none',
  margin: '0 0.5rem',
};

const disclaimerTextWrap: React.CSSProperties = {
  maxWidth: '960px',
  margin: '2rem auto',
  padding: '1.25rem',
  backgroundColor: '#f8f9f9',
  borderRadius: '8px',
};

const disclaimerText: React.CSSProperties = {
  fontSize: '0.82rem',
  lineHeight: '1.7',
  color: '#85929e',
  margin: 0,
};

const copyrightWrap: React.CSSProperties = {
  marginTop: '2rem',
};

const copyrightText: React.CSSProperties = {
  fontSize: '0.8rem',
  color: '#aeb6bf',
};
