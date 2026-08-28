import { memo } from 'react';

interface AmbientGlowProps {
  position: string;
  color?: string;
  size?: string;
  blur?: string;
}

export const AmbientGlow = memo(function AmbientGlow({
  position,
  color = 'bg-purple-900/20',
  size = 'w-96 h-96',
  blur = 'blur-[120px]',
}: AmbientGlowProps) {
  return (
    <div
      className={`absolute ${position} ${size} ${color} rounded-full ${blur} pointer-events-none`}
      aria-hidden="true"
    />
  );
});