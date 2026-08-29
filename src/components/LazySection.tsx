import {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import type { ComponentType } from 'react';
import { SectionFallback } from './SectionFallback';

// تابع کمکی برای تشخیص دستگاه‌های کم‌توان
const getDeviceCapability = (): 'low' | 'medium' | 'high' => {
  const nav = navigator as Navigator & {
    deviceMemory?: number;
    connection?: { saveData?: boolean; effectiveType?: string };
  };

  const saveData = nav.connection?.saveData === true;
  const hardwareConcurrency = navigator.hardwareConcurrency || 4;
  const deviceMemory = nav.deviceMemory ?? 4;
  const effectiveType = nav.connection?.effectiveType || '4g';

  if (saveData || hardwareConcurrency <= 4 || deviceMemory <= 4 || effectiveType === 'slow-2g') {
    return 'low';
  }
  if (effectiveType === '2g' || effectiveType === '3g' || hardwareConcurrency <= 8) {
    return 'medium';
  }
  return 'high';
};

export function createLazySection<P extends object>(
  importer: () => Promise<{ default: ComponentType<P> }>
) {
  const LazyComp = lazy(importer);

  return function LazySection(props: P) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoad, setShouldLoad] = useState(false);
    const observerRef = useRef<IntersectionObserver | null>(null);

    // محاسبه rootMargin بر اساس توانایی دستگاه و اندازه صفحه
    const rootMargin = useMemo(() => {
      const capability = getDeviceCapability();
      const isMobile = window.matchMedia('(max-width: 768px)').matches;

      if (capability === 'low') {
        return isMobile ? '250px 0px' : '350px 0px';
      }
      if (capability === 'medium') {
        return isMobile ? '400px 0px' : '550px 0px';
      }
      // high
      return isMobile ? '600px 0px' : '800px 0px';
    }, []);

    // تابع شروع بارگذاری با اولویت idle
    const startLoading = useCallback(() => {
      if (shouldLoad) return;

      // استفاده مستقیم از requestIdleCallback (بدون any)
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(
          () => setShouldLoad(true),
          { timeout: 2000 }
        );
      } else {
        setShouldLoad(true);
      }
    }, [shouldLoad]);

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      if (shouldLoad) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startLoading();
            observerRef.current?.disconnect();
          }
        },
        { rootMargin }
      );

      observerRef.current.observe(el);

      return () => {
        observerRef.current?.disconnect();
        observerRef.current = null;
      };
    }, [rootMargin, startLoading, shouldLoad]);

    // بررسی اولیه نمایش در viewport (برای لینک‌های مستقیم)
    useEffect(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isInViewport =
          rect.top < window.innerHeight + 500 && rect.bottom > -500;
        if (isInViewport && !shouldLoad) {
          startLoading();
        }
      }
    }, [props, startLoading, shouldLoad]);

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