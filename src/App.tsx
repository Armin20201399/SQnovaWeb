import { useEffect, lazy } from 'react';
import { useSectionNavigation } from './hooks/useSectionNavigation';
import { usePreloadSections } from './hooks/usePreloadSections';
import { ErrorBoundary } from './app/ErrorBoundary';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Footer } from './components/Footer';
import BinaryBackground from './components/BinaryBackground';
import { AmbientGlowLayer } from './components/AmbientGlowLayer';
import { AsyncSection } from './components/AsyncSection';

const ProtocolDeepDive = lazy(() => import('./components/ProtocolDeepDive'));
const LiveGamingPingSimulator = lazy(() => import('./components/LiveGamingPingSimulator'));
const ComparisonSection = lazy(() => import('./components/ComparisonSection'));
const PrivacyAndTermsSection = lazy(() => import('./components/PrivacyAndTermsSection'));
const FreeTrialBannerSection = lazy(() => import('./components/FreeTrialBannerSection'));
const InteractivePackagesSection = lazy(() => import('./components/InteractivePackagesSection'));
const ClientAppsDownload = lazy(() => import('./components/ClientAppsDownload'));
const GameNetPartnershipSection = lazy(() => import('./components/GameNetPartnershipSection'));
const FaqSection = lazy(() => import('./components/FaqSection'));

export default function App() {
  const { navigate } = useSectionNavigation();
  usePreloadSections();

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
        <AsyncSection><ProtocolDeepDive onScrollToSection={navigate} /></AsyncSection>
        <AsyncSection><LiveGamingPingSimulator /></AsyncSection>
        <AsyncSection><ComparisonSection /></AsyncSection>
        <AsyncSection><PrivacyAndTermsSection /></AsyncSection>
        <AsyncSection><FreeTrialBannerSection onScrollToSection={navigate} /></AsyncSection>
        <AsyncSection><InteractivePackagesSection /></AsyncSection>
        <AsyncSection><ClientAppsDownload /></AsyncSection>
        <AsyncSection><GameNetPartnershipSection /></AsyncSection>
        <AsyncSection><FaqSection onScrollToSection={navigate} /></AsyncSection>
      </main>
      <Footer onScrollToSection={navigate} />
    </ErrorBoundary>
  );
}