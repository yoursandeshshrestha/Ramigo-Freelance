'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './ui';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      // Load saved preferences
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        // Fire tracking scripts based on preferences
        if (savedPreferences.analytics || savedPreferences.marketing) {
          initializeTracking(savedPreferences);
        }
      } catch (e) {
        setShowBanner(true);
      }
    }
  }, []);

  const initializeTracking = (prefs: CookiePreferences) => {
    // TODO: Initialize Google Analytics, Meta Pixel, etc. based on preferences
    if (prefs.analytics) {
      console.log('Analytics enabled');
      // Initialize GA4
    }
    if (prefs.marketing) {
      console.log('Marketing enabled');
      // Initialize Meta Pixel
    }
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    setPreferences(prefs);
    initializeTracking(prefs);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allAccepted);
  };

  const handleRejectNonEssential = () => {
    const essentialOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(essentialOnly);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      {!showPreferences && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-white backdrop-blur-sm border-t border-gray-200 p-6 shadow-lg">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-trocchi text-xl text-brand-black mb-2">
                  We use cookies
                </h3>
                <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                  We use cookies to improve your experience on our site, analyze site usage, and assist in our marketing efforts.
                  You can choose which cookies to accept below.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  onClick={handleRejectNonEssential}
                  className="px-6 py-3 rounded-full border-2 border-gray-300 bg-transparent font-hanken font-semibold text-brand-black hover:border-gray-400 transition-colors cursor-pointer"
                >
                  Reject non-essential
                </button>
                <button
                  onClick={() => setShowPreferences(true)}
                  className="px-6 py-3 rounded-full border-2 border-gray-300 bg-transparent font-hanken font-semibold text-brand-black hover:border-gray-400 transition-colors cursor-pointer"
                >
                  Manage preferences
                </button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleAcceptAll}
                  className="font-hanken font-semibold"
                >
                  Accept all
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/20 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-brand-white border border-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close"
            >
              <svg
                className="w-5 h-5 text-brand-black"
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

            <h2 className="font-trocchi text-3xl text-brand-black mb-6">
              Cookie preferences
            </h2>
            <p className="font-hanken text-sm text-brand-black/70 mb-8 leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic.
              You can choose which types of cookies to allow below.
            </p>

            <div className="space-y-6">
              {/* Necessary Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-trocchi text-lg text-brand-black mb-2">
                      Necessary cookies
                    </h3>
                    <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                      These cookies are essential for the website to function properly.
                      They cannot be disabled.
                    </p>
                  </div>
                  <div className="ml-4 w-12 h-7 bg-remigo-red rounded-full flex items-center px-1">
                    <div className="w-5 h-5 bg-brand-white rounded-full ml-auto" />
                  </div>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-trocchi text-lg text-brand-black mb-2">
                      Analytics cookies
                    </h3>
                    <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                      These cookies help us understand how visitors interact with our website
                      by collecting and reporting information anonymously.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                    className={`ml-4 w-12 h-7 rounded-full flex items-center px-1 transition-colors cursor-pointer ${
                      preferences.analytics ? 'bg-remigo-red' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle analytics cookies"
                  >
                    <div
                      className={`w-5 h-5 bg-brand-white rounded-full transition-transform ${
                        preferences.analytics ? 'translate-x-5' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Marketing Cookies */}
              <div className="p-6 bg-gray-50 border border-gray-200 rounded-2xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-trocchi text-lg text-brand-black mb-2">
                      Marketing cookies
                    </h3>
                    <p className="font-hanken text-sm text-brand-black/70 leading-relaxed">
                      These cookies track your online activity to help advertisers deliver more
                      relevant advertising or to limit how many times you see an ad.
                    </p>
                  </div>
                  <button
                    onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                    className={`ml-4 w-12 h-7 rounded-full flex items-center px-1 transition-colors cursor-pointer ${
                      preferences.marketing ? 'bg-remigo-red' : 'bg-gray-300'
                    }`}
                    aria-label="Toggle marketing cookies"
                  >
                    <div
                      className={`w-5 h-5 bg-brand-white rounded-full transition-transform ${
                        preferences.marketing ? 'translate-x-5' : ''
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 bg-transparent font-hanken font-semibold text-brand-black hover:border-gray-400 transition-colors cursor-pointer"
              >
                Reject all
              </button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSavePreferences}
                className="flex-1 font-hanken font-semibold"
              >
                Save preferences
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
