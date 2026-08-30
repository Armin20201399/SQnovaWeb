import { Gift, Send, Headphones, ShieldCheck } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

interface FreeTrialBannerSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const FreeTrialBannerSectionComponent = ({ onScrollToSection }: FreeTrialBannerSectionProps) => {
  return (
    <SectionShell id="free-trial-banner">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-purple-950/80 via-slate-900/95 to-pink-950/80 border border-pink-500/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden shine-effect">
          <div className="absolute inset-0 bg-cyber-grid opacity-20" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
            
            {/* بخش اصلی متن و دکمه‌ها */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-bold bg-pink-500/20 border border-pink-500/30 px-3 py-1 rounded-full">
                <Gift className="w-4 h-4" />
                <span>پیشنهاد ویژه و بدون ریسک</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white text-center">
                <BinaryText binaryClassName="text-pink-500/30" leftBinary="0101" rightBinary="1010">
                  ۲۴ ساعت <span className="text-emerald-300 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">تست رایگان</span> دریافت کنید! 🎁
                </BinaryText>
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl text-center">
                تمامی سرویس ها رو بصورت یکجا و بدون محدودیت قبل از خرید تست کنید!
              </p>
            </div>

            {/* دکمه‌ها (وسط چین) */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a href="https://t.me/ArminSQ" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300 flex items-center justify-center gap-2">
                <Send className="w-4 h-4 text-sky-200" />
                <span>دریافت فوری تست رایگان</span>
              </a>
              <button onClick={() => onScrollToSection && onScrollToSection('packages')} className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/10 transition flex items-center justify-center gap-2">
                <Headphones className="w-4 h-4 text-sky-200" />
                <span>ساخت پلن اختصاصی</span>
              </button>
            </div>

            {/* باکس بدون نیاز به کارت بانکی (وسط چین) */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 flex items-center gap-3 w-full sm:w-auto justify-center">
              <ShieldCheck className="w-8 h-8 text-emerald-400 flex-shrink-0" />
              <div className="text-right">
                <h4 className="text-white font-bold text-sm">بدون نیاز به کارت بانکی</h4>
                <p className="text-xs text-slate-400">فقط چند کلیک ساده</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export default FreeTrialBannerSectionComponent;