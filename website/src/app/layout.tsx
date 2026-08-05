import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ConsentBanner from "@/components/ConsentBanner";
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
  title: 'Custom Performance Socks Manufacturer for Sports Brands & Retailers | PeakMotion',
  description: 'Launch football, running and grip sock collections with low MOQ, fast sampling and factory-direct OEM or private-label production.',
  alternates: {
    canonical: '/',
  },
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
    title: 'Custom Performance Socks Manufacturer for Sports Brands & Retailers | PeakMotion',
    description: 'Launch football, running and grip sock collections with low MOQ, fast sampling and factory-direct production.',
    url: 'https://peakmotionsocks.com',
    images: [{ url: '/assets/images/hero-showcase-green.png', alt: 'PeakMotion custom sports socks manufacturing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Performance Socks Manufacturer for Sports Brands & Retailers | PeakMotion',
    description: 'Buyer-focused custom sock solutions for brands, clubs, studios and distributors.',
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
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://peakmotionsocks.com/#logo',
    url: 'https://peakmotionsocks.com/assets/brand/peakmotion-socks-logo.svg',
    contentUrl: 'https://peakmotionsocks.com/assets/brand/peakmotion-socks-logo.svg',
    width: 512,
    height: 512,
    caption: 'PeakMotion Socks',
  },
  image: {
    '@id': 'https://peakmotionsocks.com/#logo',
  },
  email: 'kayzhejiang@gmail.com',
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
    email: 'kayzhejiang@gmail.com',
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
        <GoogleAnalytics />
        <ConsentBanner />
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
