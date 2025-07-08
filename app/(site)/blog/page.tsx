import { Metadata } from 'next'
import { client } from '@/sanity/lib/client'
import { postsQuery, categoriesQuery } from '@/sanity/lib/queries'
import { BlogContent } from '@/components/sections/BlogContent'
import { mockPosts, mockCategories } from '@/lib/mockData'

export const metadata: Metadata = {
  title: 'Blog - Fuel Media & Marketing',
  description: 'Insights, trends, and strategies from the Fuel Media & Marketing team.',
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