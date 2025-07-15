import { Metadata } from 'next'
import { Button, Card } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Case Studies | UK Media Audit Success Stories | Fuel Media',
  description: 'Discover how leading UK brands saved 20-30% on media spend through our audit and consultancy services. Real client success stories from retail, finance, and FMCG sectors.',
  keywords: ['UK media audit case studies', 'advertising success stories', 'media savings examples', 'client testimonials UK', 'media consultancy results'],
  openGraph: {
    title: 'Client Success Stories - UK Media Audit Case Studies',
    description: 'See how we\'ve helped UK advertisers save millions through strategic media audits and consultancy. Real results from leading brands.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Case Studies', url: 'https://fuelmedia.co.uk/case-studies' }
]

const caseStudies = [
  {
    title: 'Major UK Retailer Media Audit',
    sector: 'Retail',
    savings: '£3.2M annually',
    percentage: '28%',
    description: 'Comprehensive media audit for one of the UK\'s largest high street retailers revealed significant savings opportunities across digital and traditional channels.',
    link: '/case-studies/retail-media-audit',
    highlights: ['Agency fee reduction', 'Programmatic optimisation', 'Media buying efficiency'],
    featured: true
  },
  {
    title: 'Financial Services Agency Pitch',
    sector: 'Financial Services',
    savings: '£1.8M annually',
    percentage: '22%',
    description: 'Led agency pitch process for a leading UK financial institution, securing better rates and enhanced service levels with new agency partner.',
    link: '/case-studies/financial-services-pitch',
    highlights: ['Strategic pitch management', 'Contract negotiation', 'Performance KPIs']
  },
  {
    title: 'FMCG Contract Negotiation',
    sector: 'Consumer Goods',
    savings: '£2.4M annually',
    percentage: '31%',
    description: 'Renegotiated media agency contracts for major FMCG brand, achieving substantial fee reductions and improved transparency measures.',
    link: '/case-studies/fmcg-contract-negotiation',
    highlights: ['Fee benchmarking', 'Transparency clauses', 'Performance incentives']
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
                Discover how UK's leading advertisers have transformed their media investments with Fuel Media. 
                Real results from brands who've saved millions through our strategic consultancy.
              </p>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bebas text-flame-orange mb-2">£710M+</div>
                  <p className="text-lg font-semibold">Total Client Savings</p>
                </div>
                <div>
                  <div className="text-5xl font-bebas text-flame-orange mb-2">20-30%</div>
                  <p className="text-lg font-semibold">Average Media Savings</p>
                </div>
                <div>
                  <div className="text-5xl font-bebas text-flame-orange mb-2">200+</div>
                  <p className="text-lg font-semibold">UK Clients Served</p>
                </div>
              </div>
            </div>

            <div className="space-y-8 mb-12">
              {caseStudies.map((study, index) => (
                <Card 
                  key={index} 
                  className={`overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    study.featured ? 'border-flame-orange/50 shadow-lg' : ''
                  }`}
                >
                  {study.featured && (
                    <div className="bg-gradient-to-r from-flame-orange to-flame-red text-white px-4 py-2 text-sm font-semibold">
                      Featured Case Study
                    </div>
                  )}
                  <div className="p-8">
                    <div className="md:flex md:items-start md:justify-between mb-6">
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-3xl font-bebas text-flame-orange mb-2">{study.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-foreground/70">
                          <span className="font-semibold">{study.sector}</span>
                          <span>•</span>
                          <span>Annual Savings: {study.savings}</span>
                          <span>•</span>
                          <span>{study.percentage} reduction</span>
                        </div>
                      </div>
                      <div className="text-5xl font-bebas text-flame-orange/20">
                        {study.percentage}
                      </div>
                    </div>
                    
                    <p className="text-foreground/80 mb-6">{study.description}</p>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-2">Key Achievements:</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.highlights.map((highlight, idx) => (
                          <span 
                            key={idx} 
                            className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild>
                      <Link href={study.link}>Read Full Case Study</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6 text-center">Industries We Serve</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">🛍️</div>
                  <h4 className="font-semibold mb-1">Retail</h4>
                  <p className="text-sm text-foreground/70">High street & online retailers</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💰</div>
                  <h4 className="font-semibold mb-1">Financial Services</h4>
                  <p className="text-sm text-foreground/70">Banks, insurance, fintech</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🛒</div>
                  <h4 className="font-semibold mb-1">FMCG</h4>
                  <p className="text-sm text-foreground/70">Consumer goods brands</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">💻</div>
                  <h4 className="font-semibold mb-1">Technology</h4>
                  <p className="text-sm text-foreground/70">Software & tech companies</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-flame-orange/10 to-flame-red/10 p-8 rounded-xl">
              <h3 className="text-2xl font-bebas mb-4">Ready to Transform Your Media Investment?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Join the UK's leading advertisers who trust Fuel Media to optimise their media spend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Success Story</Link>
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