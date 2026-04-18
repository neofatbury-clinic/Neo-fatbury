export default function PrivacyPolicy() {
  return (
    <section className="section" style={{ minHeight: '60vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 className="section-title text-primary" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          Effective Date: {new Date().toLocaleDateString()}<br/><br/>
          At NeoFatbury, your privacy is extremely critical to us. This Privacy Policy details the types of personal data we collect, how we securely use it, and how we protect your information. 
        </p>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>1. Information We Collect</h3>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          When you fill out forms on our website (such as the consultation booking forms), we securely collect your Name, Phone Number, and Service Interest. This data is strictly used for contacting you regarding your explicitly requested aesthetic inquiry.
        </p>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>2. Use of Information</h3>
        <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
          Your data is used solely to facilitate your clinic booking and internal tracking analysis for our Google Ads campaigns via our internal /thank-you pages. Your data is NEVER sold, rented, or distributed to third-party vendors.
        </p>
      </div>
    </section>
  );
}
