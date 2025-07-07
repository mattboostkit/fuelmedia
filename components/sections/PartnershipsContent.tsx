'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card, Button } from '@/components/ui'
import { Handshake, TrendingUp, Shield, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

const partnerCategories = [
  {
    id: 'consultancies',
    title: 'Management Consultancies',
    description: 'Partner with us to deliver comprehensive media audit solutions to your clients.',
    benefits: ['White-label audit services', 'Joint client engagements', 'Specialist expertise access', 'Revenue sharing models'],
  },
  {
    id: 'procurement',
    title: 'Procurement Specialists',
    description: 'Enhance your procurement services with our deep media expertise and benchmarking data.',
    benefits: ['Media category expertise', 'Benchmarking database access', 'Contract negotiation support', 'Training and certification'],
  },
  {
    id: 'technology',
    title: 'Technology Partners',
    description: 'Integrate cutting-edge tech solutions to enhance media transparency and performance.',
    benefits: ['API integration', 'Data visualization tools', 'Performance dashboards', 'Automated reporting'],
  },
  {
    id: 'professional',
    title: 'Professional Services',
    description: 'Legal, financial, and accounting firms seeking media expertise for their clients.',
    benefits: ['Client referrals', 'Expert witness services', 'Due diligence support', 'Litigation support'],
  },
]

const benefits = [
  {
    icon: Handshake,
    title: 'Mutual Success',
    description: 'Create value for your clients while growing your service portfolio.',
  },
  {
    icon: TrendingUp,
    title: 'Revenue Growth',
    description: 'Access new revenue streams through media audit partnerships.',
  },
  {
    icon: Shield,
    title: 'Industry Expertise',
    description: 'Leverage 50+ years of combined media experience.',
  },
  {
    icon: Star,
    title: 'White Glove Service',
    description: 'Dedicated partner support and joint business planning.',
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
            <h1 className="gradient-text mb-6">
              <AnimatedText variant="slideUp">
                Partnership Opportunities
              </AnimatedText>
            </h1>
            <AnimatedText
              variant="fadeIn"
              delay={0.2}
              className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto"
            >
              Collaborate with industry-leading media audit specialists to deliver exceptional 
              value to your clients and expand your service capabilities
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
                      ? 'bg-gradient-to-r from-primary to-secondary-pink text-white'
                      : 'glass-effect text-gray-700 dark:text-white/80 hover:text-gray-900 dark:hover:text-white'
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
                    <h3 className="font-bebas mb-4 gradient-text">{category.title}</h3>
                    <p className="text-gray-700 dark:text-white/80 mb-6">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-gray-600 dark:text-white/70">{benefit}</span>
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
                  <h3 className="font-bebas mb-3 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-white/60">{benefit.description}</p>
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
            <h2 className="gradient-text mb-6 font-bebas">Ready to Partner?</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-8">
              Let&apos;s explore how we can deliver exceptional value to your clients together
            </p>
            <Link href="/contact">
              <Button variant="flame" size="lg" className="group">
                Discuss Partnership
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50 dark:bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6 font-bebas">Partnership Success Stories</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              See how our partners have leveraged our expertise to deliver exceptional value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <h4 className="text-4xl font-bebas text-primary mb-2">£45M</h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Saved for Joint Client
                </p>
                <p className="text-gray-600 dark:text-white/60">
                  Management consultancy partner leveraged our media audit expertise to identify 
                  significant savings for their FTSE 100 client&apos;s media investment.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <h4 className="text-4xl font-bebas text-primary mb-2">12</h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Successful Referrals
                </p>
                <p className="text-gray-600 dark:text-white/60">
                  Procurement specialist partner generated 12 new client engagements through 
                  our white-label media audit services in just 18 months.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <h4 className="text-4xl font-bebas text-primary mb-2">3x</h4>
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Revenue Growth
                </p>
                <p className="text-gray-600 dark:text-white/60">
                  Technology partner tripled their media-related revenue by integrating our 
                  audit methodology into their performance analytics platform.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6 font-bebas">How We Partner</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Our partnership process is designed to ensure mutual success from day one
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0 text-white font-bebas text-xl">
                  1
                </div>
                <div>
                  <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">
                    Initial Consultation
                  </h3>
                  <p className="text-gray-600 dark:text-white/60">
                    We explore your business objectives, client base, and how our media audit 
                    expertise can complement your existing services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0 text-white font-bebas text-xl">
                  2
                </div>
                <div>
                  <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">
                    Partnership Agreement
                  </h3>
                  <p className="text-gray-600 dark:text-white/60">
                    We establish clear terms, revenue sharing models, and service level agreements 
                    that ensure transparency and mutual benefit.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0 text-white font-bebas text-xl">
                  3
                </div>
                <div>
                  <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">
                    Training & Enablement
                  </h3>
                  <p className="text-gray-600 dark:text-white/60">
                    Your team receives comprehensive training on our methodologies, tools, and 
                    best practices for identifying media audit opportunities.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0 text-white font-bebas text-xl">
                  4
                </div>
                <div>
                  <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">
                    Ongoing Collaboration
                  </h3>
                  <p className="text-gray-600 dark:text-white/60">
                    Regular reviews, joint business planning, and continuous support ensure our 
                    partnership delivers lasting value for all parties.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary-pink/10 to-secondary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text mb-6 font-bebas">Start Your Partnership Journey</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              Join our network of trusted partners and unlock new opportunities for growth
            </p>
            <Link href="/contact">
              <Button variant="flame" size="lg" className="group">
                Apply to Partner
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}