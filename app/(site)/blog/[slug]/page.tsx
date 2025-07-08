import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { postQuery, postsQuery } from '@/sanity/lib/queries'
import { BlogPostContent } from '@/components/sections/BlogPostContent'
import { BlogPost } from '@/types/sanity'
import { mockBlogPost, mockPosts } from '@/lib/mockData'

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const posts = await client.fetch(postsQuery)
    const allPosts = posts.length > 0 ? posts : mockPosts
    return allPosts.map((post: BlogPost) => ({
      slug: post.slug.current,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return mockPosts.map((post: BlogPost) => ({
      slug: post.slug.current,
    }))
  }
}

async function getPost(slug: string) {
  try {
    const post = await client.fetch(postQuery, { slug })
    if (post) return post
    
    // Fallback to mock data for development
    if (slug === mockBlogPost.slug.current) {
      return mockBlogPost
    }
    
    return null
  } catch (error) {
    console.error('Error fetching post:', error)
    // Fallback to mock data for development
    if (slug === mockBlogPost.slug.current) {
      return mockBlogPost
    }
    return null
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Fuel Media & Marketing',
    }
  }

  return {
    title: `${post.title} - Fuel Media & Marketing`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPostContent post={post} />
}