import { memo } from 'react';
import { Send, Server, Headphones, Gauge } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

const GameNetPartnershipSectionComponent = () => {
  const features = [
    {
      icon: Server,
      title: 'روتینگ اختصاصی سخت‌افزار',
      desc: 'کانفیگ اختصاصی میکروتیک با منابع دلخواه و سرورهای اختصاصی برای گیم‌نت شما.',
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/30'
    },
    {
      icon: Gauge,
      title: 'پکت‌لاس نزدیک به صفر',
      desc: 'تضمین پایداری و پینگ فوق‌العاده پایین در مسابقات آنلاین و ساعات اوج مصرف.',
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30'
    },
    {
      icon: Headphones,
      title: 'پشتیبانی ۲۴ ساعته',
      desc: 'پشتیبانی فنی اختصاصی و راهنمایی کامل برای راه‌اندازی و رفع مشکلات در هر ساعت.',
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/30'
    },
  ];

  return (
    <SectionShell id="gamenet">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center leading-relaxed">
            <BinaryText binaryClassName="text-amber-500/30" leftBinary="0101" rightBinary="1010">
              روتینگ اختصاصی <span className="text-amber-400">گیم‌نت</span> و <span className="text-pink-500">گیم‌کلاب</span> ها 🕹️
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
            زیرساخت اختصاصی برای گیم‌نت‌ها و استودیوهای گیمینگ با پهنای باند اختصاصی و تضمین کیفیت.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {features.map((feature, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-3xl bg-slate-900/80 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_35px_rgba(0,0,0,0.4)] flex flex-col items-center text-center gap-4 group shine-effect`}
            >
              <div className={`p-3.5 rounded-2xl border ${feature.color}`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a 
            id="gamenet-consultation-btn"
            href="https://t.me/ArminSQ" 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300"
          >
            <Send className="w-5 h-5 text-sky-200" />
            <span>دریافت مشاوره و راه‌اندازی</span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

const GameNetPartnershipSection = memo(GameNetPartnershipSectionComponent);
export default GameNetPartnershipSection;