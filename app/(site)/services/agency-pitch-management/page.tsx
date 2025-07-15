import { Metadata } from 'next'
import { Button } from '@/components/ui'
import Link from 'next/link'
import { StructuredData, generateBreadcrumbSchema } from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Agency Pitch Management UK | Expert Selection Process | Fuel Media',
  description: 'Professional agency pitch management for UK brands. Strategic guidance through agency selection, brief development, and negotiations. Ensure you choose the right partner and secure optimal terms.',
  keywords: ['agency pitch management UK', 'media agency selection', 'pitch consultancy London', 'agency review process', 'RFP management UK', 'advertising agency selection'],
  openGraph: {
    title: 'UK Agency Pitch Management - Select the Right Partner',
    description: 'Expert guidance through the agency selection process. From brief development to final negotiations, ensure you choose the best agency for your UK business needs.',
  }
}

const breadcrumbData = [
  { name: 'Home', url: 'https://fuelmedia.co.uk' },
  { name: 'Services', url: 'https://fuelmedia.co.uk/services' },
  { name: 'Agency Pitch Management', url: 'https://fuelmedia.co.uk/services/agency-pitch-management' }
]

export default function AgencyPitchManagementPage() {
  return (
    <>
      <StructuredData data={generateBreadcrumbSchema(breadcrumbData)} />
      
      <section className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bebas text-transparent bg-clip-text bg-gradient-to-r from-flame-orange to-flame-red mb-6">
              Agency Pitch Management
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-foreground/80">
              Select the perfect agency partner with confidence. Our expert pitch management process ensures 
              you find the right fit whilst securing the best commercial terms for your UK business.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Our Expertise</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>200+ successful UK agency pitches managed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Deep knowledge of UK agency landscape</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Relationships with all major UK agencies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Proven methodology for optimal outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">•</span>
                    <span>Average 25% improvement in commercial terms</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/20">
                <h3 className="text-2xl font-bebas text-flame-orange mb-4">Key Deliverables</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Comprehensive agency landscape analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Strategic brief development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Pitch process management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Objective scoring and evaluation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-flame-orange mt-1">✓</span>
                    <span>Contract negotiation support</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-flame-orange/20 to-flame-red/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-4">Our Proven Pitch Process</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">1.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Strategic Planning</h4>
                    <p className="text-foreground/70">Define objectives, scope, and success criteria. Develop comprehensive brief aligned with your business goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">2.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Agency Long-listing</h4>
                    <p className="text-foreground/70">Identify suitable agencies based on capabilities, culture fit, and UK market expertise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">3.</span>
                  <div>
                    <h4 className="font-semibold mb-1">RFI & Short-listing</h4>
                    <p className="text-foreground/70">Manage information requests and evaluate responses to create focused shortlist.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">4.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Pitch Management</h4>
                    <p className="text-foreground/70">Coordinate presentations, ensure fair process, and facilitate productive sessions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-bebas text-flame-orange">5.</span>
                  <div>
                    <h4 className="font-semibold mb-1">Evaluation & Selection</h4>
                    <p className="text-foreground/70">Objective scoring, reference checks, and commercial negotiations to secure best terms.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 p-8 rounded-xl mb-12">
              <h2 className="text-3xl font-bebas mb-6">Why Professional Pitch Management Matters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Save Time & Resources</h4>
                  <p className="text-foreground/70 mb-4">Streamlined process reduces pitch timeline by 40% whilst improving quality of submissions.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Better Agency Selection</h4>
                  <p className="text-foreground/70 mb-4">Objective evaluation ensures you select based on merit, not just impressive presentations.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stronger Negotiations</h4>
                  <p className="text-foreground/70 mb-4">Leverage our market knowledge to secure competitive rates and favourable terms.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Risk Mitigation</h4>
                  <p className="text-foreground/70 mb-4">Avoid common pitfalls and ensure compliance with procurement best practices.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary-blue/10 p-8 rounded-xl mb-12">
              <h3 className="text-2xl font-bebas mb-4">Recent UK Pitch Success</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">£45M</p>
                  <p className="text-foreground/70">FMCG brand media account</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">28%</p>
                  <p className="text-foreground/70">Average fee reduction achieved</p>
                </div>
                <div>
                  <p className="text-4xl font-bebas text-flame-orange mb-2">6 weeks</p>
                  <p className="text-foreground/70">Typical pitch timeline</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bebas mb-4">Ready to Find Your Perfect Agency Partner?</h3>
              <p className="text-lg mb-8 text-foreground/80">
                Let our experts guide you through a successful agency selection process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Start Your Agency Search</Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="/case-studies">View Pitch Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}