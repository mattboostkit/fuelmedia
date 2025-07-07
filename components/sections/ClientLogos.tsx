'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { client, urlFor } from '@/sanity/lib/client'
import { companyLogosQuery } from '@/sanity/lib/queries'

interface CompanyLogo {
  _id: string
  name: string
  logo: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  url?: string
  order: number
}

const fallbackClients = [
  'Fortune 500 Retailer', 'Global FMCG Brand', 'Leading Telco', 'Major Bank', 'Automotive Leader',
  'Tech Giant', 'Pharma Multinational', 'Energy Corporation', 'Insurance Group', 'Media Conglomerate'
]

export function ClientLogos() {
  const [mounted, setMounted] = useState(false)
  const [companyLogos, setCompanyLogos] = useState<CompanyLogo[]>([])

  useEffect(() => {
    setMounted(true)
    
    const fetchLogos = async () => {
      try {
        const data = await client.fetch(companyLogosQuery)
        setCompanyLogos(data)
      } catch (error) {
        console.error('Error fetching company logos:', error)
      }
    }

    fetchLogos()
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
          {companyLogos.length > 0 ? (
            <div className={mounted ? "flex animate-scroll" : "flex"}>
              {[...companyLogos, ...companyLogos].map((logo, index) => (
                <div
                  key={`${logo._id}-${index}`}
                  className="flex-shrink-0 mx-8"
                >
                  {logo.url ? (
                    <a 
                      href={logo.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="relative h-16 w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                        <Image
                          src={urlFor(logo.logo).width(160).height(64).url()}
                          alt={logo.logo.alt || logo.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </a>
                  ) : (
                    <div className="relative h-16 w-40 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                      <Image
                        src={urlFor(logo.logo).width(160).height(64).url()}
                        alt={logo.logo.alt || logo.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className={mounted ? "flex animate-scroll" : "flex"}>
              {[...fallbackClients, ...fallbackClients].map((client, index) => (
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
          )}
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