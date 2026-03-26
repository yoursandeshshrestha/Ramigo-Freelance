import Image from 'next/image';

export function AboutHeroSection() {
  return (
    <section className="relative bg-brand-white pt-40 pb-12 md:pb-16 lg:pb-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Top Label */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-block">
            <span className="font-jetbrains text-xs tracking-widest text-remigo-red uppercase">
              About us
            </span>
            {/* Decorative corners */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-remigo-red/30" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-remigo-red/30" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-6">
          <h1 className="font-trocchi text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-2">
            <span className="text-brand-black">Your mate in the</span>
            <br />
            <span className="text-brand-black/40">mortgage process</span>
          </h1>
        </div>

        {/* Subheadline */}
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <p className="font-hanken text-lg md:text-xl text-brand-black/60 leading-relaxed">
            Remigo is a friendly, modern mortgage platform. We&apos;re FCA regulated brokers who believe mortgages shouldn&apos;t be complicated. Trustworthy but not stuffy, digital-first but human when it counts.
          </p>
        </div>

        {/* Bento Grid Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Large image - left */}
          <div className="col-span-2 md:col-span-1 md:row-span-2 bg-brand-black/5 rounded-3xl overflow-hidden aspect-3/4 md:aspect-auto relative">
            <Image
              src="/images/hero/team-consultation.jpg"
              alt="Remigo team"
              fill
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>

          {/* Top right image */}
          <div className="col-span-2 md:col-span-1 bg-brand-black/5 rounded-3xl overflow-hidden aspect-video relative">
            <Image
              src="/images/hero/team-consultation.jpg"
              alt="Mortgage advice"
              fill
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>

          {/* Bottom right image */}
          <div className="col-span-2 md:col-span-1 bg-brand-black/5 rounded-3xl overflow-hidden aspect-video relative">
            <Image
              src="/images/hero/team-consultation.jpg"
              alt="Happy clients"
              fill
              className="object-cover"
              unoptimized={process.env.NODE_ENV === 'development'}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
