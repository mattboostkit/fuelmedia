'use client'

import { motion } from 'framer-motion'
import { AnimatedText, Card, Button } from '@/components/ui'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  company: string
  message: string
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+44(0) 7700 155848',
    link: 'tel:+447700155848',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'oli@fuelmediamarketing.com',
    link: 'mailto:oli@fuelmediamarketing.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    content: '3rd Floor, 86-90 Paul St, London EC2A 4NE',
    link: 'https://goo.gl/maps/2Qw6Qw6Qw6Qw6Qw6A',
  },
]

const faqs = [
  {
    question: 'How quickly can we see results?',
    answer: 'Our flame-powered strategies typically show initial results within 30-60 days, with significant growth momentum building over 3-6 months.',
  },
  {
    question: 'What industries do you work with?',
    answer: 'We work across all industries, bringing our disruptive approach to B2B, B2C, e-commerce, SaaS, and more.',
  },
  {
    question: 'Do you offer custom packages?',
    answer: 'Absolutely! Every brand is unique, and we tailor our services to match your specific goals and budget.',
  },
  {
    question: 'What sets Fuel Media apart?',
    answer: 'Our combination of data-driven strategies, creative excellence, and relentless innovation creates explosive results that traditional agencies can\'t match.',
  },
]

export function ContactContent() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(data)
    reset()
  }

  return (
    <div className="min-h-screen pt-24">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="gradient-text mb-6">
              <AnimatedText variant="slideUp">
                Let&apos;s Ignite Something Amazing
              </AnimatedText>
            </h1>
            <AnimatedText
              variant="fadeIn"
              delay={0.2}
              className="text-xl text-gray-700 dark:text-white/80 max-w-3xl mx-auto"
            >
              Ready to transform your brand? Get in touch and let&apos;s create marketing magic together
            </AnimatedText>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <h2 className="font-bebas mb-6 text-gray-900 dark:text-white">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-flame-orange">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      placeholder="Your Email"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-flame-orange">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <input
                      {...register('company')}
                      placeholder="Company (Optional)"
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors"
                    />
                  </div>

                  <div>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      placeholder="Tell us about your project"
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-flame-orange">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="flame"
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                  >
                    <span className="inline-flex items-center">
                      <Send className="mr-2" size={20} />
                      Send Message
                    </span>
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex justify-center mb-6">
                <img
                  src="https://ik.imagekit.io/boostkit/Fuel%20Media%20and%20Marketing/Fuel_Logo.svg?updatedAt=1751799590441"
                  alt="Fuel Media Logo"
                  className="h-16 w-auto dark:hidden"
                />
                <img
                  src="https://ik.imagekit.io/boostkit/Fuel%20Media%20and%20Marketing/Logo_White_Fade%20(Large).png?updatedAt=1751799623208"
                  alt="Fuel Media Logo White"
                  className="h-16 w-auto hidden dark:block"
                />
              </div>
              <div>
                <h3 className="font-bebas mb-6 text-gray-900 dark:text-white">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg glass-effect hover:flame-shadow transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-flame-orange to-flame-red flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <info.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bebas text-gray-900 dark:text-white mb-1">{info.title}</h4>
                        <p className="text-gray-700 dark:text-white/60">{info.content}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bebas mb-6 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full text-left p-4 rounded-lg glass-effect hover:border-flame-orange/50 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center">
                          <h5 className="text-gray-900 dark:text-white font-medium">{faq.question}</h5>
                          <span className="text-flame-orange text-2xl">
                            {expandedFaq === index ? '−' : '+'}
                          </span>
                        </div>
                        {expandedFaq === index && (
                          <p className="mt-3 text-gray-700 dark:text-white/60">{faq.answer}</p>
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}