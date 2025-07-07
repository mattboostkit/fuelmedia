import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { postQuery, postsQuery } from '@/sanity/lib/queries'
import { BlogPostContent } from '@/components/sections/BlogPostContent'
import { BlogPost } from '@/types/sanity'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await client.fetch(postsQuery)
  return posts.map((post: BlogPost) => ({
    slug: post.slug.current,
  }))
}

async function getPost(slug: string) {
  try {
    const post = await client.fetch(postQuery, { slug })
    return post
  } catch (error) {
    console.error('Error fetching post:', error)
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