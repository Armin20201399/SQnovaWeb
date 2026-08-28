import React from 'react';
import { 
  Globe2, 
  Server, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Cpu, 
  Radio, 
  Flame, 
  Sparkles,
  Layers,
  Activity,
  ArrowLeft
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface InfrastructureRoutingSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const InfrastructureRoutingSection: React.FC<InfrastructureRoutingSectionProps> = ({
  onScrollToSection
}) => {
  const sampleLocations = [
    {
      flag: '🇩🇪',
      country: 'آلمان (Frankfurt)',
      datacenter: 'Hetzner Online Dedicated Center',
      ping: '58 ms',
      tag: 'Core European Node'
    },
    {
      flag: '🇳🇱',
      country: 'هلند (Amsterdam)',
      datacenter: 'APEX Datacenter 10G Port',
      ping: '59 ms',
      tag: 'Core European Node'
    },
    {
      flag: '🇫🇮',
      country: 'فنلاند (Helsinki)',
      datacenter: 'Hetzner Low-Traffic Hub',
      ping: '63 ms',
      tag: 'Nordic Dedicated'
    },
    {
      flag: '🇹🇷',
      country: 'ترکیه (Istanbul)',
      datacenter: 'Istanbul BGP Direct Hub',
      ping: '56 ms',
      tag: 'Low-Latency Gateway'
    },
    {
      flag: '🇮🇷',
      country: 'ایران (تهران و سراسر کشور)',
      datacenter: 'نودهای تجمیعی میکروتیک شاتل، آسیاتک، های‌وب',
      ping: '8 ms',
      tag: 'Hardware MikroTik Edge'
    }
  ];

  return (
    <section 
      id="infrastructure" 
      className="py-24 bg-[#020617] relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-orange-500/30" leftBinary="0101" rightBinary="1010">
              مسیریابی هوشمند شبکه
            </BinaryText>
          </h2>
        </div>

        {/* 3 Core Highlights (Clean Centered Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-center">
          
          <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-2xl space-y-4 flex flex-col items-center justify-center text-center hover:border-orange-500/30 transition shine-effect">
            <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white text-center">
              <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                سوییچ و بهینه‌سازی خودکار مسیر
              </BinaryText>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed text-center">
              در صورت بروز هرگونه اختلال یا افت سرعت روی یک مسیر، سیستم به صورت آنی و خودکار ترافیک شما را به پایدارترین نود اروپایی دیگر هدایت می‌کند.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-2xl space-y-4 flex flex-col items-center justify-center text-center hover:border-purple-500/30 transition shine-effect">
            <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white text-center">
              <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                دیتاسنترهای معتبر اروپایی (APEX و Hetzner)
              </BinaryText>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed text-center">
              بهره‌گیری از سرورهای اختصاصی با پورت‌های پرسرعت 10G در آلمان، هلند، فنلاند و ترکیه با آی‌پی‌های تمیز و معتبر.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-2xl space-y-4 flex flex-col items-center justify-center text-center hover:border-pink-500/30 transition shine-effect">
            <div className="p-3.5 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white text-center">
              <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                نودهای سخت‌افزاری میکروتیک در ایران
              </BinaryText>
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed text-center">
              استقرار در دیتاسنترهای شاتل، آسیاتک و های‌وب برای تضمین سازگاری کامل با تمامی اینترنت‌های ثابت و همراه کشور.
            </p>
          </div>

        </div>

        {/* Server Locations Examples Showcase (Simple, Clean, Attractive) */}
        <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl space-y-6 text-center shine-effect">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4 text-center sm:text-right">
            <div>
              <h3 className="text-lg font-bold text-white">نمونه‌ای از لوکیشن‌ها و سرورهای خروجی فعال</h3>
              <p className="text-xs text-slate-400 mt-0.5">تمام این موقعیت‌ها درون لینک ساب هوشمند تجمیعی شما فعال هستند</p>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">
              توزیع بار هوشمند و خودکار
            </span>
          </div>

          {/* Location Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sampleLocations.map((loc, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition flex items-center justify-between gap-3 text-center shine-effect"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{loc.flag}</span>
                  <div className="text-right">
                    <h4 className="font-bold text-white text-xs sm:text-sm">{loc.country}</h4>
                    <p className="text-[11px] text-slate-400">{loc.datacenter}</p>
                  </div>
                </div>

                <div className="text-left font-mono">
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    ~{loc.ping}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA to Packages */}
          {onScrollToSection && (
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <button
                onClick={() => onScrollToSection('packages')}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>مشاهده پلن‌های ساب هوشمند</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};


export default InfrastructureRoutingSection;