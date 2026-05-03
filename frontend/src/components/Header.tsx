"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header({ settings }: { settings?: any }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainPhone = settings?.contact?.phone || '7729955577';
  const logoUrl = settings?.logo || "/images/neofatbury-logo-web.png";

  return (
    <header style={wrapperStyle}>
      {/* ── ANNOUNCEMENT BAR ────────────────────────────────── */}
      {settings?.headerAnnouncementText && (
        <div style={{ backgroundColor: 'var(--color-primary)', color: 'white', textAlign: 'center', fontSize: '0.85rem', fontWeight: '600', padding: '0.5rem' }} className="animate-fade-in">
          {settings.headerAnnouncementText}
        </div>
      )}
      {/* ── TOP BAR ─────────────────────────────────────────── */}
      <div style={topBarStyle} className="top-bar-mobile-hide">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 2rem' }}>
          {/* Left: Language Selection */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontSize: '0.82rem', color: '#444' }}>
            <span>🌐 English</span>
          </div>

          {/* Right: Quick-Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.82rem' }}>
            {settings?.topHeaderMenu && settings.topHeaderMenu.length > 0 ? (
              settings.topHeaderMenu.map((item: any, idx: number) => (
                <Link key={idx} href={item.url || '/'} style={topLinkStyle}>{item.label}</Link>
              ))
            ) : (
              <>
                <Link href="/about-us" style={topLinkStyle}>About Us</Link>
                <Link href="/results" style={topLinkStyle}>Results</Link>
                <Link href="/contact-us" style={topLinkStyle}>Contact</Link>
              </>
            )}
            <span style={{ color: '#555' }} className="mobile-hide">Customer Care · 8 AM–10 PM</span>
            <a href={`tel:${mainPhone}`} style={{ ...topLinkStyle, fontWeight: '700', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              📞 {mainPhone}
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ────────────────────────────────────────── */}
      <div style={mainNavStyle} className="main-nav-mobile">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', padding: '0 2rem', width: '100%' }}>
          {/* Logo */}
          <Link href="/" style={logoStyle}>
            <Image
              src={logoUrl}
              alt={settings?.clinicName ? `${settings.clinicName} Logo` : "NeoFatbury Logo"}
              width={180}
              height={72}
              priority
              className="logo-img-mobile"
              style={{ objectFit: 'contain', height: 'clamp(44px, 8vw, 60px)', width: 'auto' }}
            />
          </Link>

          {/* Dynamic Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 1vw, 1.5rem)', flexWrap: 'nowrap' }} className="nav-desktop">
            {settings?.headerMenu && settings.headerMenu.length > 0 ? (
              settings.headerMenu.map((item: any, idx: number) => (
                item.dropdownItems && item.dropdownItems.length > 0 ? (
                  <NavDropdown key={idx} label={item.label} items={item.dropdownItems.map((d: any) => ({ label: d.label, href: d.url }))} />
                ) : (
                  <Link key={idx} href={item.url || '/'} style={navLinkStyle}>{item.label}</Link>
                )
              ))
            ) : (
              <>
                <Link href="/" style={navLinkStyle}>Home</Link>
                <NavDropdown 
                  label="Skin" 
                  items={[
                    { label: 'All Skin Treatments', href: '/skin' },
                    { label: 'Acne Scar Treatment', href: '/skin/acne-scar-treatment' },
                    { label: 'Laser Hair Reduction', href: '/skin/laser-hair-reduction' },
                    { label: 'Skin Brightening', href: '/skin/skin-brightening' },
                    { label: 'Scar Treatment', href: '/skin/scar-treatment' }
                  ]} 
                />
                <NavDropdown 
                  label="Hair" 
                  items={[
                    { label: 'All Hair Treatments', href: '/hair' },
                    { label: 'Hair Loss Treatment', href: '/hair/hair-loss-treatment' },
                    { label: 'Anti-Dandruff Treatment', href: '/hair/anti-dandruff-treatment' },
                    { label: 'Hair Transplantation', href: '/hair/hair-transplantation' }
                  ]} 
                />
                <NavDropdown 
                  label="Slimming" 
                  items={[
                    { label: 'All Slimming Treatments', href: '/slimming' },
                    { label: 'CoolSculpting', href: '/slimming/coolsculpting' },
                    { label: 'Weight Loss', href: '/slimming/weight-loss' },
                    { label: 'Inch Loss', href: '/slimming/inch-loss' }
                  ]} 
                />
                <Link href="/results" style={navLinkStyle}>Results</Link>
                <Link href="/blog" style={navLinkStyle}>Blog</Link>
              </>
            )}
          </nav>

          {/* Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link href="/contact-us" className="btn btn-book header-cta">
              <span className="cta-full">📅 Book Appointment</span>
              <span className="cta-short">Book Now</span>
            </Link>
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ fontSize: '1.5rem', color: 'var(--color-primary)', background: 'none', border: 'none', padding: '0.5rem', cursor: 'pointer' }}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─────────────────────────────────────── */}
      {mobileOpen && (
        <div style={mobileMenuStyle} className="animate-fade-in">
          <div className="container" style={{ padding: '1.5rem 1rem 4rem' }}>
            {settings?.headerMenu && settings.headerMenu.length > 0 ? (
               settings.headerMenu.map((item: any, idx: number) => (
                 item.dropdownItems && item.dropdownItems.length > 0 ? (
                   <MobileAccordion key={idx} label={item.label} items={item.dropdownItems.map((d: any) => ({ label: d.label, href: d.url }))} onClose={() => setMobileOpen(false)} />
                 ) : (
                   <Link key={idx} href={item.url || '/'} onClick={() => setMobileOpen(false)} style={mobileMainLink}>{item.label}</Link>
                 )
               ))
             ) : (
                <>
                 <Link href="/" onClick={() => setMobileOpen(false)} style={mobileMainLink}>Home</Link>
                 <MobileAccordion 
                    label="Skin Treatments" 
                    items={[
                      { label: 'All Skin Treatments', href: '/skin' },
                      { label: 'Acne Scar Treatment', href: '/skin/acne-scar-treatment' },
                      { label: 'Laser Hair Reduction', href: '/skin/laser-hair-reduction' },
                      { label: 'Skin Brightening', href: '/skin/skin-brightening' },
                      { label: 'Scar Treatment', href: '/skin/scar-treatment' }
                    ]} 
                    onClose={() => setMobileOpen(false)} 
                 />
                 <MobileAccordion 
                    label="Hair Treatments" 
                    items={[
                      { label: 'All Hair Treatments', href: '/hair' },
                      { label: 'Hair Loss Treatment', href: '/hair/hair-loss-treatment' },
                      { label: 'Anti-Dandruff Treatment', href: '/hair/anti-dandruff-treatment' },
                      { label: 'Hair Transplantation', href: '/hair/hair-transplantation' }
                    ]} 
                    onClose={() => setMobileOpen(false)} 
                 />
                 <MobileAccordion 
                    label="Slimming & Body" 
                    items={[
                      { label: 'All Slimming Treatments', href: '/slimming' },
                      { label: 'CoolSculpting', href: '/slimming/coolsculpting' },
                      { label: 'Weight Loss', href: '/slimming/weight-loss' },
                      { label: 'Inch Loss', href: '/slimming/inch-loss' }
                    ]} 
                    onClose={() => setMobileOpen(false)} 
                 />
                 <Link href="/results" onClick={() => setMobileOpen(false)} style={mobileMainLink}>Results Gallery</Link>
                 <Link href="/blog" onClick={() => setMobileOpen(false)} style={mobileMainLink}>Blog & Tips</Link>
                </>
             )}

            <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
               <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.5rem' }}>Need help? Call us at:</p>
               <a href={`tel:${mainPhone}`} style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--color-primary)', textDecoration: 'none' }}>📞 {mainPhone}</a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop { }
        .nav-mobile-toggle { display: none !important; }
        .cta-short { display: none; }
        
        @media (max-width: 1100px) {
          .nav-desktop { gap: 0.75rem !important; }
        }

        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
          .top-bar-mobile-hide { display: none !important; }
          .main-nav-mobile { height: 64px !important; padding: 0 1rem !important; }
          .logo-img-mobile { height: 44px !important; }
          ${mobileOpen ? '.header-cta { display: none !important; }' : ''}
        }
        @media (max-width: 480px) {
          .header-cta { padding: 0.5rem 1rem !important; font-size: 0.75rem !important; }
          .cta-full { display: none; }
          .cta-short { display: inline; }
        }
      `}</style>
    </header>
  );
}

/* ─── NavDropdown Component ──────────────────────────────── */
function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button style={navBtnStyle}>
        {label} <span style={{ fontSize: '0.65rem', marginLeft: '2px' }}>▼</span>
      </button>
      {open && (
        <div style={dropdownStyle}>
          {items.map(item => (
            <Link key={item.href} href={item.href} style={dropItemStyle}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#f0f8f8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileAccordion({ label, items, onClose }: { label: string; items: { label: string; href: string }[]; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid var(--color-border)' }}>
      <button 
        onClick={() => setOpen(!open)}
        style={{ ...mobileMainLink, borderBottom: 'none', width: '100%', justifyContent: 'space-between', padding: '1rem 0' }}
      >
        {label} <span style={{ fontSize: '0.7rem', transition: '0.2s', transform: open ? 'rotate(180deg)' : '' }}>▼</span>
      </button>
      {open && (
        <div style={{ padding: '0 0 1rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {items.map(item => (
            <Link key={item.href} href={item.href} onClick={onClose} style={{ fontSize: '0.9rem', color: '#555' }}>
              • {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────────── */
const wrapperStyle: React.CSSProperties = {
  position: 'fixed', top: 0, left: 0, right: 0,
  zIndex: 1000,
  boxShadow: '0 2px 12px rgba(0,80,82,0.08)',
};

const topBarStyle: React.CSSProperties = {
  backgroundColor: '#e8f6f7',
  borderBottom: '1px solid #cce5e6',
  height: '38px',
};

const mainNavStyle: React.CSSProperties = {
  backgroundColor: 'white',
  height: '78px',
  display: 'flex',
  alignItems: 'center',
};

const topLinkStyle: React.CSSProperties = {
  color: '#444',
  transition: 'color 0.2s',
  fontSize: '0.82rem',
};

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  lineHeight: 1,
  textDecoration: 'none',
};

const navBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  fontFamily: 'var(--font-heading)',
  fontWeight: '600',
  fontSize: '0.9rem',
  color: 'var(--color-primary)',
  cursor: 'pointer',
  padding: '0.4rem 0',
};

const navLinkStyle: React.CSSProperties = {
  textDecoration: 'none',
  fontFamily: 'var(--font-heading)',
  fontWeight: '600',
  fontSize: '0.9rem',
  color: 'var(--color-primary)',
  padding: '0.4rem 0',
  transition: 'color 0.2s',
};

const dropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  minWidth: '220px',
  backgroundColor: 'white',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  border: '1px solid var(--color-border)',
  overflow: 'hidden',
  zIndex: 100,
};

const dropItemStyle: React.CSSProperties = {
  display: 'block',
  padding: '1rem 1.5rem',
  fontSize: '0.92rem',
  color: 'var(--color-text)',
  transition: 'all 0.2s',
  borderBottom: '1px solid #f8fcfc',
  fontWeight: '500',
};

const mobileMainLink: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem 0',
  borderBottom: '1px solid var(--color-border)',
  color: 'var(--color-primary)',
  fontWeight: '600',
  fontSize: '1rem',
  textDecoration: 'none',
};

const mobileMenuStyle: React.CSSProperties = {
  position: 'fixed',
  top: 'var(--header-height)',
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'white',
  borderTop: '1px solid var(--color-border)',
  height: 'calc(100vh - var(--header-height))',
  overflowY: 'auto',
  zIndex: 999,
};
