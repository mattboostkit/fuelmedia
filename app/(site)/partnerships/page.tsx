import { Metadata } from 'next'
import { PartnershipsContent } from '@/components/sections/PartnershipsContent'

export const metadata: Metadata = {
  title: 'Partnerships - Fuel Media & Marketing',
  description: 'Partner with Fuel Media & Marketing to unlock growth opportunities and create explosive results together.',
}

export default function PartnershipsPage() {
  return <PartnershipsContent />
}