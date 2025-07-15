import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries'
import { BlogContent } from '@/components/sections/BlogContent'
import { mockPosts, mockCategories } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'UK Media Audit Blog | Industry Insights & Cost-Saving Tips | Fuel Media',
  description: 'Expert insights on UK media auditing, agency management, and advertising optimization. Learn how to save 20-30% on media spend with proven strategies from industry leaders.',
  keywords: ['UK media audit blog', 'advertising cost reduction', 'media buying tips', 'agency management insights', 'UK advertising trends', 'media spend optimization'],
  openGraph: {
    title: 'Fuel Media Blog - UK Media Audit Insights & Strategies',
    description: 'Stay ahead with expert insights on media auditing, agency performance, and cost optimization. Trusted by UK\'s leading advertisers.',
  }
}

export const revalidate = 60

async function getPosts() {
  try {
    const posts = await client.fetch(postsQuery)
    return posts.length > 0 ? posts : mockPosts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return mockPosts
  }
}

async function getCategories() {
  try {
    const categories = await client.fetch(categoriesQuery)
    return categories.length > 0 ? categories : mockCategories
  } catch (error) {
    console.error('Error fetching categories:', error)
    return mockCategories
  }
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([getPosts(), getCategories()])
  
  return <BlogContent posts={posts} categories={categories} />
}