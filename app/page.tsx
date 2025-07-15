import {
  HeroSection,
  ServicesSection,
  ClientLogos,
  StatsSection,
  AboutSection,
  CTASection,
} from '@/components/sections'
import { Testimonials } from '@/components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientLogos />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  )
}