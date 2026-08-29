import { memo, useEffect, useState, useRef } from 'react';

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

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const startInterval = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(() => {
        if (!isVisibleRef.current) return;
        const random = COLORS[Math.floor(Math.random() * COLORS.length)];
        const newColor = random.rgb;
        setCurrentColor((prev) => (prev !== newColor ? newColor : prev));
      }, 8000);
    };

    startInterval();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisibleRef.current = false;
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      } else {
        isVisibleRef.current = true;
        startInterval();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div
      className={`absolute rounded-full ${position} ${size} pointer-events-none`}
      style={{
        backgroundColor: `rgba(${currentColor}, 0.28)`,
        WebkitMaskImage: 'url(/assets/glow-mask.webp)',
        maskImage: 'url(/assets/glow-mask.webp)',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        filter: 'blur(45px)',
        opacity: 0.48,
        transition: 'background-color 4s ease-in-out',
        willChange: 'auto',
        transform: 'translateZ(0)',
      }}
    />
  );
});