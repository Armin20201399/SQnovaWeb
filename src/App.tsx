import React, { useEffect, lazy, Suspense } from 'react';
import "@fontsource-variable/vazirmatn";

// ===== کامپوننت‌های سبک (بارگذاری عادی) - با named export =====
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';

// ===== BinaryBackground - با default export =====
import BinaryBackground from './components/BinaryBackground';

// ===== کامپوننت‌های سنگین با Lazy (حالا با default export) =====
const ProtocolDeepDive = lazy(() => import('./components/ProtocolDeepDive'));
const LiveGamingPingSimulator = lazy(() => import('./components/LiveGamingPingSimulator'));
const ServerStatusSection = lazy(() => import('./components/ServerStatusSection'));
const GameNetPartnershipSection = lazy(() => import('./components/GameNetPartnershipSection'));
const FreeTrialDedicatedSection = lazy(() => import('./components/FreeTrialDedicatedSection'));
const ServicePackagesSection = lazy(() => import('./components/ServicePackagesSection'));
const ClientAppsDownload = lazy(() => import('./components/ClientAppsDownload'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const PrivacyAndTermsSection = lazy(() => import('./components/PrivacyAndTermsSection'));

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '').replace('/', '');
    const el = document.getElementById(cleanId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', `#${cleanId}`);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const pathname = window.location.pathname.replace('/', '');
    const target = hash || pathname;

    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-['Vazirmatn',sans-serif] selection:bg-pink-500/30 selection:text-pink-200 overflow-x-hidden rtl relative">
      <BinaryBackground />
      <Navbar onScrollToSection={handleScrollToSection} />
      <main>
        <HeroSection onScrollToSection={handleScrollToSection} />

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <ProtocolDeepDive onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <LiveGamingPingSimulator onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <ServerStatusSection onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <GameNetPartnershipSection />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <FreeTrialDedicatedSection onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <ServicePackagesSection onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <ClientAppsDownload />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <FaqSection onScrollToSection={handleScrollToSection} />
        </Suspense>

        <Suspense fallback={<div className="text-center py-20 text-slate-500">در حال بارگذاری...</div>}>
          <PrivacyAndTermsSection onScrollToSection={handleScrollToSection} />
        </Suspense>
      </main>
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}