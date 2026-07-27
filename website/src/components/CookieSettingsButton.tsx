'use client';

export default function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event('peakmotion-open-cookie-settings'))} className="text-left text-xs text-slate-400 transition-colors hover:text-[#c5ff3d]">
      Cookie Settings
    </button>
  );
}
