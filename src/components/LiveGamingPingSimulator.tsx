import React from 'react';
import { 
  Globe2
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface LiveGamingPingSimulatorProps {
  onScrollToSection?: (sectionId: string) => void;
}

const LiveGamingPingSimulator: React.FC<LiveGamingPingSimulatorProps> = ({
}) => {
  return (
    <section
      id="gaming-ping"
      className="cv-400 py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center leading-[1.3] py-2">
            <BinaryText binaryClassName="text-emerald-500/30" leftBinary="010" rightBinary="101">
              مناسب برای تمامی{' '}
              <span className="text-emerald-300 drop-shadow-[0_0_12px_rgba(110,231,183,0.5)]">گیم</span>{' '}
              و{' '}
              <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(125,211,252,0.5)]">پلتفرم</span>{' '}
              های{' '}
              <span className="text-rose-300 drop-shadow-[0_0_12px_rgba(252,165,165,0.5)]">تحریمی و فیلتر شده</span> 🎮
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            کیفیت بدون محدودیت!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LiveGamingPingSimulator;