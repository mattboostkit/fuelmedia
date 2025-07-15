import { Metadata } from 'next'
import { FAQSection } from '@/components/sections/FAQSection'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'FAQs - UK Media Audit Questions Answered | Fuel Media',
  description: 'Find answers to common questions about UK media auditing, agency management, and advertising optimisation. Learn how we help advertisers save 20-30% on media spend.',
  keywords: ['media audit FAQ', 'UK advertising questions', 'media audit process', 'agency pitch FAQ', 'media savings guide', 'advertising audit questions'],
  openGraph: {
    title: 'Frequently Asked Questions - UK Media Audit Experts',
    description: 'Get answers to your media audit and advertising optimisation questions. Learn how UK\'s leading advertisers save millions through strategic auditing.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'FAQ', url: 'https://fuelmedia.co.uk/faq' }
]

export default function FAQPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <div className="pt-20">
        <FAQSection />
      </div>
    </>
  )
}