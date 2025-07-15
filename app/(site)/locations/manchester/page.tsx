import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Manchester Media Audit Services | Northern Powerhouse Experts | Fuel Media',
  description: 'Leading media audit services in Manchester. Serving MediaCityUK, Spinningfields, and Northern Quarter businesses. Expert analysis of media spend and digital advertising. £120M+ saved for Manchester clients.',
  keywords: ['Manchester media audit', 'advertising audit Manchester', 'MediaCityUK media consultants', 'Spinningfields advertising analysis', 'Northern Quarter digital audit', 'Manchester agency audit', 'North West media services'],
  openGraph: {
    title: 'Manchester Media Audit Services - Northern Excellence',
    description: 'Expert media auditing for Manchester and North West businesses. Comprehensive analysis with local market expertise. Free consultation available.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' },
  { name: 'Manchester', url: 'https://fuelmedia.co.uk/locations/manchester' }
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing - Manchester',
  image: 'https://fuelmedia.co.uk/manchester-office.jpg',
  '@id': 'https://fuelmedia.co.uk/locations/manchester',
  url: 'https://fuelmedia.co.uk/locations/manchester',
  telephone: '+44-161-123-4567',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '45 Media House, Spinningfields',
    addressLocality: 'Manchester',
    addressRegion: 'Greater Manchester',
    postalCode: 'M3 3EB',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.4808,
    longitude: -2.2426
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
      name: 'Manchester'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Greater Manchester'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'North West England'
    }
  ]
}

export default function ManchesterPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Manchester Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Expert media audit services powering the Northern Powerhouse. From the media giants of MediaCityUK 
              to the innovative startups of the Northern Quarter, we help Manchester's businesses optimise their 
              advertising investments with local expertise and national best practices.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">£120M+</h3>
                <p className="text-foreground/70">Saved for Manchester Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">180+</h3>
                <p className="text-foreground/70">North West Businesses Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">18</h3>
                <p className="text-foreground/70">Manchester-Based Specialists</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Serving Manchester's Key Business Districts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">MediaCityUK & Salford Quays</h3>
                  <p className="text-foreground/80 mb-4">
                    Home to the BBC, ITV, and numerous digital agencies. Our deep relationships with MediaCityUK 
                    businesses provide unique insights into broadcast media buying and digital content strategies.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Broadcast media optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Digital content distribution strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Cross-platform campaign integration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Spinningfields</h3>
                  <p className="text-foreground/80 mb-4">
                    Manchester's financial district housing major law firms, banks, and professional services. 
                    We specialise in B2B marketing optimisation and high-value lead generation for this sector.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Professional services marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>LinkedIn advertising excellence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>ABM strategy optimisation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Northern Quarter</h3>
                  <p className="text-foreground/80 mb-4">
                    The creative heart of Manchester, home to independent agencies, tech startups, and creative 
                    businesses. We understand the unique challenges of scaling creative enterprises.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Creative campaign effectiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Startup growth strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Local influencer partnerships</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Trafford Park & Beyond</h3>
                  <p className="text-foreground/80 mb-4">
                    Supporting the industrial heritage and modern commerce of Greater Manchester. From Trafford 
                    Centre retail to manufacturing excellence, we optimise B2B and B2C campaigns.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Retail media optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Industrial B2B marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>E-commerce growth strategies</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Manchester Market Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's second-largest economy outside London</span>
                    </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>£62.8bn GVA with 2.7M population</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>80+ digital agencies in city centre</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Home to Co-op, Kellogg's, Adidas UK</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>20% year-on-year tech sector growth</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Local Expertise Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Manchester Evening News partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Metrolink advertising optimisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Football club sponsorship strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Student market targeting (60,000+ students)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Northern music scene partnerships</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Recent Manchester Success Stories</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Major Retail Chain - Trafford Centre</h4>
                  <p className="text-foreground/70">
                    Achieved 35% reduction in media waste through improved attribution and local market targeting. 
                    Increased footfall by 42% during key shopping periods whilst reducing overall spend.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">MediaCityUK Production Company</h4>
                  <p className="text-foreground/70">
                    Optimised content distribution strategy saving £2.1M annually. Improved viewer engagement 
                    by 67% through data-driven channel selection and timing optimisation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Spinningfields Law Firm</h4>
                  <p className="text-foreground/70">
                    Reduced cost per lead by 48% through targeted B2B campaign optimisation. Achieved top-3 
                    market position for key practice areas within 18 months.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Power Up Your Manchester Media Strategy?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join 180+ North West businesses that have transformed their advertising effectiveness with our local expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Book Your Free Manchester Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
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