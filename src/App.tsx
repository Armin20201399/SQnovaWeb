import { useEffect } from 'react';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { useIsMobile } from './hooks/useIsMobile';
import { ErrorBoundary } from './app/ErrorBoundary';
import Navbar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import Footer from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { AmbientGlowLayer } from './components/AmbientGlowLayer';

// Static Rendering
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
  const isMobile = useIsMobile();

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) navigate(hash);
  }, [navigate]);

  return (
    <ErrorBoundary>
      {/* لایه‌های ثابت پس‌زمینه که به کل صفحه می‌چسبند */}
      {!isMobile && <BinaryBackground />}
      {!isMobile && <AmbientGlowLayer />}
      
      <Navbar onScrollToSection={navigate} />
      
      {/* تغییر z-index از 20 به 10 تا لایه‌های پس‌زمینه z-index 1 دیده شوند */}
      <main id="main-content" className="relative z-10">
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