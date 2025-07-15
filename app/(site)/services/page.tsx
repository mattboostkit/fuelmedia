import { Metadata } from 'next'
import { Button, Card } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'UK Media Audit & Consultancy Services | Save 20-30% | Fuel Media',
  description: 'Comprehensive UK media audit and consultancy services. Media audits, agency pitch management, contract negotiation, and performance reviews. £710M+ saved for UK advertisers.',
  keywords: ['UK media audit services', 'media consultancy London', 'advertising audit', 'agency management', 'media spend optimisation', 'UK media consultants'],
  openGraph: {
    title: 'Fuel Media Services - UK Media Audit & Consultancy',
    description: 'Expert media audit and consultancy services for UK advertisers. From comprehensive audits to agency management, we help you save 20-30% on media spend.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Services', url: 'https://fuelmedia.co.uk/services' }
]

const services = [
  {
    title: 'UK Media Audit',
    description: 'Comprehensive analysis of your media investment revealing savings of 20-30%. Deep dive into buying efficiency, agency fees, and performance metrics.',
    link: '/services/uk-media-audit',
    features: ['Media spend analysis', 'Agency fee review', 'Performance benchmarking', 'Digital audit'],
    highlight: 'Most Popular'
  },
  {
    title: 'Agency Pitch Management',
    description: 'Expert guidance through the agency selection process. From brief development to final negotiations, ensure you choose the right partner.',
    link: '/services/agency-pitch-management',
    features: ['Strategic planning', 'Agency longlisting', 'Pitch coordination', 'Contract negotiation']
  },
  {
    title: 'Contract Negotiation',
    description: 'Secure better rates and stronger terms. Our negotiators typically achieve 20-40% fee reductions with enhanced transparency.',
    link: '/services/contract-negotiation',
    features: ['Fee optimisation', 'Transparency clauses', 'Performance metrics', 'Risk management']
  },
  {
    title: 'Performance Reviews',
    description: 'Regular assessments to maintain peak performance. Track agency delivery, campaign effectiveness, and continuous improvement.',
    link: '/services/performance-review',
    features: ['Quarterly reviews', 'KPI tracking', 'ROI analysis', 'Action planning']
  }
]

export default function ServicesPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                Comprehensive media audit and consultancy services designed to maximise your advertising ROI. 
                We've saved UK advertisers over £710M through our proven methodologies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {service.highlight && (
                    <div className="absolute top-4 right-4 bg-flame-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {service.highlight}
                    </div>
                  )}
                  <div className="p-8">
                    <h2 className="text-3xl font-bebas text-flame-orange mb-4">{service.title}</h2>
                    <p className="text-foreground/80 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-flame-orange mt-1">✓</span>
                          <span className="text-foreground/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full">
                      <Link href={service.link}>Learn More</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas text-center mb-8">Why Choose Fuel Media?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bebas text-flame-orange mb-4">£710M+</div>
                  <p className="text-lg font-semibold mb-2">Saved for Clients</p>
                  <p className="text-foreground/70">Proven track record of delivering substantial savings for UK advertisers</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bebas text-flame-orange mb-4">20-30%</div>
                  <p className="text-lg font-semibold mb-2">Average Savings</p>
                  <p className="text-foreground/70">Typical media spend reduction achieved through our audit process</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bebas text-flame-orange mb-4">200+</div>
                  <p className="text-lg font-semibold mb-2">UK Clients Served</p>
                  <p className="text-foreground/70">Trusted by leading brands across all major industry sectors</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Our Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Independent & Objective</h3>
                  <p className="text-foreground/70 mb-4">
                    We maintain complete independence from media agencies and owners, ensuring our recommendations 
                    are always in your best interest. No hidden agendas, just honest advice.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Data-Driven Insights</h3>
                  <p className="text-foreground/70 mb-4">
                    Every recommendation is backed by thorough analysis and UK market benchmarks. We use 
                    proprietary tools and methodologies refined over 15+ years.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Rapid Implementation</h3>
                  <p className="text-foreground/70 mb-4">
                    We deliver actionable insights quickly, typically within 4-6 weeks. Our recommendations 
                    come with clear implementation roadmaps for immediate impact.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ongoing Partnership</h3>
                  <p className="text-foreground/70 mb-4">
                    Our relationship doesn't end with the report. We provide ongoing support to ensure 
                    successful implementation and sustained improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Transform Your Media Investment?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Contact us today for a free consultation and discover how much you could be saving.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <Link href="/contact">Get Started Today</Link>
                </Button>
                <Button size="lg" variant="ghost">
                  <Link href="/case-studies">View Client Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
