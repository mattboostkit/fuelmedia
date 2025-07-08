'use client'

import { motion } from 'framer-motion'
import { AnimatedText } from '@/components/ui'
import { Globe, Users, Handshake, Leaf, Zap } from 'lucide-react'

const differentiators = [
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'Our founders bring extensive international expertise from leading global markets and agencies.',
  },
  {
    icon: Users,
    title: 'Rounded Expertise',
    description: 'Unique perspective across brand, agency, and platform sides ensures comprehensive understanding.',
  },
  {
    icon: Handshake,
    title: 'Relationship-First',
    description: 'We maximise agency partnerships through collaboration, not confrontation, delivering better outcomes.',
  },
  {
    icon: Leaf,
    title: 'Ethics & Sustainability',
    description: 'Embedded principles ensure responsible media practices that align with your corporate values.',
  },
  {
    icon: Zap,
    title: 'Streamlined Solutions',
    description: 'Smart, efficient methods that deliver results without unnecessary bureaucracy or complexity.',
  },
]

export function AboutSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-primary/10 to-gray-50 dark:from-black dark:via-primary/10 dark:to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="gradient-text mb-4 font-bebas">
            <AnimatedText variant="slideUp">
              Your Competitive Advantage
            </AnimatedText>
          </h2>
          <AnimatedText
            variant="fadeIn"
            delay={0.2}
            className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto"
          >
            We give advertisers a competitive advantage through five key differentiators that set us apart
          </AnimatedText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center">
                  <item.icon className="text-white" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-white/60">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}