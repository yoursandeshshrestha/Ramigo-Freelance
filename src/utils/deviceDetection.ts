export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  // Check for tablet
  if (
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
      userAgent
    ) ||
    (width >= 768 && width <= 1024)
  ) {
    return 'tablet';
  }

  // Check for mobile
  if (
    /mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent) ||
    width < 768
  ) {
    return 'mobile';
  }

  return 'desktop';
}
