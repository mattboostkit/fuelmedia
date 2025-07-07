/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Button } from '@/components/ui'
import { Calendar, ArrowLeft, Share2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/client'
import { formatDate } from '@/lib/utils'
import { BlogPost } from '@/types/sanity'


const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <div className="my-8">
          <Image
            src={urlFor(value).width(1200).url()}
            alt={value.alt || 'Blog image'}
            width={1200}
            height={675}
            className="rounded-lg w-full"
          />
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => children ? <h1 className="text-4xl font-bebas mt-8 mb-4 text-white">{children}</h1> : null,
    h2: ({ children }: any) => children ? <h2 className="text-3xl font-bebas mt-8 mb-4 text-white">{children}</h2> : null,
    h3: ({ children }: any) => children ? <h3 className="text-2xl font-bebas mt-6 mb-3 text-white">{children}</h3> : null,
    normal: ({ children }: any) => children ? <p className="mb-4 text-white/80 leading-relaxed">{children}</p> : null,
    blockquote: ({ children }: any) => children ? (
      <blockquote className="border-l-4 border-flame-orange pl-6 my-6 italic text-white/70">
        {children}
      </blockquote>
    ) : null,
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || '#'
      return children ? (
        <a href={href} className="text-flame-orange hover:text-flame-yellow transition-colors">
          {children}
        </a>
      ) : null
    },
    strong: ({ children }: any) => children ? <strong className="font-semibold text-white">{children}</strong> : null,
    em: ({ children }: any) => children ? <em className="italic">{children}</em> : null,
  },
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    }
  }

  return (
    <article className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-8 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Blog
            </Button>
          </Link>

          {post.mainImage && (
            <div className="relative h-96 md:h-[500px] mb-8 rounded-2xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          )}

          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories?.map((category) => (
                <span
                  key={category._id}
                  className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-flame-orange to-flame-red text-white"
                >
                  {category.title}
                </span>
              ))}
            </div>

            <AnimatedText variant="slideUp" className="h1 text-white mb-4">
              {post.title}
            </AnimatedText>

            <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
              {post.author && (
                <div className="flex items-center gap-3">
                  {post.author.image && (
                    <Image
                      src={urlFor(post.author.image).width(40).height(40).url()}
                      alt={post.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-white">{post.author.name}</p>
                  </div>
                </div>
              )}
              
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>

              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-white/60 hover:text-white transition-colors"
              >
                <Share2 size={16} />
                Share
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <PortableText value={post.body} components={portableTextComponents} />
          </motion.div>

          {post.author?.bio && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-16 p-8 rounded-2xl glass-effect"
            >
              <h3 className="font-bebas text-2xl mb-4 text-white">About the Author</h3>
              <div className="flex items-start gap-4">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(80).height(80).url()}
                    alt={post.author.name}
                    width={80}
                    height={80}
                    className="rounded-full flex-shrink-0"
                  />
                )}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-2">{post.author.name}</h4>
                  <p className="text-white/70">{post.author.bio}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </article>
  )
}