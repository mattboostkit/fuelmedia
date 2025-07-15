import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Major UK Retailer Media Audit Case Study | £3.2M Saved | Fuel Media',
  description: 'How we helped a major UK high street retailer save £3.2M annually through comprehensive media auditing. 28% reduction in media spend while improving performance.',
  keywords: ['UK retail media audit', 'advertising case study', 'media savings retail', 'high street retailer audit', 'programmatic optimisation'],
  openGraph: {
    title: 'Case Study: Major UK Retailer Saves £3.2M on Media Spend',
    description: 'Comprehensive media audit delivers 28% cost reduction for leading UK retailer while improving campaign performance across all channels.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Case Studies', url: 'https://fuelmedia.co.uk/case-studies' },
  { name: 'Major UK Retailer Media Audit', url: 'https://fuelmedia.co.uk/case-studies/retail-media-audit' }
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Major UK Retailer Media Audit Case Study',
  description: 'How Fuel Media helped a major UK retailer save £3.2M annually through comprehensive media auditing',
  author: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing'
  },
  datePublished: '2024-01-15',
  publisher: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fuelmedia.co.uk/logo.png'
    }
  }
}

export default function RetailMediaAuditPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      <StructuredData data={structuredData} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link href="/case-studies" className="text-flame-orange hover:text-flame-red transition-colors">
                ← Back to Case Studies
              </Link>
            </div>

            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Major UK Retailer Media Audit
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <span className="px-3 py-1 bg-flame-orange/20 rounded-full font-semibold">Retail Sector</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">£3.2M Annual Savings</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">28% Cost Reduction</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">6-Week Project</span>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Executive Summary</h2>
              <p className="text-lg text-foreground/90">
                One of the UK's largest high street retailers engaged Fuel Media to conduct a comprehensive 
                media audit across their £11.4M annual advertising investment. Our analysis revealed significant 
                inefficiencies in media buying, agency fees, and digital campaign management, leading to 
                annual savings of £3.2M (28% reduction) while improving overall campaign performance.
              </p>
            </div>

            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Challenge</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    The retailer faced increasing pressure on marketing budgets while needing to maintain 
                    market share against aggressive online competitors. Key challenges included:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Rising media costs with declining ROI across traditional channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Lack of transparency in programmatic buying and agency trading desks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Complex agency fee structures with unclear value attribution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Inefficient allocation between online and offline media channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Limited visibility into competitive media pricing benchmarks</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Our Solution</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Fuel Media deployed a comprehensive audit methodology examining 24 months of media 
                    investment data across all channels and agencies:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Media Buying Analysis</h4>
                      <p className="text-foreground/80">
                        Detailed examination of rate cards, buying efficiency, and volume commitments 
                        across TV, radio, OOH, print, and digital channels. Benchmarked against UK 
                        retail sector averages.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Digital & Programmatic Audit</h4>
                      <p className="text-foreground/80">
                        Deep dive into programmatic supply chain, DSP fees, data costs, and ad 
                        verification expenses. Identified significant margin stacking and unnecessary 
                        intermediaries.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Agency Fee Benchmarking</h4>
                      <p className="text-foreground/80">
                        Comprehensive review of agency compensation models, scope of work alignment, 
                        and resource allocation. Compared against industry standards for similar-sized 
                        UK advertisers.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Performance Optimisation</h4>
                      <p className="text-foreground/80">
                        Analysis of campaign effectiveness, creative performance, and media mix 
                        modelling to identify optimal channel allocation for improved ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Results</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">£3.2M</div>
                    <p className="font-semibold mb-1">Annual Savings Achieved</p>
                    <p className="text-sm text-foreground/70">28% reduction in total media investment</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">43%</div>
                    <p className="font-semibold mb-1">Digital Efficiency Improvement</p>
                    <p className="text-sm text-foreground/70">Better targeting and reduced waste</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">£850K</div>
                    <p className="font-semibold mb-1">Agency Fee Reduction</p>
                    <p className="text-sm text-foreground/70">Rightsized compensation model</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">6 Weeks</div>
                    <p className="font-semibold mb-1">Project Timeline</p>
                    <p className="text-sm text-foreground/70">From kickoff to final recommendations</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Key Savings Identified:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>TV Buying:</strong> £1.2M saved through improved negotiation and commitment structures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Programmatic:</strong> £800K saved by eliminating unnecessary tech fees and improving supply path</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Agency Fees:</strong> £850K reduction through performance-based compensation model</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Media Mix:</strong> £350K improvement through optimised channel allocation</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Client Testimonial</h2>
                <div className="bg-gradient-to-r from-flame-orange/10 to-flame-red/10 p-8 rounded-xl border-l-4 border-flame-orange">
                  <p className="text-lg italic mb-4">
                    "Fuel Media's audit was transformational for our marketing operations. Not only did 
                    they identify immediate savings of over £3M, but they also provided a roadmap for 
                    ongoing optimisation. Their independent perspective and deep UK market knowledge 
                    gave us the confidence to make bold changes that have significantly improved our 
                    marketing effectiveness."
                  </p>
                  <p className="font-semibold">
                    — Marketing Director, Major UK Retailer
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Implementation & Beyond</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Following the audit, Fuel Media supported the retailer through:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Agency contract renegotiations achieving all targeted savings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Implementation of new transparency requirements and audit rights</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Quarterly performance reviews to ensure sustained improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Training for internal teams on media buying best practices</span>
                    </li>
                  </ul>
                  <p className="font-semibold">
                    Result: All identified savings were realised within 6 months, with performance 
                    metrics improving by an average of 23% across all channels.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/uk-media-audit" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">UK Media Audit</h4>
                  <p className="text-sm text-foreground/70">Comprehensive analysis of your media investment</p>
                </Link>
                <Link href="/services/contract-negotiation" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Contract Negotiation</h4>
                  <p className="text-sm text-foreground/70">Secure better rates and terms</p>
                </Link>
                <Link href="/services/performance-review" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Performance Reviews</h4>
                  <p className="text-sm text-foreground/70">Ongoing optimisation support</p>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Transform Your Media Investment?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Discover how much you could be saving with a comprehensive media audit from Fuel Media.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/case-studies">View More Case Studies</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}