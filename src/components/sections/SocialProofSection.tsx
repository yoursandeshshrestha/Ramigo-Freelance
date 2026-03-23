import React from 'react';

interface Testimonial {
  name: string;
  location: string;
  serviceType: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Thompson',
    location: 'Manchester',
    serviceType: 'First-Time Buyer',
    rating: 5,
    text: 'As a first-time buyer, I was completely lost. Remigo made everything so simple and stress-free. They explained every step and got me a brilliant rate.',
  },
  {
    name: 'James Mitchell',
    location: 'London',
    serviceType: 'Remortgage',
    rating: 5,
    text: 'Saved me over £200 a month on my mortgage. The whole process was seamless and they kept me updated throughout. Highly recommend!',
  },
  {
    name: 'Priya Patel',
    location: 'Birmingham',
    serviceType: 'Self-Employed',
    rating: 5,
    text: 'Being self-employed, I\'d been rejected twice. Remigo found a specialist lender who understood my situation and got me approved within days.',
  },
];

export const SocialProofSection: React.FC = () => {
  return (
    <section className="relative bg-brand-black py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-white mb-6 whitespace-nowrap">
            What our clients say
          </h2>
          <p className="font-hanken text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Real people, real results. Here&apos;s what our clients have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 overflow-hidden flex flex-col"
            >
              {/* Animated gradient overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-br from-remigo-red/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400" />

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-amber fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="font-hanken text-base text-gray-300 mb-6 leading-relaxed relative z-10 grow">
                &quot;{testimonial.text}&quot;
              </p>

              {/* Client Info */}
              <div className="border-t border-gray-800 pt-4 relative z-10 mt-auto">
                <p className="font-hanken font-semibold text-brand-white mb-1">
                  {testimonial.name}
                </p>
                <p className="font-hanken text-sm text-gray-400">
                  {testimonial.location} · {testimonial.serviceType}
                </p>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-br from-remigo-red/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trustpilot Widget */}
        <div className="mt-12 text-center">
          <a
            href="https://www.trustpilot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-linear-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-lg px-6 py-3 hover:border-gray-700 transition-colors cursor-pointer"
          >
            <span className="text-amber text-2xl">★</span>
            <span className="font-hanken text-gray-300">
              Rated <span className="font-bold text-brand-white">4.9/5</span> on Trustpilot
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
