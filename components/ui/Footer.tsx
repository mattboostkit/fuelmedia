import Link from 'next/link'
import { Button } from './Button'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/partnerships', label: 'Partnerships' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ],
  services: [
    { href: '/#services', label: 'Media Audits' },
    { href: '/#services', label: 'Agency Pitches' },
    { href: '/#services', label: 'Contract Negotiations' },
    { href: '/#services', label: 'Performance Reviews' },
  ],
  legal: [
    // { href: '/privacy', label: 'Privacy Policy' },
    // { href: '/terms', label: 'Terms of Service' },
    // { href: '/cookies', label: 'Cookie Policy' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="text-3xl font-bebas tracking-wider gradient-text">
                FUEL MEDIA
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-sm">
              Expert media audit specialists delivering transparency, accountability, and commercial excellence.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass-effect flex items-center justify-center text-white/60 hover:text-white hover:flame-shadow transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
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
            <h3 className="font-bebas text-xl mb-4 text-white">Newsletter</h3>
            <p className="text-white/60 mb-4">
              Stay updated with our latest insights and strategies.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-flame-orange transition-colors"
                />
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40" size={20} />
              </div>
              <Button variant="flame" size="sm" className="w-full">
                Subscribe
              </Button>
            </form>
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