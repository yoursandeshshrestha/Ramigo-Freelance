'use client';

import { useEffect, useState } from 'react';

export interface UTMParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
}

const UTM_STORAGE_KEY = 'remigo_utm_params';
const UTM_EXPIRY_DAYS = 30;

export function useUTMCapture(): UTMParams {
  const [utmParams, setUtmParams] = useState<UTMParams>({});

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if we have stored UTM params
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      try {
        const { params, timestamp } = JSON.parse(stored);
        const daysElapsed = (Date.now() - timestamp) / (1000 * 60 * 60 * 24);

        // If stored params are still valid, use them
        if (daysElapsed < UTM_EXPIRY_DAYS) {
          setUtmParams(params);
        }
      } catch (e) {
        // Invalid stored data, ignore
      }
    }

    // Check URL for new UTM params
    const urlParams = new URLSearchParams(window.location.search);
    const newParams: UTMParams = {};

    // Capture UTM parameters
    const utmKeys: (keyof UTMParams)[] = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_content',
      'utm_term',
      'gclid',
      'fbclid',
    ];

    let hasNewParams = false;
    utmKeys.forEach((key) => {
      const value = urlParams.get(key);
      if (value) {
        newParams[key] = value;
        hasNewParams = true;
      }
    });

    // If we found new params, store them and update state
    if (hasNewParams) {
      const dataToStore = {
        params: newParams,
        timestamp: Date.now(),
      };
      localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(dataToStore));
      setUtmParams(newParams);
    }
  }, []);

  return utmParams;
}

// Helper to get stored UTM params synchronously (for form submission)
export function getStoredUTMParams(): UTMParams {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem(UTM_STORAGE_KEY);
    if (stored) {
      const { params } = JSON.parse(stored);
      return params || {};
    }
  } catch (e) {
    // Invalid stored data
  }

  return {};
}
