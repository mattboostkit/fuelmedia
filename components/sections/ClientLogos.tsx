'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const clients = [
  'Fortune 500 Retailer', 'Global FMCG Brand', 'Leading Telco', 'Major Bank', 'Automotive Leader',
  'Tech Giant', 'Pharma Multinational', 'Energy Corporation', 'Insurance Group', 'Media Conglomerate'
]

export function ClientLogos() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-16 border-y border-white/10">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white/60 mb-8"
        >
          Delivering value for global advertisers across all sectors
        </motion.p>
        
        <div className="relative overflow-hidden">
          <div className={mounted ? "flex animate-scroll" : "flex"}>
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client}-${index}`}
                className="flex-shrink-0 mx-8"
              >
                <div className="text-2xl font-bebas text-white/40 hover:text-white transition-colors duration-300">
                  {client}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}