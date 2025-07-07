import { Metadata } from 'next'
import { AboutContent } from '@/components/sections/AboutContent'

export const metadata: Metadata = {
  title: 'About - Fuel Media & Marketing',
  description: 'Learn about Fuel Media & Marketing, our story, team, and values that drive our disruptive approach to digital marketing.',
}

export default function AboutPage() {
  return <AboutContent />
}