import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import ReplicaHero from '@/components/ReplicaHero';
import { getBlogPosts } from '@/sanity/fetchers/blog';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Wellness Blog | NeoFatbury Skin Hair Slimming Clinic Hyderabad',
  description:
    'Expert tips on skin care, hair restoration, and weight loss from certified dermatologists at NeoFatbury Hyderabad.',
};

const CATEGORY_LABELS: Record<string, string> = {
  'skin-care': 'Skin Care',
  'hair-care': 'Hair Care',
  'weight-loss': 'Weight Loss',
  'news': 'Clinic Updates',
  'clinical-tips': 'Expert Opinions',
};

export default async function BlogListingPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <ReplicaHero 
        titleTeal1=""
        titleTeal2=""
        titleOrange1=""
        titleOrange2=""
        subtext=""
        imageSrc="/images/neofatbury-home-hero.png"
      />

      <section className="section">
        <div className="container">
          {posts && posts.length > 0 ? (
            <div className="grid grid-3">
              {posts.map((post: any) => (
                <article
                  key={post._id}
                  className="card"
                  style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                    <Image 
                      src={post.img || '/images/neofatbury-home-hero.png'} 
                      alt={post.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                    <span style={{
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
                    }}>
                      {CATEGORY_LABELS[post.category] ?? post.category}
                    </span>
                  </div>

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
          ) : (
            <div className="text-center" style={{ padding: '4rem 0' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
              <h2 className="section-title">New Articles Coming Soon</h2>
              <p className="text-muted">Stay tuned for expert medical advice and wellness tips.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
