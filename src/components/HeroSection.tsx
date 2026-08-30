import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { ArrowLeft, Layers, Globe2, Zap, ShieldCheck, Gauge, Signal } from 'lucide-react';
import { BinaryText } from './BinaryText';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HERO_LINES = [
  { text: 'پکت‌لاس نزدیک به 0.0%', color: 'text-sky-400', b1: '010110', b2: '110011' },
  { text: 'و آپ‌تایم 99.99%', color: 'text-sky-400', b1: '101001', b2: '001100' },
  { text: 'پایداری مطلق', color: 'text-emerald-400', b1: '010110', b2: '110011' },
  { text: 'حتی در', color: 'text-slate-500', b1: '101001', b2: '001100' },
  { text: 'شلوغ‌ترین', color: 'text-rose-400', b1: '010110', b2: '110011' },
  { text: 'ساعات شبکه', color: 'text-slate-300', b1: '101001', b2: '001100' },
];

const PERFORMANCE_METRICS_INIT = [
  { label: 'پینگ', value: '50 ms', color: 'emerald', icon: Signal },
  { label: 'پهنای باند', value: '10 Gb/s', color: 'purple', icon: Gauge },
];

const COLOR_MAP = {
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
    bar: 'bg-emerald-500',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400 shadow-[0_0_8px_#a855f7]',
    bar: 'bg-purple-500',
  },
} as const;

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const [zeroVal, setZeroVal] = useState('0.0%');
  const [uptimeVal, setUptimeVal] = useState('99.99%');
  
  const [euServers, setEuServers] = useState([
    { id: 'de', name: 'آلمان', ping: 85 },
    { id: 'nl', name: 'هلند', ping: 95 },
    { id: 'se', name: 'سوئد', ping: 90 },
  ]);
  const [iranServers, setIranServers] = useState([
    { id: 'asiatech', name: 'آسیاتک', ping: 12 },
    { id: 'shatel', name: 'شاتل', ping: 15 },
    { id: 'hayweb', name: 'های وب', ping: 19 },
  ]);
  const [hubPing, setHubPing] = useState(58);
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const pauseTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const resumeTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setEuServers(prev => prev.map(r => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return { ...r, ping: Math.max(60, Math.min(120, r.ping + delta)) };
      }));
      setIranServers(prev => prev.map(r => {
        const delta = Math.floor(Math.random() * 7) - 3;
        return { ...r, ping: Math.max(8, Math.min(40, r.ping + delta)) };
      }));
      setHubPing(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(54, Math.min(64, prev + delta));
      });
    }, 2000);

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 1000) + 1000;
      timeoutRef.current = setTimeout(() => {
        const possibleLoss = ['0.0%', '0.1%', '0.0%', '1.0%', '0.0%'];
        setZeroVal(possibleLoss[Math.floor(Math.random() * possibleLoss.length)]);
        const possibleUptime = ['99.99%', '99.98%', '99.97%', '99.96%', '99.95%'];
        setUptimeVal(possibleUptime[Math.floor(Math.random() * possibleUptime.length)]);
        scheduleNext();
      }, delay);
    };
    scheduleNext();
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) pauseTimers();
      else resumeTimers();
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [pauseTimers, resumeTimers]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) resumeTimers();
        else pauseTimers();
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [resumeTimers, pauseTimers]);

  useEffect(() => {
    resumeTimers();
    return () => pauseTimers();
  }, [resumeTimers, pauseTimers]);

  const handleViewPlans = useCallback(() => {
    onScrollToSection('packages');
  }, [onScrollToSection]);

  const minEuPing = Math.min(...euServers.map(x => x.ping));
  const minIranPing = Math.min(...iranServers.map(x => x.ping));

  return (
    <section ref={sectionRef} id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-6">
            <h1 className="flex flex-col items-center gap-2 py-4">
              {HERO_LINES.map((line, idx) => {
                let children: React.ReactNode = line.text;
                if (idx === 0) children = <>پکت‌لاس نزدیک به <span className="font-mono text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] text-[1.2em] inline-block align-middle">{zeroVal}</span></>;
                else if (idx === 1) children = <>و آپ‌تایم <span className="font-mono text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] text-[1.2em] inline-block align-middle">{uptimeVal}</span></>;
                else if (idx === 2) children = <>پایداری <span className="text-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] text-[1.2em] inline-block align-middle">مطلق</span></>;
                else if (idx === 4) children = <span className="text-rose-300 drop-shadow-[0_0_10px_rgba(251,113,133,0.8)] text-[1.2em] inline-block align-middle">شلوغ‌ترین</span>;
                
                return (
                  <BinaryText
                    key={idx}
                    binaryClassName={line.color}
                    leftBinary={line.b1}
                    rightBinary={line.b2}
                    className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white"
                    tight={false}
                  >
                    {children}
                  </BinaryText>
                );
              })}
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl text-center">
              هر ساعت شبانه‌روز، حتی با بدترین اینترنت ایران، فقط وصل باش و حال کن!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
              <button
                id="hero-view-plans-cta"
                onClick={handleViewPlans}
                className="whitespace-nowrap flex-shrink-0 w-full sm:w-auto group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-bold text-base shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 text-center shine-effect"
              >
                <Layers className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition duration-300" />
                <span>ساخت پلن اختصاصی</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180 group-hover:-translate-x-1 transition duration-200" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-80" />
            <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-6 shadow-2xl overflow-hidden space-y-5">
              
              <div className="flex items-center justify-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-sky-400" />
                  <span className="text-xs font-bold text-slate-200">روتینگ اختصاصی بین‌المللی</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>سریع‌ترین نودهای اروپا</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {euServers.map((server) => {
                    const isOptimal = server.ping === minEuPing;
                    return (
                      <div key={server.id} className={`p-2.5 rounded-xl border text-center transition-all duration-300 ${isOptimal ? 'bg-sky-500/20 border-sky-500/50 text-white scale-[1.02]' : 'bg-white/5 border-white/10 text-slate-300'}`}>
                        <div className="text-[11px] font-bold">{server.name}</div>
                        <div className={`text-[10px] font-mono mt-1 ${isOptimal ? 'text-sky-300' : 'text-slate-400'}`} dir="ltr">
                          {server.ping} ms
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="relative py-1">
                <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
                <div className="relative z-10 p-3 rounded-xl bg-purple-950/60 border border-purple-500/40 flex items-center justify-center gap-3 text-center">
                  <span className="text-xs font-bold text-white">هاب مرکزی ترکیه</span>
                  <span className="text-[10px] font-mono font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded" dir="ltr">{hubPing}ms</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-bold">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>اتصال مستقیم ایران</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {iranServers.map((server) => {
                    const isOptimal = server.ping === minIranPing;
                    return (
                      <div key={server.id} className={`p-2.5 rounded-xl border text-center transition-all duration-300 ${isOptimal ? 'bg-emerald-500/20 border-emerald-500/50 text-white scale-[1.02]' : 'bg-white/5 border-white/10 text-slate-300'}`}>
                        <div className="text-[11px] font-bold">{server.name}</div>
                        <div className={`text-[10px] font-mono mt-1 ${isOptimal ? 'text-emerald-300' : 'text-slate-400'}`} dir="ltr">
                          {server.ping} ms
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-3 pt-2 border-t border-white/5">
                {PERFORMANCE_METRICS_INIT.map((metric, idx) => {
                  // اصلاح خطای TypeScript با cast کردن کلید
                  const colors = COLOR_MAP[metric.color as keyof typeof COLOR_MAP];
                  const Icon = metric.icon;
                  const barWidth = idx === 0 ? 'w-[12%]' : 'w-full';
                  return (
                    <div key={idx} className={`flex items-center justify-between gap-3 p-3 rounded-xl bg-slate-800/50 border border-white/5`}>
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                        <Icon className={`w-4 h-4 ${colors.text}`} />
                        {metric.label}
                      </div>
                      <div className="flex-1 hidden sm:block h-1.5 bg-slate-700 rounded-full overflow-hidden">
                        <div className={`h-full ${barWidth} ${colors.bar} rounded-full`} />
                      </div>
                      <div className={`text-xs font-mono font-bold ${colors.text} ${colors.bg} px-2 py-1 rounded-lg border ${colors.border}`} dir="ltr">
                        {metric.value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const HeroSection = memo(HeroSectionComponent);