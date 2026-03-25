'use client';

import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs?: FAQ[];
  serviceType?: string;
}

const defaultFaqs: FAQ[] = [
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

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs = defaultFaqs, serviceType }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  // Generate FAQ Schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': (faqs || defaultFaqs).map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };

  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Heading */}
          <div>
            

            <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="font-hanken text-lg text-brand-black/70 leading-relaxed">
              We compiled a list of answers to address your most pressing questions regarding our Services.
            </p>
          </div>

          {/* Right - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-brand-white border border-gray-200 rounded-2xl overflow-hidden"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-full px-6 py-5 flex justify-between items-center">
                  <span className="font-hanken text-base font-medium pr-8 text-brand-black">
                    {faq.question}
                  </span>
                  <div className="shrink-0">
                    {openIndex === index ? (
                      <svg className="w-5 h-5 text-brand-black/40 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-brand-black/40 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5 font-hanken text-brand-black/70 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
