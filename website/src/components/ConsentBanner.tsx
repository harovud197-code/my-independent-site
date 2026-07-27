'use client';

import { useEffect, useState } from 'react';
import { trackEvent } from '@/lib/analytics';

const storageKey = 'peakmotion-cookie-consent-v1';

function updateConsent(analyticsStorage: 'granted' | 'denied') {
  window.gtag?.('consent', 'update', {
    analytics_storage: analyticsStorage,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!localStorage.getItem(storageKey));

    function openSettings() {
      setVisible(true);
    }

    window.addEventListener('peakmotion-open-cookie-settings', openSettings);
    return () => window.removeEventListener('peakmotion-open-cookie-settings', openSettings);
  }, []);

  function saveChoice(value: 'accepted' | 'essential') {
    localStorage.setItem(storageKey, value);
    updateConsent(value === 'accepted' ? 'granted' : 'denied');
    if (value === 'accepted') {
      trackEvent('page_view', { page_path: window.location.pathname, consent: 'granted' });
      trackEvent('consent_granted', { category: 'analytics' });
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <aside aria-label="Cookie preferences" className="fixed bottom-5 left-5 z-[60] w-[calc(100%-2.5rem)] max-w-md rounded-xl border border-slate-200 bg-white p-6 text-[#0c1713] shadow-[0_24px_60px_rgba(12,23,19,0.22)]">
      <p className="text-sm font-black uppercase tracking-[0.16em] text-[#679a20]">Cookie Preferences</p>
      <h2 className="mt-2 text-xl font-black">Help us measure site performance</h2>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">With your permission, PeakMotion uses Google Analytics to understand page visits and quotation journeys. We do not enable advertising storage through this banner.</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => saveChoice('accepted')} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-[#b4ff2b] px-4 py-3 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">Accept Analytics</button>
        <button type="button" onClick={() => saveChoice('essential')} className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg border border-slate-300 px-4 py-3 text-sm font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#f7f8f6]">Essential Only</button>
      </div>
    </aside>
  );
}
