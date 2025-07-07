'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card } from '@/components/ui'
import { Target, Rocket, Users, Award } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Precision Targeting',
    description: 'We hit the mark every time with data-driven strategies that reach your exact audience.',
  },
  {
    icon: Rocket,
    title: 'Explosive Growth',
    description: 'Our campaigns are designed to launch brands into the stratosphere of success.',
  },
  {
    icon: Users,
    title: 'Collaborative Fire',
    description: 'We work as an extension of your team, bringing the heat to every project.',
  },
  {
    icon: Award,
    title: 'Award-Winning Results',
    description: 'Our track record speaks for itself with numerous industry accolades.',
  },
]

const timeline = [
  { year: '2018', event: 'Fuel Media sparked to life with a vision to disrupt' },
  { year: '2019', event: 'First major brand transformation ignited success' },
  { year: '2020', event: 'Expanded team and services during digital revolution' },
  { year: '2021', event: 'Launched innovative AI-powered marketing solutions' },
  { year: '2022', event: 'Reached 100+ brands transformed milestone' },
  { year: '2023', event: 'Opened new offices and went international' },
  { year: '2024', event: 'Leading the charge in next-gen digital marketing' },
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
            <AnimatedText variant="fadeIn" delay={0.2} className="text-xl text-white/80 leading-relaxed">
              Born from a passion to revolutionize digital marketing, Fuel Media & Marketing 
              emerged as a disruptive force in the industry. We don't just follow trends—we 
              create them. Our flame-powered approach transforms brands from sparks into 
              infernos of success.
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
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-flame-orange to-flame-red flex items-center justify-center flex-shrink-0">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bebas mb-2 text-white">{value.title}</h3>
                      <p className="text-white/60">{value.description}</p>
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
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-flame-orange via-flame-red to-flame-yellow" />
              
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
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-flame-orange to-flame-red rounded-full border-4 border-black mx-4 flex-shrink-0" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <h3 className="text-3xl font-bebas text-flame-orange mb-2">{item.year}</h3>
                    <p className="text-white/80">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}