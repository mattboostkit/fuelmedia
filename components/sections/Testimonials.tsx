'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { Card } from '@/components/ui'
import { StructuredData, generateReviewSchema } from '@/components/StructuredData'

const testimonials = [
  {
    id: 1,
    author: 'Sarah Thompson',
    role: 'Marketing Director',
    company: 'Major UK Retailer',
    rating: 5,
    reviewBody: 'Fuel Media\'s audit revealed £2.8M in annual savings we hadn\'t spotted. Their systematic approach uncovered inefficiencies in our programmatic buying and agency fees. Implementation was smooth and results immediate.',
    datePublished: '2024-01-12',
    highlight: '£2.8M annual savings'
  },
  {
    id: 2,
    author: 'David Mitchell',
    role: 'Chief Marketing Officer',
    company: 'Leading Financial Services',
    rating: 5,
    reviewBody: 'The agency pitch management service was exceptional. Fuel Media guided us through selecting a new £45M media agency, securing 28% better terms than our previous contract. Their expertise saved us months of work.',
    datePublished: '2024-01-08',
    highlight: '28% fee reduction'
  },
  {
    id: 3,
    author: 'Emma Roberts',
    role: 'Head of Media',
    company: 'UK FMCG Brand',
    rating: 5,
    reviewBody: 'Quarterly performance reviews transformed our media effectiveness. We\'ve seen 42% ROI improvement in just 12 months. Fuel Media\'s insights are invaluable for continuous optimisation.',
    datePublished: '2024-01-05',
    highlight: '42% ROI improvement'
  },
  {
    id: 4,
    author: 'James Wilson',
    role: 'Marketing VP',
    company: 'Technology Company',
    rating: 5,
    reviewBody: 'Contract renegotiation with Fuel Media\'s support saved us £1.2M annually. They identified clauses we\'d overlooked and secured transparency provisions that give us complete visibility into our media buying.',
    datePublished: '2024-01-03',
    highlight: '£1.2M saved annually'
  },
  {
    id: 5,
    author: 'Rachel Green',
    role: 'Brand Director',
    company: 'UK Healthcare Provider',
    rating: 5,
    reviewBody: 'Fuel Media\'s audit was eye-opening. They identified 35% waste in our digital spend and helped us restructure our agency relationships. Professional, thorough, and results-driven approach throughout.',
    datePublished: '2023-12-28',
    highlight: '35% waste eliminated'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Trusted by leading UK advertisers to maximise their media investments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 md:p-12 relative overflow-hidden">
                  <StructuredData data={generateReviewSchema(currentTestimonial)} />
                  
                  <Quote className="absolute top-4 right-4 text-flame-orange/20 w-24 h-24" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-flame-orange fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg md:text-xl mb-6 text-foreground/90 italic">
                      "{currentTestimonial.reviewBody}"
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-lg">{currentTestimonial.author}</p>
                        <p className="text-foreground/70">
                          {currentTestimonial.role}, {currentTestimonial.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bebas text-flame-orange">
                          {currentTestimonial.highlight}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full ml-4 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full mr-4 p-2 rounded-full bg-card/80 hover:bg-card transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-flame-orange'
                    : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bebas text-flame-orange mb-2">£710M+</p>
              <p className="text-foreground/70">Total Client Savings</p>
            </div>
            <div>
              <p className="text-4xl font-bebas text-flame-orange mb-2">200+</p>
              <p className="text-foreground/70">UK Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bebas text-flame-orange mb-2">4.9/5</p>
              <p className="text-foreground/70">Average Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bebas text-flame-orange mb-2">98%</p>
              <p className="text-foreground/70">Client Retention</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}