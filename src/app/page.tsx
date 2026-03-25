import {
  HeroSection,
  ServiceCardsSection,
  StatsBarSection,
  SocialProofSection,
} from '@/features/landingpage';
import {
  HowItWorksSection,
  FAQSection,
  FinalCTASection,
} from '@/features/common';

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
