'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card, Button } from '@/components/ui'
import { Target, Rocket, Users, Award, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { client, urlFor } from '@/sanity/lib/client'
import { teamQuery } from '@/sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

interface TeamMember {
  _id: string
  name: string
  role: string
  order: number
  image?: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
    alt?: string
  }
  bio?: any[]
  personalNote?: string
  socialLinks?: {
    linkedin?: string
    twitter?: string
    github?: string
    website?: string
  }
}

const values = [
  {
    icon: Target,
    title: 'Strategic Analysis',
    description: 'Deep-dive audits that uncover hidden inefficiencies and opportunities, delivering actionable insights that transform media performance.',
  },
  {
    icon: Rocket,
    title: 'Commercial Excellence',
    description: 'Over £710M saved through expert negotiations, contract optimization, and strategic media planning that maximizes every pound invested.',
  },
  {
    icon: Users,
    title: 'Global Experience',
    description: 'Five decades of combined expertise across major media networks, bringing unparalleled industry knowledge to every audit.',
  },
  {
    icon: Award,
    title: 'Proven Results',
    description: '75+ successful audits delivered, 35+ pitch processes managed, and 10+ digital transformation projects completed.',
  },
]

const timeline = [
  { year: '2018', event: 'Founded by senior media executives to address transparency gaps in media investment' },
  { year: '2019', event: 'Completed first major audit saving client £15M in annual media spend' },
  { year: '2020', event: 'Expanded services to include digital transformation and pitch management' },
  { year: '2021', event: 'Achieved £250M cumulative savings milestone for clients' },
  { year: '2022', event: 'Launched proprietary audit methodology and benchmarking tools' },
  { year: '2023', event: 'Surpassed £500M in total client savings across global markets' },
  { year: '2024', event: 'Leading media audit excellence with £710M+ in documented savings' },
]

// Fallback team data
const fallbackTeamData = [
  {
    name: 'Oli Orchard',
    role: 'Partner',
    bio: [
      'Oli is a globally experienced media and marketing consultant and the founder of Fuel Media and Marketing. With nearly two decades of leadership at Time Inc, WPP, and Publicis, Oli brings deep expertise to his clients across Europe and the USA.',
      'As a trusted advisor, Oli optimises media strategy, procurement, and agency partnerships. He excels at contract negotiations, pitch management, and developing performance metrics that drive ROI for blue-chip companies.',
      'Oli is passionate about fostering transparency and trust between clients and agencies in an industry often criticised for opaque practices. His strategic acumen and dedication to open communication make him a powerful asset.'
    ],
    personalNote: 'When not advising clients, Oli is an avid cyclist and dedicated father of two energetic boys.'
  },
  {
    name: 'John Ferguson',
    role: 'Partner',
    bio: [
      'John is a seasoned media professional and partner at Fuel Media and Marketing, bringing three decades of international experience in senior management roles at IPG and major media consultancies.',
      'Renowned as a go-to subject matter expert in modern media trading, John specialises in improving transparency at the client/agency interface. His deep understanding of this relationship helps both parties thrive through optimized targets and margin management. John\'s unique ability to navigate local media trading nuances within international norms sets him apart.',
      'With extensive experience in major media trading, John has developed a keen focus on digital communications. He leverages the measurability and real-time tracking capabilities of digital to drive results. Alongside Fuel\'s team of digital engineers, John positions the firm as a digital-first consultancy.'
    ],
    personalNote: 'A former elite athlete, John maintains an active lifestyle through cycling and regular gym sessions when away from the office.'
  },
  {
    name: 'Johan Gran',
    role: 'Consultant',
    bio: [
      'Johan is the force behind Fuel\'s digital measurement, quantitative research and consulting capabilities. An experienced senior leader with over two decades of deep category knowledge.',
      'Johan has worked for media agency groups, media owners and consultancies, and brings a wealth of knowledge and experience in digital media, mathematics, engineering, econometric and financial modelling. As a result he has a significant interest in marketing and digital strategies, and analyses them in detail bringing actionable insights to the fore.'
    ],
    personalNote: 'When not at work Johan can be found on his boat in the Swedish islands and driving his daughters around to various important engagements.'
  }
]

export function AboutContent() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const data = await client.fetch(teamQuery)
        setTeamMembers(data)
      } catch (error) {
        console.error('Error fetching team members:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTeamMembers()
  }, [])

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="gradient-text mb-6">
              <AnimatedText variant="slideUp">
                Our Story
              </AnimatedText>
            </h1>
            <AnimatedText variant="fadeIn" delay={0.2} className="text-xl text-gray-700 dark:text-white/80 leading-relaxed">
              Founded by industry veterans with over 50 years of combined experience across global 
              media networks, Fuel Media & Marketing emerged to address a critical gap in the market. 
              We witnessed firsthand how advertisers were losing millions through inefficient media 
              practices and opaque agency relationships. Our mission is simple: bring transparency, 
              accountability, and commercial excellence to every media investment.
            </AnimatedText>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary-pink flex items-center justify-center flex-shrink-0">
                      <value.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bebas mb-2 text-gray-900 dark:text-white">{value.title}</h3>
                      <p className="text-gray-600 dark:text-white/60">{value.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center gradient-text mb-12 font-bebas"
            >
              Our Journey
            </motion.h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary-pink to-secondary-blue" />
              
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-1/2" />
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-r from-primary to-secondary-pink rounded-full border-4 border-gray-100 dark:border-black mx-4 flex-shrink-0" />
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : ''}`}>
                    <h4 className="text-3xl font-bebas text-primary mb-2">{item.year}</h4>
                    <p className="text-gray-700 dark:text-white/80">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-gray-50 dark:bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6 font-bebas">Our Expertise</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              We bring unparalleled depth of knowledge across every aspect of media investment, 
              from traditional channels to emerging digital platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full">
                <h3 className="font-bebas mb-4 gradient-text">Financial Auditing</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  Comprehensive review of media spend, contract terms, and agency fees. We analyze 
                  every pound to ensure maximum value and identify savings opportunities.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Contract compliance verification</li>
                  <li>• Fee structure optimization</li>
                  <li>• Rebate and AVB recovery</li>
                  <li>• Benchmark analysis</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <h3 className="font-bebas mb-4 gradient-text">Performance Review</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  Data-driven analysis of campaign effectiveness, media mix optimization, and 
                  strategic recommendations for improved ROI.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Campaign effectiveness analysis</li>
                  <li>• Media mix modeling</li>
                  <li>• Attribution assessment</li>
                  <li>• Strategic recommendations</li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <h3 className="font-bebas mb-4 gradient-text">Pitch Management</h3>
                <p className="text-gray-600 dark:text-white/60 mb-4">
                  End-to-end management of media agency selection processes, ensuring you find 
                  the perfect partner for your business needs.
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-white/60">
                  <li>• Brief development</li>
                  <li>• Agency evaluation</li>
                  <li>• Negotiation support</li>
                  <li>• Contract finalization</li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="gradient-text mb-6 font-bebas">Leadership Team</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto">
              Our senior team brings decades of experience from leading global media agencies, 
              tech platforms, and consultancies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {(teamMembers.length > 0 ? teamMembers : fallbackTeamData).map((member, index) => (
              <motion.div
                key={member._id || member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  {member.image && (
                    <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={urlFor(member.image).width(400).height(300).url()}
                        alt={member.image.alt || member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <h3 className="font-bebas mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-lg text-primary font-semibold mb-4">{member.role}</p>
                  <div className="space-y-3 text-gray-600 dark:text-white/60">
                    {member.bio && Array.isArray(member.bio) && member.bio[0]?._type === 'block' ? (
                      <PortableText 
                        value={member.bio}
                        components={{
                          block: {
                            normal: ({children}) => <p className="mb-3">{children}</p>,
                          },
                        }}
                      />
                    ) : (
                      // Fallback for plain text bio
                      Array.isArray(member.bio) ? member.bio.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      )) : null
                    )}
                    {member.personalNote && (
                      <p className="text-sm italic">{member.personalNote}</p>
                    )}
                  </div>
                  {member.socialLinks && (
                    <div className="flex gap-3 mt-4">
                      {member.socialLinks.linkedin && (
                        <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.twitter && (
                        <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                          </svg>
                        </a>
                      )}
                      {member.socialLinks.website && (
                        <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <h5 className="font-bebas text-primary mb-2">50+ Years</h5>
                  <p className="text-gray-600 dark:text-white/60">Combined media experience</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bebas text-primary mb-2">£5B+</h5>
                  <p className="text-gray-600 dark:text-white/60">Media budgets managed</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bebas text-primary mb-2">15+ Markets</h5>
                  <p className="text-gray-600 dark:text-white/60">Global experience</p>
                </div>
                <div className="text-center">
                  <h5 className="font-bebas text-primary mb-2">100%</h5>
                  <p className="text-gray-600 dark:text-white/60">Independent & unbiased</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary-pink/10 to-secondary-blue/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="gradient-text mb-6 font-bebas">Ready to Transform Your Media Investment?</h2>
            <p className="text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto">
              Join the growing list of advertisers who have saved millions through our expert 
              media audit services.
            </p>
            <Link href="/contact">
              <Button variant="flame" size="lg" className="group">
                Schedule Your Media Audit
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}