"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, PartyPopper, X } from "lucide-react";

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

  useEffect(() => {
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
      {remaining.total > 0 && (
        <div className="relative z-40 border-b border-amber-400/25 bg-[#101014] px-3 py-3 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300 sm:text-sm">
            D-Pizza digital launch celebration
          </p>
          <p className="mt-1 text-sm text-white/75">
            Celebration begins in
          </p>
          <div className="mt-2 flex justify-center gap-2 sm:gap-3" aria-label="Countdown timer">
            {[
              { label: "Hours", value: remaining.hours },
              { label: "Minutes", value: remaining.minutes },
              { label: "Seconds", value: remaining.seconds },
            ].map((unit) => (
              <div key={unit.label} className="min-w-[62px] rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 sm:min-w-[76px]">
                <span className="block font-mono text-xl font-bold tabular-nums text-amber-300 sm:text-2xl">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/55">{unit.label}</span>
              </div>
            ))}
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
