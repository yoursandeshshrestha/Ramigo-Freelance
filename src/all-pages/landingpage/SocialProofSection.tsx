import React from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  date: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Thompson',
    date: 'June 01, 2023',
    rating: 5,
    text: 'As a first-time buyer, I was completely lost. Remigo made everything so simple and stress-free. They explained every step and got me a brilliant rate.',
  },
  {
    name: 'James Mitchell',
    date: 'November 09, 2023',
    rating: 5,
    text: 'Saved me over £200 a month on my mortgage. The whole process was seamless and they kept me updated throughout. Highly recommend!',
  },
  {
    name: 'Priya Patel',
    date: 'October 15, 2023',
    rating: 5,
    text: 'Being self-employed, I\'d been rejected twice. Remigo found a specialist lender who understood my situation and got me approved within days.',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Label */}
        <div className="mb-6">
          <span className="font-jetbrains text-xs tracking-widest text-brand-black/75 uppercase">
            Thousands trust Remigo
          </span>
        </div>

        {/* Heading and Description */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="text-brand-black block">Don&apos;t take our word for it,</span>
            <span className="text-remigo-red">see what our clients say</span>
          </h2>
          <p className="font-hanken text-lg text-brand-black/75 leading-relaxed">
            We&apos;re honored by the feedback, and it fuels our commitment to delivering exceptional mortgage services. Read the reviews to hear firsthand how Remigo is making a positive impact on people&apos;s lives. Your trust is our greatest achievement.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-8 flex flex-col"
            >
              {/* 5-Star Rating */}
              <div className="mb-6">
                <Image
                  src="/trustpilot/5-stars.svg"
                  alt="5 stars"
                  width={120}
                  height={24}
                />
              </div>

              {/* Testimonial Text */}
              <p className="font-hanken text-base text-brand-black/90 mb-8 leading-relaxed grow">
                {testimonial.text}
              </p>

              {/* Client Info */}
              <div className="mt-auto">
                <p className="font-hanken font-semibold text-brand-black mb-1">
                  {testimonial.name}
                </p>
                <p className="font-hanken text-sm text-brand-black/70">
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot Rating */}
        <div className="flex items-center gap-4">
          <Image
            src="/trustpilot/logo.svg"
            alt="Trustpilot"
            width={120}
            height={40}
          />
          <Image
            src="/trustpilot/5-stars.svg"
            alt="5 stars"
            width={120}
            height={24}
          />
          <span className="font-hanken text-brand-black font-semibold">Excellent</span>
        </div>

        {/* Rating Text */}
        <div className="mt-4">
          <p className="font-hanken text-sm text-brand-black/75">
            4.9 Rating based on 7,772 reviews
          </p>
        </div>
      </div>
    </section>
  );
};
