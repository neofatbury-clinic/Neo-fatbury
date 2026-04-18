import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wellness Blog | NeoFatbury Skin Hair Slimming Clinic Hyderabad',
  description:
    'Expert tips on skin care, hair restoration, and weight loss from certified dermatologists at NeoFatbury Hyderabad.',
};

const CATEGORY_LABELS: Record<string, string> = {
  skin: 'Skin Care',
  hair: 'Hair Care',
  slimming: 'Slimming',
  general: 'General Wellness',
};

// Static sample posts — replaced automatically once Sanity is connected
const STATIC_POSTS = [
  {
    _id: '1',
    title: 'How to Prevent Hair Loss in Your 30s',
    slug: 'how-to-prevent-hair-loss',
    publishedAt: new Date().toISOString(),
    category: 'hair',
    excerpt:
      'Hair loss in your 30s is more common than you think. Here are clinically proven steps to slow it down and promote regrowth.',
    img: '/images/neofatbury-hair2-banner.webp',
  },
  {
    _id: '2',
    title: '5 Skin Brightening Tips from Dermatologists',
    slug: 'skin-brightening-tips',
    publishedAt: new Date().toISOString(),
    category: 'skin',
    excerpt:
      'Achieve a natural glow with these proven skin brightening techniques recommended by our expert dermatologists.',
    img: '/images/neofatbury-cheek-banner.webp',
  },
  {
    _id: '3',
    title: 'CoolSculpting vs. Traditional Liposuction: What to Know',
    slug: 'coolsculpting-vs-liposuction',
    publishedAt: new Date().toISOString(),
    category: 'slimming',
    excerpt:
      'Trying to decide between CoolSculpting and traditional liposuction? We break down the differences, recovery time, and results.',
    img: '/images/neofatbury-slimming-banner.webp',
  },
];

export default function BlogListingPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--color-primary)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem' }}>
            Wellness <span style={{ color: 'var(--color-accent)' }}>Blog</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.15rem', maxWidth: '600px', margin: '0 auto' }}>
            Expert tips on skin care, hair restoration, and weight management from certified dermatologists.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {STATIC_POSTS.map((post) => (
              <article
                key={post._id}
                className="card"
                style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              >
                <div
                  style={{
                    height: '200px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'var(--color-accent)',
                      color: 'white',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      zIndex: 1
                    }}
                  >
                    {CATEGORY_LABELS[post.category] ?? post.category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </p>
                  <h2 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary)' }}>
                    {post.title}
                  </h2>
                  <p className="text-muted" style={{ fontSize: '0.9rem', flexGrow: 1, marginBottom: '1.25rem' }}>
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn btn-outline btn-small"
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
