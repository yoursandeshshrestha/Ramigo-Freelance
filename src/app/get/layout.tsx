import { FormModalProvider } from '@/components/FormModalProvider';
import { CookieConsent } from '@/components/CookieConsent';

export default function AdLandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <FormModalProvider>
      {children}
      <CookieConsent />
    </FormModalProvider>
  );
}
