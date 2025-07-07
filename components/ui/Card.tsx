'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  gradient?: boolean
}

export function Card({ children, className, hover = true, gradient = false }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        gradient ? 'gradient-bg' : 'glass-effect',
        hover && 'cursor-pointer hover:flame-shadow',
        className
      )}
    >
      {children}
    </motion.div>
  )
}