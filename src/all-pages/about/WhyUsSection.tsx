import Image from 'next/image';

export function WhyUsSection() {
  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-remigo-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-blue/5 rounded-full blur-3xl" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Label */}
        <div className="flex justify-center mb-6">
          <div className="relative inline-block">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
              Why us
            </span>
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-remigo-red/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-remigo-red/30" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-trocchi text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
            <span className="text-brand-black">Why work </span>
            <span className="text-remigo-red">with us?</span>
          </h2>
          <p className="font-hanken text-lg md:text-xl text-brand-black/75 max-w-2xl mx-auto leading-relaxed">
            Find out why Remigo is better than comparison sites and traditional brokers.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left - Other Services */}
          <div className="bg-linear-to-br from-gray-50 to-gray-100/50 rounded-3xl p-10 md:p-12 border border-gray-200">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-remigo-red flex items-center justify-center">
                <svg className="w-7 h-7 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-trocchi text-2xl md:text-3xl text-brand-black/75">
                Other Services
              </h3>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  Just show you lists of products
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  Charge £500-£1,000 in broker fees
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  Tied to specific lenders only
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  Confusing jargon and complexity
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  No expert guidance or support
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white/50">
                <div className="w-8 h-8 rounded-full bg-remigo-red flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black/70 leading-relaxed">
                  You handle all the admin yourself
                </p>
              </div>
            </div>
          </div>

          {/* Right - Remigo */}
          <div className="bg-linear-to-br from-success/10 to-success/20 rounded-3xl p-10 md:p-12 border-2 border-success/30">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full bg-success flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <Image
                src="/logos/remigo-full-dark.png"
                alt="Remigo"
                width={120}
                height={34}
                className="cursor-pointer"
              />
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  Expert advisers who assess your situation
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  £0 broker fees — expert advice at no cost
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  Whole-of-market access to 90+ lenders
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  Plain English — no jargon, no confusion
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  Dedicated support through every step
                </p>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-brand-white">
                <div className="w-8 h-8 rounded-full bg-success flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-5 h-5 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <p className="font-hanken text-base md:text-lg text-brand-black leading-relaxed">
                  We handle all the admin and paperwork
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
