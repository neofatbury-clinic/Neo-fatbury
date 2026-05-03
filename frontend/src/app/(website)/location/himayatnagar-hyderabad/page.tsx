import Image from "next/image";
import LeadForm from "@/components/LeadForm";

export default function HimayatnagarLocation() {
  return (
    <>
      <section className="section" style={{ minHeight: '80vh', backgroundColor: '#F8FAF9' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div>
            <h1 className="section-title text-primary" style={{ marginBottom: '1.5rem' }}>Our Himayatnagar Clinic</h1>
            <p className="text-muted" style={{ fontSize: '1.15rem', marginBottom: '3rem' }}>
              Experience the absolute best in dermatology and clinical aesthetic treatments in the heart of Himayatnagar, Hyderabad.
            </p>
            
            <div style={{ position: 'relative', height: '400px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '3rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
               <Image src="/images/clinic-reception.webp" alt="NeoFatbury Himayatnagar Reception" fill style={{ objectFit: 'cover' }} />
            </div>

            <LeadForm title="Book Appointment at Himayatnagar" />

            <address style={{ fontStyle: 'normal', fontSize: '1.1rem', marginTop: '4rem', padding: '2rem', backgroundColor: 'white', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'left' }}>
              <strong>NeoFatbury Clinic - Himayatnagar</strong><br/>
              Main Road, Himayatnagar,<br/>
              Near Main Signal, Hyderabad, Telangana.<br/><br/>
              <strong>Phone:</strong> <a href="tel:7729955577" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>7729955577</a>
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
