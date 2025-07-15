import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'London Media Audit Services | Expert Advertising Analysis | Fuel Media',
  description: 'Leading media audit services in London. Serving Canary Wharf, The City, and West End businesses. Expert analysis of media spend, agency performance, and digital advertising. £285M+ saved for London clients.',
  keywords: ['London media audit', 'advertising audit London', 'Canary Wharf media consultants', 'City of London advertising analysis', 'West End media services', 'London agency audit', 'Shoreditch digital audit'],
  openGraph: {
    title: 'London Media Audit Services - Save 20-30% on Ad Spend',
    description: 'Expert media auditing for London businesses. Comprehensive analysis across traditional and digital channels. Free consultation for qualifying businesses.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' },
  { name: 'London', url: 'https://fuelmedia.co.uk/locations/london' }
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing - London',
  image: 'https://fuelmedia.co.uk/london-office.jpg',
  '@id': 'https://fuelmedia.co.uk/locations/london',
  url: 'https://fuelmedia.co.uk/locations/london',
  telephone: '+44-20-1234-5678',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Media Street',
    addressLocality: 'London',
    addressRegion: 'Greater London',
    postalCode: 'EC2A 4BX',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.5195,
    longitude: -0.0817
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
      name: 'London'
    },
    {
      '@type': 'City',
      name: 'Greater London'
    }
  ]
}

export default function LondonPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              London Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Expert media audit services for London businesses. From the financial powerhouses of Canary Wharf 
              and The City to the creative agencies of Soho and Shoreditch, we help London's leading advertisers 
              optimise their media investments.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">£285M+</h3>
                <p className="text-foreground/70">Saved for London Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">450+</h3>
                <p className="text-foreground/70">London Businesses Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">35</h3>
                <p className="text-foreground/70">London-Based Specialists</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Serving London's Key Business Districts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">The City & Canary Wharf</h3>
                  <p className="text-foreground/80 mb-4">
                    Supporting financial services, insurance, and professional services firms with sophisticated 
                    media audit solutions. Our expertise includes B2B marketing optimisation and high-value 
                    customer acquisition strategies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Lloyd's of London marketplace specialists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Investment banking marketing expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Fintech growth strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">West End & Soho</h3>
                  <p className="text-foreground/80 mb-4">
                    Working with retail, entertainment, and hospitality brands to maximise their media effectiveness. 
                    Deep understanding of consumer behaviour in Central London's premium shopping and entertainment 
                    districts.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Oxford Street retail expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Theatre and entertainment marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Luxury brand specialists</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Tech City & Shoreditch</h3>
                  <p className="text-foreground/80 mb-4">
                    Partnering with London's thriving tech ecosystem. From Silicon Roundabout startups to 
                    established tech giants, we understand the unique challenges of scaling digital businesses.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>SaaS marketing optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>App user acquisition strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Growth hacking expertise</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">King's Cross & Camden</h3>
                  <p className="text-foreground/80 mb-4">
                    Supporting the knowledge quarter's innovation hub. Working with Google UK, Meta, and 
                    numerous creative agencies to optimise their client campaigns and internal marketing.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Platform-specific optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Creative production efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Data-driven marketing strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">London Market Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's largest advertising market at £23.5bn annually</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>65% of UK's advertising agencies headquartered here</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Average media waste of 28% in London campaigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>TfL advertising network expertise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Premium publisher relationships</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Local Expertise Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>London Underground advertising optimisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>West End theatre partnership strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>City AM and Evening Standard negotiations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Zone 1-6 targeting strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>London commuter behaviour insights</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Recent London Success Stories</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">FTSE 100 Financial Services Firm</h4>
                  <p className="text-foreground/70">
                    Identified £4.2M in annual savings through programmatic optimisation and agency fee restructuring. 
                    Improved campaign ROI by 45% whilst maintaining brand safety standards.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">West End Retail Chain</h4>
                  <p className="text-foreground/70">
                    Reduced media waste by 32% through improved attribution modelling and cross-channel optimisation. 
                    Achieved 58% increase in footfall during key shopping periods.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Tech Unicorn - Old Street</h4>
                  <p className="text-foreground/70">
                    Streamlined global media buying through London hub, saving £1.8M annually. Improved user 
                    acquisition costs by 41% across European markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Optimise Your London Media Spend?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join 450+ London businesses that have transformed their media investments with our expert audit services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Your Free London Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}