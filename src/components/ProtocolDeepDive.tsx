import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROTOCOLS_DATA } from '../data/vpnData';
import { 
  Flame, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Cpu, 
  SlidersHorizontal,
  ArrowLeft,
  Radio,
  Activity,
  Server
} from 'lucide-react';
import { ProtocolType } from '../types';
import { BinaryText } from './BinaryText';

interface ProtocolDeepDiveProps {
  onScrollToSection?: (sectionId: string) => void;
}

const ProtocolDeepDive: React.FC<ProtocolDeepDiveProps> = ({
  onScrollToSection
}) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<ProtocolType>('hysteria2');

  const selectedProtocol = PROTOCOLS_DATA.find((p) => p.id === selectedProtocolId) || PROTOCOLS_DATA[0];

  const getIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Flame':
        return <Flame className={`${className} text-orange-400`} />;
      case 'ShieldCheck':
        return <ShieldCheck className={`${className} text-pink-400`} />;
      case 'Sparkles':
        return <Sparkles className={`${className} text-amber-400`} />;
      case 'Zap':
        return <Zap className={`${className} text-purple-400`} />;
      default:
        return <Flame className={`${className} text-orange-400`} />;
    }
  };

  const protocolTabInfo = [
    { id: 'hysteria2' as ProtocolType, label: 'Hysteria 2 Turbo', sublabel: 'UDP / Brisk', icon: Flame, color: 'from-orange-500 to-pink-600' },
    { id: 'tcp-reality' as ProtocolType, label: 'TCP Raw Reality', sublabel: 'Anti-DPI / TLS', icon: ShieldCheck, color: 'from-pink-600 to-purple-600' },
    { id: 'xhttp' as ProtocolType, label: 'xHTTP Engine', sublabel: 'SplitHTTP Reality', icon: Sparkles, color: 'from-amber-500 to-orange-500' },
    { id: 'mkcp' as ProtocolType, label: 'mKCP Turbo', sublabel: 'Fast Multiplex', icon: Zap, color: 'from-purple-600 to-indigo-600' },
  ];

  return (
    <section 
      id="protocols" 
      className="py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10"
    >
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-sky-500/40" leftBinary="101001" rightBinary="010110">
              پروتکل‌های{' '}
              <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">به‌روز</span>{' '}
              و{' '}
              <span className="text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">قدرتمند</span> ⚡
            </BinaryText>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            بهینه‌شده برای دریافت بهترین عملکرد و پایداری در سخت‌ترین شرایط و محدودیت‌ها
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center justify-center gap-2 p-2 rounded-3xl bg-slate-900/90 border border-white/10 backdrop-blur-2xl shadow-2xl flex-wrap relative">
            {protocolTabInfo.map((tab) => {
              const isSelected = tab.id === selectedProtocolId;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedProtocolId(tab.id)}
                  className={`relative whitespace-nowrap flex-shrink-0 px-4 sm:px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-colors duration-300 flex items-center justify-center gap-2.5 overflow-hidden group z-10 ${
                    isSelected
                      ? 'text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="absolute inset-0 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                  
                  <TabIcon className="w-4 h-4 flex-shrink-0 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>

                  {isSelected && (
                    <motion.div
                      layoutId="protocolActiveTab"
                      initial={{ scale: 0.96, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-r ${tab.color} shadow-lg -z-10`}
                      transition={{
                        type: "spring",
                        stiffness: 160,
                        damping: 18,
                        mass: 1,
                        bounce: 0.2
                      }}
                      style={{ borderRadius: '1rem' }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900/60 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl relative overflow-hidden text-center transition-all duration-300">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6 flex flex-col items-center text-center">
              
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="flex items-center justify-center gap-3 pt-1">
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-['Rajdhani'] text-center">
                    <BinaryText binaryClassName="text-purple-500/30" leftBinary="011" rightBinary="110">
                      {selectedProtocol.name.split(' (')[0]}
                    </BinaryText>
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl text-center">
                  {selectedProtocol.description}
                </p>
              </div>

              <div className="space-y-3 pt-2 w-full flex flex-col items-center">
                <div className="space-y-2.5 w-full max-w-xl">
                  {selectedProtocol.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-300 bg-white/5 p-3 rounded-2xl border border-white/5 backdrop-blur-sm text-center">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-col items-center text-center">
                <span className="text-xs text-slate-300 block mb-2.5 font-bold text-center">
                  پیشنهاد شده برای:
                </span>
                <div className="text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 backdrop-blur-sm text-center max-w-xl">
                  {selectedProtocol.id === 'hysteria2' 
                    ? 'همه‌چیز! این پروتکل همه‌فن‌حریفه اما بیشتر برای استریم محتوا و گیمینگ پیشنهاد می‌شه!'
                    : selectedProtocol.bestFor.join(' | ')
                  }
                </div>
              </div>

            </div>

            <div className="lg:col-span-5 space-y-6 flex flex-col items-center w-full">
              
              <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900/90 to-pink-950/40 border border-purple-500/40 space-y-5 shadow-xl backdrop-blur-xl text-center flex flex-col items-center">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="p-3.5 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    <Layers className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      <BinaryText binaryClassName="text-purple-400/40" leftBinary="01" rightBinary="10">
                        با یه کلیک آپدیت شو
                      </BinaryText>
                    </h4>
                    <p className="text-xs text-purple-300 font-semibold mt-0.5">
                      بدون نیاز به تنظیمات دستی
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-center">
                  با لینک ساب هوشمند همیشه از آخرین نسخه کانفیگ‌ها فقط با یه کلیک و رفرش کردن لینک ساب‌تون استفاده کنید!
                </p>

                {onScrollToSection && (
                  <button
                    onClick={() => onScrollToSection('free-test')}
                    className="whitespace-nowrap flex-shrink-0 w-full py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-400 border border-amber-500/40 hover:border-amber-300 text-amber-300 hover:text-slate-950 font-bold text-xs shadow-lg transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] group shine-effect"
                  >
                    <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
                    <span className="group-hover:text-slate-950 transition-colors">رایگان امتحانش کن</span>
                  </button>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ProtocolDeepDive;