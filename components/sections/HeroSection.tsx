'use client'

import { motion } from 'framer-motion'
import { Button, AnimatedText } from '@/components/ui'
import { ArrowRight, Flame } from 'lucide-react'
import { ParticleBackground } from './ParticleBackground'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/20 to-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Flame className="text-flame-orange animate-flame" size={20} />
            <span className="text-sm text-white/80">Media Audit Specialists</span>
          </motion.div>

          <h1 className="mb-6">
            <AnimatedText variant="slideUp" stagger className="gradient-text">
              Transform Your Media
            </AnimatedText>
            <br />
            <AnimatedText variant="slideUp" delay={0.3} className="text-white">
              Investment
            </AnimatedText>
          </h1>

          <AnimatedText
            variant="fadeIn"
            delay={0.6}
            className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto"
          >
            Expert media auditing that delivers commercial advantage through strategic insight, negotiation excellence, and performance optimization
          </AnimatedText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="flame" size="lg" className="group">
              Request Media Audit
              <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button variant="ghost" size="lg">
              View Our Results
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      <ParticleBackground count={20} />
    </section>
  )
}