import React from 'react';
import { 
  Sparkles, 
  Send, 
  Layers, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Download, 
  HelpCircle,
  ExternalLink,
  Headphones,
  CheckCircle2,
  Heart
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface FreeTrialDedicatedSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const FreeTrialDedicatedSection: React.FC<FreeTrialDedicatedSectionProps> = ({
  onScrollToSection
}) => {
  return (
    <section 
      id="free-test" 
      className="py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-emerald-500/30" leftBinary="0101" rightBinary="1010">
              دریافت تست{' '}
              <span className="inline-block text-emerald-400 drop-shadow-[0_0_12px_rgba(52,211,153,0.4)]">
                رایگان
              </span>{' '}
              🎁
            </BinaryText>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            می‌تونی یه اشتراک تست شامل تمام پروتکل‌ها و خدمات قبل از خریدت داشته باشی!
          </p>
        </div>

        {/* Support Contact Hub Container (Centered) */}
        <div className="max-w-3xl mx-auto rounded-3xl bg-slate-900/60 border border-amber-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl space-y-8 text-center flex flex-col items-center">
          
          {/* Main Direct Support Action Box (Matching Header CTA Style) */}
          <div className="w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-purple-950/50 via-slate-900/90 to-pink-950/40 border border-pink-500/30 space-y-5 shadow-xl backdrop-blur-xl flex flex-col items-center">
            
            <div className="p-3.5 rounded-2xl bg-purple-500/20 text-purple-300 border border-purple-500/30">
              <Headphones className="w-8 h-8 text-pink-400" />
            </div>

            <div className="space-y-2 text-center">
              {/* Feedback and suggestions welcome note */}
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs text-amber-300 backdrop-blur-sm mt-2 max-w-xl">
                <Heart className="w-4 h-4 text-pink-400 fill-pink-400 flex-shrink-0" />
                <span className="leading-relaxed">دمتون گرم که همراهمونید! هر ایده، پیشنهاد یا نیازی دارین حتماً باهامون در میون بذارید؛ با کمال میل می‌شنویم و بررسی می‌کنیم! 🌟</span>
              </div>
            </div>

            {/* Direct Telegram CTA Button */}
            <a
              id="request-free-test-telegram-btn"
              href="https://t.me/ArminSQ"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap flex-shrink-0 w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-bold text-sm sm:text-base shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300 flex items-center justify-center gap-2.5 text-center shine-effect"
            >
              <Send className="w-5 h-5 text-sky-200" />
              <span>ارتباط با پشتیبانی و خرید اشتراک</span>
            </a>

          </div>

          {/* Quick Setup 3-Step Guide (Centered) - با h3 به جای h4 */ }
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 w-full text-center">
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 flex flex-col items-center justify-center text-center">
              <span className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-mono text-xs font-bold border border-amber-500/30">1</span>
              <h3 className="text-xs font-bold text-white">
                <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                  ارسال پیام به پشتیبانی
                </BinaryText>
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed text-center">
                در اولین فرصت بعد از دریافت پیام اشتراک تست ویژه به همراه ساب هوشمند تحویلت می‌شه
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 flex flex-col items-center justify-center text-center">
              <span className="w-7 h-7 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center font-mono text-xs font-bold border border-orange-500/30">2</span>
              <h3 className="text-xs font-bold text-white">
                <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                  نصب برنامه پیشنهادی
                </BinaryText>
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed text-center">
                برنامه v2box (برای موبایل) یا v2rayN (برای کامپیوتر) رو از طریق لینک‌های موجود توی سایت دانلود و لینک ساب هوشمندت رو داخلش بزن
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 flex flex-col items-center justify-center text-center">
              <span className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center font-mono text-xs font-bold border border-pink-500/30">3</span>
              <h3 className="text-xs font-bold text-white">
                <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">
                  تست بازی و وبگردی
                </BinaryText>
              </h3>
              <p className="text-[11px] text-slate-400 leading-relaxed text-center">
                دکمه اتصال رو بزن و از کیفیت و سرعت بی‌حدوحصر لذت ببر!
              </p>
            </div>

          </div>

          {/* Navigation to Clients Section */}
          {onScrollToSection && (
            <div className="text-center pt-2">
              <button
                onClick={() => onScrollToSection('apps')}
                className="text-xs text-pink-400 hover:text-pink-300 font-semibold inline-flex items-center justify-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>مشاهده و دانلود نرم‌افزارهای پیشنهادی (v2box و v2rayN)</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default FreeTrialDedicatedSection;