'use client'

import { motion } from 'framer-motion'
import { Button, AnimatedText } from '@/components/ui'
import { ArrowRight } from 'lucide-react'
import { ParticleBackground } from './ParticleBackground'
import Link from 'next/link'

export function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary-pink/20 to-secondary-blue/20 animate-gradient bg-[length:200%_200%]" />
        <div className="absolute inset-0 bg-white/90 dark:bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="gradient-text mb-6 font-bebas">
            <AnimatedText variant="slideUp">
              Ready to Transform Your Media Investment?
            </AnimatedText>
          </h2>
          <AnimatedText
            variant="fadeIn"
            delay={0.2}
            className="text-xl text-gray-700 dark:text-white/80 mb-8"
          >
            Discover how our media audits can save you millions while improving performance and accountability
          </AnimatedText>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/contact">
              <Button variant="flame" size="lg" className="group">
                Schedule Your Media Audit
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <ParticleBackground count={10} className="bg-primary" />
    </section>
  )
}