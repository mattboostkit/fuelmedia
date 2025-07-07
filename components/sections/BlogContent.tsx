'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card } from '@/components/ui'
import { Calendar, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/client'
import { formatDate } from '@/lib/utils'
import { useState } from 'react'
import { BlogPost, Category } from '@/types/sanity'

interface BlogContentProps {
  posts: BlogPost[]
  categories: Category[]
}

export function BlogContent({ posts, categories }: BlogContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = !selectedCategory || 
      post.categories?.some(cat => cat._id === selectedCategory)
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false)
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <AnimatedText variant="slideUp" className="h1 gradient-text mb-6">
              Igniting Ideas
            </AnimatedText>
            <AnimatedText
              variant="fadeIn"
              delay={0.2}
              className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto"
            >
              Insights, trends, and strategies to fuel your brand&apos;s growth
            </AnimatedText>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/4">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="sticky top-32 space-y-6"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors"
                  />
                </div>

                <div>
                  <h3 className="font-bebas text-xl mb-4 text-gray-900 dark:text-white">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                        !selectedCategory
                          ? 'bg-gradient-to-r from-flame-orange to-flame-red text-white'
                          : 'text-gray-700 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                      }`}
                    >
                      All Posts
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category._id}
                        onClick={() => setSelectedCategory(category._id)}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category._id
                            ? 'bg-gradient-to-r from-flame-orange to-flame-red text-white'
                            : 'text-gray-700 dark:text-white/60 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10'
                        }`}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${post.slug.current}`}>
                      <Card className="h-full group cursor-pointer">
                        {post.mainImage && (
                          <div className="relative h-48 -m-6 mb-4 overflow-hidden rounded-t-2xl">
                            <Image
                              src={urlFor(post.mainImage).width(600).height(400).url()}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          </div>
                        )}
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.categories?.map((category) => (
                            <span
                              key={category._id}
                              className="px-3 py-1 text-xs rounded-full bg-white/10 text-white/70"
                            >
                              {category.title}
                            </span>
                          ))}
                        </div>

                        <h2 className="text-2xl font-bebas mb-3 text-white group-hover:text-flame-orange transition-colors">
                          {post.title}
                        </h2>
                        
                        {post.excerpt && (
                          <p className="text-white/60 mb-4 line-clamp-3">{post.excerpt}</p>
                        )}
                        
                        <div className="flex items-center justify-between text-sm text-white/40">
                          <div className="flex items-center gap-4">
                            {post.author && (
                              <div className="flex items-center gap-2">
                                <User size={16} />
                                <span>{post.author.name}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-2">
                              <Calendar size={16} />
                              <span>{formatDate(post.publishedAt)}</span>
                            </div>
                          </div>
                          
                          <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                          />
                        </div>
                      </Card>
                    </Link>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <p className="text-white/60">No posts found matching your criteria.</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}