'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui';
import { useUTMCapture, getStoredUTMParams } from '@/hooks/useUTMCapture';
import { getDeviceType } from '@/utils/deviceDetection';
import { LeadData } from '@/services/hubspot';
import { trackFormOpen, trackFormStepComplete, trackFormSubmit } from '@/utils/analytics';

interface FormData {
  mortgageType: string;
  timeline: string;
  propertyValue: string;
  fullName: string;
  phone: string;
  email: string;
}

interface MultiStepFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedType?: string;
}

export const MultiStepFormModal: React.FC<MultiStepFormModalProps> = ({
  isOpen,
  onClose,
  preSelectedType,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    mortgageType: preSelectedType || '',
    timeline: '',
    propertyValue: '',
    fullName: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Capture UTM parameters
  useUTMCapture();

  const totalSteps = 4;

  // Track form open
  useEffect(() => {
    if (isOpen) {
      trackFormOpen(window.location.pathname, preSelectedType);
    }
  }, [isOpen, preSelectedType]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep(1);
        setFormData({
          mortgageType: preSelectedType || '',
          timeline: '',
          propertyValue: '',
          fullName: '',
          phone: '',
          email: '',
        });
      }, 300);
    }
  }, [isOpen, preSelectedType]);

  // Pre-select mortgage type if provided
  useEffect(() => {
    if (preSelectedType && isOpen) {
      setFormData((prev) => ({ ...prev, mortgageType: preSelectedType }));
    }
  }, [preSelectedType, isOpen]);

  const mortgageTypes = [
    { value: 'remortgage', label: 'Remortgage', subtitle: 'Switch to a better deal' },
    { value: 'first-home', label: 'First home', subtitle: 'Get on the ladder' },
    { value: 'self-employed', label: 'Self-employed', subtitle: 'We speak freelance' },
    { value: 'moving-home', label: 'Moving home', subtitle: 'Take your mortgage with you' },
  ];

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-3-months', label: '1–3 months' },
    { value: '3-6-months', label: '3–6 months' },
    { value: 'exploring', label: 'Just exploring' },
  ];

  const handleMortgageTypeSelect = (value: string) => {
    setFormData({ ...formData, mortgageType: value });

    // Track step completion
    trackFormStepComplete(1, 'mortgage_type', { mortgage_type: value });

    if (!preSelectedType) {
      setTimeout(() => setCurrentStep(2), 300);
    }
  };

  const handleTimelineSelect = (value: string) => {
    setFormData({ ...formData, timeline: value });

    // Track step completion
    trackFormStepComplete(2, 'timeline', {
      mortgage_type: formData.mortgageType,
      timeline: value
    });

    setTimeout(() => setCurrentStep(3), 300);
  };

  const formatPropertyValue = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    return numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPropertyValue(e.target.value);
    setFormData({ ...formData, propertyValue: formatted });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Gather all data for submission
      const leadData: LeadData = {
        // Form fields
        mortgageType: formData.mortgageType,
        timeline: formData.timeline,
        propertyValue: formData.propertyValue,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,

        // Tracking data
        sourceUrl: window.location.href,
        deviceType: getDeviceType(),
        submissionTimestamp: new Date().toISOString(),

        // UTM parameters
        utmParams: getStoredUTMParams(),
      };

      // Submit to API
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      });

      const result = await response.json();

      if (result.success) {
        // Success! Track conversion and redirect
        console.log('Lead submitted successfully');

        // Track form submission event
        trackFormSubmit({
          mortgageType: formData.mortgageType,
          timeline: formData.timeline,
          propertyValue: formData.propertyValue,
          sourcePage: window.location.pathname,
          email: formData.email,
          phone: formData.phone,
        });

        const firstName = formData.fullName.split(' ')[0];
        window.location.href = `/thank-you?name=${encodeURIComponent(firstName)}`;
      } else {
        // API failed after retries
        if (result.shouldStoreLocally) {
          // Store in localStorage for manual recovery
          storeFailedSubmission(leadData);
          setSubmitError(
            'We couldn\'t submit your details right now. We\'ve saved your information and will contact you shortly.'
          );
        } else {
          setSubmitError(result.error || 'Something went wrong. Please try again.');
        }
      }
    } catch (error) {
      console.error('Form submission error:', error);

      // Store in localStorage as fallback
      const leadData: LeadData = {
        mortgageType: formData.mortgageType,
        timeline: formData.timeline,
        propertyValue: formData.propertyValue,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        sourceUrl: window.location.href,
        deviceType: getDeviceType(),
        submissionTimestamp: new Date().toISOString(),
        utmParams: getStoredUTMParams(),
      };

      storeFailedSubmission(leadData);
      setSubmitError(
        'We couldn\'t submit your details right now. We\'ve saved your information and will contact you shortly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Store failed submissions in localStorage for manual recovery
  const storeFailedSubmission = (data: LeadData) => {
    try {
      const stored = localStorage.getItem('remigo_failed_submissions') || '[]';
      const submissions = JSON.parse(stored);
      submissions.push(data);
      localStorage.setItem('remigo_failed_submissions', JSON.stringify(submissions));
      console.log('Failed submission stored locally');
    } catch (e) {
      console.error('Failed to store submission locally:', e);
    }
  };

  const canContinueStep3 = formData.propertyValue.length > 0;
  const canSubmit = formData.fullName.length > 0 && formData.phone.length > 0;

  const handleStep3Continue = () => {
    // Track step completion
    trackFormStepComplete(3, 'property_value', {
      mortgage_type: formData.mortgageType,
      timeline: formData.timeline,
      property_value: formData.propertyValue
    });
    setCurrentStep(4);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/60 backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-brand-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-remigo-red)', opacity: 0.06 }}></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-sky-blue)', opacity: 0.08 }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: 'var(--color-amber)', opacity: 0.04 }}></div>
        </div>

        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-black/5 hover:bg-remigo-red hover:text-brand-white flex items-center justify-center transition-all duration-300 cursor-pointer z-10 group"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-brand-black group-hover:text-brand-white transition-colors"
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

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gray-200/50">
          <div
            className="h-full bg-gradient-to-r from-remigo-red via-[var(--color-amber)] to-[var(--color-sky-blue)] transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="relative p-8 md:p-12 pt-16">
          {/* Step Counter */}
          <div className="mb-6">
            <p className="font-jetbrains text-xs text-brand-black/75 uppercase tracking-widest">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Step 1: Mortgage Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-8">
                What can we help you with?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mortgageTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleMortgageTypeSelect(type.value)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-left hover:scale-[1.02] ${
                      formData.mortgageType === type.value
                        ? 'border-remigo-red bg-remigo-red/10 shadow-lg'
                        : 'border-gray-200 hover:border-remigo-red/50 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-trocchi text-xl text-brand-black mb-1">
                      {type.label}
                    </div>
                    <div className="font-hanken text-sm text-brand-black/75">
                      {type.subtitle}
                    </div>
                  </button>
                ))}
              </div>
              {preSelectedType && formData.mortgageType && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setCurrentStep(2)}
                  className="w-full font-hanken font-semibold"
                >
                  Continue →
                </Button>
              )}
            </div>
          )}

          {/* Step 2: Timeline */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <button
                onClick={() => setCurrentStep(1)}
                className="font-hanken text-sm text-brand-black/75 hover:text-brand-black transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-8">
                When are you looking to move forward?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.value}
                    onClick={() => handleTimelineSelect(timeline.value)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer hover:scale-[1.02] ${
                      formData.timeline === timeline.value
                        ? 'border-remigo-red bg-remigo-red/10 shadow-lg'
                        : 'border-gray-200 hover:border-remigo-red/50 bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="font-hanken text-base font-semibold text-brand-black">
                      {timeline.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Property Value */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <button
                onClick={() => setCurrentStep(2)}
                className="font-hanken text-sm text-brand-black/75 hover:text-brand-black transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-4">
                What's the property value?
              </h2>
              <p className="font-hanken text-sm text-brand-black/75 mb-8">
                A rough estimate is fine — we'll confirm the details later
              </p>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-trocchi text-2xl text-brand-black/75">
                  £
                </span>
                <input
                  type="text"
                  value={formData.propertyValue}
                  onChange={handlePropertyValueChange}
                  placeholder="250,000"
                  className="w-full pl-12 pr-6 py-6 bg-gray-50 border-2 border-gray-200 rounded-2xl font-trocchi text-2xl text-brand-black placeholder-gray-400 focus:outline-none focus:border-remigo-red focus:bg-brand-white transition-all"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={handleStep3Continue}
                disabled={!canContinueStep3}
                className="w-full font-hanken font-semibold"
              >
                Continue →
              </Button>
            </div>
          )}

          {/* Step 4: Contact Details */}
          {currentStep === 4 && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <button
                type="button"
                onClick={() => setCurrentStep(3)}
                className="font-hanken text-sm text-brand-black/75 hover:text-brand-black transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-black mb-8">
                How can we reach you?
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block font-hanken text-sm text-brand-black/75 mb-2 cursor-pointer">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl font-hanken text-brand-black placeholder-gray-400 focus:outline-none focus:border-remigo-red focus:bg-brand-white transition-all"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-hanken text-sm text-brand-black/75 mb-2 cursor-pointer">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl font-hanken text-brand-black placeholder-gray-400 focus:outline-none focus:border-remigo-red focus:bg-brand-white transition-all"
                    placeholder="07123 456789"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-hanken text-sm text-brand-black/75 mb-2 cursor-pointer">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-50 border-2 border-gray-200 rounded-2xl font-hanken text-brand-black placeholder-gray-400 focus:outline-none focus:border-remigo-red focus:bg-brand-white transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              {submitError && (
                <div className="bg-remigo-red/10 border border-remigo-red/20 rounded-2xl p-4">
                  <p className="font-hanken text-sm text-remigo-red text-center">
                    {submitError}
                  </p>
                </div>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={!canSubmit || isSubmitting}
                className="w-full font-hanken font-semibold"
              >
                {isSubmitting ? 'Submitting...' : 'Get my free quote →'}
              </Button>
              <p className="font-jetbrains text-xs text-center text-brand-black/70 uppercase tracking-widest">
                FCA regulated · £0 fees · We'll call within the hour
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
