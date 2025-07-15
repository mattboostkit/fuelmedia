import { Metadata } from 'next'
import { ContactContent } from '@/components/sections/ContactContent'

export const metadata: Metadata = {
  title: 'Contact UK Media Audit Specialists | Free Consultation | Fuel Media',
  description: 'Schedule a free media audit consultation with UK\'s leading experts. Save 20-30% on media spend. London office, nationwide service. Call +44-20-1234-5678 today.',
  keywords: ['contact media auditors UK', 'free media audit consultation', 'London media consultants', 'UK advertising audit', 'media spend review', 'agency pitch management contact'],
  openGraph: {
    title: 'Contact Fuel Media - Free UK Media Audit Consultation',
    description: 'Get expert advice on reducing media costs by 20-30%. Free initial consultation with UK\'s leading media audit specialists. London-based, serving all UK.',
  }
}

export default function ContactPage() {
  return <ContactContent />
}