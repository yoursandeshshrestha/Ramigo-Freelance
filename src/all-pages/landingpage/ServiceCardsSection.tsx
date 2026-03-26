import React from 'react';
import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  href: string;
}

const services: Service[] = [
  {
    title: 'Remortgage',
    description: 'Switch to a better deal and avoid the SVR trap.',
    href: '/remortgage',
  },
  {
    title: 'First-Time Buyer',
    description: 'Get on the ladder with expert guidance.',
    href: '/first-time-buyer',
  },
  {
    title: 'Self-Employed',
    description: 'Specialist lenders who understand your income.',
    href: '/self-employed-mortgage',
  },
  {
    title: 'Protection',
    description: 'Protect your family and your home with the right cover.',
    href: '/protection',
  },
];

export const ServiceCardsSection: React.FC = () => {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Service Cards Bento */}
          <div className="grid grid-cols-2 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-gray-100 rounded-2xl p-6 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-trocchi text-xl md:text-2xl text-brand-black mb-3">
                    {service.title}
                  </h3>
                  <p className="font-hanken text-sm text-brand-black/70 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-brand-black/75 group-hover:text-remigo-red font-hanken text-sm transition-colors duration-300">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Right - Heading */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="font-jetbrains text-xs tracking-widest text-brand-black/75 uppercase">
                Our Services
              </span>
            </div>

            <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
              What can we <span className="text-[#d93b3b]">help</span> you with?
            </h2>
            <p className="font-hanken text-lg text-brand-black/70 leading-relaxed">
              Choose your situation and we'll find you the perfect deal. Expert advice tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
