'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui';
import { useFormModal } from './FormModalProvider';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useFormModal();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set isScrolled state
      setIsScrolled(currentScrollY > 100);

      // Determine scroll direction and visibility
      if (currentScrollY < 10) {
        // Always show header at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleGetQuote = () => {
    openForm();
  };

  const navLinks = [
    { href: '/remortgage', label: 'Remortgage' },
    { href: '/first-time-buyer', label: 'First-Time Buyer' },
    { href: '/self-employed-mortgage', label: 'Self-Employed' },
    { href: '/protection', label: 'Protection' },
    { href: '/about', label: 'About' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-white border-b border-gray-200 ${
          isScrolled ? 'py-4' : 'py-6'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className={`mx-auto px-6 md:px-12 transition-all duration-300 ${isScrolled ? 'max-w-[1400px]' : 'lg:px-16'}`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="cursor-pointer">
              <Image
                src="/remigo-logo-full-dark.png"
                alt="Remigo"
                width={isScrolled ? 120 : 140}
                height={isScrolled ? 34 : 40}
                className="transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-hanken text-sm text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <a
                href="tel:+441234567890"
                className="font-hanken text-sm text-brand-black/70 hover:text-remigo-red transition-colors cursor-pointer"
              >
                0123 456 7890
              </a>
              <Button
                variant="primary"
                size="md"
                onClick={handleGetQuote}
                className="font-hanken font-semibold"
              >
                Get your free quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-brand-black transition-transform ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-brand-black transition-opacity ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-brand-black transition-transform ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-brand-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-[280px] bg-brand-white border-l border-gray-200 transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end mb-8 cursor-pointer"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6 text-brand-black"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <nav className="flex flex-col gap-6 mb-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-hanken text-lg text-brand-black hover:text-remigo-red transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Phone */}
            <a
              href="tel:+441234567890"
              className="font-hanken text-sm text-brand-black/70 hover:text-remigo-red transition-colors mb-6 cursor-pointer"
            >
              📞 0123 456 7890
            </a>

            {/* Mobile CTA */}
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                handleGetQuote();
                setIsMobileMenuOpen(false);
              }}
              className="font-hanken font-semibold w-full"
            >
              Get your free quote
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
