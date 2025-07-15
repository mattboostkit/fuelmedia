'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, AnimatedText, Button } from '@/components/ui'
import { FileSearch, TrendingUp, Shield, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Media Audits',
    description: 'Comprehensive financial media audits that uncover inefficiencies, optimise contracts, and deliver significant commercial improvements.',
    gradient: 'from-primary to-secondary-pink',
    href: '/services/uk-media-audit',
    stat: '20-30% savings'
  },
  {
    icon: TrendingUp,
    title: 'Agency Pitches',
    description: 'Expert-led media agency selection processes that ensure you partner with agencies aligned to your growth objectives.',
    gradient: 'from-primary to-secondary-blue',
    href: '/services/agency-pitch-management',
    stat: '200+ pitches managed'
  },
  {
    icon: Shield,
    title: 'Contract Negotiations',
    description: 'Strategic negotiation expertise that secures better terms, protects your interests, and maximises media investment value.',
    gradient: 'from-secondary-blue to-secondary-pink',
    href: '/services/contract-negotiation',
    stat: '£50M+ saved'
  },
  {
    icon: BarChart3,
    title: 'Performance Reviews',
    description: 'Data-driven performance frameworks that measure effectiveness, identify opportunities, and drive continuous improvement.',
    gradient: 'from-secondary-pink to-primary',
    href: '/services/performance-review',
    stat: '42% ROI improvement'
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4 font-bebas">
            <AnimatedText variant="slideUp">
              Expert Media Audit Services
            </AnimatedText>
          </h2>
          <AnimatedText
            variant="fadeIn"
            delay={0.2}
            className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
          >
            Strategic insight and commercial excellence that transforms your media investment into competitive advantage
          </AnimatedText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="flex-grow">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bebas mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-sm font-semibold text-flame-orange mb-3">{service.stat}</p>
                  <p className="text-gray-600 dark:text-white/60 mb-4">{service.description}</p>
                </div>
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-flame-orange hover:text-flame-red transition-colors group/link"
                >
                  Learn more 
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bebas mb-4 text-gray-900 dark:text-white">
            Ready to Transform Your Media Investment?
          </h3>
          <p className="text-lg text-gray-600 dark:text-white/60 mb-8 max-w-2xl mx-auto">
            Discover how our expert services can save you 20-30% on media spend whilst improving campaign performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}