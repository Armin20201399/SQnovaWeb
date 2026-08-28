import React, { useState } from 'react';
import { 
  Server, 
  Activity, 
  ShieldCheck, 
  Radio, 
  CheckCircle2, 
  Zap, 
  Globe2,
  RefreshCw,
  Info
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface ServerStatusSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

interface ServerNodeStatus {
  id: string;
  name: string;
  country: string;
  flag: string;
  datacenter: string;
  type: 'europe' | 'iran' | 'hub';
  status: 'online' | 'warning' | 'offline';
  uptime: string;
  packetLoss: string;
  protocolSupport: string[];
  load: 'سبک' | 'عادی' | 'پرمصرف';
}

const SERVER_NODES: ServerNodeStatus[] = [
  {
    id: 'se-apex',
    name: 'سوئد (استکهلم)',
    country: 'Sweden',
    flag: '🇸🇪',
    datacenter: 'APEX 10G Tier-3+',
    type: 'europe',
    status: 'online',
    uptime: '99.99%',
    packetLoss: '0.0%',
    protocolSupport: ['Hysteria 2', 'TCP Reality', 'xHTTP'],
    load: 'سبک'
  },
  {
    id: 'nl-ams',
    name: 'هلند (آمستردام)',
    country: 'Netherlands',
    flag: '🇳🇱',
    datacenter: 'Equinix AM4 Direct Fiber',
    type: 'europe',
    status: 'online',
    uptime: '100.0%',
    packetLoss: '0.0%',
    protocolSupport: ['Hysteria 2', 'TCP Reality', 'mKCP'],
    load: 'عادی'
  },
  {
    id: 'de-hetzner',
    name: 'آلمان (فالکنشتاین)',
    country: 'Germany',
    flag: '🇩🇪',
    datacenter: 'Hetzner Dedicated Enterprise',
    type: 'europe',
    status: 'online',
    uptime: '99.98%',
    packetLoss: '0.0%',
    protocolSupport: ['Hysteria 2', 'TCP Reality', 'xHTTP', 'mKCP'],
    load: 'عادی'
  },
  {
    id: 'tr-ist',
    name: 'ترکیه (استانبول)',
    country: 'Turkey',
    flag: '🇹🇷',
    datacenter: 'Turkcell Core Routing Hub',
    type: 'hub',
    status: 'online',
    uptime: '99.99%',
    packetLoss: '0.0%',
    protocolSupport: ['Hysteria 2', 'TCP Reality'],
    load: 'سبک'
  },
  {
    id: 'ir-shatel',
    name: 'شاتل (تهران)',
    country: 'Iran',
    flag: '🇮🇷',
    datacenter: 'Shatel Datacenter / MikroTik Core',
    type: 'iran',
    status: 'online',
    uptime: '100.0%',
    packetLoss: '0.0%',
    protocolSupport: ['MikroTik Hardware Routing', 'Intranet Bridge'],
    load: 'عادی'
  },
  {
    id: 'ir-asiatech',
    name: 'آسیاتک (برج میلاد)',
    country: 'Iran',
    flag: '🇮🇷',
    datacenter: 'Asiatech Milad Tower Edge',
    type: 'iran',
    status: 'online',
    uptime: '99.99%',
    packetLoss: '0.0%',
    protocolSupport: ['MikroTik Hardware Routing', 'Intranet Bridge'],
    load: 'عادی'
  }
];

const ServerStatusSection: React.FC<ServerStatusSectionProps> = ({
  onScrollToSection
}) => {
  const [lastChecked] = useState('هم‌اکنون (لحظه‌ای)');

  return (
    <section
      id="status"
      className="cv-900 py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-900/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-emerald-500/30" leftBinary="0101" rightBinary="1010">
              وضعیت لحظه‌ای سرورها 📡
            </BinaryText>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
            پایش 24 ساعته پایداری نودهای بین‌المللی و مراکز داده داخلی با سوییچ هوشمند و پکت‌لاس صفر
          </p>
        </div>

        <div className="mb-10 max-w-xl mx-auto p-4 rounded-2xl bg-slate-900/70 border border-white/10 backdrop-blur-xl flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
            <span className="font-medium text-emerald-300">سبز = آنلاین و پایدار</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]"></span>
            <span className="font-medium text-amber-300">زرد = کندی جزئی</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(251,113,133,0.8)]"></span>
            <span className="font-medium text-rose-300">قرمز = قطعی</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVER_NODES.map((node) => {
            const isOnline = node.status === 'online';
            const isWarning = node.status === 'warning';

            return (
              <div
                key={node.id}
                className="relative rounded-3xl p-6 bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(16,185,129,0.15)] flex flex-col justify-between text-right group shine-effect"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl select-none" role="img" aria-label={node.country}>
                        {node.flag}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                          <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                            {node.name}
                          </BinaryText>
                        </h3>

                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-emerald-500/10 border-emerald-500/30 text-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>آنلاین و پایدار</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 my-4 text-center">
                    <div>
                      <div className="text-[10px] text-slate-400 mb-1">آپ‌تایم</div>
                      <div className="text-xs font-mono font-bold text-sky-300">{node.uptime}</div>
                    </div>
                    <div className="border-x border-white/5">
                      <div className="text-[10px] text-slate-400 mb-1">پکت‌لاس</div>
                      <div className="text-xs font-mono font-bold text-emerald-300">{node.packetLoss}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 mb-1">بار مصرفی</div>
                      <div className="text-xs font-bold text-slate-300">{node.load}</div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="text-[11px] text-slate-400 font-medium">پروتکل‌های فعال:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {node.protocolSupport.map((proto, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                        >
                          {proto}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>مسیریابی فعال و بهینه</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-500">Auto-Brisk UDP</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/40 border border-white/10 backdrop-blur-md max-w-3xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-400 text-center">
          <Info className="w-4 h-4 text-sky-400 flex-shrink-0" />
          <span>
            کلیه نودها مجهز به مانیتورینگ خودکار پکت‌لاس هستند و در صورت افت کیفیت هر مسیر، ترافیک مشترکین در کمتر از 0.5 ثانیه به نود پشتیبان هدایت می‌شود.
          </span>
        </div>

      </div>
    </section>
  );
};

export default ServerStatusSection;