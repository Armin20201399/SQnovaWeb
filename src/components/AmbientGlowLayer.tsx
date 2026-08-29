import { memo } from 'react';
import { AmbientGlow } from './ui/AmbientGlow';

const AmbientGlowLayerComponent = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {/* گلو سمت چپ - در موبایل به کناره چپ می‌رود */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 max-[640px]:-translate-x-1/2 w-0 h-0">
        <AmbientGlow position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[1000px] h-[1000px]" />
      </div>

      {/* گلو وسط - در موبایل مخفی می‌شود */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[640px]:hidden">
        <AmbientGlow position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[900px] h-[900px]" />
      </div>

      {/* گلو سمت راست - در موبایل به کناره راست می‌رود */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 max-[640px]:translate-x-1/2 w-0 h-0">
        <AmbientGlow position="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size="w-[1000px] h-[1000px]" />
      </div>
    </div>
  );
};

export const AmbientGlowLayer = memo(AmbientGlowLayerComponent);