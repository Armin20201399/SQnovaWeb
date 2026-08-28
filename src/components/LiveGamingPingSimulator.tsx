import { BinaryText } from './BinaryText';
import { AmbientGlow } from './ui/AmbientGlow';
import { SectionShell } from './ui/SectionShell';

const LiveGamingPingSimulator = () => {
  return (
    <SectionShell id="gaming-ping">
      <AmbientGlow position="top-1/3 right-1/4" color="bg-purple-900/20" size="w-[58rem] h-[58rem]" />
      <AmbientGlow position="bottom-10 left-1/4" color="bg-pink-900/20" size="w-[38rem] h-[38rem]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center leading-[1.3] py-2">
            <BinaryText binaryClassName="text-emerald-500/30" leftBinary="010" rightBinary="101">
              مناسب برای تمامی <span className="text-emerald-300 drop-shadow-[0_0_12px_rgba(110,231,183,0.5)]">گیم</span>{' '}
              و <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.5)]">پلتفرم</span>{' '}
              های <span className="text-rose-300 drop-shadow-[0_0_12px_rgba(252,165,165,0.5)]">تحریمی و فیلتر شده</span> 🎮
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">کیفیت بدون محدودیت!</p>
        </div>
      </div>
    </SectionShell>
  );
};

export default LiveGamingPingSimulator;