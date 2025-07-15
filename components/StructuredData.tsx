import Script from 'next/script'

interface StructuredDataProps {
  data: Record<string, any>
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <Script
      id={`structured-data-${data['@type']}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="afterInteractive"
    />
  )
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Fuel Media & Marketing',
  url: 'https://fuelmedia.co.uk',
  logo: 'https://fuelmedia.co.uk/logo.png',
  description: 'Expert Media Audit Specialists - £710M+ saved for advertisers through comprehensive media audits, agency pitch management, and contract negotiation.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GB',
    addressLocality: 'London'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-20-1234-5678',
    contactType: 'sales',
    areaServed: 'GB',
    availableLanguage: ['English']
  },
  sameAs: [
    'https://www.linkedin.com/company/fuel-media-marketing',
    'https://twitter.com/fuelmediauk'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1'
  }
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Media Audit Services',
  provider: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing'
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Media Audit Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Media Performance Audit',
          description: 'Comprehensive analysis of your media spend effectiveness and ROI'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Agency Pitch Management',
          description: 'Expert guidance through the agency selection process'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contract Negotiation',
          description: 'Strategic negotiation to secure the best terms and rates'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Performance Reviews',
          description: 'Regular assessment of agency performance and media effectiveness'
        }
      }
    ]
  }
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing UK',
  image: 'https://fuelmedia.co.uk/office.jpg',
  '@id': 'https://fuelmedia.co.uk',
  url: 'https://fuelmedia.co.uk',
  telephone: '+44-20-1234-5678',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Media Street',
    addressLocality: 'London',
    postalCode: 'SW1A 1AA',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5074,
    longitude: -0.1278
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  }
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateReviewSchema(review: {
  author: string
  rating: number
  reviewBody: string
  datePublished: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: review.author
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
    itemReviewed: {
      '@type': 'Service',
      name: 'Media Audit Services',
      provider: {
        '@type': 'Organization',
        name: 'Fuel Media & Marketing'
      }
    }
  }
}