import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Birmingham Media Audit Services | Midlands Marketing Experts | Fuel Media',
  description: 'Premier media audit services in Birmingham. Serving Colmore Row, Jewellery Quarter, and Digbeth businesses. Expert analysis of advertising spend and agency performance. £95M+ saved for Birmingham clients.',
  keywords: ['Birmingham media audit', 'advertising audit Birmingham', 'Colmore Row media consultants', 'Jewellery Quarter marketing', 'Digbeth digital audit', 'Birmingham agency audit', 'West Midlands media services'],
  openGraph: {
    title: 'Birmingham Media Audit Services - Midlands Excellence',
    description: 'Expert media auditing for Birmingham and West Midlands businesses. Comprehensive analysis with deep local market knowledge. Free consultation available.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' },
  { name: 'Birmingham', url: 'https://fuelmedia.co.uk/locations/birmingham' }
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing - Birmingham',
  image: 'https://fuelmedia.co.uk/birmingham-office.jpg',
  '@id': 'https://fuelmedia.co.uk/locations/birmingham',
  url: 'https://fuelmedia.co.uk/locations/birmingham',
  telephone: '+44-121-234-5678',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '78 Colmore Row',
    addressLocality: 'Birmingham',
    addressRegion: 'West Midlands',
    postalCode: 'B3 2AP',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.4829,
    longitude: -1.8936
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Birmingham'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'West Midlands'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Warwickshire'
    }
  ]
}

export default function BirminghamPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Birmingham Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Expert media audit services for Britain's second city. From the financial district of Colmore Row 
              to the creative quarters of Digbeth and Custard Factory, we help Birmingham's diverse businesses 
              optimise their advertising investments with proven strategies and local market expertise.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">£95M+</h3>
                <p className="text-foreground/70">Saved for Birmingham Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">150+</h3>
                <p className="text-foreground/70">Midlands Businesses Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">15</h3>
                <p className="text-foreground/70">Birmingham-Based Specialists</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Serving Birmingham's Key Business Districts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Colmore Business District</h3>
                  <p className="text-foreground/80 mb-4">
                    Birmingham's premier business and financial quarter. We support professional services firms, 
                    banks, and corporate headquarters with sophisticated B2B marketing optimisation strategies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Financial services marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Professional services optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Corporate communications strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Jewellery Quarter</h3>
                  <p className="text-foreground/80 mb-4">
                    Historic heart of British jewellery manufacturing, now a thriving creative and business hub. 
                    We specialise in luxury brand marketing and heritage business modernisation.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Luxury goods marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Heritage brand revitalisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>International trade promotion</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Digbeth & Custard Factory</h3>
                  <p className="text-foreground/80 mb-4">
                    Birmingham's creative quarter, home to digital agencies, startups, and creative businesses. 
                    We understand the unique challenges of scaling creative and tech enterprises.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Digital startup growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Creative campaign effectiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Arts and culture marketing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Bullring & City Centre</h3>
                  <p className="text-foreground/80 mb-4">
                    The retail heart of Birmingham with the iconic Bullring & Grand Central. We optimise retail 
                    marketing strategies for both established brands and emerging retailers.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Retail media optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Footfall generation strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Multi-channel retail campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Birmingham Market Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's largest regional economy at £31.9bn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>1.1M population, youngest major city in Europe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Manufacturing heritage meets digital future</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Home to Jaguar Land Rover, HSBC UK, Cadbury</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Commonwealth Games 2022 legacy benefits</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Local Expertise Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Birmingham Mail advertising partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>West Midlands Metro advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>NEC and ICC event marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>University partnerships (5 major universities)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Multicultural market expertise</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Recent Birmingham Success Stories</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Major Manufacturing Client</h4>
                  <p className="text-foreground/70">
                    Reduced B2B marketing costs by 38% whilst increasing qualified leads by 125%. Achieved through 
                    strategic channel optimisation and improved targeting of decision-makers.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Jewellery Quarter Luxury Brand</h4>
                  <p className="text-foreground/70">
                    Increased international sales by 87% through optimised digital marketing strategy. Saved £450K 
                    annually on media spend whilst expanding into new markets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Bullring Retail Chain</h4>
                  <p className="text-foreground/70">
                    Improved store footfall by 52% during key trading periods. Achieved 31% reduction in cost per 
                    store visit through better attribution and local targeting.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Transform Your Birmingham Media Strategy?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join 150+ Midlands businesses that have revolutionised their advertising effectiveness with our expert audit services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"><Link href="/contact">Book Your Free Birmingham Consultation</Link></Button>
                <Button size="lg" variant="ghost"><Link href="/services">View Our Services</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}