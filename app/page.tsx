import {
  HeroSection,
  ServicesSection,
  ClientLogos,
  StatsSection,
  AboutSection,
  CTASection,
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </>
  )
}