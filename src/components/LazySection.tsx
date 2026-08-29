import { Suspense, lazy, useEffect, useRef, useState, ComponentType } from 'react';
import { SectionFallback } from './SectionFallback';

export function createLazySection<P extends object>(
  importer: () => Promise<{ default: ComponentType<P> }>
) {
  const LazyComp = lazy(importer);

  return function LazySection(props: P) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const nav = navigator as Navigator & {
        deviceMemory?: number;
        connection?: { saveData?: boolean };
      };

      const lowEnd =
        nav.connection?.saveData === true ||
        (navigator.hardwareConcurrency || 4) <= 4 ||
        (nav.deviceMemory ?? 4) <= 4;

      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      let rootMargin = '600px 0px';
      if (lowEnd) {
        rootMargin = '180px 0px';
      } else if (isMobile) {
        rootMargin = '250px 0px';
      }

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin }
      );

      observer.observe(el);
      return () => observer.disconnect();
    }, []);

    return (
      <div ref={containerRef}>
        {shouldLoad ? (
          <Suspense fallback={<SectionFallback />}>
            <LazyComp {...props} />
          </Suspense>
        ) : (
          <SectionFallback />
        )}
      </div>
    );
  };
}