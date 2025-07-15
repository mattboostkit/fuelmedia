import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Media Performance Reviews UK | Agency & Campaign Analysis | Fuel Media',
  description: 'Regular UK media performance reviews to maximise ROI. Independent assessment of agency performance, campaign effectiveness, and media efficiency. Quarterly or annual reviews available.',
  keywords: ['media performance review UK', 'agency performance assessment', 'campaign effectiveness analysis', 'media ROI review', 'quarterly performance reviews', 'advertising performance audit'],
  openGraph: {
    title: 'UK Media Performance Reviews - Maximise Your ROI',
    description: 'Independent performance reviews for UK advertisers. Assess agency effectiveness, campaign performance, and media efficiency. Actionable insights for continuous improvement.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Services', url: 'https://fuelmedia.co.uk/services' },
  { name: 'Performance Review', url: 'https://fuelmedia.co.uk/services/performance-review' }
]

export default function PerformanceReviewPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Performance Review Services
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Keep your media investment on track with regular performance reviews. Our independent assessments 
              ensure continuous improvement and maximum return on your advertising spend.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Review Coverage</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Agency performance against KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Campaign effectiveness metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Media buying efficiency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Digital performance analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Creative impact assessment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Competitive benchmarking</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Review Benefits</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Identify performance improvements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Validate agency value delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Optimise media mix and spend</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Enhance campaign effectiveness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Drive continuous improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Strengthen agency relationships</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Performance Review Framework</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">1.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Data Collection</h4>
                    <p className="text-foreground/70">Gather performance data, campaign results, and financial metrics from agreed review period.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">2.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Performance Analysis</h4>
                    <p className="text-foreground/70">Evaluate against agreed KPIs, industry benchmarks, and historical performance trends.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">3.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Stakeholder Interviews</h4>
                    <p className="text-foreground/70">Gather qualitative insights from key team members on both client and agency sides.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">4.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Findings & Recommendations</h4>
                    <p className="text-foreground/70">Present clear findings with prioritised recommendations for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">5.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Action Planning</h4>
                    <p className="text-foreground/70">Develop implementation roadmap with clear owners and timelines for improvements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Review Options</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <h4 className="font-bebas text-2xl text-flame-orange mb-2">Quarterly Reviews</h4>
                  <p className="text-foreground/70 mb-4">Regular pulse checks to maintain momentum and address issues quickly.</p>
                  <ul className="text-sm text-left space-y-1">
                    <li>• Campaign performance</li>
                    <li>• Budget tracking</li>
                    <li>• Quick wins focus</li>
                  </ul>
                </div>
                <div className="text-center p-4 border-x border-primary/20">
                  <h4 className="font-bebas text-2xl text-flame-orange mb-2">Annual Reviews</h4>
                  <p className="text-foreground/70 mb-4">Comprehensive assessment with strategic recommendations for the year ahead.</p>
                  <ul className="text-sm text-left space-y-1">
                    <li>• Full performance audit</li>
                    <li>• Strategic planning</li>
                    <li>• Contract review</li>
                  </ul>
                </div>
                <div className="text-center p-4">
                  <h4 className="font-bebas text-2xl text-flame-orange mb-2">Campaign Reviews</h4>
                  <p className="text-foreground/70 mb-4">Deep dive into specific campaigns to maximise learning and ROI.</p>
                  <ul className="text-sm text-left space-y-1">
                    <li>• Creative effectiveness</li>
                    <li>• Media performance</li>
                    <li>• ROI analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Performance Improvements Delivered</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">42%</p>
                  <p className="text-foreground/70">Average ROI improvement</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">£18M</p>
                  <p className="text-foreground/70">Additional value identified</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">93%</p>
                  <p className="text-foreground/70">Client satisfaction rate</p>
                </div>
              </div>
            </div>

            <div className="bg-flame-orange/10 border border-flame-orange/20 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">What Our Reviews Include</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quantitative Analysis</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• Media efficiency metrics</li>
                    <li>• Campaign performance data</li>
                    <li>• Cost per acquisition trends</li>
                    <li>• Market share movements</li>
                    <li>• Digital engagement metrics</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Qualitative Assessment</h4>
                  <ul className="space-y-1 text-foreground/70">
                    <li>• Agency relationship health</li>
                    <li>• Creative quality evaluation</li>
                    <li>• Strategic alignment review</li>
                    <li>• Process efficiency assessment</li>
                    <li>• Innovation and proactivity</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Enhance Your Media Performance?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Schedule a consultation to discuss how regular performance reviews can drive better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg"><Link href="/contact">Book Your Performance Review</Link></Button>
                <Button size="lg" variant="ghost"><Link href="/case-studies">See Review Impact Stories</Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}