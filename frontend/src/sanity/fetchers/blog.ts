import { client, isSanityConfigured } from '@/sanity/client';
import type { SanityImage } from '@/sanity/types';

export interface BlogPostSummary {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  category: string;
  excerpt: string;
  featuredImage: SanityImage | null;
}

export interface BlogPostFull extends BlogPostSummary {
  body: unknown[]; // Specific block content types can be added later
  seo: { metaTitle: string; metaDescription: string };
}

const allBlogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id, title, "slug": slug.current, publishedAt, category, excerpt, featuredImage
}`;

const singleBlogPostQuery = (slug: string) => `
  *[_type == "blogPost" && slug.current == "${slug}"][0]{
    _id, title, "slug": slug.current, publishedAt, category, excerpt, featuredImage, body, seo
  }
`;

// Static sample blog posts (shown until Sanity is connected)
const STATIC_POSTS: BlogPostSummary[] = [
  {
    _id: '1',
    title: 'How to Prevent Hair Loss in Your 30s',
    slug: 'how-to-prevent-hair-loss',
    publishedAt: new Date().toISOString(),
    category: 'hair',
    excerpt: 'Hair loss in your 30s is more common than you think. Here are clinically proven steps to slow it down and promote regrowth.',
    featuredImage: null,
  },
  {
    _id: '2',
    title: '5 Skin Brightening Tips from Dermatologists',
    slug: 'skin-brightening-tips',
    publishedAt: new Date().toISOString(),
    category: 'skin',
    excerpt: 'Achieve a natural glow with these proven skin brightening techniques recommended by our expert dermatologists.',
    featuredImage: null,
  },
  {
    _id: '3',
    title: 'CoolSculpting vs. Traditional Liposuction: What to Know',
    slug: 'coolsculpting-vs-liposuction',
    publishedAt: new Date().toISOString(),
    category: 'slimming',
    excerpt: 'Trying to decide between CoolSculpting and traditional liposuction? We break down the differences, recovery time, and results.',
    featuredImage: null,
  },
];

export async function getAllBlogPosts(): Promise<BlogPostSummary[]> {
  if (!isSanityConfigured) return STATIC_POSTS;
  try {
    const data = await client.fetch(allBlogPostsQuery);
    return data?.length ? data : STATIC_POSTS;
  } catch {
    return STATIC_POSTS;
  }
}

export async function getSingleBlogPost(slug: string): Promise<BlogPostFull | null> {
  if (!isSanityConfigured) return null;
  try {
    return await client.fetch(singleBlogPostQuery(slug));
  } catch {
    return null;
  }
}
