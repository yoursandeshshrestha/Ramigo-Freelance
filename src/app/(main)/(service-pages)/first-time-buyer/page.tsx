import { ServiceHeroSection, TheProblemSection, HowWeHelpSection } from '@/all-pages/service-pages';
import { HowItWorksSection, FAQSection, FinalCTASection } from '@/all-pages/common';

export const metadata = {
  title: 'First Time Buyer Mortgages | Expert Advice | Remigo',
  description: 'Get on the property ladder with expert first-time buyer mortgage advice. Compare deals from 90+ lenders. FCA regulated. £0 broker fees.',
  keywords: 'first time buyer mortgage, first home, mortgage advice, property ladder, first time buyer',
};

export default function FirstTimeBuyerPage() {
  const helpPoints = [
    {
      title: 'We explain everything',
      description: 'First mortgage? We break down every step in plain English. No confusing jargon, just clear guidance.',
    },
    {
      title: 'We find your deposit options',
      description: 'From Help to Buy ISAs to family guarantor schemes, we explore every route to get you on the ladder.',
    },
    {
      title: 'We handle the complexity',
      description: 'Applications, valuations, solicitors, completion dates. We coordinate it all so you don\'t have to.',
    },
    {
      title: 'We maximise your budget',
      description: 'Find out exactly what you can borrow and get the best rate possible. More house for your money.',
    },
  ];

  const faqs = [
    {
      question: 'How much deposit do I need?',
      answer: 'Most lenders want at least 5-10% deposit. A bigger deposit (15-20%) usually gets you better rates. We\'ll help you work out what you can afford and explore schemes that might help.',
    },
    {
      question: 'How much can I borrow?',
      answer: 'Typically 4-4.5x your annual salary, though some lenders go higher. We\'ll calculate your maximum borrowing and find lenders who\'ll give you the best deal for your circumstances.',
    },
    {
      question: 'What is a mortgage in principle?',
      answer: 'It\'s a conditional agreement from a lender showing how much they\'ll lend you. Estate agents often want to see this before accepting your offer. We can arrange one quickly.',
    },
    {
      question: 'What are the upfront costs?',
      answer: 'Beyond your deposit, budget for surveys (£300-1500), legal fees (£800-1500), and searches (£250-300). Some of these can be added to your mortgage.',
    },
    {
      question: 'Should I use Help to Buy or shared ownership?',
      answer: 'Depends on your situation. Help to Buy is ending but existing ISAs still work. Shared ownership helps if you can\'t afford a full deposit. We\'ll compare all your options.',
    },
    {
      question: 'How long does the process take?',
      answer: 'From mortgage application to completion usually takes 8-12 weeks. We keep things moving and chase when needed so you hit your target move date.',
    },
  ];

  return (
    <main>
      <ServiceHeroSection
        title="Get on the property ladder"
        description="Buying your first home feels overwhelming. Between deposits, mortgages in principle, and solicitors, there's a lot to navigate. We guide you through every step and find you the best mortgage deal from 90+ lenders."
        mortgageType="first-time-buyer"
      />

      <TheProblemSection
        title="You want to buy but don't know where to start"
        description="You've saved a deposit (or think you have enough). You've seen properties you like. But the mortgage process feels like a maze of jargon and paperwork. What can you actually borrow? What rate can you get? Do you need a mortgage broker or can you do it yourself? We make it simple."
      />

      <HowWeHelpSection points={helpPoints} />

      <HowItWorksSection />

      <FAQSection faqs={faqs} serviceType="first-time-buyer" />

      <FinalCTASection />
    </main>
  );
}
