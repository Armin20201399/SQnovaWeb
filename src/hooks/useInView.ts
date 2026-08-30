import { useEffect, useState } from 'react';

export function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold });
    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, threshold]);

  return isVisible;
}