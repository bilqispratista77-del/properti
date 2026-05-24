'use client';

import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import StatsSection from '@/components/sections/StatsSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import PortfolioSection from '@/components/sections/PortfolioSection';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import FloatingWhatsApp from '@/components/sections/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <AdvantagesSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
