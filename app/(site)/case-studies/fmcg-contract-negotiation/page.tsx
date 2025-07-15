import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'FMCG Contract Negotiation Case Study | £2.4M Saved | Fuel Media',
  description: 'How we renegotiated media agency contracts for a major UK FMCG brand, achieving £2.4M annual savings and 31% cost reduction with enhanced transparency.',
  keywords: ['FMCG media contract negotiation', 'UK consumer goods advertising', 'agency fee reduction', 'media contract optimisation', 'FMCG marketing consultancy'],
  openGraph: {
    title: 'Case Study: FMCG Brand Saves £2.4M Through Contract Renegotiation',
    description: 'Strategic contract renegotiation delivers 31% cost reduction and improved transparency for major UK consumer goods brand.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Case Studies', url: 'https://fuelmedia.co.uk/case-studies' },
  { name: 'FMCG Contract Negotiation', url: 'https://fuelmedia.co.uk/case-studies/fmcg-contract-negotiation' }
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'FMCG Contract Negotiation Case Study',
  description: 'How Fuel Media helped a major UK FMCG brand save £2.4M annually through strategic contract renegotiation',
  author: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing'
  },
  datePublished: '2024-03-05',
  publisher: {
    '@type': 'Organization',
    name: 'Fuel Media & Marketing',
    logo: {
      '@type': 'ImageObject',
      url: 'https://fuelmedia.co.uk/logo.png'
    }
  }
}

export default function FMCGContractNegotiationPage() {
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
              FMCG Contract Negotiation
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-8 text-sm">
              <span className="px-3 py-1 bg-flame-orange/20 rounded-full font-semibold">Consumer Goods</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">£2.4M Annual Savings</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">31% Cost Reduction</span>
              <span className="px-3 py-1 bg-primary/20 rounded-full">8-Week Process</span>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Executive Summary</h2>
              <p className="text-lg text-foreground/90">
                A leading UK FMCG brand with a portfolio of household names engaged Fuel Media to 
                renegotiate their media agency contracts mid-term. Despite strong creative output, 
                escalating costs and lack of transparency prompted a comprehensive contract review. 
                We secured £2.4M in annual savings (31% reduction) while maintaining the existing 
                agency relationships and improving service levels.
              </p>
            </div>

            <div className="space-y-12 mb-12">
              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Challenge</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    The FMCG brand faced mounting pressure on marketing budgets while competing with 
                    private label growth and new market entrants. Key challenges included:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Media agency fees had increased 52% over three years without clear justification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Opaque billing practices with limited visibility on third-party costs and mark-ups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Multiple brand portfolios creating complex fee structures and duplicated services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>No performance-based incentives despite significant media investment (£7.7M annually)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Contractual terms favouring the agency with limited client audit rights</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Our Solution</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Fuel Media implemented a strategic contract renegotiation process designed to 
                    reset commercial terms while preserving valuable agency relationships:
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Comprehensive Contract Analysis</h4>
                      <p className="text-foreground/80">
                        Detailed review of existing contracts, fee structures, and scope of work 
                        documents. Identified areas of duplication, inefficiency, and opportunities 
                        for consolidation across the brand portfolio.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Benchmarking & Market Analysis</h4>
                      <p className="text-foreground/80">
                        Compared current fees against UK FMCG sector benchmarks and best-in-class 
                        contracts. Analysed alternative remuneration models including value-based 
                        compensation and performance incentives.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Negotiation Strategy Development</h4>
                      <p className="text-foreground/80">
                        Created detailed negotiation playbook with primary objectives, fallback 
                        positions, and deal breakers. Developed compelling business case showing 
                        market alternatives to create competitive tension.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Multi-stage Negotiation Process</h4>
                      <p className="text-foreground/80">
                        Led negotiations through multiple rounds, starting with commercial principles 
                        before detailed terms. Maintained positive relationships while securing 
                        significant improvements across all contract areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">The Results</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">£2.4M</div>
                    <p className="font-semibold mb-1">Annual Savings Achieved</p>
                    <p className="text-sm text-foreground/70">31% reduction in total agency fees</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">40%</div>
                    <p className="font-semibold mb-1">Fee Reduction</p>
                    <p className="text-sm text-foreground/70">On retained agency services</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">100%</div>
                    <p className="font-semibold mb-1">Transparency Achieved</p>
                    <p className="text-sm text-foreground/70">Full visibility on all costs</p>
                  </div>
                  <div className="bg-gradient-to-br from-flame-orange/20 to-flame-red/20 p-6 rounded-xl">
                    <div className="text-4xl font-bebas text-flame-orange mb-2">8 Weeks</div>
                    <p className="font-semibold mb-1">Negotiation Timeline</p>
                    <p className="text-sm text-foreground/70">From initiation to signed contracts</p>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold mb-3">Key Commercial Improvements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Retainer Fees:</strong> 40% reduction through scope rationalisation and efficiency gains</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Media Commission:</strong> Reduced from 3.5% to 2.0% on all UK media spend</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Production Mark-ups:</strong> Capped at 10% (previously 17.5%) with full transparency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span><strong>Performance Bonus:</strong> 20% of fees now at-risk based on agreed KPIs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <h4 className="font-semibold mb-3">Transparency & Governance Enhancements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Full disclosure of all third-party costs and agency margins</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Quarterly financial reconciliations with right to audit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Clear definitions of billable vs non-billable activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">✓</span>
                      <span>Annual benchmarking clause to ensure ongoing competitiveness</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Client Testimonial</h2>
                <div className="bg-gradient-to-r from-flame-orange/10 to-flame-red/10 p-8 rounded-xl border-l-4 border-flame-orange">
                  <p className="text-lg italic mb-4">
                    "Fuel Media's expertise in contract negotiation was game-changing for our business. 
                    They understood both the commercial and relationship dynamics, securing savings we 
                    didn't think possible while actually improving our agency partnership. The £2.4M 
                    annual saving has been reinvested into media, driving market share growth across 
                    our portfolio. Their approach was professional, strategic, and delivered results 
                    that exceeded our expectations."
                  </p>
                  <p className="font-semibold">
                    — Group Marketing Director, Major UK FMCG Company
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Implementation & Benefits</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    The renegotiated contracts delivered immediate and lasting benefits:
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Savings realised from month one with no disruption to campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Improved agency motivation through performance-based incentives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Enhanced collaboration with clearer roles and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Freed up budget for increased media investment and innovation</span>
                    </li>
                  </ul>
                  <p className="font-semibold">
                    Result: The saved funds were reinvested into media, contributing to a 4.2% market 
                    share gain across key categories within 12 months.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Key Success Factors</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">1. Data-Driven Approach</h4>
                      <p className="text-foreground/80">
                        Comprehensive benchmarking data provided irrefutable evidence for fee 
                        reductions, making negotiations fact-based rather than adversarial.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">2. Relationship Preservation</h4>
                      <p className="text-foreground/80">
                        Maintained positive tone throughout, positioning changes as necessary 
                        for long-term partnership sustainability rather than punitive measures.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">3. Win-Win Outcomes</h4>
                      <p className="text-foreground/80">
                        Created incentive structures benefiting both parties, with agencies able 
                        to earn more through performance while reducing base fees.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">4. Clear Implementation Plan</h4>
                      <p className="text-foreground/80">
                        Detailed transition roadmap ensured smooth implementation of new terms 
                        without disrupting ongoing marketing activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bebas mb-6 text-flame-orange">Long-term Partnership Evolution</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-6 rounded-xl">
                  <p className="mb-4">
                    Three years post-negotiation, the transformed agency relationship continues to thrive:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Agency has earned maximum performance bonuses for two consecutive years</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Innovation fund has launched 5 successful new products to market</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Total marketing effectiveness improved by 38% versus pre-negotiation baseline</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-flame-orange mt-1">•</span>
                      <span>Relationship NPS scores increased from 6.2 to 8.7 post-negotiation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Related Services</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/services/contract-negotiation" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Contract Negotiation</h4>
                  <p className="text-sm text-foreground/70">Expert negotiation for better terms</p>
                </Link>
                <Link href="/services/uk-media-audit" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">UK Media Audit</h4>
                  <p className="text-sm text-foreground/70">Comprehensive spend analysis</p>
                </Link>
                <Link href="/services/performance-review" className="block p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-colors">
                  <h4 className="font-semibold mb-2">Performance Reviews</h4>
                  <p className="text-sm text-foreground/70">Ongoing optimisation support</p>
                </Link>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Optimise Your Agency Contracts?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Discover how much you could save through strategic contract renegotiation with Fuel Media.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Contract Review</Link>
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