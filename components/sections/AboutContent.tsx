'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card, Button } from '@/components/ui'
import { Target, Rocket, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: Target,
    title: 'Strategic Analysis',
    description: 'Deep-dive audits that uncover hidden inefficiencies and opportunities, delivering actionable insights that transform media performance.',
  },
  {
    icon: Rocket,
    title: 'Commercial Excellence',
    description: 'Over £710M saved through expert negotiations, contract optimization, and strategic media planning that maximizes every pound invested.',
  },
  {
    icon: Users,
    title: 'Global Experience',
    description: 'Five decades of combined expertise across major media networks, bringing unparalleled industry knowledge to every audit.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: '75+ successful audits delivered, 35+ pitch processes managed, and 10+ digital transformation projects completed.',
  },
]

const timeline = [
  { year: '2018', event: 'Founded by senior media executives to address transparency gaps in media investment' },
  { year: '2019', event: 'Completed first major audit saving client £15M in annual media spend' },
  { year: '2020', event: 'Expanded services to include digital transformation and pitch management' },
  { year: '2021', event: 'Achieved £250M cumulative savings milestone for clients' },
  { year: '2022', event: 'Launched proprietary audit methodology and benchmarking tools' },
  { year: '2023', event: 'Surpassed £500M in total client savings across global markets' },
  { year: '2024', event: 'Leading media audit excellence with £710M+ in documented savings' },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <AnimatedText variant="slideUp" className="h1 gradient-text mb-6">
              Our Story
            </AnimatedText>
            <AnimatedText variant="fadeIn" delay={0.2} className="text-xl text-gray-700 dark:text-white/80 leading-relaxed">
              Founded by industry veterans with over 50 years of combined experience across global 
              media networks, Fuel Media & Marketing emerged to address a critical gap in the market. 
              We witnessed firsthand how advertisers were losing millions through inefficient media 
              practices and opaque agency relationships. Our mission is simple: bring transparency, 
              accountability, and commercial excellence to every media investment.
            </AnimatedText>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bebas mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                      <p className="text-gray-600 dark:text-white/60">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center gradient-text mb-12"
            >
              Our Journey
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary-pink to-secondary-blue" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2" />
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-primary to-secondary-pink rounded-full border-4 border-gray-100 dark:border-black mx-4 flex-shrink-0" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <h3 className="text-3xl font-bebas text-primary mb-2">{item.year}</h3>
                    <p className="text-gray-700 dark:text-white/80">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              We bring unparalleled depth of knowledge across every aspect of media investment, 
              from traditional channels to emerging digital platforms.
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
                <h3 className="text-2xl font-bebas mb-4 gradient-text">Financial Auditing</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  Comprehensive review of media spend, contract terms, and agency fees. We analyze 
                  every pound to ensure maximum value and identify savings opportunities.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Contract compliance verification</li>
                  <li>• Fee structure optimization</li>
                  <li>• Rebate and AVB recovery</li>
                  <li>• Benchmark analysis</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bebas mb-4 gradient-text">Performance Review</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  Data-driven analysis of campaign effectiveness, media mix optimization, and 
                  strategic recommendations for improved ROI.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Campaign effectiveness analysis</li>
                  <li>• Media mix modeling</li>
                  <li>• Attribution assessment</li>
                  <li>• Strategic recommendations</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bebas mb-4 gradient-text">Pitch Management</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  End-to-end management of media agency selection processes, ensuring you find 
                  the perfect partner for your business needs.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Brief development</li>
                  <li>• Agency evaluation</li>
                  <li>• Negotiation support</li>
                  <li>• Contract finalization</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Our senior team brings decades of experience from leading global media agencies, 
              tech platforms, and consultancies.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                Our leadership team has held senior positions at WPP, Publicis, Omnicom, and 
                independent agencies. We&apos;ve managed multi-million pound accounts for FTSE 100 
                companies and global brands across every major market.
              </p>
              <p className="text-lg text-gray-700 dark:text-white/80 leading-relaxed mb-6">
                This unique blend of agency-side and client-side experience gives us unmatched 
                insight into both sides of the media equation. We know how agencies operate, where 
                margins are hidden, and how to negotiate the best possible terms for our clients.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <h4 className="text-xl font-bebas text-primary mb-2">50+ Years</h4>
                  <p className="text-gray-600 dark:text-white/60">Combined media experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bebas text-primary mb-2">£5B+</h4>
                  <p className="text-gray-600 dark:text-white/60">Media budgets managed</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bebas text-primary mb-2">15+ Markets</h4>
                  <p className="text-gray-600 dark:text-white/60">Global experience</p>
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bebas text-primary mb-2">100%</h4>
                  <p className="text-gray-600 dark:text-white/60">Independent & unbiased</p>
                </div>
              </div>
            </Card>
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
            <h2 className="gradient-text mb-6">Ready to Transform Your Media Investment?</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              Join the growing list of advertisers who have saved millions through our expert 
              media audit services.
            </p>
            <Link href="/contact">
              <Button variant="flame" size="lg" className="group">
                Schedule Your Media Audit
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}