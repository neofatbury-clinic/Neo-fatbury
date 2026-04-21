import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import Link from "next/link";

export default async function PrivacyPolicy() {
  const query = `*[_type == "siteSettings"][0] {
    privacyPolicy
  }`;
  const settings = await client.fetch(query);
  const content = settings?.privacyPolicy;

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Privacy Policy</h1>
        <div style={contentStyle}>
          {content ? (
            <PortableText value={content} />
          ) : (
            <p>Our Privacy Policy is being updated. Please check back soon.</p>
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
