import { useEffect } from 'react';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { ErrorBoundary } from './app/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { AmbientGlowLayer } from './components/AmbientGlowLayer';

// Static Rendering (طبق گایدلاین Dead Preload Infrastructure حذف شد)
import ProtocolDeepDive from './components/ProtocolDeepDive';
import LiveGamingPingSimulator from './components/LiveGamingPingSimulator';
import ComparisonSection from './components/ComparisonSection';
import PrivacyAndTermsSection from './components/PrivacyAndTermsSection';
import FreeTrialBannerSection from './components/FreeTrialBannerSection';
import InteractivePackagesSection from './components/InteractivePackagesSection';
import ClientAppsDownload from './components/ClientAppsDownload';
import GameNetPartnershipSection from './components/GameNetPartnershipSection';
import FaqSection from './components/FaqSection';

export default function App() {
  const { navigate } = useSectionNavigation();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) navigate(hash);
  }, [navigate]);

  return (
    <ErrorBoundary>
      <BinaryBackground />
      <AmbientGlowLayer />
      <Navbar onScrollToSection={navigate} />
      <main id="main-content">
        <HeroSection onScrollToSection={navigate} />
        <ProtocolDeepDive onScrollToSection={navigate} />
        <LiveGamingPingSimulator />
        <ComparisonSection />
        <PrivacyAndTermsSection />
        <FreeTrialBannerSection onScrollToSection={navigate} />
        <InteractivePackagesSection />
        <ClientAppsDownload />
        <GameNetPartnershipSection />
        <FaqSection onScrollToSection={navigate} />
      </main>
      <Footer onScrollToSection={navigate} />
    </ErrorBoundary>
  );
}