'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

const whatsappNumber = '8617357769219';

export default function CustomRunningQuoteForm() {
  const [step, setStep] = useState<1 | 2>(1);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (step === 1) {
      if (!form.reportValidity()) return;
      trackEvent('quote_step_completed', { product: 'custom_running_socks', step: 1 });
      setStep(2);
      return;
    }

    const formData = new FormData(event.currentTarget);
    const lines = [
      'Hello PeakMotion Socks, I would like a custom running socks quote.',
      `Name: ${formData.get('name') || 'Not provided'}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Email: ${formData.get('email') || 'Not provided'}`,
      `Phone or WhatsApp: ${formData.get('phone') || 'Not provided'}`,
      `Country: ${formData.get('country') || 'Not provided'}`,
      `Product type: ${formData.get('productType') || 'Not selected'}`,
      `Quantity: ${formData.get('quantity') || 'Not provided'}`,
      `Target delivery: ${formData.get('deliveryDate') || 'Not provided'}`,
      `Project details: ${formData.get('requirements') || 'Not provided'}`,
    ];

    trackEvent('quote_submission', { product: 'custom_running_socks', channel: 'whatsapp' });
    trackEvent('generate_lead', { product: 'custom_running_socks', channel: 'whatsapp' });
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form id="quote" onSubmit={submitQuote} className="rounded-lg border border-white/15 bg-[#0c1713]/95 p-6 text-white shadow-[0_24px_55px_rgba(0,0,0,0.25)] backdrop-blur md:p-7">
      <h2 className="text-2xl font-black">Request Your Custom Running Sock Quote</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-300">Share the basics and our team will respond with practical next steps for samples, pricing and timing.</p>
      <p aria-live="polite" className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-[#b4ff2b]">Step {step} of 2</p>
      <div hidden={step !== 1} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input required name="name" placeholder="Full name" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <input name="company" placeholder="Company name" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <input required type="email" name="email" placeholder="Work email" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <input required name="quantity" placeholder="Estimated quantity" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <select required name="productType" defaultValue="" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] sm:col-span-2">
          <option value="" disabled>Select running sock type</option>
          <option>No-show or ankle running socks</option>
          <option>Quarter-crew or crew running socks</option>
          <option>Cushioned or compression-style running socks</option>
          <option>Marathon, event or private-label collection</option>
        </select>
      </div>
      <div hidden={step !== 2} className="mt-5 grid gap-3 sm:grid-cols-2">
        <input name="phone" placeholder="Phone or WhatsApp" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <input name="country" placeholder="Country" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b]" />
        <input name="deliveryDate" placeholder="Target delivery date" className="min-h-12 rounded-lg border border-slate-600 bg-slate-800 px-4 text-white outline-none transition focus:border-[#b4ff2b] sm:col-span-2" />
        <textarea name="requirements" rows={3} placeholder="Materials, logo, colors, sizing, packaging and delivery requirements" className="resize-y rounded-lg border border-slate-600 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-[#b4ff2b] sm:col-span-2" />
      </div>
      <div className="mt-4 flex gap-3">
        {step === 2 && <button type="button" onClick={() => setStep(1)} className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-500 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-[#0c1713]">Back</button>}
        <button type="submit" className="inline-flex min-h-12 flex-1 items-center justify-center rounded-xl bg-[#b4ff2b] px-5 py-3 font-black uppercase tracking-wide text-[#0c1713] transition-colors hover:bg-[#a3e627]">{step === 1 ? 'Continue' : 'Request My Quote'}</button>
      </div>
      {step === 2 && <p className="mt-3 text-xs leading-relaxed text-slate-400">Your information is used only to respond to your inquiry and is not shared with third parties.</p>}
    </form>
  );
}
