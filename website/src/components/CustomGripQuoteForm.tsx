'use client';

import type { FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const whatsappNumber = '8617357769219';

export default function CustomGripQuoteForm() {
  function createInquiry(form: HTMLFormElement) {
    const formData = new FormData(form);
    const lines = [
      'Hello PeakMotion Socks, I would like a custom grip socks quote.',
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Company / studio / club: ${formData.get('company') || 'Not provided'}`,
      `Country or market: ${formData.get('market') || 'Not provided'}`,
      `Product type: ${formData.get('productType') || 'Not selected'}`,
      `Quantity: ${formData.get('quantity') || 'Not provided'}`,
      `Requirements: ${formData.get('requirements') || 'Not provided'}`,
    ];
    return lines;
  }

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = createInquiry(event.currentTarget);

    trackEvent('quote_submission', { product: 'custom_grip_socks', channel: 'whatsapp' });
    trackEvent('generate_lead', { product: 'custom_grip_socks', channel: 'whatsapp' });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }

  function submitByEmail(form: HTMLFormElement) {
    if (!form.reportValidity()) return;
    const lines = createInquiry(form);
    trackEvent('quote_submission', { product: 'custom_grip_socks', channel: 'email' });
    trackEvent('generate_lead', { product: 'custom_grip_socks', channel: 'email' });
    window.location.href = `mailto:abayacloth@hotmail.com?subject=${encodeURIComponent('Custom Grip Socks Quote Request')}&body=${encodeURIComponent(lines.join('\n'))}`;
  }

  return (
    <form id="quote" onSubmit={submitQuote} className="relative overflow-hidden rounded-lg bg-[#0c1713] p-7 text-white shadow-[0_28px_65px_rgba(12,23,19,0.22)] md:p-9">
      <div className="absolute -right-14 -top-16 h-48 w-48 rounded-full bg-[#b4ff2b]/10 blur-2xl" />
      <div className="relative">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Send an inquiry</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight">Tell Us What You Need</h2>
        <p className="mt-3 leading-relaxed text-slate-300">Use WhatsApp for a quick conversation, or launch a pre-filled email inquiry from the same form.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <input required name="name" placeholder="Your name" autoComplete="name" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <input required type="email" name="email" placeholder="Business email" autoComplete="email" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <input name="company" placeholder="Company, studio or club" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <input name="market" placeholder="Country or target market" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <select required name="productType" defaultValue="" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30">
            <option value="" disabled>Select product type</option>
            <option>Football grip socks</option>
            <option>Pilates or yoga grip socks</option>
            <option>Performance grip socks</option>
            <option>Other custom grip socks</option>
          </select>
          <input name="quantity" placeholder="Estimated quantity" className="min-h-13 w-full rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30" />
          <textarea name="requirements" rows={3} placeholder="Logo, colors, grip pattern, packaging and target delivery date" className="w-full resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-400 focus:border-[#b4ff2b] focus:ring-2 focus:ring-[#b4ff2b]/30 sm:col-span-2" />
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <button type="submit" className="inline-flex min-h-13 w-full items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b4ff2b]">Send via WhatsApp</button>
          <button type="button" onClick={(event) => submitByEmail(event.currentTarget.form!)} className="inline-flex min-h-13 w-full items-center justify-center rounded-xl border border-white/70 bg-white px-5 py-4 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Start Email Inquiry</button>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-slate-400">Your information is used only to respond to your inquiry.</p>
      </div>
    </form>
  );
}

