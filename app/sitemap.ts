import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fuelmedia.co.uk'
  
  const routes = [
    '',
    '/about',
    '/services',
    '/services/uk-media-audit',
    '/services/agency-pitch-management',
    '/services/contract-negotiation',
    '/services/performance-review',
    '/locations',
    '/locations/london',
    '/locations/manchester',
    '/locations/birmingham',
    '/locations/edinburgh',
    '/locations/leeds',
    '/case-studies',
    '/case-studies/retail-media-audit',
    '/case-studies/financial-services-pitch',
    '/case-studies/fmcg-contract-negotiation',
    '/partnerships',
    '/blog',
    '/contact',
    '/faq',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('/services/') ? 0.9 : 0.8,
  }))
}