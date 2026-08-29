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
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;

  const cores = navigator.hardwareConcurrency || 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const effectiveType = connection?.effectiveType;

  const lowEnd =
    connection?.saveData === true ||
    cores <= 4 ||
    memory <= 4 ||
    effectiveType === 'slow-2g' ||
    effectiveType === '2g';

  if (lowEnd) return;

  const run = () => {
    sectionImporters.reduce((chain, importer) => {
      return chain.then(
        () =>
          new Promise((resolve) => {
            importer().finally(() => setTimeout(resolve, 300));
          })
      );
    }, Promise.resolve());
  };

  if ('requestIdleCallback' in window) {
    const idleCallback = (window as Window & {
      requestIdleCallback?: (cb: () => void, options?: { timeout?: number }) => void;
    }).requestIdleCallback;

    if (idleCallback) {
      idleCallback(run, { timeout: 6000 });
    } else {
      setTimeout(run, 2000);
    }
  } else {
    setTimeout(run, 2000);
  }
}