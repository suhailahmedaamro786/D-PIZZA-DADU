"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Clock3, PartyPopper, X } from "lucide-react";

// Fixed launch milestone: 24 hours after the owner's request (Pakistan time: 11:15 PM, Oct 18, 2026).
const LAUNCH_DEADLINE = new Date("2026-10-19T18:15:39Z").getTime();
const CELEBRATION_KEY = "d-pizza-launch-celebration-seen-v1";

function getRemaining() {
  const total = Math.max(0, LAUNCH_DEADLINE - Date.now());
  return {
    total,
    hours: Math.floor(total / 3_600_000),
    minutes: Math.floor((total % 3_600_000) / 60_000),
    seconds: Math.floor((total % 60_000) / 1_000),
  };
}

export function LaunchCelebration() {
  const [remaining, setRemaining] = useState(getRemaining);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationSeen, setCelebrationSeen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(CELEBRATION_KEY)) {
      setCelebrationSeen(true);
      return;
    }

    const update = () => {
      const next = getRemaining();
      setRemaining(next);

      if (next.total === 0 && !window.localStorage.getItem(CELEBRATION_KEY)) {
        // Mark it immediately so refreshes cannot replay the celebration.
        window.localStorage.setItem(CELEBRATION_KEY, "true");
        setShowCelebration(true);
      }
    };

    update();
    const interval = window.setInterval(update, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const dismissCelebration = () => setShowCelebration(false);

  return (
    <>
      {remaining.total > 0 && !celebrationSeen && (
        <div className="fixed inset-0 z-[90] flex min-h-screen items-center justify-center overflow-y-auto bg-[#08090d] px-4 py-10 text-center text-white">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.16),transparent_55%)]" />
          <div className="relative mx-auto w-full max-w-2xl">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 text-amber-300">
              <Clock3 size={38} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-300 sm:text-sm">SK DEV TEAM presents</p>
            <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">D-Pizza Website Launch</h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              We’re preparing the final launch experience. The full website will be available when the countdown ends.
            </p>
            <div className="mx-auto mt-9 grid max-w-lg grid-cols-3 gap-3 sm:gap-5" aria-label="Full-page launch countdown">
              {[
                { label: "Hours", value: remaining.hours },
                { label: "Minutes", value: remaining.minutes },
                { label: "Seconds", value: remaining.seconds },
              ].map((unit) => (
                <div key={unit.label} className="rounded-2xl border border-white/10 bg-white/[0.05] px-3 py-5 sm:px-5 sm:py-7">
                  <span className="block font-mono text-4xl font-black tabular-nums text-amber-300 sm:text-6xl">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="mt-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 sm:text-xs">{unit.label}</span>
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <p className="mt-6 text-sm font-semibold text-white/80">Powered by SK DEV TEAM</p>
            <p className="mt-1 text-xs text-white/50">Founder: Mr. Suhail Ahmed Aamro</p>
          </div>
        </div>
      )}

      {showCelebration && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="launch-celebration-title"
        >
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-amber-300/30 bg-[#111116] px-6 py-10 text-center text-white shadow-2xl sm:px-10">
            <button
              type="button"
              onClick={dismissCelebration}
              aria-label="Close celebration"
              className="absolute right-4 top-4 rounded-full p-2 text-white/60 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-amber-300/15 text-amber-300">
              <PartyPopper size={34} />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">A special milestone</p>
            <h2 id="launch-celebration-title" className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Congratulations!
            </h2>
            <p className="mt-4 text-lg font-semibold leading-relaxed text-white">
              Your website is live!
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Google may take time to crawl and index a website. Search visibility and rankings are controlled by Google and cannot be guaranteed by a countdown.
            </p>
            <div className="mx-auto my-6 h-px w-24 bg-amber-300/40" />
            <div className="flex items-center justify-center gap-2 text-emerald-300">
              <CheckCircle2 size={18} />
              <span className="text-sm font-semibold">Powered by SK DEV TEAM</span>
            </div>
            <p className="mt-2 text-sm text-white/75">
              Founder: <span className="font-semibold text-white">Mr. Suhail Ahmed Aamro</span>
            </p>
            <button
              type="button"
              onClick={dismissCelebration}
              className="mt-7 inline-flex items-center justify-center rounded-full bg-amber-300 px-6 py-3 text-sm font-bold text-black transition hover:bg-amber-200"
            >
              Continue to website
            </button>
          </div>
        </div>
      )}
    </>
  );
}
