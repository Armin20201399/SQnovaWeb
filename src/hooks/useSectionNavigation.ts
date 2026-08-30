import { useCallback, useEffect } from 'react';

export function useSectionNavigation() {
  const navigate = useCallback((id: string) => {
    const cleanId = id.replace('#', '').replace('/', '');
    const element = document.getElementById(cleanId);
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${cleanId}`);
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      const id = window.location.hash.replace('#', '');
      if (id) navigate(id);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [navigate]);

  return { navigate };
}