import { ServiceHeroSection, TheProblemSection, HowWeHelpSection } from '@/features/service-pages';
import { HowItWorksSection, FAQSection, FinalCTASection } from '@/features/common';

export const metadata = {
  title: 'Mortgage Protection Insurance | Life Insurance | Remigo',
  description: 'Protect your mortgage with the right life insurance. We compare the whole market to find cover that fits your needs and budget. FCA regulated.',
  keywords: 'mortgage protection, life insurance, income protection, critical illness cover',
};

export default function ProtectionPage() {
  const helpPoints = [
    {
      title: 'We explain what you actually need',
      description: 'Life insurance, critical illness, income protection — we cut through the sales pitch and explain what matters.',
    },
    {
      title: 'We compare the whole market',
      description: 'Access to every major insurer means we find the best cover at the best price. No bias, no upselling.',
    },
    {
      title: 'We get the price right',
      description: 'Over-insure and you waste money. Under-insure and your family is exposed. We calculate the right amount.',
    },
    {
      title: 'We make claims easier',
      description: 'If the worst happens, we help with the claims process. You have enough to deal with.',
    },
  ];

  const faqs = [
    {
      question: 'Do I need life insurance for a mortgage?',
      answer: 'Not legally, but if you died, could your family afford the mortgage payments? Life insurance pays off or covers the mortgage so they don\'t lose the house.',
    },
    {
      question: 'What is the difference between life insurance and critical illness?',
      answer: 'Life insurance pays out if you die. Critical illness pays out if you\'re diagnosed with a serious condition (cancer, heart attack, stroke, etc.). Many people combine both.',
    },
    {
      question: 'How much cover do I need?',
      answer: 'Typically enough to clear your mortgage, cover funeral costs, and replace lost income for a few years. We\'ll calculate based on your situation.',
    },
    {
      question: 'What is income protection insurance?',
      answer: 'Pays you a monthly income if you can\'t work due to illness or injury. It\'s different from critical illness — you don\'t need a specific diagnosis, just to be unable to work.',
    },
    {
      question: 'Should I get insurance through my lender?',
      answer: 'Usually no. Lender insurance is rarely the cheapest and often has worse terms. We compare the whole market and usually find better value.',
    },
    {
      question: 'I have insurance through work — do I still need my own?',
      answer: 'Maybe. Work insurance disappears if you leave or get made redundant. Your own policy stays with you. We\'ll review your work cover and recommend if you need more.',
    },
  ];

  return (
    <main>
      <ServiceHeroSection
        title="Protect what matters most"
        description="You've got the mortgage. Now protect it. If something happened to you, could your family afford to stay in the house? We find the right life insurance and protection cover so they're looked after."
        mortgageType="protection"
      />

      <TheProblemSection
        title="You need cover but don't know what kind"
        description="Life insurance, critical illness, income protection — the options are confusing and you're not sure what you actually need. Your lender is pushing their own insurance, but is it any good? And how much cover should you get? We make sense of it all."
      />

      <HowWeHelpSection points={helpPoints} />

      <HowItWorksSection />

      <FAQSection faqs={faqs} serviceType="protection" />

      <FinalCTASection />
    </main>
  );
}
