'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const isInitialPage = useRef(true);

  useEffect(() => {
    if (isInitialPage.current) {
      isInitialPage.current = false;
      return;
    }

    trackEvent('page_view', { page_path: pathname });
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const element = (event.target as HTMLElement | null)?.closest<HTMLElement>('a, button');
      if (!element) return;

      const href = element.getAttribute('href') ?? '';
      const eventName = element.dataset.analyticsEvent
        ?? (href.includes('wa.me') ? 'whatsapp_click' : href.startsWith('#quote') ? 'quote_cta_click' : '');
      if (!eventName) return;

      trackEvent(eventName, {
        placement: element.dataset.analyticsPlacement ?? 'unknown',
        destination: element.dataset.analyticsDestination ?? href,
      });

      if (eventName === 'whatsapp_click') {
        trackEvent('contact', { method: 'whatsapp', placement: element.dataset.analyticsPlacement ?? 'unknown' });
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!measurementId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} var savedConsent = localStorage.getItem('peakmotion-cookie-consent-v1'); gtag('consent', 'default', { analytics_storage: savedConsent === 'accepted' ? 'granted' : 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 }); gtag('set', 'ads_data_redaction', true); gtag('js', new Date()); gtag('config', '${measurementId}');`}
      </Script>
    </>
  );
}
