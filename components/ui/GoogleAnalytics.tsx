'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId?: string
}

export function GoogleAnalytics({ gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-E0X4PL8B1Q' }: GoogleAnalyticsProps) {
  if (!gaId) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  )
} 