import { memo, useEffect, useState } from 'react';

interface AmbientGlowProps {
  position: string;
  size?: string;
}

const COLORS = [
  { rgb: '147, 51, 234' },
  { rgb: '219, 39, 119' },
  { rgb: '14, 165, 233' },
  { rgb: '16, 185, 129' },
  { rgb: '245, 158, 11' },
  { rgb: '249, 115, 22' },
  { rgb: '236, 72, 153' },
  { rgb: '99, 102, 241' },
];

export const AmbientGlow = memo(function AmbientGlow({
  position,
  size = 'w-96 h-96',
}: AmbientGlowProps) {
  const [currentColor, setCurrentColor] = useState(() => {
    const random = COLORS[Math.floor(Math.random() * COLORS.length)];
    return random.rgb;
  });

  useEffect(() => {
    // 🔥 تشخیص دستگاه‌های ضعیف و احترام به prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    // در دستگاه‌های ضعیف یا کسانی که حرکت کم رو ترجیح میدن، رنگ ثابت می‌مونه
    if (prefersReducedMotion || isLowEndDevice) return;

    const interval = setInterval(() => {
      const random = COLORS[Math.floor(Math.random() * COLORS.length)];
      setCurrentColor(random.rgb);
    }, 8000); // 🔥 فاصله بیشتر برای کاهش فشار

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute ${position} ${size} pointer-events-none`}
      style={{
        backgroundColor: `rgba(${currentColor}, 0.45)`,
        WebkitMaskImage: 'url(/assets/glow-mask.webp)',
        maskImage: 'url(/assets/glow-mask.webp)',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        filter: 'blur(45px)',
        opacity: 0.55,
        // 🔥 حذف mixBlendMode: 'screen' برای کاهش فشار GPU
        transition: 'background-color 4s ease-in-out',
        // 🔥 تغییر willChange به 'auto' برای کاهش مصرف حافظه GPU
        willChange: 'auto',
        transform: 'translateZ(0)',
      }}
      aria-hidden="true"
    />
  );
});