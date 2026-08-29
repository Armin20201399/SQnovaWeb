import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { AmbientGlowLayer } from './components/AmbientGlowLayer';
import { createLazySection } from './components/LazySection';
import { prefetchSectionsWhenIdle } from './utils/prefetchSections';

const ProtocolDeepDive = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/ProtocolDeepDive')
);
const LiveGamingPingSimulator = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/LiveGamingPingSimulator')
);
const ServerStatusSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/ServerStatusSection')
);
const GameNetPartnershipSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/GameNetPartnershipSection')
);
const FreeTrialDedicatedSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/FreeTrialDedicatedSection')
);
const ServicePackagesSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/ServicePackagesSection')
);
const ClientAppsDownload = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/ClientAppsDownload')
);
const FaqSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/FaqSection')
);
const PrivacyAndTermsSection = createLazySection<{ onScrollToSection: (id: string) => void }>(() =>
  import('./components/PrivacyAndTermsSection')
);

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

  // 🔥 Prefetch محدود برای دستگاه‌های با منابع محدود (بخش ۹ گاید)
  useEffect(() => {
    const connection = (navigator as Navigator & {
      connection?: {
        saveData?: boolean;
        effectiveType?: string;
      };
    }).connection;

    const isConstrained =
      connection?.saveData === true ||
      connection?.effectiveType === 'slow-2g' ||
      connection?.effectiveType === '2g';

    if (isConstrained) {
      return;
    }

    const run = () => prefetchSectionsWhenIdle();

    if ('requestIdleCallback' in window) {
      const idle = (window as Window & {
        requestIdleCallback?: (cb: () => void, options?: { timeout?: number }) => number;
      }).requestIdleCallback;

      idle?.(run, { timeout: 6000 });
    } else {
      setTimeout(run, 3500);
    }
  }, []);

  return (
    <>
      <BinaryBackground />
      <AmbientGlowLayer />
      <Navbar onScrollToSection={handleScrollToSection} />
      <HeroSection onScrollToSection={handleScrollToSection} />
      <ProtocolDeepDive onScrollToSection={handleScrollToSection} />
      <LiveGamingPingSimulator onScrollToSection={handleScrollToSection} />
      <ServerStatusSection onScrollToSection={handleScrollToSection} />
      <GameNetPartnershipSection onScrollToSection={handleScrollToSection} />
      <FreeTrialDedicatedSection onScrollToSection={handleScrollToSection} />
      <ServicePackagesSection onScrollToSection={handleScrollToSection} />
      <ClientAppsDownload onScrollToSection={handleScrollToSection} />
      <FaqSection onScrollToSection={handleScrollToSection} />
      <PrivacyAndTermsSection onScrollToSection={handleScrollToSection} />
      <Footer onScrollToSection={handleScrollToSection} />
    </>
  );
}