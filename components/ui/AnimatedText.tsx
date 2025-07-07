'use client'

import { motion, Variants } from 'framer-motion'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  variant?: 'fadeIn' | 'slideUp' | 'typewriter' | 'gradient'
  delay?: number
  stagger?: boolean
}

const textVariants: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  typewriter: {
    hidden: { width: 0 },
    visible: { width: '100%' },
  },
  gradient: {
    hidden: { backgroundPosition: '0% 50%' },
    visible: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 3,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  },
}

export function AnimatedText({
  children,
  className,
  variant = 'fadeIn',
  delay = 0,
  stagger = false,
}: AnimatedTextProps) {
  const text = typeof children === 'string' ? children : ''
  const words = text.split(' ')

  if (stagger && typeof children === 'string') {
    return (
      <motion.span
        initial="hidden"
        animate="visible"
        className={cn('inline-block', className)}
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={textVariants[variant]}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.1,
              ease: 'easeOut',
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    )
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={textVariants[variant]}
      transition={{
        duration: variant === 'typewriter' ? 2 : 0.5,
        delay,
        ease: 'easeOut',
      }}
      className={cn(
        variant === 'typewriter' && 'overflow-hidden whitespace-nowrap',
        variant === 'gradient' && 'gradient-text',
        className
      )}
    >
      {children}
    </motion.div>
  )
}