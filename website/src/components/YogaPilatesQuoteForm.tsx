'use client';

import type { FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

type YogaPilatesQuoteFormProps = {
  id?: string;
};

export default function YogaPilatesQuoteForm({ id = 'quote' }: YogaPilatesQuoteFormProps) {
  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const lines = [
      'Hello PeakMotion Socks, I would like to develop custom yoga or Pilates grip socks.',
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Business email: ${formData.get('email') || 'Not provided'}`,
      `Buyer type: ${formData.get('buyerType') || 'Not selected'}`,
      `Quantity: ${formData.get('quantity') || 'Not provided'}`,
      `Project details: ${formData.get('requirements') || 'Not provided'}`,
    ];

    trackEvent('quote_submission', { product: 'yoga_pilates_grip_socks', channel: 'email' });
    trackEvent('generate_lead', { product: 'yoga_pilates_grip_socks', channel: 'email' });
    window.location.href = `mailto:kayzhejiang@gmail.com?subject=${encodeURIComponent('Custom Yoga Pilates Grip Socks Quote Request')}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <form id={id} onSubmit={submitQuote} className="relative overflow-hidden rounded-2xl bg-[#0c1713] p-7 text-white shadow-[0_28px_65px_rgba(12,23,19,0.22)] md:p-9">
      <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#b4ff2b]/10 blur-3xl" />
      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Start a studio-sock project</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight">Tell us what you want to create</h2>
        <p className="mt-3 leading-relaxed text-slate-300">Share your buyer type, quantity and customization needs. We will reply with a practical direction for sampling and production.</p>
        <div className="mt-6 space-y-3">
          <input required name="name" placeholder="Your name" autoComplete="name" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <input required type="email" name="email" placeholder="Business email" autoComplete="email" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <select required name="buyerType" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30">
            <option value="" disabled>Select buyer type</option>
            <option>Yoga or Pilates studio</option>
            <option>Wellness or fitness brand</option>
            <option>Retailer or distributor</option>
            <option>New private label brand</option>
            <option>Other business buyer</option>
          </select>
          <input name="quantity" placeholder="Estimated quantity" inputMode="numeric" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <textarea name="requirements" rows={4} placeholder="Logo, colors, grip pattern, materials, sizes, packaging and target delivery date" className="w-full resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
        </div>
        <button type="submit" className="mt-4 inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4ff2b]">Request a Custom Quote</button>
      </div>
    </form>
  );
}

