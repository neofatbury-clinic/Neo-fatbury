import Image from 'next/image';
import Link from 'next/link';

export default function ThankYouPage() {
  return (
    <>
      <section className="section text-center" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, zIndex: -1 }}>
              <Image src="/images/clinic-reception.webp" alt="Clinic Background" fill style={{ objectFit: 'cover' }} />
          </div>
        <div className="container" style={{ maxWidth: '600px' }}>
          <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--color-accent)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 2rem' }}>
            ✓
          </div>
          <h1 className="section-title text-primary" style={{ marginBottom: '1rem' }}>Success!</h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', marginBottom: '2.5rem' }}>
            Submission Successful – Your consultation request is received.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/" className="btn btn-primary">Return to Home</Link>
            <a href="tel:7729955577" className="btn btn-outline">Call Us Now</a>
          </div>
        </div>
      </section>

      {/* Conversion Tracking Code Placeholder */}
      {/* 
        <script>
          // PASTE GOOGLE ADS / FACEBOOK PIXEL TRACKING CODE HERE
          console.log("Conversion Tracking Triggered - Page: /thank-you");
        </script>
      */}
    </>
  );
}
