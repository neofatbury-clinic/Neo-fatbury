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
  let whatsapp = settings?.contact?.whatsapp || '919700641000';
  if (whatsapp.length === 10 && /^\d+$/.test(whatsapp)) {
    whatsapp = `91${whatsapp}`;
  }

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

            {/* Social Media Icons - Always Visible */}
            <div style={socialRowStyle}>
              <a href={settings?.socialMedia?.facebook || "#"} target="_blank" rel="noreferrer" style={socialIconStyle} className="social-icon" title="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={settings?.socialMedia?.instagram || "#"} target="_blank" rel="noreferrer" style={socialIconStyle} className="social-icon" title="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href={settings?.socialMedia?.youtube || "#"} target="_blank" rel="noreferrer" style={socialIconStyle} className="social-icon" title="YouTube">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            <div style={trustBadgesWrap}>
              <span style={trustBadge}>ISO 9001:2015 Certified</span>
              <span style={trustBadge}>US-FDA Approved Equipment</span>
              <span style={trustBadge}>Certified Dermatologists</span>
            </div>
          </div>

          {/* Column 2: Skin Care Solutions */}
          <div className="footer-col">
            <h4 style={colTitleStyle}>Solutions</h4>
            <ul style={linkListStyle}>
              {settings?.footerServices && settings.footerServices.length > 0 ? (
                settings.footerServices.map((item: any, i: number) => (
                  <li key={i}><Link href={item.url || '#'} style={linkStyle}>{item.label}</Link></li>
                ))
              ) : (
                <>
                  <li><Link href="/skin/" style={linkStyle}>Advanced Skin Clinic in Hyderabad</Link></li>
                  <li><Link href="/skin/laser-hair-reduction/" style={linkStyle}>Laser Hair Reduction</Link></li>
                  <li><Link href="/skin/acne-scar-treatment/" style={linkStyle}>Acne Scar Treatment</Link></li>
                  <li><Link href="/skin/skin-brightening/" style={linkStyle}>Skin Brightening</Link></li>
                </>
              )}
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
                {loc.gbpUrl && (
                  <a href={loc.gbpUrl} target="_blank" rel="noreferrer" style={mapLink}>Google Profile</a>
                )}
                {loc.phone ? (
                  <div style={{ marginTop: '0.35rem' }}>
                    <a href={`tel:${loc.phone}`} style={{ ...mapLink, textDecoration: 'none', fontWeight: '600' }}>📞 {loc.phone}</a>
                  </div>
                ) : (
                  <div style={{ marginTop: '0.35rem' }}>
                    <a href={`tel:${phone}`} style={{ ...mapLink, textDecoration: 'none', fontWeight: '600' }}>📞 {phone}</a>
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
              {settings?.footerMenu && settings.footerMenu.length > 0 ? (
                settings.footerMenu.map((item: any, i: number) => (
                  <li key={i}><Link href={item.url || '#'} style={linkStyle}>{item.label}</Link></li>
                ))
              ) : (
                <>
                  <li><Link href="/about-us" style={linkStyle}>About Our Experts</Link></li>
                  <li><Link href="/our-doctors" style={linkStyle}>Our Specialist Doctors</Link></li>
                  <li><Link href="/results" style={linkStyle}>Success Stories (Gallery)</Link></li>
                  <li><Link href="/blog" style={linkStyle}>Latest Wellness Blog</Link></li>
                  <li><Link href="/privacy-policy" style={linkStyle}>Privacy Policy</Link></li>
                  <li><Link href="/terms-conditions" style={linkStyle}>Terms & Conditions</Link></li>
                </>
              )}
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
        .social-icon:hover { 
          transform: translateY(-3px); 
          background-color: #00acb1 !important; 
          color: white !important; 
          border-color: #00acb1 !important; 
        }
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

const socialRowStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  marginBottom: '1.5rem',
  alignItems: 'center',
};

const socialIconStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: '#f8f9f9',
  color: '#5d6d7e',
  transition: 'all 0.3s ease',
  border: '1px solid #eee',
};
