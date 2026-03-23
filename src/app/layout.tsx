import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FormModalProvider } from "@/components/FormModalProvider";
import { CookieConsent } from "@/components/CookieConsent";

export const metadata: Metadata = {
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Remigo - Your Mortgage, Sorted by Mates Who Get It",
    description: "Expert mortgage advice. FCA regulated. £0 fees. Compare 90+ lenders.",
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
        <link href="https://fonts.googleapis.com/css2?family=Trocchi&family=Hanken+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <FormModalProvider>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </FormModalProvider>
      </body>
    </html>
  );
}
