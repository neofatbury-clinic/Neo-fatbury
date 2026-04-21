import { client } from '@/sanity/lib/client';

export async function getBlogPosts() {
  const query = `*[_type == "blogPost"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "publishedAt": coalesce(publishedAt, _createdAt),
    category,
    excerpt,
    "img": coverImage.asset->url
  }`;
  const posts = await client.fetch(query);
  return posts.filter((p: any) => !p._id.startsWith('drafts.'));
}

export async function getSingleBlogPost(slug: string) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    ...,
    "img": coverImage.asset->url,
    "author": author-> {
      name,
      "image": image.asset->url
    }
  }`;
  return await client.fetch(query, { slug });
}
