import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://peakmotionsocks.com'),
  title: 'PeakMotion Socks | Professional Sports Socks Manufacturer',
  description: 'PeakMotion is a leading professional sports socks manufacturer specializing in high-performance grip socks, running socks, and football socks. We offer expert OEM & private label services with low MOQ solutions for global brands.',
  applicationName: 'PeakMotion Socks',
  creator: 'Haiyan Huaerte Knitting Co., Ltd.',
  publisher: 'Haiyan Huaerte Knitting Co., Ltd.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'PeakMotion Socks',
    title: 'PeakMotion Socks | Professional Sports Socks Manufacturer',
    description: 'Custom grip socks, football socks, running socks and private label sports socks with flexible MOQ and factory-direct OEM support.',
    url: 'https://peakmotionsocks.com',
    images: [{ url: '/assets/images/hero-showcase-green.png', alt: 'PeakMotion custom sports socks manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PeakMotion Socks | Professional Sports Socks Manufacturer',
    description: 'Custom sports socks manufacturing, OEM and private label solutions for global brands.',
    images: ['/assets/images/hero-showcase-green.png'],
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://peakmotionsocks.com/#organization',
  name: 'PeakMotion Socks',
  legalName: 'Haiyan Huaerte Knitting Co., Ltd.',
  url: 'https://peakmotionsocks.com',
  email: 'abayacloth@hotmail.com',
  telephone: '+86-573-8657-1288',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No. 8, Yucai Village Industrial Park, Tongyuan Town',
    addressLocality: 'Haiyan County',
    addressRegion: 'Zhejiang Province',
    addressCountry: 'CN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    telephone: '+86-573-8657-1288',
    email: 'abayacloth@hotmail.com',
    availableLanguage: ['English', 'Chinese'],
  },
  knowsAbout: ['Custom sports socks', 'Grip socks', 'Football socks', 'Running socks', 'OEM sock manufacturing', 'Private label socks'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c') }}
        />
        <Header />
        {children}
        <Footer />
        <Script 
          defer 
          data-domain="peakmotionsocks.com" 
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
