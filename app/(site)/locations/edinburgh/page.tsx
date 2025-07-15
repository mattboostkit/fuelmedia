import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Edinburgh Media Audit Services | Scottish Marketing Experts | Fuel Media',
  description: 'Leading media audit services in Edinburgh. Serving Charlotte Square, George Street, and Leith businesses. Expert analysis for Scottish financial services and creative industries. £80M+ saved for Scottish clients.',
  keywords: ['Edinburgh media audit', 'advertising audit Edinburgh', 'Charlotte Square media consultants', 'George Street marketing', 'Leith digital audit', 'Edinburgh agency audit', 'Scottish media services'],
  openGraph: {
    title: 'Edinburgh Media Audit Services - Scottish Excellence',
    description: 'Expert media auditing for Edinburgh and Scottish businesses. Comprehensive analysis with deep understanding of Scottish markets. Free consultation available.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Locations', url: 'https://fuelmedia.co.uk/locations' },
  { name: 'Edinburgh', url: 'https://fuelmedia.co.uk/locations/edinburgh' }
]

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Fuel Media & Marketing - Edinburgh',
  image: 'https://fuelmedia.co.uk/edinburgh-office.jpg',
  '@id': 'https://fuelmedia.co.uk/locations/edinburgh',
  url: 'https://fuelmedia.co.uk/locations/edinburgh',
  telephone: '+44-131-234-5678',
  priceRange: '£££',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '25 Charlotte Square',
    addressLocality: 'Edinburgh',
    addressRegion: 'Scotland',
    postalCode: 'EH2 4ET',
    addressCountry: 'GB'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 55.9533,
    longitude: -3.1883
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
      name: 'Edinburgh'
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Scotland'
    },
    {
      '@type': 'City',
      name: 'Glasgow'
    }
  ]
}

export default function EdinburghPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Edinburgh Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Expert media audit services for Scotland's capital. From the financial powerhouses of Charlotte Square 
              to the creative agencies of Leith and the bustling Festival scene, we help Edinburgh's businesses 
              optimise their advertising investments with Scottish market expertise and international best practices.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">£80M+</h3>
                <p className="text-foreground/70">Saved for Scottish Clients</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">120+</h3>
                <p className="text-foreground/70">Scottish Businesses Served</p>
              </div>
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20 text-center">
                <h3 className="text-4xl font-bebas text-flame-orange mb-2">12</h3>
                <p className="text-foreground/70">Edinburgh-Based Specialists</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Serving Edinburgh's Key Business Districts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Charlotte Square & West End</h3>
                  <p className="text-foreground/80 mb-4">
                    Edinburgh's financial district, home to major asset managers, banks, and insurance companies. 
                    We specialise in financial services marketing and high-net-worth customer acquisition.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Asset management marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Investment services promotion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Pension and insurance campaigns</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">George Street & Princes Street</h3>
                  <p className="text-foreground/80 mb-4">
                    The retail and hospitality heart of Edinburgh. We optimise campaigns for luxury retailers, 
                    hotels, and restaurants targeting both locals and the 13 million annual tourists.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Luxury retail marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Tourism and hospitality campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Seasonal Festival promotions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Leith & Ocean Terminal</h3>
                  <p className="text-foreground/80 mb-4">
                    Edinburgh's creative and digital hub, home to agencies, tech startups, and the Scottish 
                    Government. We understand the unique needs of public sector and creative businesses.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Creative agency optimisation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Tech startup growth strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Public sector communications</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bebas text-flame-orange mb-3">Edinburgh Park & Gyle</h3>
                  <p className="text-foreground/80 mb-4">
                    Major business parks housing corporate headquarters and tech companies. We help B2B 
                    marketers reach decision-makers across Scotland and beyond.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Corporate B2B marketing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Technology sector campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Professional services promotion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Edinburgh Market Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>UK's 2nd largest financial centre after London</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>£45bn assets under management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>World's festival capital - 12 major festivals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>4 universities with 100,000+ students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>13 million annual tourist visits</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Local Expertise Includes</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>The Scotsman advertising partnerships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Edinburgh Festival sponsorships</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Scottish Parliament lobbying support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Lothian Buses advertising</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Scottish media landscape navigation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Recent Edinburgh Success Stories</h2>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Leading Asset Management Firm</h4>
                  <p className="text-foreground/70">
                    Reduced cost per qualified lead by 54% in wealth management division. Achieved through 
                    sophisticated targeting and optimised content strategy across digital channels.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Edinburgh Festival Venue</h4>
                  <p className="text-foreground/70">
                    Increased ticket sales by 73% whilst reducing marketing spend by 18%. Implemented dynamic 
                    pricing promotion and improved audience segmentation.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scottish Whisky Brand</h4>
                  <p className="text-foreground/70">
                    Expanded international reach by 145% through optimised digital export marketing. Saved £890K 
                    annually on global media buying through consolidated purchasing.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Elevate Your Edinburgh Media Strategy?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join 120+ Scottish businesses that have transformed their advertising effectiveness with our local expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"><Link href="/contact">Book Your Free Edinburgh Consultation</Link></Button>
                <Button size="lg" variant="ghost"><Link href="/services">Explore Our Services</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}