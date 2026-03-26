'use client';

export function ContactHeroSection() {
  return (
    <section className="relative bg-brand-white pt-40 pb-12 md:pb-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Label */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
              Get in touch
            </span>
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-remigo-red/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-remigo-red/30" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2">
            <span className="text-brand-black">Let&apos;s talk about</span>
            <br />
            <span className="text-brand-black/40">your mortgage</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-hanken text-lg md:text-xl text-brand-black/60 leading-relaxed">
            Whether you have a question, want to discuss your options, or prefer to speak to someone directly — we&apos;re here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
