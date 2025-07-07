'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card, Button } from '@/components/ui'
import { Handshake, TrendingUp, Shield, Star } from 'lucide-react'
import { useState } from 'react'

const partnerCategories = [
  {
    id: 'strategic',
    title: 'Strategic Partners',
    description: 'Join forces with us to create comprehensive solutions that drive mutual growth.',
    benefits: ['Co-branded campaigns', 'Revenue sharing', 'Joint ventures', 'Exclusive territories'],
  },
  {
    id: 'technology',
    title: 'Technology Partners',
    description: 'Integrate your tech solutions with our marketing expertise for powerful results.',
    benefits: ['API integration', 'Technical support', 'Product development', 'Innovation labs'],
  },
  {
    id: 'agency',
    title: 'Agency Partners',
    description: 'Collaborate with fellow agencies to expand capabilities and reach new markets.',
    benefits: ['White-label services', 'Resource sharing', 'Cross-referrals', 'Joint pitches'],
  },
  {
    id: 'affiliate',
    title: 'Affiliate Partners',
    description: 'Earn rewards by referring clients to our flame-powered marketing services.',
    benefits: ['Commission structure', 'Marketing materials', 'Dedicated support', 'Performance bonuses'],
  },
]

const benefits = [
  {
    icon: Handshake,
    title: 'Collaborative Growth',
    description: 'Expand your reach and capabilities through strategic partnerships.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Opportunities',
    description: 'Unlock new revenue streams with our partnership programs.',
  },
  {
    icon: Shield,
    title: 'Trusted Network',
    description: 'Join a network of industry leaders and innovators.',
  },
  {
    icon: Star,
    title: 'Premium Support',
    description: 'Get dedicated support and resources to ensure success.',
  },
]

export function PartnershipsContent() {
  const [activeCategory, setActiveCategory] = useState('strategic')

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
              Partner With Fire
            </AnimatedText>
            <AnimatedText
              variant="fadeIn"
              delay={0.2}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Join forces with Fuel Media & Marketing to create explosive growth opportunities 
              and transform the digital landscape together
            </AnimatedText>
          </motion.div>

          <div className="mb-20">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {partnerCategories.map((category) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-flame-orange to-flame-red text-white'
                      : 'glass-effect text-white/80 hover:text-white'
                  }`}
                >
                  {category.title}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {partnerCategories.map((category) => {
                if (category.id !== activeCategory) return null

                return (
                  <Card key={category.id} className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-bebas mb-4 gradient-text">{category.title}</h3>
                    <p className="text-white/80 mb-6">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-flame-orange rounded-full" />
                          <span className="text-white/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                )
              })}
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-primary to-secondary-blue flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-bebas mb-3 text-white">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass-effect rounded-2xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="gradient-text mb-6">Ready to Partner?</h2>
            <p className="text-xl text-white/80 mb-8">
              Let&apos;s explore how we can create explosive growth together
            </p>
            <Button variant="flame" size="lg">
              Apply for Partnership
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}