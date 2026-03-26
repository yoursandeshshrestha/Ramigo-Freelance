import dynamic from 'next/dynamic';
import { HeroSection } from '@/all-pages/landingpage';
import { HowItWorksSection } from '@/all-pages/common';

// Lazy load below-the-fold sections
const ServiceCardsSection = dynamic(() => import('@/all-pages/landingpage').then(mod => ({ default: mod.ServiceCardsSection })));
const StatsBarSection = dynamic(() => import('@/all-pages/landingpage').then(mod => ({ default: mod.StatsBarSection })));
const SocialProofSection = dynamic(() => import('@/all-pages/landingpage').then(mod => ({ default: mod.SocialProofSection })));
const FAQSection = dynamic(() => import('@/all-pages/common').then(mod => ({ default: mod.FAQSection })));
const FinalCTASection = dynamic(() => import('@/all-pages/common').then(mod => ({ default: mod.FinalCTASection })));

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <ServiceCardsSection />
      <StatsBarSection />
      <SocialProofSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
