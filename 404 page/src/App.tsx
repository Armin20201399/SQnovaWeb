/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      dir="rtl"
      className="relative min-h-screen bg-[#020617] text-slate-100 font-vazir flex flex-col justify-between items-center p-6 sm:p-8 md:p-12 overflow-hidden select-none"
    >
      {/* Ambient Radial Glows in Background */}
      <div
        className="fixed top-1/4 -translate-y-1/2 left-1/4 -translate-x-1/2 w-[340px] sm:w-[500px] md:w-[650px] h-[340px] sm:h-[500px] md:h-[650px] rounded-full bg-radial from-pink-500/20 via-purple-600/15 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse duration-[8000ms]"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-1/4 translate-y-1/2 right-1/4 translate-x-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] rounded-full bg-radial from-purple-600/20 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-10 animate-pulse duration-[10000ms]"
        aria-hidden="true"
      />

      {/* Subtle Grid Dot Matrix */}
      <div
        className="fixed inset-0 pointer-events-none -z-10 opacity-50"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Empty Top Space for Centered Layout Balance */}
      <div className="w-full h-4" aria-hidden="true" />

      {/* Main Error Hero Section (Centered) */}
      <main
        id="main-error-section"
        className="relative z-10 my-auto flex flex-col items-center text-center max-w-xl w-full px-4 py-8 animate-[fadeIn_0.9s_ease]"
      >
        {/* Large 404 Numerals */}
        <div className="relative mb-3 select-none">
          {/* Glowing Aura Replica */}
          <div
            className="absolute inset-0 font-vazir font-black text-[130px] sm:text-[160px] md:text-[200px] leading-none tracking-tight text-purple-500/25 blur-3xl pointer-events-none select-none"
            aria-hidden="true"
          >
            ۴۰۴
          </div>

          {/* Foreground Gradient Number */}
          <div
            id="error-404-number"
            className="font-vazir font-black text-[130px] sm:text-[160px] md:text-[200px] leading-none tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_15px_30px_rgba(168,85,247,0.35)]"
          >
            ۴۰۴
          </div>
        </div>

        {/* <h1> Heading */}
        <h1
          id="error-heading-title"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-100 mb-3.5 tracking-tight leading-tight"
        >
          صفحه پیدا نشد!
        </h1>

        {/* Description */}
        <p
          id="error-heading-description"
          className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mb-9 font-normal"
        >
          متأسفانه صفحه‌ای که به دنبال آن بودید یافت نشد. ممکن است این صفحه حذف شده باشد یا آدرس وارد شده نادرست باشد.
        </p>

        {/* CTA Button */}
        <a
          id="home-return-button"
          href="/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-base shadow-[0_10px_30px_-5px_rgba(236,72,153,0.45)] hover:shadow-[0_18px_45px_-5px_rgba(168,85,247,0.65)] border border-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0 cursor-pointer"
        >
          <span className="text-xl leading-none transition-transform duration-300 group-hover:scale-110">🏠</span>
          <span className="tracking-wide">بازگشت به خانه</span>
        </a>
      </main>

      {/* Footer */}
      <footer
        id="brand-footer"
        className="relative z-10 mt-auto pt-6 text-xs sm:text-sm font-medium text-slate-500 text-center tracking-wide"
      >
        <p>SQ Nova · همه‌ی حقوق محفوظ است</p>
      </footer>
    </div>
  );
}
