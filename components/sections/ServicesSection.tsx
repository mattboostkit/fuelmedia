'use client'

import { motion } from 'framer-motion'
import { Card, AnimatedText } from '@/components/ui'
import { FileSearch, TrendingUp, Shield, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: FileSearch,
    title: 'Media Audits',
    description: 'Comprehensive financial media audits that uncover inefficiencies, optimize contracts, and deliver significant commercial improvements.',
    gradient: 'from-flame-orange to-flame-red',
  },
  {
    icon: TrendingUp,
    title: 'Agency Pitches',
    description: 'Expert-led media agency selection processes that ensure you partner with agencies aligned to your growth objectives.',
    gradient: 'from-primary to-secondary-blue',
  },
  {
    icon: Shield,
    title: 'Contract Negotiations',
    description: 'Strategic negotiation expertise that secures better terms, protects your interests, and maximizes media investment value.',
    gradient: 'from-secondary-blue to-secondary-pink',
  },
  {
    icon: BarChart3,
    title: 'Performance Reviews',
    description: 'Data-driven performance frameworks that measure effectiveness, identify opportunities, and drive continuous improvement.',
    gradient: 'from-secondary-pink to-flame-yellow',
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
          <AnimatedText variant="slideUp" className="h2 gradient-text mb-4">
            Expert Media Audit Services
          </AnimatedText>
          <AnimatedText
            variant="fadeIn"
            delay={0.2}
            className="text-xl text-white/60 max-w-2xl mx-auto"
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
              <Card className="h-full group">
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-bebas mb-3 text-white">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}