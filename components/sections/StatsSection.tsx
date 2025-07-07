'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 75, suffix: '+', label: 'Financial Media Audits', sublabel: 'Past 24 months' },
  { value: 35, suffix: '+', label: 'Media Agency Pitches', sublabel: 'Delivered successfully' },
  { value: 710, suffix: 'M+', label: '£ Saved for Advertisers', sublabel: 'Through audits & negotiations' },
  { value: 10, suffix: '+', label: 'Tech Transformation Projects', sublabel: 'Digital marketing valuations' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCount(target)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, target])

  return (
    <span ref={ref} className="text-6xl md:text-7xl font-bebas gradient-text">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary-blue/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas mb-4">
            <span className="gradient-text">Proven Results</span> That Matter
          </h2>
          <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
            Over the past 24 months, we have delivered impressive results for our clients, 
            transforming their media investments into competitive advantage
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="text-gray-900 dark:text-white font-medium mt-2">{stat.label}</p>
              {stat.sublabel && (
                <p className="text-gray-600 dark:text-white/60 text-sm mt-1">{stat.sublabel}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}