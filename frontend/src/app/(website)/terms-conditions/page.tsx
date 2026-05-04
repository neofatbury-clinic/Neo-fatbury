import { getTermsConditions } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function TermsConditions() {
  const content = await getTermsConditions();

  // Expanded professional fallback (Approx 300+ words)
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: '1. Agreement to Terms' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and NeoFatbury (“we,” “us,” or “our”), concerning your access to and use of the neofatbury.co.in website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. Intellectual Property Rights' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '3. User Representations' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '4. Prohibited Activities' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us. Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '5. Limitation of Liability' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.' }], style: 'normal' }
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
