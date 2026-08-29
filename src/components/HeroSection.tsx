import React, { useState, useEffect, useRef, useCallback, useMemo, memo } from 'react';
import { ArrowLeft, Layers } from 'lucide-react';
import { BinaryText } from './BinaryText';

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HERO_LINES = [
  { text: 'پکت‌لاس نزدیک به 0.0%', color: 'text-sky-500/40', b1: '010110', b2: '110011' },
  { text: 'و آپ‌تایم 99.99%', color: 'text-sky-500/40', b1: '101001', b2: '001100' },
  { text: 'پایداری مطلق', color: 'text-emerald-500/40', b1: '010110', b2: '110011' },
  { text: 'حتی در', color: 'text-white/20', b1: '101001', b2: '001100' },
  { text: 'شلوغ‌ترین', color: 'text-rose-500/40', b1: '010110', b2: '110011' },
  { text: 'ساعات شبکه', color: 'text-white/20', b1: '101001', b2: '001100' },
];

const EU_SERVERS_INIT = [
  { id: 'hetzner', name: 'هتزنر آلمان', ping: 85 },
  { id: 'apex', name: 'ایپکس هلند', ping: 95 },
  { id: 'sweden', name: 'ایپکس سوئد', ping: 90 },
];

const IRAN_SERVERS_INIT = [
  { id: 'asiatech', name: 'آسیاتک', ping: 12 },
  { id: 'shatel', name: 'شاتل', ping: 15 },
  { id: 'hayweb', name: 'های وب', ping: 19 },
];

const COLOR_MAP = {
  emerald: {
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    dot: 'bg-emerald-400 shadow-[0_0_8px_#34d399]',
    bar: 'bg-emerald-500',
    hoverBorder: 'hover:border-emerald-500/40',
  },
  purple: {
    text: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    dot: 'bg-purple-400 shadow-[0_0_8px_#a855f7]',
    bar: 'bg-purple-500',
    hoverBorder: 'hover:border-purple-500/40',
  },
} as const;

const HeroSectionComponent: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const [zeroVal, setZeroVal] = useState('0.0%');
  const [uptimeVal, setUptimeVal] = useState('99.99%');
  const [hubPing, setHubPing] = useState(58);
  const [euServers, setEuServers] = useState(EU_SERVERS_INIT);
  const [iranServers, setIranServers] = useState(IRAN_SERVERS_INIT);
  const [isVisible, setIsVisible] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const pauseTimers = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  const resumeTimers = useCallback(() => {
    if (!isVisible) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      setEuServers(prev => prev.map(r => {
        const basePing = r.id === 'hetzner' ? 85 : r.id === 'apex' ? 95 : 90;
        const delta = Math.floor(Math.random() * 9) - 4;
        return { ...r, ping: Math.max(60, basePing + delta) };
      }));
      setIranServers(prev => prev.map(r => {
        const delta = Math.floor(Math.random() * 7) - 3;
        let newPing = r.ping + delta;
        if (newPing < 8) newPing = 8;
        if (newPing > 40) newPing = 40;
        return { ...r, ping: newPing };
      }));
      setHubPing(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        let newPing = prev + delta;
        if (newPing < 54) newPing = 54;
        if (newPing > 64) newPing = 64;
        return newPing;
      });
    }, 2000);

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 500) + 300;
      timeoutRef.current = setTimeout(() => {
        const possibleLoss = ['0.0%', '0.1%', '0.0%', '1.0%', '0.0%'];
        setZeroVal(possibleLoss[Math.floor(Math.random() * possibleLoss.length)]);
        const possibleUptime = ['99.99%', '99.98%', '99.97%', '99.96%', '99.95%'];
        setUptimeVal(possibleUptime[Math.floor(Math.random() * possibleUptime.length)]);
        scheduleNext();
      }, delay);
    };
    scheduleNext();
  }, [isVisible]);

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
        const isVisibleNow = entries[0].isIntersecting;
        setIsVisible(isVisibleNow);
        if (!isVisibleNow) pauseTimers();
        else resumeTimers();
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pauseTimers, resumeTimers]);

  useEffect(() => {
    resumeTimers();
    return () => pauseTimers();
  }, [resumeTimers, pauseTimers]);

  const handleViewPlans = useCallback(() => {
    onScrollToSection('packages');
  }, [onScrollToSection]);

  const minEuPing = useMemo(() => Math.min(...euServers.map(x => x.ping)), [euServers]);
  const minIranPing = useMemo(() => Math.min(...iranServers.map(x => x.ping)), [iranServers]);

  const heroLinesContent = useMemo(() => {
    return HERO_LINES.map((line, idx) => {
      let content: React.ReactNode = line.text;
      if (idx === 0) {
        content = <>پکت‌لاس نزدیک به <span className="font-mono text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] text-[1.2em] inline-block align-middle">{zeroVal}</span></>;
      } else if (idx === 1) {
        content = <>و آپ‌تایم <span className="font-mono text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)] text-[1.2em] inline-block align-middle">{uptimeVal}</span></>;
      } else if (idx === 2) {
        content = <>پایداری <span className="text-emerald-300 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)] text-[1.2em] inline-block align-middle">مطلق</span></>;
      } else if (idx === 4) {
        content = <><span className="text-rose-300 drop-shadow-[0_0_10px_rgba(251,113,133,0.8)] text-[1.2em] inline-block align-middle">شلوغ‌ترین</span></>;
      }
      return (
        <BinaryText key={idx} binaryClassName={line.color} leftBinary={line.b1} rightBinary={line.b2} className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {content}
        </BinaryText>
      );
    });
  }, [zeroVal, uptimeVal]);

  const euServerElements = useMemo(() => {
    return euServers.map(server => {
      const isOptimal = server.ping === minEuPing;
      return (
        <div key={server.id} className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 relative ${isOptimal ? 'bg-sky-500/20 border-sky-500/80 shadow-[0_0_15px_rgba(56,189,248,0.3)] text-white scale-[1.02]' : 'bg-white/5 border-white/10 text-slate-300'}`}>
          <div className={`absolute -bottom-2.5 w-0.5 h-3 ${isOptimal ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8] animate-pulse' : 'bg-white/10'}`} />
          <span className="text-[11px] font-bold truncate w-full">{server.name}</span>
          <span className={`font-mono font-bold text-[11px] mt-0.5 px-1.5 py-0.5 rounded ${isOptimal ? 'bg-sky-500/30 text-sky-300 border border-sky-500/50' : 'bg-slate-800 text-slate-300'}`}>{server.ping} ms</span>
        </div>
      );
    });
  }, [euServers, minEuPing]);

  const iranServerElements = useMemo(() => {
    return iranServers.map(server => {
      const isOptimal = server.ping === minIranPing;
      return (
        <div key={server.id} className={`p-2 rounded-xl border flex flex-col items-center justify-center text-center relative transition-all duration-300 ${isOptimal ? 'bg-sky-500/20 border-sky-500/50 shadow-[0_0_15px_rgba(56,189,248,0.2)] text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}>
          <div className={`absolute -top-2.5 w-0.5 h-3 ${isOptimal ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8] animate-pulse' : 'bg-purple-400/50'}`} />
          <span className="text-[11px] font-bold truncate w-full">{server.name}</span>
          <span className={`font-mono font-bold text-[11px] mt-0.5 px-1.5 py-0.5 rounded ${isOptimal ? 'bg-sky-500/30 text-sky-300 border border-sky-500/50' : 'bg-slate-800 text-slate-300'}`}>{server.ping} ms</span>
          <div className={`absolute -bottom-3 w-0.5 h-3 ${isOptimal ? 'bg-sky-400 shadow-[0_0_6px_#38bdf8] animate-pulse' : 'bg-white/20'}`} />
        </div>
      );
    });
  }, [iranServers, minIranPing]);

  const performanceMetrics = useMemo(() => [
    { label: 'پینگ', value: '50 ms', color: 'emerald' },
    { label: 'پهنای باند', value: '1 Gb/s', color: 'purple' },
  ], []);

  return (
    <section ref={sectionRef} id="hero-section" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center text-center space-y-6">
            <h1 className="flex flex-col items-center gap-5 py-6">{heroLinesContent}</h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-20 w-full sm:w-auto">
              <button id="hero-view-plans-cta" onClick={handleViewPlans} className="whitespace-nowrap flex-shrink-0 w-full sm:w-auto group relative px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 text-center shine-effect">
                <Layers className="w-5 h-5 text-sky-200 group-hover:rotate-12 transition duration-300" />
                <span>مشاهده پلن‌ها و شرایط</span>
                <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180 group-hover:-translate-x-1 transition duration-200" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-80" />
            <div className="relative rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-7 shadow-2xl overflow-hidden space-y-5 text-center">
              <div className="flex items-center justify-center border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <div className="relative flex items-center justify-center w-3 h-3">
                    <div className="absolute w-6 h-6 bg-sky-400/40 rounded-full animate-ping" />
                    <div className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_#38bdf8] relative z-10" />
                  </div>
                  <span className="text-xs font-bold text-slate-200">روتینگ اختصاصی بین‌المللی</span>
                </div>
              </div>
              <div className="rounded-2xl bg-slate-950/80 border border-purple-500/30 p-3 shadow-xl space-y-3 text-right">
                <div className="space-y-1"><div className="grid grid-cols-3 gap-2">{euServerElements}</div></div>
                <div className="relative py-1">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-sky-500/50 via-purple-500/50 to-purple-400/50" />
                  <div className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-purple-500/20 via-sky-500/50 to-purple-500/25 -translate-y-1/2" />
                  <div className="relative z-10 p-2.5 rounded-xl bg-gradient-to-r from-purple-900/50 via-indigo-950/90 to-purple-900/50 border border-purple-500/50 flex items-center justify-center gap-4 shadow-md text-center">
                    <div className="flex items-center gap-2.5">
                      <div className="relative flex items-center justify-center w-2.5 h-2.5">
                        <div className="absolute w-4 h-4 bg-purple-400/50 rounded-full animate-ping" />
                        <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] relative z-10" />
                      </div>
                      <span className="text-xs font-bold text-white">هاب مرکزی ترکیه</span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 border border-sky-500/30 px-2 py-0.5 rounded min-w-[45px]">{hubPing}ms</span>
                  </div>
                </div>
                <div className="space-y-1"><div className="grid grid-cols-3 gap-2">{iranServerElements}</div></div>
              </div>
              <div className="space-y-3 text-xs text-center">
                {performanceMetrics.map((metric, idx) => {
                  const colors = COLOR_MAP[metric.color as keyof typeof COLOR_MAP];
                  const barWidth = idx === 0 ? 'w-[12%]' : 'w-full';
                  return (
                    <div key={idx} className={`p-3.5 rounded-2xl bg-slate-800/60 border border-white/5 flex items-center justify-between gap-4 transition-all duration-300 ${colors.hoverBorder} hover:bg-white/[0.07]`}>
                      <div className="flex items-center gap-2.5 flex-shrink-0">
                        <div className={`w-2 h-2 rounded-full ${colors.dot}`} />
                        <span className="text-slate-200 font-bold">{metric.label}</span>
                      </div>
                      <div className="hidden sm:flex flex-1 items-center mx-2">
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <div className={`${barWidth} h-full ${colors.bar} rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]`} />
                        </div>
                      </div>
                      <span className={`text-xs font-mono font-bold ${colors.text} ${colors.bg} px-3 py-1.5 rounded-xl border ${colors.border} flex-shrink-0 min-w-[75px] inline-flex justify-center`} dir="ltr">{metric.value}</span>
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