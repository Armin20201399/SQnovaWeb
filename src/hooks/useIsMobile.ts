import { useEffect, useState } from 'react';

export function useIsMobile() {
  // مقداردهی اولیه با window در لحظه‌ی رندر اول (برای جلوگیری از mount شدن در دسکتاپ)
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}