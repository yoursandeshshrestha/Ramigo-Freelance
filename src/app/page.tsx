import {
  HeroSection,
  HowItWorksSection,
  ServiceCardsSection,
  StatsBarSection,
  SocialProofSection,
  FAQSection,
  FinalCTASection,
} from '@/components/sections';

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
