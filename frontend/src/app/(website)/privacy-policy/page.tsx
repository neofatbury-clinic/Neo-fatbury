import { getPrivacyPolicy } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PrivacyPolicy() {
  const content = await getPrivacyPolicy();

  // Robust professional fallback if Sanity is empty
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: 'At NeoFatbury, your privacy is extremely critical to us. This Privacy Policy details the types of personal data we collect, how we securely use it, and how we protect your information.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '1. Information We Collect' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'When you fill out forms on our website (such as the consultation booking forms), we securely collect your Name, Phone Number, and Service Interest. This data is strictly used for contacting you regarding your explicitly requested aesthetic inquiry.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. Use of Information' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Your data is used solely to facilitate your clinic booking and internal tracking analysis for our Google Ads campaigns. Your data is NEVER sold, rented, or distributed to third-party vendors.' }], style: 'normal' }
  ];

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={contentStyle}>
          <PortableText value={(content && content.length > 0 && content[0].children[0].text.length > 50) ? content : defaultContent} />
        </div>
        <div style={{ marginTop: '4rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

const contentStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#2c3e50',
};
