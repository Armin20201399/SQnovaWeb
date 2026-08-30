import { memo, useId, useState } from 'react';

interface FlameLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  subtitle?: string;
}

const SIZE_MAP = {
  sm: { icon: 'w-9 h-9', sq: 'text-lg', nova: 'text-base' },
  md: { icon: 'w-11 h-11', sq: 'text-xl', nova: 'text-lg' },
  lg: { icon: 'w-16 h-16', sq: 'text-2xl', nova: 'text-xl' },
  xl: { icon: 'w-22 h-22', sq: 'text-4xl', nova: 'text-3xl' },
} as const;

const BASE_MATRIX = ['1011', '0101', '1100', '0011', '1010'] as const;
const HOVER_MATRIX_A = ['1101', '0110', '1001', '0101', '1110'] as const;
const HOVER_MATRIX_B = ['1011', '0101', '1100', '0011', '1010'] as const;

const FlameLogoComponent = ({ size = 'md', showText = true, className = '', subtitle }: FlameLogoProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const gradientId = useId().replace(/:/g, '');
  const currentSize = SIZE_MAP[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div
        className="relative group flex-shrink-0 flex items-center justify-center cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-hidden="true"
      >
        {/* هاله‌ی نوری (Glow) - نرم‌تر و درخشان‌تر */}
        <div className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-300 ease-out pointer-events-none ${isHovered ? 'opacity-100 scale-125 bg-emerald-400/50' : 'opacity-50 bg-emerald-500/20'}`} />
        
        {/* باکس اصلی */}
        <div className={`${currentSize.icon} relative rounded-2xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.2)] transition-all duration-300 ease-out ${isHovered ? 'scale-110 border-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.6)]' : ''}`}>
          
          {/* پس‌زمینه باینری - با محو شدن نرم */}
          <div className={`absolute inset-0 font-mono text-[10px] leading-[11px] font-bold text-emerald-400 select-none overflow-hidden flex flex-col justify-center items-center pointer-events-none drop-shadow-[0_0_6px_rgba(16,185,129,0.9)] ${isHovered ? 'opacity-100' : 'opacity-70'}`}>
            <div className={`flex flex-col items-center tracking-widest transition-all duration-300 ${isHovered ? 'scale-110 opacity-0' : 'opacity-100'}`}>
              {BASE_MATRIX.map((row, i) => (
                <div key={i} className="flame-binary-line">{row}</div>
              ))}
            </div>
            {isHovered && (
              <div className="absolute inset-0 flex flex-col justify-center items-center tracking-widest transition-opacity duration-300">
                <div className="absolute flex flex-col justify-center items-center gap-0.5">
                  {HOVER_MATRIX_A.map((row, i) => (
                    <div key={`a-${i}`} className="absolute flame-binary-frame-a">{row}</div>
                  ))}
                  {HOVER_MATRIX_B.map((row, i) => (
                    <div key={`b-${i}`} className="absolute flame-binary-frame-b">{row}</div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* ستاره سبز - با چرخش و درخشش بیشتر */}
          <svg viewBox="0 0 100 100" className={`w-9 h-9 z-10 transition-all duration-500 ease-out ${isHovered ? 'scale-125 rotate-12 drop-shadow-[0_0_20px_rgba(52,211,153,1)]' : 'drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]'}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1fae5" />
                <stop offset="50%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
            <polygon points="50,12 62,37 88,40 69,58 74,84 50,71 26,84 31,58 12,40 38,37" fill={`url(#${gradientId})`} stroke="#ffffff" strokeWidth="2.2" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      
      {/* متن‌ها */}
      {showText && (
        <div className="flex flex-col text-right">
          <div dir="ltr" className="flex items-baseline gap-1.5 font-['Rajdhani',sans-serif] tracking-tight">
            <span className={`${currentSize.sq} font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 drop-shadow-[0_0_18px_rgba(255,140,0,0.7)]`}>SQ</span>
            <span className={`${currentSize.nova} font-bold text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]`}>nova</span>
          </div>
          {subtitle && <span className="text-[10px] font-['Vazirmatn'] text-slate-400 font-medium tracking-wide -mt-0.5">{subtitle}</span>}
        </div>
      )}
    </div>
  );
};

const FlameLogo = memo(FlameLogoComponent);
export default FlameLogo;