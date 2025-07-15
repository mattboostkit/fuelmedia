import { Metadata } from 'next'
import { Button, Card } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema, organizationSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Our UK Locations | Media Audit Services Across Britain | Fuel Media',
  description: 'Fuel Media provides expert media audit services across the UK. Find our local teams in London, Manchester, Birmingham, Edinburgh, and Leeds. Local expertise, national reach.',
  keywords: ['UK media audit locations', 'media audit services UK', 'advertising audit London', 'Manchester media consultants', 'Birmingham advertising audit', 'Edinburgh media services', 'Leeds marketing audit'],
  openGraph: {
    title: 'UK Locations - Media Audit Services Nationwide',
    description: 'Expert media audit teams across Britain. Local knowledge in London, Manchester, Birmingham, Edinburgh, and Leeds. National expertise, regional insights.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' }
]

const locations = [
  {
    city: 'London',
    slug: 'london',
    region: 'Greater London',
    description: 'Our flagship office serving London and the South East. Expert media audit services for the UK\'s largest advertising market.',
    stats: {
      clients: '450+',
      savings: '£285M',
      team: '35'
    },
    highlights: [
      'Serving Canary Wharf and The City',
      'West End media agency expertise',
      'Tech hub specialists in Shoreditch'
    ]
  },
  {
    city: 'Manchester',
    slug: 'manchester',
    region: 'North West',
    description: 'Leading media audit services for Manchester and the North West. Supporting the Northern Powerhouse with local expertise.',
    stats: {
      clients: '180+',
      savings: '£120M',
      team: '18'
    },
    highlights: [
      'MediaCityUK partnerships',
      'Retail sector specialists',
      'Digital innovation hub'
    ]
  },
  {
    city: 'Birmingham',
    slug: 'birmingham',
    region: 'West Midlands',
    description: 'Comprehensive media audit solutions for Birmingham and the Midlands. Supporting Britain\'s second city businesses.',
    stats: {
      clients: '150+',
      savings: '£95M',
      team: '15'
    },
    highlights: [
      'Manufacturing sector expertise',
      'Jewellery Quarter specialists',
      'Commonwealth Games legacy partners'
    ]
  },
  {
    city: 'Edinburgh',
    slug: 'edinburgh',
    region: 'Scotland',
    description: 'Expert media audit services for Scotland. Combining financial sector expertise with creative industry insights.',
    stats: {
      clients: '120+',
      savings: '£80M',
      team: '12'
    },
    highlights: [
      'Financial services specialists',
      'Festival season expertise',
      'Scottish market insights'
    ]
  },
  {
    city: 'Leeds',
    slug: 'leeds',
    region: 'Yorkshire',
    description: 'Strategic media audit services for Yorkshire businesses. Supporting the region\'s thriving business community.',
    stats: {
      clients: '140+',
      savings: '£90M',
      team: '14'
    },
    highlights: [
      'Legal sector specialists',
      'Healthcare marketing expertise',
      'Yorkshire business networks'
    ]
  }
]

export default function LocationsPage() {
  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
                Our UK Locations
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-foreground/80 max-w-3xl mx-auto">
                With offices across Britain, we deliver local expertise with national reach. 
                Our teams understand regional markets whilst maintaining consistent excellence in media audit services.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                  <h3 className="text-4xl font-bebas text-flame-orange mb-2">£770M+</h3>
                  <p className="text-foreground/70">Total UK Client Savings</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                  <h3 className="text-4xl font-bebas text-flame-orange mb-2">1,040+</h3>
                  <p className="text-foreground/70">UK Businesses Served</p>
                </div>
                <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                  <h3 className="text-4xl font-bebas text-flame-orange mb-2">94</h3>
                  <p className="text-foreground/70">Media Audit Specialists</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {locations.map((location) => (
                <Card key={location.slug} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-card/80 backdrop-blur-sm">
                  <h2 className="text-3xl font-bebas text-flame-orange mb-2">{location.city}</h2>
                  <p className="text-sm text-foreground/60 mb-4">{location.region}</p>
                  
                  <p className="mb-6 text-foreground/80">{location.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <p className="text-xl font-bebas text-flame-yellow">{location.stats.clients}</p>
                      <p className="text-xs text-foreground/60">Clients</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bebas text-flame-yellow">{location.stats.savings}</p>
                      <p className="text-xs text-foreground/60">Saved</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bebas text-flame-yellow">{location.stats.team}</p>
                      <p className="text-xs text-foreground/60">Team</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Local Expertise:</h4>
                    <ul className="space-y-1">
                      {location.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-flame-orange mt-0.5">•</span>
                          <span className="text-foreground/70">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full">
                    <Link href={`/locations/${location.slug}`}>
                      View {location.city} Office
                    </Link>
                  </Button>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4 text-center">National Reach, Local Expertise</h2>
              <p className="text-center mb-6 max-w-2xl mx-auto">
                Our distributed team model ensures you receive both deep local market knowledge and 
                access to our national pool of media audit specialists. Every client benefits from:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Regional Insights</h4>
                  <p className="text-sm text-foreground/70">Understanding of local media landscapes and business cultures</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">National Standards</h4>
                  <p className="text-sm text-foreground/70">Consistent methodology and best practices across all offices</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold mb-2">Shared Expertise</h4>
                  <p className="text-sm text-foreground/70">Access to specialist knowledge from our entire UK network</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Work With Local Experts?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Contact your nearest office for a free consultation on optimising your media investment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
                <Button size="lg" variant="ghost">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
