import {
  HeroSection,
  ServiceCardsSection,
  StatsBarSection,
  SocialProofSection,
} from '@/all-pages/landingpage';
import {
  HowItWorksSection,
  FAQSection,
  FinalCTASection,
} from '@/all-pages/common';

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
