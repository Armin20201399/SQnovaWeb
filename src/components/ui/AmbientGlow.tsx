import { memo } from 'react';

interface AmbientGlowProps {
  position: string;
  color?: string;
  size?: string;
}

// رنگ خام هر گلو (بدون آلفا، چون شدت/فید از خود تصویر ماسک میاد)
const RGB_MAP: Record<string, string> = {
  'bg-purple-900/20': '147, 51, 234',   // بنفش پررنگ‌تر و زنده‌تر از قبل
  'bg-pink-900/20': '219, 39, 119',
  'bg-pink-900/15': '219, 39, 119',
  'bg-sky-900/20': '14, 165, 233',
  'bg-emerald-900/20': '16, 185, 129',
  'bg-amber-600/10': '245, 158, 11',
  'bg-orange-600/15': '249, 115, 22',
};

export const AmbientGlow = memo(function AmbientGlow({
  position,
  color = 'bg-purple-900/20',
  size = 'w-96 h-96',
}: AmbientGlowProps) {
  const rgb = RGB_MAP[color] ?? RGB_MAP['bg-purple-900/20'];

  return (
    <div
      className={`absolute ${position} ${size} pointer-events-none`}
      style={{
        backgroundColor: `rgb(${rgb})`,
        WebkitMaskImage: 'url(/assets/glow-mask.webp)',
        maskImage: 'url(/assets/glow-mask.webp)',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        opacity: 0.45,
      }}
      aria-hidden="true"
    />
  );
});