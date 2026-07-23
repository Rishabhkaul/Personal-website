import type { MetadataRoute } from 'next'
import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://rishabhkaul.xyz'

export default function sitemap(): MetadataRoute.Sitemap {
  let blogs: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    priority: 0.7,
  }))

  let routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split('T')[0],
    },
    {
      url: `${baseUrl}/speaking`,
      lastModified: new Date().toISOString().split('T')[0],
    },
  ]

  return [...routes, ...blogs]
}
