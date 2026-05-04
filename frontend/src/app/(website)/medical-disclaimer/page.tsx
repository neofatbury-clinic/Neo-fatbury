import { getMedicalDisclaimer } from "@/sanity/queries";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function MedicalDisclaimer() {
  const content = await getMedicalDisclaimer();

  // Expanded professional fallback (Approx 300+ words)
  const defaultContent = [
    { _type: 'block', children: [{ _type: 'span', text: '1. No Medical Advice' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'The information provided on the NeoFatbury website, including but not limited to, text, graphics, images, and other material contained on this website are for informational and educational purposes only. No material on this site is intended to be a substitute for professional medical advice, diagnosis, or treatment.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: 'Always seek the advice of your physician or other qualified health care provider with any questions you may have regarding a medical condition or treatment and before undertaking a new health care regimen, and never disregard professional medical advice or delay in seeking it because of something you have read on this website.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '2. No Doctor-Patient Relationship' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Use of this website does not create a doctor-patient relationship between you and NeoFatbury or any of its professionals. Any information you submit through the website, whether via forms or emails, is not considered confidential medical information unless a formal clinical relationship has been established through an in-person consultation.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '3. Accuracy of Information' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Although we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '4. Results May Vary' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Clinical results vary from person to person. Testimonials and before-and-after photos displayed on this website are representations of individual results and do not guarantee similar outcomes for every patient. Factors such as age, skin type, genetics, and adherence to post-treatment care significantly influence the final results of any aesthetic procedure.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '5. External Links Disclaimer' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'Through this website, you are able to link to other websites which are not under the control of NeoFatbury. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.' }], style: 'normal' },
    { _type: 'block', children: [{ _type: 'span', text: '6. Limitation of Liability' }], style: 'h3' },
    { _type: 'block', children: [{ _type: 'span', text: 'NeoFatbury and its staff will not be liable for any losses or damages related to the use of our website or services. This is a comprehensive limitation of liability that applies to all damages of any kind, including (without limitation) compensatory, direct, indirect or consequential damages, loss of data, income or profit, loss of or damage to property and claims of third parties.' }], style: 'normal' }
  ];

  return (
    <div className="section" style={{ padding: '4rem 0', paddingTop: '180px' }}>
      <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Medical Disclaimer</h1>
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
