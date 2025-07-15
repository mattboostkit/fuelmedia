import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'UK Media Audit Services | Save 20-30% on Ad Spend | Fuel Media',
  description: 'Comprehensive UK media audit services revealing hidden savings opportunities. Expert analysis of media buying, agency performance, and digital advertising effectiveness. Average client savings £2.3M annually.',
  keywords: ['UK media audit', 'advertising audit London', 'media spend analysis UK', 'agency performance audit', 'digital media audit', 'programmatic audit UK'],
  openGraph: {
    title: 'UK Media Audit Services - Unlock 20-30% Savings',
    description: 'Professional media auditing for UK advertisers. Comprehensive analysis of media investments, agency relationships, and performance metrics. Free initial consultation.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Services', url: 'https://fuelmedia.co.uk/services' },
  { name: 'UK Media Audit', url: 'https://fuelmedia.co.uk/services/uk-media-audit' }
]

export default function UKMediaAuditPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              UK Media Audit Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Unlock 20-30% savings on your media spend with our comprehensive UK media audit services. 
              We've helped British advertisers save over £710M through strategic analysis and optimisation.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">What We Analyse</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Media buying efficiency across all UK channels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Agency fees and transparency benchmarks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Digital advertising performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Programmatic trading desk operations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Creative production cost effectiveness</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Key Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Average savings of 20-30% on media spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Independent, unbiased analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Actionable recommendations within 4 weeks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Benchmarking against UK industry standards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Ongoing support for implementation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Our UK Media Audit Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">1.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Discovery & Data Collection</h4>
                    <p className="text-foreground/70">We gather all media plans, invoices, contracts, and performance data from the past 12-24 months.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">2.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Comprehensive Analysis</h4>
                    <p className="text-foreground/70">Our experts analyse media buying efficiency, agency fees, digital performance, and creative costs.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">3.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Benchmarking & Insights</h4>
                    <p className="text-foreground/70">We compare your performance against UK industry benchmarks and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">4.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Recommendations</h4>
                    <p className="text-foreground/70">Receive a detailed report with prioritised actions to optimise your media investment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Why UK Advertisers Choose Fuel Media</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Deep UK Market Knowledge</h4>
                  <p className="text-foreground/70 mb-4">Extensive experience with UK media landscape, regulations, and industry practices.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Proven Track Record</h4>
                  <p className="text-foreground/70 mb-4">£710M+ saved for UK advertisers across retail, finance, FMCG, and technology sectors.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Independent & Objective</h4>
                  <p className="text-foreground/70 mb-4">No agency affiliations or media owner relationships - completely unbiased advice.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rapid Implementation</h4>
                  <p className="text-foreground/70 mb-4">Fast turnaround with actionable insights delivered within 4 weeks.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Optimise Your Media Investment?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Schedule a free consultation to discover how much you could be saving on your UK media spend.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Your Free UK Media Audit Consultation</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="/case-studies">View UK Client Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}