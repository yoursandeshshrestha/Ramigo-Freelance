'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How long does remortgaging take?',
    answer: 'Typically 4-8 weeks from application to completion. We\'ll keep you updated at every stage and handle all the paperwork to make it as smooth as possible.',
  },
  {
    question: 'Do I need a deposit as a first-time buyer?',
    answer: 'Most lenders require at least 5% deposit, but a larger deposit (10-20%) often gets you better rates. We\'ll help you understand your options based on your situation.',
  },
  {
    question: 'Can I get a mortgage if I\'m self-employed?',
    answer: 'Absolutely. We work with specialist lenders who understand self-employed income. You\'ll typically need 1-2 years of accounts or tax returns.',
  },
  {
    question: 'Do you charge broker fees?',
    answer: 'No. We don\'t charge you a penny. We\'re paid by the lender when your mortgage completes, so our service is completely free to you.',
  },
  {
    question: 'Will checking my mortgage options affect my credit score?',
    answer: 'No. We use a soft search initially which doesn\'t appear on your credit file. A hard search only happens when you formally apply for a mortgage.',
  },
  {
    question: 'What\'s the difference between remortgaging and a product transfer?',
    answer: 'A product transfer means switching to a new deal with your current lender. Remortgaging means switching to a different lender entirely. We\'ll compare both options to find you the best deal.',
  },
  {
    question: 'How much can I borrow?',
    answer: 'Most lenders offer 4-5 times your annual income, but it depends on your circumstances. Use our quick form to get an accurate assessment based on your situation.',
  },
  {
    question: 'What happens if my mortgage application is rejected?',
    answer: 'We work with 90+ lenders, each with different criteria. If one says no, we\'ll find alternatives. Our expertise means we know which lenders are most likely to approve your specific situation.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#0A0A0A] py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6">
            Frequently asked questions
          </h2>
          <p className="font-hanken text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. Can&apos;t find what you&apos;re looking for? Give us a call.
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center cursor-pointer group"
                aria-expanded={openIndex === index}
              >
                <span className="font-hanken text-lg font-semibold pr-8 text-brand-white group-hover:text-remigo-red transition-colors duration-300">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-brand-white flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 font-hanken text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
