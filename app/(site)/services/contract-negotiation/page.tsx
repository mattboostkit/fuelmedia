import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Media Contract Negotiation UK | Save 20-40% on Agency Fees | Fuel Media',
  description: 'Expert UK media contract negotiation services. Secure better rates, improved terms, and enhanced transparency. Average savings of 20-40% on agency fees with stronger accountability measures.',
  keywords: ['media contract negotiation UK', 'agency fee negotiation', 'media buying terms', 'contract optimisation London', 'advertising contract review', 'agency agreement specialists'],
  openGraph: {
    title: 'UK Media Contract Negotiation - Secure Better Terms',
    description: 'Professional contract negotiation for UK advertisers. Reduce agency fees, improve transparency, and establish stronger performance metrics. Free contract review available.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Services', url: 'https://fuelmedia.co.uk/services' },
  { name: 'Contract Negotiation', url: 'https://fuelmedia.co.uk/services/contract-negotiation' }
]

export default function ContractNegotiationPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Contract Negotiation Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Transform your agency agreements into strategic assets. Our expert negotiators secure 
              20-40% savings on fees whilst establishing transparency and performance accountability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">What We Negotiate</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Agency fees and compensation structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Media buying transparency clauses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Performance metrics and KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Termination and transition terms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Intellectual property rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Data ownership and usage rights</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Typical Results</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>20-40% reduction in agency fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Enhanced transparency provisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Stronger performance guarantees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Improved audit rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Better termination protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Clear accountability measures</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Our Negotiation Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">1.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Contract Analysis</h4>
                    <p className="text-foreground/70">Comprehensive review of existing agreements to identify optimisation opportunities and risk areas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">2.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Market Benchmarking</h4>
                    <p className="text-foreground/70">Compare your terms against UK industry standards and best-in-class agreements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">3.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Strategy Development</h4>
                    <p className="text-foreground/70">Create negotiation strategy aligned with your business objectives and leverage points.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">4.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Active Negotiation</h4>
                    <p className="text-foreground/70">Lead negotiations with agencies to secure optimal commercial terms and protections.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">5.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Implementation Support</h4>
                    <p className="text-foreground/70">Ensure smooth transition to new terms with ongoing monitoring and compliance checks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Key Areas of Focus</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Fee Structures</h4>
                  <p className="text-foreground/70 mb-4">Optimise retainer fees, project rates, and performance incentives to align with value delivered.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Transparency Rights</h4>
                  <p className="text-foreground/70 mb-4">Establish clear visibility into media buying, rebates, AVBs, and all financial flows.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Performance Metrics</h4>
                  <p className="text-foreground/70 mb-4">Define measurable KPIs with consequences for underperformance and rewards for excellence.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Risk Management</h4>
                  <p className="text-foreground/70 mb-4">Protect against data breaches, compliance issues, and ensure smooth transitions if needed.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Recent Negotiation Wins</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">£3.2M</p>
                  <p className="text-foreground/70">Annual savings for retail client</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">35%</p>
                  <p className="text-foreground/70">Average fee reduction achieved</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">100%</p>
                  <p className="text-foreground/70">Media transparency secured</p>
                </div>
              </div>
            </div>

            <div className="bg-flame-orange/10 border border-flame-orange/20 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Free Contract Health Check</h3>
              <p className="text-lg mb-4">
                Not sure if your current agreements are competitive? We offer a complimentary review of your 
                existing contracts to identify immediate savings opportunities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-flame-orange mt-1">✓</span>
                  <span>Confidential review of current terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame-orange mt-1">✓</span>
                  <span>Benchmark against UK standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame-orange mt-1">✓</span>
                  <span>Identify quick win opportunities</span>
                </li>
              </ul>
              <Button variant="ghost" size="lg" asChild><Link href="/contact">Get Your Free Contract Review</Link></Button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Optimise Your Agency Agreements?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Let our negotiation experts secure better terms and stronger protections for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild><Link href="/contact">Start Saving Today</Link></Button>
                <Button size="lg" variant="ghost" asChild><Link href="/case-studies">View Negotiation Success Stories</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}