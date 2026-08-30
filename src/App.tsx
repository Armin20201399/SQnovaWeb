import { useEffect, Component, ReactNode } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { AmbientGlowLayer } from './components/AmbientGlowLayer';
import { createLazySection } from './components/LazySection';

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

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("خطای کلی برنامه:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'white', background: '#000' }}>خطایی رخ داد. لطفاً صفحه را رفرش کنید.</div>;
    }
    return this.props.children;
  }
}

export default function App() {
  const handleScrollToSection = (sectionId: string) => {
    const cleanId = sectionId.replace('#', '').replace('/', '');
    if (cleanId === 'terms' || cleanId === 'privacy') {
      window.dispatchEvent(new CustomEvent('sq-scroll-to-tab', { detail: { tab: cleanId } }));
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
        window.dispatchEvent(new CustomEvent('sq-scroll-to-tab', { detail: { tab: target } }));
      }
      scrollToWhenReady(target);
    }
  }, []);

  return (
    <ErrorBoundary>
      <BinaryBackground />
      <AmbientGlowLayer />
      <Navbar onScrollToSection={handleScrollToSection} />
      <main id="main-content">
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
      </main>
      <Footer onScrollToSection={handleScrollToSection} />
    </ErrorBoundary>
  );
}