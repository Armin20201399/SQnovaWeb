import { memo } from 'react';
import { CheckCircle2, XCircle, Zap, ShieldCheck, Headphones, Server } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

const ComparisonSectionComponent = () => {
  const features = [
    {
      title: 'زیرساخت و سرورها',
      sq: 'سرورهای اختصاصی با پورت 10 گیگابیت',
      others: 'سرورهای اشتراکی و شلوغ با پهنای باند و پورت‌های محدود',
      icon: Server
    },
    {
      title: 'پینگ و پکت‌لاس',
      sq: 'پینگ پایین بدون پکت‌لاس',
      others: 'نوسان شدید پینگ و پکت‌لاس بالا',
      icon: Zap
    },
    {
      title: 'پشتیبانی',
      sq: 'پشتیبانی ۲۴/۷ و پاسخ در کوتاه‌ترین زمان ممکن',
      others: 'ربات‌های خودکار با پاسخ‌دهی نامنظم و کند',
      icon: Headphones
    },
    {
      title: 'امنیت و حریم خصوصی',
      sq: 'عدم ذخیره لاگ و رمزنگاری قوی',
      others: 'ذخیره لاگ و ریسک امنیتی بالا',
      icon: ShieldCheck
    }
  ];

  return (
    <SectionShell id="comparison">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            {/* اینجا دقیقاً رنگ‌بندی لوگو اعمال شد */}
            <BinaryText binaryClassName="text-purple-500/30" leftBinary="1010" rightBinary="0101">
              قطعا{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-400 drop-shadow-[0_0_12px_rgba(251,146,60,0.8)]">
                SQ
              </span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.8)]">
                nova
              </span>
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">اما چرا ؟</p>
        </div>

        <div className="rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden shadow-2xl">
          {/* هدر جدول - SQ Nova در سمت راست */}
          <div className="grid grid-cols-[1fr_auto_1fr] border-b border-white/10">
            <div className="p-6 text-center bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white">
              <h3 className="text-xl font-black">⚡ SQ Nova</h3>
            </div>
            <div className="p-6 text-center w-24 sm:w-40 text-slate-500">
              <h3 className="text-sm font-bold">معیارها</h3>
            </div>
            <div className="p-6 text-center bg-slate-900/50 text-slate-400">
              <h3 className="text-xl font-bold">سرویس‌های معمولی</h3>
            </div>
          </div>

          {/* ردیف‌ها */}
          {features.map((feat, idx) => (
            <div key={idx} className={`grid grid-cols-[1fr_auto_1fr] border-b border-white/5 ${idx % 2 === 0 ? 'bg-white/[0.02]' : ''}`}>
              {/* ستون SQ Nova (سمت راست) */}
              <div className="p-6 flex flex-col items-center justify-center gap-2 text-center relative">
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-70" />
                <p className="text-xs text-slate-200 leading-relaxed">{feat.sq}</p>
                <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> برتری
                </span>
              </div>

              {/* ستون معیار وسط */}
              <div className="p-6 flex flex-col items-center justify-center gap-2 border-x border-white/5 bg-slate-900/70 w-24 sm:w-40">
                <feat.icon className="w-5 h-5 text-slate-400" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-300 text-center">{feat.title}</h4>
              </div>

              {/* ستون رقبا (سمت چپ) */}
              <div className="p-6 flex flex-col items-center justify-center gap-2 text-center bg-slate-900/30">
                <p className="text-xs text-slate-500 leading-relaxed">{feat.others}</p>
                <span className="inline-flex items-center gap-1.5 text-rose-400 text-xs font-bold">
                  <XCircle className="w-4 h-4" /> ضعف
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};

export const ComparisonSection = memo(ComparisonSectionComponent);
export default ComparisonSection;