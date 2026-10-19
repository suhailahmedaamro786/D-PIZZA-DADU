"use client";

import { Clock3 } from "lucide-react";

export function LaunchCelebration() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-y-auto bg-[#08090d] px-4 py-10 text-center text-white"
      role="status"
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.16),transparent_55%)]" />
      <div className="relative mx-auto w-full max-w-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-300">
          <Clock3 size={38} className="animate-pulse" />
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300 sm:text-sm">SK DEV TEAM</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">D-Pizza</h1>
        <h2 className="mt-5 text-3xl font-extrabold text-amber-300 sm:text-5xl">Updating...</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          We’re making a few final updates to our website. Please check back soon.
        </p>
        <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
        <p className="mt-6 text-sm font-semibold text-white/80">Powered by SK DEV TEAM</p>
        <p className="mt-1 text-xs text-white/50">Founder: Mr. Suhail Ahmed Aamro</p>
      </div>
    </div>
  );
}
