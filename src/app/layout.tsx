import type { Metadata } from "next";
import "./globals.css";
import { FormModalProvider } from "@/components/FormModalProvider";
import { CookieConsent } from "@/components/CookieConsent";
import { GoogleTagManager } from "@/components/GoogleTagManager";
import { LocalBusinessSchema, WebsiteSchema } from "@/components/seo/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL('https://remigo.co.uk'),
  title: "Remigo - Your Mortgage, Sorted by Mates Who Get It",
  description: "UK mortgage broker offering expert advice on remortgages, first-time buyer mortgages, self-employed mortgages, and protection. FCA regulated. £0 broker fees. Compare 90+ lenders.",
  keywords: "mortgage broker, remortgage, first-time buyer, self-employed mortgage, mortgage advice, UK mortgages, FCA regulated",
  authors: [{ name: "Remigo" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Remigo - Your Mortgage, Sorted by Mates Who Get It",
    description: "Expert mortgage advice. FCA regulated. £0 fees. Compare 90+ lenders.",
    type: "website",
    locale: "en_GB",
    url: "https://remigo.co.uk",
    siteName: "Remigo",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remigo - Your Mortgage, Sorted by Mates Who Get It",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remigo - Your Mortgage, Sorted by Mates Who Get It",
    description: "Expert mortgage advice. FCA regulated. £0 fees. Compare 90+ lenders.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link href="https://fonts.googleapis.com/css2?family=Trocchi&family=Hanken+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Roboto:wght@400;500;700&display=optional" rel="stylesheet" />
        <LocalBusinessSchema />
        <WebsiteSchema />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {process.env.NEXT_PUBLIC_GTM_ID && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
        )}
        <FormModalProvider>
          {children}
          <CookieConsent />
        </FormModalProvider>
      </body>
    </html>
  );
}
