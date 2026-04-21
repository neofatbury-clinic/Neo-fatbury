import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import { getSingleBlogPost } from '@/sanity/fetchers/blog';
import HeaderWrapper from '@/components/HeaderWrapper';

export const dynamic = 'force-dynamic';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSingleBlogPost(slug);
  return {
    title: `${post?.title || 'Blog'} | NeoFatbury`,
    description: post?.excerpt || `Read our latest article on medical aesthetics at NeoFatbury Hyderabad.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getSingleBlogPost(slug);

  if (!post) {
    return (
      <section className="section" style={{ minHeight: '60vh', textAlign: 'center' }}>
        <div className="container">
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📝</div>
          <h1 className="section-title">Blog Post Not Found</h1>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>We couldn't find the article you're looking for.</p>
          <Link href="/blog" className="btn btn-primary">← Back to Blog</Link>
        </div>
      </section>
    );
  }

  return (
    <article className="section" style={{ paddingTop: '5rem' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <Link href="/blog" style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '2rem', display: 'inline-block' }}>
          ← Back to All Articles
        </Link>
        
        <header style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            {post.category} • {new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1a2b3c', fontWeight: 800, lineHeight: 1.1, marginBottom: '2rem' }}>
            {post.title}
          </h1>
          
          {post.author && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {post.author.image && (
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                  <Image src={post.author.image} alt={post.author.name} fill style={{ objectFit: 'cover' }} />
                </div>
              )}
              <div>
                <div style={{ fontWeight: 700, color: '#1a1a1a' }}>{post.author.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>Clinical Specialist</div>
              </div>
            </div>
          )}
        </header>

        {post.img && (
          <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '12px', overflow: 'hidden', marginBottom: '4rem', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
            <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
          </div>
        )}

        <div className="blog-content" style={contentStyle}>
          <PortableText value={post.body} />
        </div>
        
        <footer style={{ marginTop: '5rem', padding: '3rem', backgroundColor: '#f9fbfb', borderRadius: '12px', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>Want more expert advice?</h3>
          <p style={{ marginBottom: '2rem', color: '#666' }}>Book a free clinical analysis with our doctors today.</p>
          <Link href="/contact-us" className="btn btn-primary">Book Consultation</Link>
        </footer>
      </div>
    </article>
  );
}

const contentStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  lineHeight: '1.9',
  color: '#2c3e50',
};
