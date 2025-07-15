'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Card } from '@/components/ui'
import { StructuredData, generateFAQSchema } from '@/components/StructuredData'

const faqs = [
  {
    question: 'What is a media audit and why do UK advertisers need one?',
    answer: 'A media audit is a comprehensive review of your advertising spend, agency relationships, and campaign performance. UK advertisers typically save 20-30% through auditing by identifying inefficiencies, excessive fees, and missed opportunities. With media costs rising and budgets under pressure, regular audits ensure every pound works harder.'
  },
  {
    question: 'How much can we expect to save through a media audit?',
    answer: 'Our UK clients typically save between 20-30% of their media spend, with an average saving of £2.3M annually. The exact amount depends on your current spend levels, agency arrangements, and media mix. We\'ve helped clients save over £710M collectively through our audit programmes.'
  },
  {
    question: 'How long does a typical media audit take?',
    answer: 'A comprehensive UK media audit typically takes 4-6 weeks from start to finish. This includes data collection (1-2 weeks), analysis and benchmarking (2-3 weeks), and report preparation with recommendations (1 week). We can expedite the process for urgent requirements.'
  },
  {
    question: 'What\'s included in your agency pitch management service?',
    answer: 'Our agency pitch management covers the entire selection process: strategic planning, agency long-listing, RFI/RFP development, pitch coordination, objective evaluation, and contract negotiation. We typically manage the process in 6-8 weeks and help secure 25-30% better commercial terms.'
  },
  {
    question: 'How often should we review our media performance?',
    answer: 'We recommend quarterly performance reviews for optimal results. This allows you to track KPIs, identify issues early, and implement improvements quickly. Annual reviews are the minimum, but quarterly assessments typically deliver 15-20% better ROI through continuous optimisation.'
  },
  {
    question: 'Are you independent from media agencies and vendors?',
    answer: 'Yes, we maintain complete independence from all media agencies, vendors, and media owners. We have no financial relationships or kickbacks that could compromise our objectivity. Our recommendations are based solely on what\'s best for your business.'
  },
  {
    question: 'What types of contracts can you help negotiate?',
    answer: 'We negotiate all types of media and marketing contracts including: agency retainer agreements, project-based contracts, programmatic deals, media buying agreements, data and technology contracts, and production agreements. We typically achieve 20-40% fee reductions.'
  },
  {
    question: 'Do you work with businesses outside London?',
    answer: 'Absolutely. While we\'re London-based, we serve clients across the UK including Manchester, Birmingham, Edinburgh, Leeds, and beyond. We have local market knowledge for all major UK cities and can conduct audits remotely or on-site as needed.'
  },
  {
    question: 'What size companies do you typically work with?',
    answer: 'We work with UK advertisers spending £1M+ annually on media, ranging from ambitious SMEs to FTSE 100 companies. Our services scale to match your needs, whether you\'re spending £2M or £200M. The principles of efficiency apply regardless of size.'
  },
  {
    question: 'How do we get started with Fuel Media?',
    answer: 'Simply contact us for a free consultation. We\'ll discuss your current challenges, media spend, and objectives. Within 48 hours, we\'ll provide a tailored proposal outlining our recommended approach, timeline, and investment. Most clients see ROI within the first quarter.'
  }
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <Card className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-muted/50 transition-colors"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-lg">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-flame-orange" />
          ) : (
            <Plus className="w-5 h-5 text-flame-orange" />
          )}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 text-foreground/80">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Card>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <StructuredData data={generateFAQSchema(faqs)} />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Everything you need to know about UK media auditing and our services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80 mb-6">
            Have more questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+442012345678"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-flame-orange text-white hover:bg-flame-orange/90 transition-colors"
            >
              Call +44 20 1234 5678
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-flame-orange text-flame-orange hover:bg-flame-orange/10 transition-colors"
            >
              Send Us a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}