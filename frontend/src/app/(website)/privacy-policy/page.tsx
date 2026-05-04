import { getPrivacyPolicy } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PrivacyPolicy() {
  const content = await getPrivacyPolicy();

  // Expanded professional fallback (Approx 300+ words)
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: 'Effective Date: May 4, 2026' }], style: 'h4' },
    { _type: 'block', children: [{ _type: 'span', text: '1. Introduction and Scope' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Welcome to NeoFatbury. We are committed to protecting your personal information and your right to privacy. This Privacy Policy applies to all information collected through our website (neofatbury.co.in) and any related services, sales, marketing, or events. When you visit our website and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy in the most transparent way possible.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. Information We Collect' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website or otherwise contacting us.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'The personal information we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect can include: Name, Contact Data (Email, Phone Number), and Service Interest.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '3. How We Use Your Information' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'We use the information we collect or receive: To facilitate account creation and logon process, to send you marketing and promotional communications, to fulfill and manage your orders, to post testimonials, and to deliver services to the user.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '4. Will Your Information Be Shared With Anyone?' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We may process or share data based on the following legal basis: Consent, Legitimate Interests, Performance of a Contract, and Legal Obligations.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '5. Do We Use Cookies and Other Tracking Technologies?' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '6. How Long Do We Keep Your Information?' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements).' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '7. How Do We Keep Your Information Safe?' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'We aim to protect your personal information through a system of organizational and technical security measures. We have implemented appropriate internal security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.' }], style: 'normal' }
  ];

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={contentStyle}>
          <PortableText value={(content && content.length > 0 && content[0].children[0].text.length > 500) ? content : defaultContent} />
        </div>
        <div style={{ marginTop: '4rem' }}>
          <Link href="/" style={{ color: 'var(--color-primary)', fontWeight: '600' }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
// Triggering fresh build for legal content update: 1714833725

const contentStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#2c3e50',
};
