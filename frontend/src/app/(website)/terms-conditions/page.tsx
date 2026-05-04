import { getTermsConditions } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TermsConditions() {
  const content = await getTermsConditions();

  // Robust professional fallback if Sanity is empty
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: 'Welcome to NeoFatbury. By accessing this website, you agree to be bound by these Terms and Conditions of use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '1. Use License' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Permission is granted to temporarily download one copy of the materials (information or software) on NeoFatbury website for personal, non-commercial transitory viewing only.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. Disclaimer' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'The materials on NeoFatbury website are provided on an \'as is\' basis. NeoFatbury makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.' }], style: 'normal' }
  ];

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Terms & Conditions</h1>
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
