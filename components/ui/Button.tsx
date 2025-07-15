'use client'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-gradient-to-r from-primary to-secondary-pink text-white hover:shadow-[0_0_30px_rgba(102,36,129,0.5)] hover:scale-105',
        secondary: 'bg-gradient-to-r from-secondary-blue to-secondary-pink text-white hover:shadow-[0_0_30px_rgba(2,159,224,0.5)] hover:scale-105',
        ghost: 'bg-transparent text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/20 hover:border-gray-400 dark:hover:border-white/40',
        flame: 'relative px-8 py-4 bg-gradient-to-r from-primary via-secondary-pink to-secondary-blue text-white font-bold rounded-lg overflow-hidden group hover:shadow-[0_0_30px_rgba(230,6,124,0.5)] transition-all duration-300',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={isLoading}
        {...props}
      >
        {variant === 'flame' && (
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-blue via-primary to-secondary-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <span className={cn(variant === 'flame' && 'relative z-10', isLoading && 'opacity-0')}>
          {children}
        </span>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button, buttonVariants }