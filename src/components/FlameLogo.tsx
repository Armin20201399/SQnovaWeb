import React, { useState, useEffect } from 'react';

interface FlameLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  subtitle?: string;
}

const FlameLogo: React.FC<FlameLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  subtitle
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [binaryMatrix, setBinaryMatrix] = useState([
    '1011', '0101', '1100', '0011', '1010'
  ]);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        setBinaryMatrix([
          Math.random() > 0.5 ? '1101' : '1011',
          Math.random() > 0.5 ? '0110' : '0101',
          Math.random() > 0.5 ? '1001' : '1100',
          Math.random() > 0.5 ? '0101' : '0011',
          Math.random() > 0.5 ? '1110' : '1010',
        ]);
      }, 150);
    } else {
      setBinaryMatrix(['1011', '0101', '1100', '0011', '1010']);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const sizeMap = {
    sm: { icon: 'w-9 h-9', sq: 'text-lg', nova: 'text-base', badge: 'text-[9px]' },
    md: { icon: 'w-11 h-11', sq: 'text-xl', nova: 'text-lg', badge: 'text-[10px]' },
    lg: { icon: 'w-16 h-16', sq: 'text-2xl', nova: 'text-xl', badge: 'text-xs' },
    xl: { icon: 'w-22 h-22', sq: 'text-4xl', nova: 'text-3xl', badge: 'text-sm' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Binary Star Logo */}
      <div 
        className="relative group flex-shrink-0 flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Ambient Glow */}
        <div className={`absolute inset-0 bg-emerald-500/25 rounded-xl blur-lg transition-all duration-300 pointer-events-none ${isHovered ? 'opacity-100 scale-125 bg-emerald-400/40' : 'opacity-60'}`}></div>

        {/* Icon Container */}
        <div className={`${currentSize.icon} relative rounded-xl bg-black/90 border border-emerald-500/50 flex items-center justify-center overflow-hidden shadow-[0_0_15px_rgba(16,185,129,0.25)] transition-all duration-300 ${isHovered ? 'scale-110 border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.7)]' : ''}`}>
          
          {/* Binary Background Matrix (Old Terminal Green Style) */}
          <div className="absolute inset-0 opacity-75 font-mono text-[10px] leading-[11px] font-bold text-emerald-400 select-none overflow-hidden flex flex-col justify-center items-center pointer-events-none drop-shadow-[0_0_4px_rgba(16,185,129,0.8)]">
            {binaryMatrix.map((row, idx) => (
              <div key={idx} className="tracking-widest">{row}</div>
            ))}
          </div>

          {/* Central Glowing Star SVG */}
          <svg
            viewBox="0 0 100 100"
            className={`w-8 h-8 z-10 transition-all duration-300 ${isHovered ? 'scale-125 drop-shadow-[0_0_15px_rgba(52,211,153,1)]' : 'drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]'}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1fae5" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <polygon
              points="50,12 62,37 88,40 69,58 74,84 50,71 26,84 31,58 12,40 38,37"
              fill="url(#starGrad)"
              stroke="#ffffff"
              strokeWidth="2.2"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text: SQ on Left, nova on Right */}
      {showText && (
        <div className="flex flex-col text-right">
          {/* LTR container to guarantee SQ is on the left */}
          <div dir="ltr" className="flex items-baseline gap-1.5 font-['Rajdhani',sans-serif] tracking-tight">
            <span className={`${currentSize.sq} font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 drop-shadow-[0_0_15px_rgba(255,140,0,0.6)]`}>
              SQ
            </span>
            <span className={`${currentSize.nova} font-bold text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.4)]`}>
              nova
            </span>
          </div>
          {subtitle && (
            <span className="text-[10px] font-['Vazirmatn'] text-slate-400 font-medium tracking-wide -mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};


export default FlameLogo;