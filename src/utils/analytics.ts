/**
 * Analytics & Tracking Utilities
 * Handles all event tracking for GTM, GA4, Google Ads, and Meta Pixel
 */

interface EventParams {
  [key: string]: string | number | boolean | undefined;
}

/**
 * Push event to Google Tag Manager dataLayer
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];

  const eventData = {
    event: eventName,
    ...params,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer.push(eventData);

  console.log('[Analytics]', eventName, params);
}

/**
 * Track form modal opened
 */
export function trackFormOpen(sourcePage: string, mortgageType?: string): void {
  trackEvent('form_open', {
    source_page: sourcePage,
    mortgage_type: mortgageType || 'not_selected',
  });
}

/**
 * Track form step completion
 */
export function trackFormStepComplete(stepNumber: number, stepName: string, data?: EventParams): void {
  trackEvent('form_step_complete', {
    step_number: stepNumber,
    step_name: stepName,
    ...data,
  });
}

/**
 * Track form submission (conversion event)
 */
export function trackFormSubmit(data: {
  mortgageType: string;
  timeline: string;
  propertyValue: string;
  sourcePage: string;
  email?: string;
  phone?: string;
}): void {
  // Standard GA4 event
  trackEvent('form_submit', {
    mortgage_type: data.mortgageType,
    timeline: data.timeline,
    property_value: data.propertyValue,
    source_page: data.sourcePage,
  });

  // Google Ads Conversion (will be configured in GTM)
  trackEvent('conversion', {
    send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace in GTM
    value: 1.0,
    currency: 'GBP',
    transaction_id: `lead_${Date.now()}`,
  });

  // Enhanced conversion data (hashed in GTM)
  if (data.email || data.phone) {
    trackEvent('enhanced_conversion_data', {
      email: data.email,
      phone_number: data.phone,
    });
  }

  // Meta Pixel Lead event (will be configured in GTM)
  trackEvent('meta_lead', {
    content_name: data.mortgageType,
    content_category: 'mortgage_enquiry',
    value: 1.0,
    currency: 'GBP',
  });
}

/**
 * Track phone number click
 */
export function trackPhoneClick(location: string): void {
  trackEvent('phone_click', {
    click_location: location,
  });
}

/**
 * Track CTA button click
 */
export function trackCTAClick(buttonLocation: string, buttonText: string): void {
  trackEvent('cta_click', {
    button_location: buttonLocation,
    button_text: buttonText,
  });
}

/**
 * Track page view (for SPAs)
 */
export function trackPageView(pagePath: string, pageTitle: string): void {
  trackEvent('page_view', {
    page_path: pagePath,
    page_title: pageTitle,
  });
}

/**
 * Hash email for enhanced conversions (SHA-256)
 */
export async function hashEmail(email: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(email.toLowerCase().trim());
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

/**
 * Hash phone number for enhanced conversions (SHA-256)
 */
export async function hashPhone(phone: string): Promise<string> {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  const encoder = new TextEncoder();
  const data = encoder.encode(cleanPhone);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

// Extend Window interface
declare global {
  interface Window {
    dataLayer: any[];
  }
}
