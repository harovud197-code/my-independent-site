'use client';

import type { FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

type FootballSocksQuoteFormProps = {
  id?: string;
};

export default function FootballSocksQuoteForm({ id = 'quote' }: FootballSocksQuoteFormProps) {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      'Hello PeakMotion Socks, I would like a custom football socks quote.',
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Business email: ${formData.get('email') || 'Not provided'}`,
      `Country or target market: ${formData.get('country') || 'Not provided'}`,
      `Team type: ${formData.get('teamType') || 'Not selected'}`,
      `Football sock type: ${formData.get('sockType') || 'Not selected'}`,
      `MOQ route: ${formData.get('moqRoute') || 'Not selected'}`,
      `Estimated quantity: ${formData.get('quantity') || 'Not provided'} pairs`,
      `Requirements: ${formData.get('requirements') || 'Not provided'}`,
    ];

    trackEvent('quote_submission', { product: 'custom_football_socks', channel: 'email' });
    trackEvent('generate_lead', { product: 'custom_football_socks', channel: 'email' });
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=kayzhejiang%40gmail.com&su=${encodeURIComponent('Custom Football Socks Quote Request')}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <form id={id} onSubmit={submitQuote} className="w-full rounded-2xl bg-[#0c1713] p-7 text-white shadow-[0_28px_65px_rgba(12,23,19,0.22)] md:p-9">
      <h2 className="text-3xl font-black tracking-tight">Tell Us What You Need</h2>
      <p className="mt-3 leading-relaxed text-slate-300">Share your market, team type, MOQ route and quantity. We will recommend a practical football sock production route.</p>
      <div className="mt-6 space-y-3">
        <input required name="name" placeholder="Your name" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        <input required type="email" name="email" placeholder="Business email" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        <input required name="country" placeholder="Country / target market" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        <select required name="teamType" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30">
          <option value="" disabled>Select team type</option>
          <option>Football club</option>
          <option>Youth academy</option>
          <option>School or university team</option>
          <option>League or tournament organizer</option>
          <option>Teamwear brand or distributor</option>
          <option>Other football program</option>
        </select>
        <select required name="sockType" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30">
          <option value="" disabled>Select football sock type</option>
          <option>Knee-high match or training socks</option>
          <option>Crew football socks</option>
          <option>Short grip football socks</option>
          <option>Footless football sock sleeves</option>
          <option>Other custom football socks</option>
        </select>
        <select required name="moqRoute" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30">
          <option value="" disabled>Select MOQ route</option>
          <option>From 50 pairs - selected standard style</option>
          <option>100 to 300 pairs - logo-led standard program</option>
          <option>500+ pairs - bespoke construction or packaging</option>
          <option>Not sure - please recommend the right MOQ</option>
        </select>
        <input required type="number" min="1" name="quantity" placeholder="Estimated quantity (pairs)" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        <textarea name="requirements" rows={3} placeholder="Club crest, colors, sizes, player numbers, packaging and target delivery date" className="w-full resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
      </div>
      <button type="submit" className="mt-4 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4ff2b]">Get My Football Socks Quote</button>
    </form>
  );
}

