import Link from 'next/link';
import type { Metadata } from 'next';

// This page becomes fully dynamic once Sanity is connected.
// For now, it shows a placeholder until credentials are added.
export const dynamic = 'force-static';
export const dynamicParams = true;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Blog Post | NeoFatbury`,
    description: `Read our latest article on skin, hair and slimming tips at NeoFatbury Hyderabad.`,
  };
}

// No static params generated until Sanity is connected — pages will be
// rendered on demand (dynamicParams = true above allows this).
export async function generateStaticParams() {
  return [];
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  // Once Sanity is connected, swap this block with the real Sanity fetch
  // using getSingleBlogPost(slug) from '@/sanity/fetchers/blog'
  const isSanityReady = false; // Change to true when Sanity account is set up
  void slug;

  if (!isSanityReady) {
    return (
      <section className="section" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📝</div>
          <h1 className="section-title">Blog Post Coming Soon</h1>
          <p className="text-muted" style={{ marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
            This post is being prepared. Please check back soon.
          </p>
          <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return null;
}
