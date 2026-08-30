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

    const timeoutId = setTimeout(preload, 800);
    return () => clearTimeout(timeoutId);
  }, []);
}