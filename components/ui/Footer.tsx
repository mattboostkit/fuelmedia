import Link from 'next/link'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/partnerships', label: 'Partnerships' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQs' },
  ],
  services: [
    { href: '/services/uk-media-audit', label: 'Media Audits' },
    { href: '/services/agency-pitch-management', label: 'Agency Pitches' },
    { href: '/services/contract-negotiation', label: 'Contract Negotiations' },
    { href: '/services/performance-review', label: 'Performance Reviews' },
  ],
  legal: [] as Array<{ href: string; label: string }>,
}

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center">
              <Image
                src="https://ik.imagekit.io/boostkit/Fuel%20Media%20and%20Marketing/Fuel_Logo.svg?updatedAt=1751799590441"
                alt="Fuel Media - UK Media Audit Specialists"
                width={120}
                height={40}
                className="h-10 w-auto block dark:hidden"
              />
              <Image
                src="https://ik.imagekit.io/boostkit/Fuel%20Media%20and%20Marketing/Logo_White_Fade%20(Large).png?updatedAt=1751799623208"
                alt="Fuel Media - UK Media Audit Specialists"
                width={120}
                height={40}
                className="h-10 w-auto hidden dark:block"
              />
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Expert media audit specialists delivering transparency, accountability, and commercial excellence.
            </p>
            {/* Contact Info */}
            <div className="mb-6 space-y-1">
              <p className="text-white/80 text-sm"><strong>Phone:</strong> <a href="tel:+447700155848" className="hover:text-flame-orange transition-colors">+44(0) 7700 155848</a></p>
              <p className="text-white/80 text-sm"><strong>Email:</strong> <a href="mailto:oli@fuelmediamarketing.com" className="hover:text-flame-orange transition-colors">oli@fuelmediamarketing.com</a></p>
              <p className="text-white/80 text-sm"><strong>Address:</strong> 3rd Floor, 86-90 Paul St, London EC2A 4NE</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/fuel-media-marketing/posts/?feedView=all"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-[#0A66C2] bg-white hover:bg-[#0A66C2] hover:text-white hover:flame-shadow transition-all duration-300 border border-[#0A66C2]/30"
                target="_blank" rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bebas text-xl mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-xl mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Fuel Media & Marketing. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.length > 0 && footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/40 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}