import { Metadata } from 'next'
import { AboutContent } from '@/components/sections/AboutContent'

export const metadata: Metadata = {
  title: 'About Us - UK Media Audit Experts | Fuel Media & Marketing',
  description: 'Discover how Fuel Media saved £710M+ for UK advertisers. Our expert team specialises in media audits, agency negotiations, and performance optimization. London-based, globally recognised.',
  keywords: ['UK media audit experts', 'London media consultants', 'advertising audit team', 'media agency specialists', 'Fuel Media team', 'media investment consultants'],
  openGraph: {
    title: 'About Fuel Media - Leading UK Media Audit Specialists',
    description: 'Meet the team behind £710M+ in advertiser savings. Expert media auditors, contract negotiators, and performance specialists serving UK brands.',
  }
}

export default function AboutPage() {
  return <AboutContent />
}