import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Leeds Media Audit Services | Yorkshire Marketing Experts | Fuel Media',
  description: 'Premier media audit services in Leeds. Serving Wellington Place, Leeds Dock, and the financial district. Expert analysis for Yorkshire businesses. £90M+ saved for Leeds and Yorkshire clients.',
  keywords: ['Leeds media audit', 'advertising audit Leeds', 'Wellington Place media consultants', 'Leeds Dock marketing', 'Yorkshire digital audit', 'Leeds agency audit', 'Yorkshire media services'],
  openGraph: {
    title: 'Leeds Media Audit Services - Yorkshire Excellence',
    description: 'Expert media auditing for Leeds and Yorkshire businesses. Comprehensive analysis with deep regional expertise. Free consultation available.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' },
  { name: 'Leeds', url: 'https://fuelmedia.co.uk/locations/leeds' }
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing - Leeds',
  image: 'https://fuelmedia.co.uk/leeds-office.jpg',
  '@id': 'https://fuelmedia.co.uk/locations/leeds',
  url: 'https://fuelmedia.co.uk/locations/leeds',
  telephone: '+44-113-234-5678',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12 Wellington Place',
    addressLocality: 'Leeds',
    addressRegion: 'West Yorkshire',
    postalCode: 'LS1 4AP',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.7997,
    longitude: -1.5492
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
      name: 'Leeds'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'West Yorkshire'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Yorkshire'
    }
  ]
}

export default function LeedsPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Leeds Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Expert media audit services for Yorkshire's business capital. From the legal and financial quarters 
              of Wellington Place to the digital hub of Leeds Dock, we help Yorkshire's businesses optimise their 
              advertising investments with regional expertise and proven methodologies.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">£90M+</h3>
                <p className="text-foreground/70">Saved for Yorkshire Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">140+</h3>
                <p className="text-foreground/70">Yorkshire Businesses Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">14</h3>
                <p className="text-foreground/70">Leeds-Based Specialists</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Serving Leeds' Key Business Districts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Wellington Place & Financial Quarter</h3>
                  <p className="text-foreground/80 mb-4">
                    Leeds' premier business district, home to major law firms, financial services, and professional 
                    services. We specialise in B2B marketing for high-value professional services.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Legal services marketing excellence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Financial services campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Professional services lead generation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Leeds Dock & Digital Quarter</h3>
                  <p className="text-foreground/80 mb-4">
                    The city's thriving digital and creative hub, home to Sky, Channel 4, and numerous tech 
                    companies. We understand the fast-paced needs of digital businesses.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Broadcast media optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Digital transformation marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Tech startup growth strategies</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Trinity Leeds & Victoria Gate</h3>
                  <p className="text-foreground/80 mb-4">
                    The retail heart of Yorkshire with premium shopping destinations. We optimise retail 
                    marketing strategies for both established brands and emerging retailers.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Retail media effectiveness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Footfall generation campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Seasonal promotion optimisation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Healthcare & University Quarter</h3>
                  <p className="text-foreground/80 mb-4">
                    Supporting Leeds' major NHS trusts, private healthcare providers, and educational institutions. 
                    Specialised expertise in healthcare marketing and student recruitment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Healthcare service promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Medical recruitment campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Higher education marketing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Leeds Market Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's largest legal and financial centre outside London</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>£64.6bn regional economy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Home to 30+ FTSE 100 companies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>65,000+ students across 4 universities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's fastest growing digital sector</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Local Expertise Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Yorkshire Post media partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Leeds United sponsorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Leeds Festival marketing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Yorkshire business network access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Regional TV advertising (ITV Yorkshire)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Recent Leeds Success Stories</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">International Law Firm - Wellington Place</h4>
                  <p className="text-foreground/70">
                    Reduced cost per partner-level lead by 62% through sophisticated LinkedIn and content marketing 
                    optimisation. Increased market share in key practice areas by 28%.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">NHS Trust - Healthcare Quarter</h4>
                  <p className="text-foreground/70">
                    Improved recruitment campaign effectiveness by 83%, filling hard-to-recruit positions 45% 
                    faster. Saved £1.2M annually on recruitment advertising spend.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Trinity Leeds Retailer</h4>
                  <p className="text-foreground/70">
                    Increased weekend footfall by 57% through hyper-local targeting and improved attribution. 
                    Achieved 34% improvement in ROAS across all channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Transform Your Yorkshire Media Strategy?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join 140+ Yorkshire businesses that have revolutionised their advertising effectiveness with our regional expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"><Link href="/contact">Book Your Free Leeds Consultation</Link></Button>
                <Button size="lg" variant="ghost"><Link href="/services">View Our Services</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
