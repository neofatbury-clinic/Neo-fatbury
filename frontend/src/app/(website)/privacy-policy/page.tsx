import { getPrivacyPolicy } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PrivacyPolicy() {
  const content = await getPrivacyPolicy();

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={contentStyle}>
          {content && content.length > 0 ? (
            <PortableText value={content} />
          ) : (
            <div style={{ padding: '2rem', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px dashed #ccc' }}>
               <p style={{ color: '#666', fontStyle: 'italic' }}>
                 Our Privacy Policy content is currently being synchronized from the clinical management system. 
                 If you need immediate assistance, please contact us at 7729955577.
               </p>
            </div>
          )}
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
