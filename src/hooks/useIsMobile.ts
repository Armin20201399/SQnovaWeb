import { useEffect, useState } from 'react';

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // 768px نقطه شروع تبلت است؛ هر چیزی کوچک‌تر موبایل محسوب می‌شود
      setIsMobile(window.innerWidth < 768);
    };

    // بررسی اولیه
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}