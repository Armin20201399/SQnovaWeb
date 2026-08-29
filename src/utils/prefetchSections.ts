const sectionImporters = [
  () => import('../components/ProtocolDeepDive'),
  () => import('../components/LiveGamingPingSimulator'),
  () => import('../components/ServerStatusSection'),
  () => import('../components/GameNetPartnershipSection'),
  () => import('../components/FreeTrialDedicatedSection'),
  () => import('../components/ServicePackagesSection'),
  () => import('../components/ClientAppsDownload'),
  () => import('../components/FaqSection'),
  () => import('../components/PrivacyAndTermsSection'),
];

export function prefetchSectionsWhenIdle() {
  // احترام به کاربرانی که دیتا سیو فعال دارند
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
  const prefersReducedData = connection?.saveData === true;
  if (prefersReducedData) return;

  const run = () => {
    // یکی‌یکی با فاصله، تا با کار اصلی رقابت نکنند
    sectionImporters.reduce((chain, importer) => {
      return chain.then(() => new Promise(resolve => {
        importer().finally(() => setTimeout(resolve, 150));
      }));
    }, Promise.resolve());
  };

  if ('requestIdleCallback' in window) {
    const idleCallback = (window as Window & { requestIdleCallback?: (cb: () => void, options?: { timeout?: number }) => void }).requestIdleCallback;
    if (idleCallback) {
      idleCallback(run, { timeout: 3000 });
    } else {
      setTimeout(run, 2000);
    }
  } else {
    setTimeout(run, 2000);
  }
}