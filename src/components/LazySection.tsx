import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
} from 'react';
import type { ComponentType } from 'react';
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

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        },
        { rootMargin: '200px 0px' } // مقدار متعادل برای لود زودهنگام بدون افت سرعت
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