import { ServiceHeroSection, TheProblemSection, HowWeHelpSection } from '@/features/service-pages';
import { HowItWorksSection, FAQSection, FinalCTASection } from '@/features/common';

export const metadata = {
  title: 'Self-Employed Mortgages | Specialist Broker | Remigo',
  description: 'Get a mortgage as a self-employed professional. We know which lenders accept 1 year\'s accounts. FCA regulated. £0 broker fees.',
  keywords: 'self employed mortgage, contractor mortgage, freelance mortgage, limited company mortgage',
};

export default function SelfEmployedMortgagePage() {
  const helpPoints = [
    {
      title: 'We know which lenders are flexible',
      description: 'Not all lenders treat self-employed income the same. We know who accepts 1 year\'s accounts and who doesn\'t.',
    },
    {
      title: 'We present your income properly',
      description: 'Whether you\'re a contractor, director, or sole trader, we package your application to maximise borrowing.',
    },
    {
      title: 'We work with complex income',
      description: 'Dividends, retained profit, day rates — we handle income structures that high street banks struggle with.',
    },
    {
      title: 'We get better rates',
      description: 'Self-employed doesn\'t mean expensive. We find competitive rates that match or beat employed borrowers.',
    },
  ];

  const faqs = [
    {
      question: 'Do I need 2 or 3 years of accounts?',
      answer: 'Not always. Some specialist lenders accept just 1 year of accounts. Contractors and day-rate workers sometimes need even less. We know which lenders to approach.',
    },
    {
      question: 'How do lenders calculate my income?',
      answer: 'It depends on your setup. Sole traders: net profit. Limited company directors: salary + dividends (sometimes retained profit too). We know how each lender calculates and find the best one for you.',
    },
    {
      question: 'Can I get a mortgage if my income fluctuates?',
      answer: 'Yes. Some lenders average your income, others use your latest year if it\'s higher. If you have contracts lined up, some will consider that too.',
    },
    {
      question: 'What documents do I need?',
      answer: 'Usually: SA302s or tax calculations, tax year overviews, business bank statements (3-6 months), and accounts if limited. We\'ll give you the exact list.',
    },
    {
      question: 'Will my accountant need to confirm anything?',
      answer: 'Sometimes lenders want an accountant reference confirming your business is ongoing. We\'ll handle the request and tell you exactly what\'s needed.',
    },
    {
      question: 'Can I use my day rate as income?',
      answer: 'Yes, if you\'re a contractor with an ongoing contract. Some lenders will assess based on your daily or hourly rate rather than accounts.',
    },
  ];

  return (
    <main>
      <ServiceHeroSection
        title="Mortgages for the self-employed"
        description="Getting a mortgage when you're self-employed shouldn't be harder than getting one with a payslip. We specialise in contractor, freelance, and limited company mortgages — finding lenders who understand your income."
        mortgageType="self-employed"
      />

      <TheProblemSection
        title="High street lenders don't understand your income"
        description="You earn good money, but you're self-employed. Banks want 2-3 years of accounts. They don't understand dividends, day rates, or retained profit. Some won't touch contractors at all. Meanwhile, you just want to buy a house. We know which lenders get it."
      />

      <HowWeHelpSection points={helpPoints} />

      <HowItWorksSection />

      <FAQSection faqs={faqs} serviceType="self-employed" />

      <FinalCTASection />
    </main>
  );
}
