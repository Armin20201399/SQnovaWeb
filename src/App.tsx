import { useEffect, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { SectionFallback } from './components/SectionFallback';

const ProtocolDeepDive = lazy(() => import('./components/ProtocolDeepDive'));
const LiveGamingPingSimulator = lazy(() => import('./components/LiveGamingPingSimulator'));
const ServerStatusSection = lazy(() => import('./components/ServerStatusSection'));
const GameNetPartnershipSection = lazy(() => import('./components/GameNetPartnershipSection'));
const FreeTrialDedicatedSection = lazy(() => import('./components/FreeTrialDedicatedSection'));
const ServicePackagesSection = lazy(() => import('./components/ServicePackagesSection'));
const ClientAppsDownload = lazy(() => import('./components/ClientAppsDownload'));
const FaqSection = lazy(() => import('./components/FaqSection'));
const PrivacyAndTermsSection = lazy(() => import('./components/PrivacyAndTermsSection'));

const scrollToWhenReady = (id: string, attempts = 20) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  if (attempts > 0) {
    setTimeout(() => scrollToWhenReady(id, attempts - 1), 100);
  }
};

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '').replace('/', '');
    
    // اگر target terms یا privacy بود، به PrivacyAndTermsSection بگو تب را عوض کند
    if (cleanId === 'terms' || cleanId === 'privacy') {
      window.dispatchEvent(
        new CustomEvent('sq-scroll-to-tab', {
          detail: { tab: cleanId },
        })
      );
    }
    
    scrollToWhenReady(cleanId);
    window.history.replaceState(null, '', `#${cleanId}`);
  };

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    const pathname = window.location.pathname.replace('/', '');
    const target = hash || pathname;
    if (target) {
      if (target === 'terms' || target === 'privacy') {
        window.dispatchEvent(
          new CustomEvent('sq-scroll-to-tab', {
            detail: { tab: target },
          })
        );
      }
      scrollToWhenReady(target);
    }
  }, []);

  return (
    <div className="min-h-screen text-slate-100 font-['Vazirmatn',sans-serif] selection:bg-pink-500/30 selection:text-pink-200 overflow-x-hidden rtl relative">
      <BinaryBackground />
      <Navbar onScrollToSection={handleScrollToSection} />
      <main>
        <HeroSection onScrollToSection={handleScrollToSection} />

        <Suspense fallback={<SectionFallback />}>
          <ProtocolDeepDive onScrollToSection={handleScrollToSection} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <LiveGamingPingSimulator />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServerStatusSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GameNetPartnershipSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FreeTrialDedicatedSection onScrollToSection={handleScrollToSection} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicePackagesSection onScrollToSection={handleScrollToSection} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ClientAppsDownload />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FaqSection onScrollToSection={handleScrollToSection} />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PrivacyAndTermsSection />
        </Suspense>
      </main>
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}