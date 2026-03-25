import { ServiceHeroSection, TheProblemSection, HowWeHelpSection } from '@/features/service-pages';
import { HowItWorksSection, FAQSection, FinalCTASection } from '@/features/common';

export const metadata = {
  title: 'Remortgage Advice | Switch to a Better Deal | Remigo',
  description: 'Save money with expert remortgage advice. Compare deals from 90+ lenders. FCA regulated. £0 broker fees. Free quote in 60 seconds.',
  keywords: 'remortgage, remortgage advice, remortgage broker, switch mortgage deal, remortgage calculator',
};

export default function RemortgagePage() {
  const helpPoints = [
    {
      title: 'We search the whole market',
      description: 'Access to 90+ lenders means we find deals you won\'t see on comparison sites. No stone unturned.',
    },
    {
      title: 'We time it perfectly',
      description: 'Start too early and rates might drop. Too late and you\'re stuck on the SVR. We get the timing right.',
    },
    {
      title: 'We handle the admin',
      description: 'From application to completion, we manage everything. You just need to sign where we tell you.',
    },
    {
      title: 'We save you money',
      description: 'Lower rates, better terms, no broker fees. Most clients save £100+ per month on their mortgage.',
    },
  ];

  const faqs = [
    {
      question: 'When should I start remortgaging?',
      answer: 'Ideally 3-6 months before your current deal ends. This gives us time to find the best rate and complete the switch before you default to the SVR.',
    },
    {
      question: 'What is the SVR and why should I avoid it?',
      answer: 'The Standard Variable Rate (SVR) is your lender\'s default rate after your fixed deal ends. It\'s usually 2-3% higher than fixed rates, costing you hundreds extra per month.',
    },
    {
      question: 'Can I remortgage to release equity?',
      answer: 'Yes. If your home has increased in value, you can remortgage to release equity for home improvements, debt consolidation, or other purposes.',
    },
    {
      question: 'Will I need a valuation?',
      answer: 'Usually yes, but many lenders offer free valuations. We\'ll arrange this for you as part of the process.',
    },
    {
      question: 'What if I have early repayment charges?',
      answer: 'We\'ll calculate whether the savings from a new deal outweigh the ERC. Sometimes it makes sense to pay it, sometimes it doesn\'t.',
    },
    {
      question: 'Product transfer vs remortgage - which is better?',
      answer: 'A product transfer is quicker and stays with your current lender. Remortgaging means switching lenders for potentially better rates. We\'ll compare both and recommend the best option for you.',
    },
  ];

  return (
    <main>
      <ServiceHeroSection
        title="Remortgage to a better deal"
        description="Your fixed rate's ending and you're about to land on the SVR. We'll find you a better deal from 90+ lenders and handle everything through to completion. No broker fees, no jargon."
        mortgageType="remortgage"
      />

      <TheProblemSection
        title="Your fixed rate is ending"
        description="You've had the reminder letter. Your deal expires in a few months and you'll default to the lender's Standard Variable Rate — which could cost you hundreds more per month. But switching feels like admin you don't have time for. We get it. That's why we do it for you."
      />

      <HowWeHelpSection points={helpPoints} />

      <HowItWorksSection />

      <FAQSection faqs={faqs} serviceType="remortgage" />

      <FinalCTASection />
    </main>
  );
}
