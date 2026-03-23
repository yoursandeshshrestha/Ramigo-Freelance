'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui';

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

  const totalSteps = 4;

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
    if (!preSelectedType) {
      setTimeout(() => setCurrentStep(2), 300);
    }
  };

  const handleTimelineSelect = (value: string) => {
    setFormData({ ...formData, timeline: value });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Submit to CRM
    console.log('Form submitted:', formData);
    onClose();
    // Show thank you message or redirect
  };

  const canContinueStep3 = formData.propertyValue.length > 0;
  const canSubmit = formData.fullName.length > 0 && formData.phone.length > 0;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/80 backdrop-blur-sm">
      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-brand-black border border-gray-800 rounded-3xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors cursor-pointer z-10"
          aria-label="Close"
        >
          <svg
            className="w-5 h-5 text-brand-white"
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800">
          <div
            className="h-full bg-remigo-red transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 pt-16">
          {/* Step Counter */}
          <div className="mb-6">
            <p className="font-jetbrains text-xs text-gray-500 uppercase tracking-widest">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Step 1: Mortgage Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-white mb-8">
                What can we help you with?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mortgageTypes.map((type) => (
                  <button
                    key={type.value}
                    onClick={() => handleMortgageTypeSelect(type.value)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer text-left ${
                      formData.mortgageType === type.value
                        ? 'border-remigo-red bg-remigo-red/10'
                        : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'
                    }`}
                  >
                    <div className="font-trocchi text-xl text-brand-white mb-1">
                      {type.label}
                    </div>
                    <div className="font-hanken text-sm text-gray-400">
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
                className="font-hanken text-sm text-gray-400 hover:text-brand-white transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-white mb-8">
                When are you looking to move forward?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timelines.map((timeline) => (
                  <button
                    key={timeline.value}
                    onClick={() => handleTimelineSelect(timeline.value)}
                    className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                      formData.timeline === timeline.value
                        ? 'border-remigo-red bg-remigo-red/10'
                        : 'border-gray-800 hover:border-gray-700 bg-gray-900/50'
                    }`}
                  >
                    <div className="font-hanken text-base font-semibold text-brand-white">
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
                className="font-hanken text-sm text-gray-400 hover:text-brand-white transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-white mb-4">
                What's the property value?
              </h2>
              <p className="font-hanken text-sm text-gray-400 mb-8">
                A rough estimate is fine — we'll confirm the details later
              </p>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-trocchi text-2xl text-gray-400">
                  £
                </span>
                <input
                  type="text"
                  value={formData.propertyValue}
                  onChange={handlePropertyValueChange}
                  placeholder="250,000"
                  className="w-full pl-12 pr-6 py-6 bg-gray-900/50 border-2 border-gray-800 rounded-2xl font-trocchi text-2xl text-brand-white placeholder-gray-600 focus:outline-none focus:border-remigo-red transition-colors"
                />
              </div>
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCurrentStep(4)}
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
                className="font-hanken text-sm text-gray-400 hover:text-brand-white transition-colors mb-4 cursor-pointer"
              >
                ← Back
              </button>
              <h2 className="font-trocchi text-3xl md:text-4xl text-brand-white mb-8">
                How can we reach you?
              </h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block font-hanken text-sm text-gray-400 mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-2xl font-hanken text-brand-white placeholder-gray-600 focus:outline-none focus:border-remigo-red transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-hanken text-sm text-gray-400 mb-2">
                    Phone number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-2xl font-hanken text-brand-white placeholder-gray-600 focus:outline-none focus:border-remigo-red transition-colors"
                    placeholder="07123 456789"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-hanken text-sm text-gray-400 mb-2">
                    Email (optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 bg-gray-900/50 border-2 border-gray-800 rounded-2xl font-hanken text-brand-white placeholder-gray-600 focus:outline-none focus:border-remigo-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={!canSubmit}
                className="w-full font-hanken font-semibold"
              >
                Get my free quote →
              </Button>
              <p className="font-jetbrains text-xs text-center text-gray-500 uppercase tracking-widest">
                FCA regulated · £0 fees · We'll call within the hour
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
