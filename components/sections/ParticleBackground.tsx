'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ParticleBackgroundProps {
  count?: number
  className?: string
}

export function ParticleBackground({ count = 20, className = "bg-flame-orange" }: ParticleBackgroundProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full opacity-60 ${className}`}
          initial={{
            x: `${(i * 5) % 100}%`,
            y: '110%',
          }}
          animate={{
            y: '-10%',
            x: `+=${(i % 2 === 0 ? 50 : -50)}`,
          }}
          transition={{
            duration: 10 + (i % 3) * 5,
            repeat: Infinity,
            delay: i * 0.25,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}