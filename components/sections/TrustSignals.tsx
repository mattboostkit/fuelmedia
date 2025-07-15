'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, Briefcase, CheckCircle, Star, Building, Target } from 'lucide-react'
import { Card } from '@/components/ui'

const certifications = [
  {
    icon: Shield,
    title: 'ISBA Member',
    description: 'Proud member of the Incorporated Society of British Advertisers',
  },
  {
    icon: Award,
    title: 'IPA Accredited',
    description: 'Institute of Practitioners in Advertising accreditation',
  },
  {
    icon: Users,
    title: 'WFA Partner',
    description: 'World Federation of Advertisers approved consultant',
  },
  {
    icon: Briefcase,
    title: 'CIPS Certified',
    description: 'Chartered Institute of Procurement & Supply certification',
  },
]

const trustMetrics = [
  {
    icon: CheckCircle,
    value: '100%',
    label: 'Independent',
    description: 'No agency or media owner affiliations',
  },
  {
    icon: Star,
    value: '4.9/5',
    label: 'Client Rating',
    description: 'Average satisfaction score',
  },
  {
    icon: Building,
    value: '15+',
    label: 'Years Experience',
    description: 'UK media audit expertise',
  },
  {
    icon: Target,
    value: '98%',
    label: 'Success Rate',
    description: 'Projects delivering savings',
  },
]

export function TrustSignals() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-4">
            Industry Recognition & Trust
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Accredited by leading UK industry bodies and trusted by the nation's top advertisers
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-flame-orange to-flame-red flex items-center justify-center mb-4">
                  <cert.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bebas text-xl mb-2">{cert.title}</h3>
                <p className="text-foreground/70 text-sm">{cert.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-flame-orange/10 to-flame-red/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bebas text-center mb-8">Why Trust Matters</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {trustMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <metric.icon className="w-8 h-8 mx-auto text-flame-orange mb-3" />
                <p className="text-4xl font-bebas text-flame-orange mb-1">{metric.value}</p>
                <p className="font-semibold mb-1">{metric.label}</p>
                <p className="text-sm text-foreground/70">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-r from-primary/5 to-secondary-blue/5">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bebas mb-4">Our Commitment to Excellence</h3>
              <p className="text-lg text-foreground/80 mb-6">
                As independent media audit specialists, we maintain the highest standards of integrity and professionalism. 
                Our certifications and memberships ensure we stay at the forefront of UK advertising best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-flame-orange" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-flame-orange" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-flame-orange" />
                  <span>Professional Indemnity Insurance</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}