import { Metadata } from 'next'
import { ContactContent } from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact - Fuel Media & Marketing',
  description: 'Get in touch with Fuel Media & Marketing. Let's ignite your brand's potential together.',
}

export default function ContactPage() {
  return <ContactContent />
}