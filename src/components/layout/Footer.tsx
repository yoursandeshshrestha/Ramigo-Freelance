import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '/remortgage', label: 'Remortgage' },
    { href: '/first-time-buyer', label: 'First-Time Buyer' },
    { href: '/self-employed-mortgage', label: 'Self-Employed' },
    { href: '/protection', label: 'Protection' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  const adLandingLinks = [
    { href: '/get/remortgage', label: 'Get Remortgage Quote' },
    { href: '/get/first-time-buyer', label: 'Get First-Time Buyer Quote' },
    { href: '/get/self-employed', label: 'Get Self-Employed Quote' },
    { href: '/get/protection', label: 'Get Protection Quote' },
  ];

  const legalLinks = [
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
    { href: '/cookie-policy', label: 'Cookie Policy' },
    { href: '/complaints', label: 'Complaints' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', label: 'Facebook', icon: 'facebook' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
  ];

  return (
    <footer className="relative bg-brand-black mx-3 mb-3 rounded-3xl overflow-hidden pt-16 md:pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-remigo-red)', opacity: 0.08 }}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-sky-blue)', opacity: 0.06 }}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-amber)', opacity: 0.05 }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-burgundy)', opacity: 0.1 }}></div>
      </div>

      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block mb-6 cursor-pointer">
              <Image
                src="/logos/remigo-full-light.svg"
                alt="Remigo"
                width={140}
                height={40}
              />
            </Link>
            <p className="font-hanken text-sm text-brand-white/60 leading-relaxed">
              Your mortgage, sorted by mates who get it.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-trocchi text-base text-brand-white mb-4">Services</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-trocchi text-base text-brand-white mb-4">Contact</h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer"
              >
                Contact Us
              </Link>
              <a
                href="tel:+441234567890"
                className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <Image
                  src="/icons/ui/phone.svg"
                  alt="Phone"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                0123 456 7890
              </a>
              <a
                href="mailto:hello@remigo.co.uk"
                className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer flex items-center gap-2"
              >
                <Image
                  src="/icons/ui/mail.svg"
                  alt="Email"
                  width={16}
                  height={16}
                  className="brightness-0 invert"
                />
                hello@remigo.co.uk
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-brand-white/10">
              <p className="font-hanken text-xs text-brand-white/40 uppercase tracking-wider mb-4">Follow Us</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-12 h-12 rounded-full bg-brand-white/5 border border-brand-white/10 flex items-center justify-center hover:bg-remigo-red hover:border-remigo-red transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-remigo-red/20 cursor-pointer"
                    aria-label={social.label}
                  >
                    {social.icon === 'facebook' && (
                      <svg className="w-5 h-5 text-brand-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="w-5 h-5 text-brand-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="w-5 h-5 text-brand-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Quotes */}
          <div>
            <h3 className="font-trocchi text-base text-brand-white mb-4">Quick Quotes</h3>
            <nav className="flex flex-col gap-3">
              {adLandingLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-trocchi text-base text-brand-white mb-4">Legal</h3>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-hanken text-sm text-brand-white/60 hover:text-brand-white transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* FCA Disclaimer */}
        <div className="pt-8 mb-8">
          <div className="bg-brand-white/5 rounded-2xl p-6">
            <p className="font-hanken text-xs text-brand-white/60 leading-relaxed mb-3">
              <strong className="text-brand-white/80">Important:</strong> Your home may be repossessed if you do not keep up repayments on your mortgage.
            </p>
            <p className="font-hanken text-xs text-brand-white/60 leading-relaxed mb-3">
              Remigo is a trading name of [Legal Entity]. Authorised and regulated by the Financial Conduct Authority. FCA registration number: [XXXXXX].
            </p>
            <p className="font-hanken text-xs text-brand-white/60 leading-relaxed">
              [Legal Entity], registered in England and Wales. Company number: [XXXXXXXX]. Registered office: [Address].
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-hanken text-xs text-brand-white/40">
            © {currentYear} Remigo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
