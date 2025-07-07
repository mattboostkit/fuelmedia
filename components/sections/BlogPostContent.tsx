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
        return <div className="my-8 flex items-center justify-center w-full h-64 bg-gray-800 rounded-lg"><span className="text-flame-orange/80">Image not available</span></div>;
      }
      return (
        <div className="my-8 flex justify-center">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || 'Blog image'}
            width={800}
            height={450}
            className="rounded-lg max-w-full h-auto shadow-lg border border-white/10"
          />
        </div>
      )
    },
    codeBlock: ({ value }: any) => {
      if (!value?.code) {
        return null
      }
      return (
        <div className="my-8">
          {value.filename && (
            <div className="bg-gray-800 text-flame-orange px-4 py-2 rounded-t-lg border-b border-gray-700 text-sm font-mono">
              {value.filename}
            </div>
          )}
          <pre className={`bg-gray-900 text-white p-4 rounded-lg overflow-x-auto ${value.filename ? 'rounded-t-none' : ''}`}>
            <code className={`language-${value.language || 'text'}`}>{value.code}</code>
          </pre>
        </div>
      )
    },
  },
  block: {
    h1: ({ children }: any) => children ? <h1 className="text-4xl font-bebas mt-8 mb-4 text-neutral-900 dark:text-white">{children}</h1> : null,
    h2: ({ children }: any) => children ? <h2 className="text-3xl font-bebas mt-8 mb-4 text-neutral-900 dark:text-white">{children}</h2> : null,
    h3: ({ children }: any) => children ? <h3 className="text-2xl font-bebas mt-6 mb-3 text-neutral-900 dark:text-white">{children}</h3> : null,
    normal: ({ children }: any) => children ? <p className="mb-6 text-neutral-800 dark:text-white/80 leading-relaxed">{children}</p> : null,
    blockquote: ({ children }: any) => children ? (
      <blockquote className="border-l-4 border-flame-orange pl-6 my-6 italic text-neutral-700 dark:text-white/70">{children}</blockquote>
    ) : null,
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || '#'
      return children ? (
        <a href={href} className="text-flame-orange hover:text-flame-yellow transition-colors">{children}</a>
      ) : null
    },
    strong: ({ children }: any) => children ? <strong className="font-semibold text-neutral-900 dark:text-white">{children}</strong> : null,
    em: ({ children }: any) => children ? <em className="italic">{children}</em> : null,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 mb-6 text-neutral-800 dark:text-white/80">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 mb-6 text-neutral-800 dark:text-white/80">{children}</ol>,
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
    <article className="min-h-screen pt-24 pb-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-6 md:p-10"
        >
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="mb-6 group">
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
              Back to Blog
            </Button>
          </Link>

          {post.mainImage ? (
            <div className="relative h-72 md:h-96 mb-6 rounded-xl overflow-hidden">
              <Image
                src={urlFor(post.mainImage).width(1200).height(675).url()}
                alt={post.title}
                fill
                className="object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = '/public/globe.svg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ) : (
            <div className="flex items-center justify-center h-40 mb-6 rounded-xl bg-gradient-to-r from-flame-orange/20 to-flame-red/20 border border-flame-orange/30">
              <span className="text-flame-orange font-semibold">Image not available</span>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mb-2">
            {post.categories?.map((category) => (
              <span
                key={category._id}
                className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-flame-orange to-flame-red text-white font-semibold shadow border border-white/10"
              >
                {category.title}
              </span>
            ))}
          </div>

          <AnimatedText variant="slideUp" className="h1 text-neutral-900 dark:text-white mb-2">
            {post.title}
          </AnimatedText>

          <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-white/70 mb-6 border-b border-flame-orange/30 pb-4">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(36).height(36).url()}
                    alt={post.author.name}
                    width={36}
                    height={36}
                    className="rounded-full border border-flame-orange/40"
                  />
                )}
                <span className="font-semibold">{post.author.name}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{formatDate(post.publishedAt)}</span>
            </div>
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 text-flame-orange hover:text-flame-red transition-colors"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none dark:prose-invert"
          >
            <PortableText value={post.body} components={{
              ...portableTextComponents,
              types: {
                ...portableTextComponents.types,
                image: ({ value }: any) => {
                  if (!value?.asset?._ref) {
                    return <div className="my-6 flex items-center justify-center w-full h-32 bg-gradient-to-r from-flame-orange/10 to-flame-red/10 rounded-lg"><span className="text-flame-orange/80">Image not available</span></div>;
                  }
                  return (
                    <div className="my-6 flex justify-center">
                      <Image
                        src={urlFor(value).width(800).url()}
                        alt={value.alt || 'Blog image'}
                        width={800}
                        height={450}
                        className="rounded-lg max-w-full h-auto shadow border border-flame-orange/20"
                      />
                    </div>
                  )
                },
                codeBlock: ({ value }: any) => {
                  if (!value?.code) return null;
                  return (
                    <div className="my-6 bg-neutral-900 border border-flame-orange/30 rounded-lg overflow-x-auto">
                      {value.filename && (
                        <div className="bg-neutral-800 text-flame-orange px-4 py-2 rounded-t-lg border-b border-flame-orange/20 text-sm font-mono">
                          {value.filename}
                        </div>
                      )}
                      <pre className="text-white p-4 font-mono text-sm">
                        <code>{value.code}</code>
                      </pre>
                    </div>
                  );
                },
              },
            } as any} />
          </motion.div>

          {post.author?.bio && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-br from-flame-orange/10 to-flame-red/10 border border-flame-orange/20 shadow max-w-xl mx-auto"
            >
              <div className="w-full border-b border-flame-orange/20 mb-3 pb-1">
                <h3 className="font-bebas text-lg text-flame-orange">About the Author</h3>
              </div>
              <div className="flex items-start gap-3">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).width(48).height(48).url()}
                    alt={post.author.name}
                    width={48}
                    height={48}
                    className="rounded-full border border-flame-orange/30"
                  />
                )}
                <div>
                  <h4 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">{post.author.name}</h4>
                  <p className="text-neutral-700 dark:text-white/80 text-sm">{post.author.bio}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </article>
  )
}