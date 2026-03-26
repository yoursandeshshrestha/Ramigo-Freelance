'use client';

import Image from 'next/image';
import { useFormModal } from '@/components/FormModalProvider';
import { Button } from '@/components/ui';

interface HeadlineVariant {
  id: string;
  headline: string;
  subheadline: string;
}

interface Benefit {
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

interface HowItWorksStep {
  number: string;
  title: string;
}

interface AdLandingPageProps {
  mortgageType: string;
  headlineVariants: HeadlineVariant[];
  selectedVariant?: string;
  benefits: Benefit[];
  testimonials: Testimonial[];
  howItWorksSteps: HowItWorksStep[];
}

export function AdLandingPage({
  mortgageType,
  headlineVariants,
  selectedVariant = '1',
  benefits,
  testimonials,
  howItWorksSteps,
}: AdLandingPageProps) {
  const { openForm } = useFormModal();

  const currentVariant = headlineVariants.find((v) => v.id === selectedVariant) || headlineVariants[0];

  const handleCTAClick = () => {
    openForm(mortgageType);
  };

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section - Above the Fold */}
      <section className="relative bg-brand-white pt-32 pb-12 md:pb-16 lg:pb-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Label */}
            <div className="mb-6">
              <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
                Free Expert Advice
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-6 leading-tight">
              {currentVariant.headline}
            </h1>

            {/* Subheadline */}
            <p className="font-hanken text-lg md:text-xl text-brand-black/70 mb-8 leading-relaxed">
              {currentVariant.subheadline}
            </p>

            {/* Primary CTA */}
            <div className="mb-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleCTAClick}
                className="font-hanken font-semibold"
              >
                Get your free quote →
              </Button>
            </div>

            <p className="font-hanken text-sm text-brand-black/50">
              Takes 60 seconds · No credit check
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals - Compact */}
      <section className="relative bg-brand-white py-8 md:py-12 border-y border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-2">
              <span className="font-trocchi text-2xl text-brand-black">90+</span>
              <span className="font-hanken text-sm text-brand-black/60">Lenders</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <span className="font-trocchi text-2xl text-brand-black">£0</span>
              <span className="font-hanken text-sm text-brand-black/60">Fees</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <span className="font-trocchi text-2xl text-brand-black">FCA</span>
              <span className="font-hanken text-sm text-brand-black/60">Regulated</span>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-3">
              <Image
                src="/others/trustpilot.svg"
                alt="Trustpilot"
                width={80}
                height={26}
              />
              <span className="font-hanken text-sm text-brand-black/60">4.9 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Remigo - Benefits */}
      <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Label */}
          <div className="mb-6">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
              Why Choose Us
            </span>
          </div>

          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-12 leading-tight">
            Why Remigo?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-100 rounded-2xl p-8">
                <div className="flex items-start gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/others/right.png"
                      alt="Check"
                      width={40}
                      height={40}
                    />
                  </div>
                  <p className="font-hanken text-base text-brand-black/80 leading-relaxed flex-1">
                    {benefit.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative bg-gray-50 py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Label */}
          <div className="mb-6">
            <span className="font-jetbrains text-xs tracking-widest text-brand-black/60 uppercase">
              Client Success Stories
            </span>
          </div>

          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-12 leading-tight">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-brand-white rounded-2xl p-8 border border-gray-200 flex flex-col">
                {/* Trustpilot Stars */}
                <div className="mb-6">
                  <Image
                    src="/others/trustpilot-5-star.svg"
                    alt="5 stars"
                    width={120}
                    height={24}
                  />
                </div>

                {/* Testimonial Text */}
                <p className="font-hanken text-base text-brand-black/80 mb-8 leading-relaxed grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Client Info */}
                <div className="mt-auto">
                  <p className="font-hanken font-semibold text-brand-black mb-1">
                    {testimonial.author}
                  </p>
                  <p className="font-hanken text-sm text-brand-black/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Label */}
          <div className="mb-6 text-center">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
              Simple Process
            </span>
          </div>

          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl text-brand-black mb-12 leading-tight text-center">
            How it <span className="text-remigo-red">works</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="bg-gray-100 rounded-3xl p-8 flex flex-col h-full">
                {/* Step Label */}
                <p className="font-jetbrains text-xs tracking-widest text-brand-black/60 uppercase mb-4">
                  STEP {['ONE', 'TWO', 'THREE'][index]}
                </p>

                {/* Title */}
                <h3 className="font-trocchi text-2xl md:text-3xl text-brand-black mb-4 leading-tight">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              className="font-hanken font-semibold"
            >
              Get started now →
            </Button>
            <p className="font-jetbrains text-xs text-brand-black/60 uppercase tracking-widest mt-6">
              Takes 60 seconds · No credit check required
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden" style={{
        background: 'linear-gradient(135deg, #8ECAFE 0%, #FDB932 50%, #DB3B3B 100%)'
      }}>
        {/* Abstract Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#392326', opacity: 0.15 }}></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: '#F8F8F8', opacity: 0.2 }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: '#DB3B3B', opacity: 0.1 }}></div>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        <div className="relative max-w-[900px] mx-auto px-6 md:px-12 text-center">
          <h2 className="font-trocchi text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight" style={{ color: '#0C0C0C' }}>
            Ready to get started?
          </h2>
          <p className="font-hanken text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#0C0C0C', opacity: 0.85 }}>
            Get your free mortgage quote in 60 seconds. Compare deals from 90+ lenders.
          </p>
          <div className="mb-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              className="font-hanken font-semibold shadow-2xl hover:shadow-3xl transition-shadow"
            >
              Get your free quote →
            </Button>
          </div>
          <p className="font-hanken text-sm" style={{ color: '#0C0C0C', opacity: 0.7 }}>
            FCA regulated · £0 fees · We'll call within the hour
          </p>
        </div>
      </section>
    </div>
  );
}
