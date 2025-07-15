import { Metadata } from 'next'
import { PartnershipsContent } from '@/components/sections/PartnershipsContent'

export const metadata: Metadata = {
  title: 'Media Audit Partnerships UK | Agency Collaboration | Fuel Media',
  description: 'Partner with UK\'s top media audit specialists. Join our network of agencies, consultants, and brands. Collaborative opportunities for mutual growth and client success.',
  keywords: ['media audit partnerships UK', 'agency collaboration', 'media consultant network', 'UK advertising partnerships', 'audit partner program', 'media industry collaboration'],
  openGraph: {
    title: 'Partner with Fuel Media - UK Media Audit Network',
    description: 'Join the UK\'s leading media audit partner network. Collaborative opportunities for agencies, consultants, and brands seeking excellence in media investment.',
  }
}

export default function PartnershipsPage() {
  return <PartnershipsContent />
}