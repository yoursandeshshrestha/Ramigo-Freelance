'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function ContactFormSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Replace with actual API endpoint for general enquiries
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        message: 'Something went wrong. Please try again or call us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitSuccess) {
    return (
      <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="bg-[#4CAF50]/10 border-2 border-[#4CAF50]/30 rounded-3xl p-12 text-center">
            <div className="w-16 h-16 bg-[#4CAF50] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-brand-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-4">
              Message Received!
            </h2>
            <p className="font-hanken text-lg text-brand-black/70 mb-8">
              Thank you for getting in touch. We&apos;ll review your message and get back to you within 24 hours.
            </p>
            <button
              onClick={() => setSubmitSuccess(false)}
              className="font-hanken text-remigo-red hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-brand-white py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-trocchi text-3xl md:text-4xl lg:text-5xl text-brand-black mb-4">
            Send Us a Message
          </h2>
          <p className="font-hanken text-lg text-brand-black/75">
            Fill in the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block font-hanken text-sm font-semibold text-brand-black mb-2"
            >
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.name ? 'border-remigo-red' : 'border-gray-300'
              } font-hanken text-base text-brand-black focus:outline-none focus:ring-2 focus:ring-remigo-red focus:border-transparent transition-all`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="mt-2 text-sm text-remigo-red font-hanken">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-hanken text-sm font-semibold text-brand-black mb-2"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.email ? 'border-remigo-red' : 'border-gray-300'
              } font-hanken text-base text-brand-black focus:outline-none focus:ring-2 focus:ring-remigo-red focus:border-transparent transition-all`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-remigo-red font-hanken">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block font-hanken text-sm font-semibold text-brand-black mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.phone ? 'border-remigo-red' : 'border-gray-300'
              } font-hanken text-base text-brand-black focus:outline-none focus:ring-2 focus:ring-remigo-red focus:border-transparent transition-all`}
              placeholder="07XXX XXXXXX"
            />
            {errors.phone && (
              <p className="mt-2 text-sm text-remigo-red font-hanken">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block font-hanken text-sm font-semibold text-brand-black mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.message ? 'border-remigo-red' : 'border-gray-300'
              } font-hanken text-base text-brand-black focus:outline-none focus:ring-2 focus:ring-remigo-red focus:border-transparent transition-all resize-none`}
              placeholder="Tell us how we can help..."
            />
            {errors.message && (
              <p className="mt-2 text-sm text-remigo-red font-hanken">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-remigo-red text-brand-white font-hanken font-semibold px-8 py-4 rounded-full hover:bg-remigo-red/90 transition-colors cursor-pointer text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-center font-hanken text-sm text-brand-black/75 mt-4">
              * Required fields
            </p>
          </div>

          {/* Note */}
          <div className="bg-sky-blue/10 rounded-2xl p-6 mt-6">
            <p className="font-hanken text-sm text-brand-black/70 text-center">
              <strong>Note:</strong> This is a general enquiry form. For a mortgage quote, please use our{' '}
              <a href="/" className="text-remigo-red hover:underline cursor-pointer">quick quote form</a> instead.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
