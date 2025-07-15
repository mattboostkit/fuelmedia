import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Financial Services Agency Pitch Case Study | £1.8M Saved | Fuel Media',
  description: 'How we managed a successful agency pitch for a leading UK financial institution, achieving £1.8M annual savings and 22% cost reduction while enhancing service quality.',
  keywords: ['financial services agency pitch', 'UK banking media audit', 'agency selection process', 'media pitch management', 'financial advertising consultancy'],
  openGraph: {
    title: 'Case Study: UK Financial Institution Saves £1.8M Through Strategic Agency Pitch',
    description: 'Expert pitch management delivers 22% cost reduction and enhanced service levels for leading UK financial services provider.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Case Studies', url: 'https://fuelmedia.co.uk/case-studies' },
  { name: 'Financial Services Agency Pitch', url: 'https://fuelmedia.co.uk/case-studies/financial-services-pitch' }
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Financial Services Agency Pitch Case Study',
  description: 'How Fuel Media helped a UK financial institution save £1.8M annually through strategic agency pitch management',
  author: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing'
  },
  datePublished: '2024-02-10',
  publisher: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fuelmedia.co.uk/logo.png'
    }
  }
}

export default function FinancialServicesPitchPage() {
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
              Financial Services Agency Pitch
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <span className="px-3 py-1 bg-flame-orange/20 rounded-full font-semibold">Financial Services</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">£1.8M Annual Savings</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">22% Cost Reduction</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">4-Month Process</span>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Executive Summary</h2>
              <p className="text-lg text-foreground/90">
                A leading UK financial services provider engaged Fuel Media to manage their agency review 
                process following concerns about rising costs and declining service levels. Through our 
                strategic pitch management process, we secured a new agency partnership delivering £1.8M 
                in annual savings (22% reduction) while significantly improving service quality and 
                campaign performance.
              </p>
            </div>

            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Challenge</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    After five years with their incumbent agency, the financial institution faced several 
                    critical issues requiring a comprehensive agency review:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Agency fees had increased 45% over five years without corresponding performance improvements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Declining creative quality and lack of innovation in digital channels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Poor integration between creative, media, and digital teams</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Limited expertise in emerging channels crucial for reaching younger demographics</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Compliance concerns around financial promotions and regulatory requirements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Our Solution</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Fuel Media implemented a comprehensive pitch management process designed to identify 
                    the optimal agency partner while securing significant commercial improvements:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Strategic Planning & Requirements Definition</h4>
                      <p className="text-foreground/80">
                        Conducted stakeholder workshops to define precise requirements, including creative 
                        capabilities, media expertise, digital proficiency, and compliance knowledge. 
                        Established clear KPIs and success metrics for the new partnership.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Agency Longlisting & Evaluation</h4>
                      <p className="text-foreground/80">
                        Identified and evaluated 12 potential agencies based on financial services 
                        experience, creative credentials, and commercial propositions. Shortlisted 
                        5 agencies through rigorous chemistry sessions and capability assessments.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Pitch Process Management</h4>
                      <p className="text-foreground/80">
                        Developed comprehensive pitch brief covering strategic challenges, creative 
                        requirements, and media planning scenarios. Managed all pitch logistics, 
                        timelines, and evaluation frameworks to ensure fair comparison.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Commercial Negotiation</h4>
                      <p className="text-foreground/80">
                        Led negotiations on fee structures, payment terms, performance incentives, 
                        and contractual clauses. Secured best-in-class commercial terms through 
                        competitive tension and benchmarking.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Results</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">£1.8M</div>
                    <p className="font-semibold mb-1">Annual Cost Savings</p>
                    <p className="text-sm text-foreground/70">22% reduction vs previous arrangement</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">35%</div>
                    <p className="font-semibold mb-1">Performance Improvement</p>
                    <p className="text-sm text-foreground/70">Campaign effectiveness increase</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">100%</div>
                    <p className="font-semibold mb-1">Compliance Record</p>
                    <p className="text-sm text-foreground/70">Zero regulatory issues post-switch</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">4 Months</div>
                    <p className="font-semibold mb-1">End-to-End Timeline</p>
                    <p className="text-sm text-foreground/70">From brief to implementation</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold mb-3">Commercial Improvements Secured:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Fee Structure:</strong> 30% reduction in retainer fees with performance-based incentives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Resource Model:</strong> Senior team commitment with named individuals and succession planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Transparency:</strong> Full visibility on all third-party costs and mark-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Innovation Fund:</strong> £200K annual investment in testing new channels and technologies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Service Enhancements Achieved:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Integrated creative and media planning approach improving campaign cohesion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Dedicated financial services compliance team ensuring regulatory adherence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Enhanced digital capabilities including in-house programmatic expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>24/7 crisis management support for reputation protection</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Client Testimonial</h2>
                <div className="bg-gradient-to-r from-flame-orange/10 to-flame-red/10 p-8 rounded-xl border-l-4 border-flame-orange">
                  <p className="text-lg italic mb-4">
                    "Fuel Media transformed what could have been a disruptive agency change into a 
                    seamless transition that delivered immediate value. Their expertise in managing 
                    the pitch process ensured we selected the right partner, while their negotiation 
                    skills secured terms we couldn't have achieved alone. The £1.8M annual saving 
                    is impressive, but the improvement in service quality and campaign performance 
                    has been equally valuable."
                  </p>
                  <p className="font-semibold">
                    — Chief Marketing Officer, UK Financial Services Provider
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Implementation & Transition</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Following agency selection, Fuel Media supported a smooth transition through:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Detailed transition planning with 90-day implementation roadmap</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Knowledge transfer sessions ensuring continuity of campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Contract finalisation with robust performance metrics and KPIs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Establishment of governance framework for ongoing relationship management</span>
                    </li>
                  </ul>
                  <p className="font-semibold">
                    Result: Zero disruption to marketing activities during transition, with immediate 
                    performance improvements visible within the first quarter.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Long-term Impact</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Two years post-appointment, the new agency relationship continues to deliver:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Sustained cost savings with fees remaining 22% below previous levels</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>45% improvement in digital conversion rates through enhanced capabilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Industry recognition with 3 major creative awards for financial services campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Expanded into new channels reaching previously untapped customer segments</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/agency-pitch-management" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Agency Pitch Management</h4>
                  <p className="text-sm text-foreground/70">Expert guidance through agency selection</p>
                </Link>
                <Link href="/services/contract-negotiation" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Contract Negotiation</h4>
                  <p className="text-sm text-foreground/70">Secure optimal commercial terms</p>
                </Link>
                <Link href="/services/uk-media-audit" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">UK Media Audit</h4>
                  <p className="text-sm text-foreground/70">Comprehensive performance analysis</p>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Find Your Perfect Agency Partner?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Let Fuel Media manage your agency selection process and secure the best possible partnership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Agency Review</Link>
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