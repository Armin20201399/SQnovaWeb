import { useEffect } from 'react';
import { sectionImports } from '../app/sectionImports';

export function usePreloadSections() {
  useEffect(() => {
    const preload = () => {
      Object.values(sectionImports).forEach(load => {
        void load();
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preload, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    // استفاده از تابع سراسری setTimeout به جای window.setTimeout برای رفع خطای TypeScript
    const timeoutId = setTimeout(preload, 800);
    return () => clearTimeout(timeoutId);
  }, []);
}