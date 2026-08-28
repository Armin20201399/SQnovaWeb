import React from 'react';
import { GAMENET_BENEFITS } from '../data/vpnData';
import { 
  Users2, 
  Gamepad2, 
  Headphones, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Flame, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { BinaryText } from './BinaryText';

const GameNetPartnershipSection: React.FC = () => {
  return (
    <section
      id="gamenet"
      className="cv-600 py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-pink-900/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center leading-relaxed">
            <BinaryText binaryClassName="text-amber-500/30" leftBinary="0101" rightBinary="1010">
              اجرای روتینگ{' '}
              <span className="inline-block text-amber-400 drop-shadow-[0_0_12px_rgba(251,191,36,0.4)]">
                اختصاصی
              </span>{' '}
              گیم‌نت و گیم‌کلاب‌ها با پشتیبانی{' '}
              <span className="inline-block text-pink-500 drop-shadow-[0_0_12px_rgba(236,72,153,0.4)]">
                ویژه
              </span>{' '}
              🕹️
            </BinaryText>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            زیرساخت اختصاصی برای گیم‌نت‌ها و استودیوهای گیمینگ با پهنای باند اختصاصی، پشتیبانی ۲۴ ساعته و تضمین پکت‌لاس نزدیک به صفر در مسابقات آنلاین.
          </p>
        </div>

        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-pink-950/60 border border-purple-500/40 backdrop-blur-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-right">
          
          <div className="space-y-2 max-w-2xl text-center lg:text-right">
            <div className="inline-flex items-center gap-2 text-pink-300 text-xs font-bold">
              <Sparkles className="w-4 h-4 text-pink-400" />
              <span>کانفیگ اختصاصی سخت‌افزار میکروتیک</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white text-center lg:text-right">
              <BinaryText binaryClassName="text-pink-400/20" leftBinary="01" rightBinary="10">
                راه‌اندازی روتینگ ویژه گیم‌نت و گیم‌کلاب شما با منابع دلخواه و سرورهای اختصاصی
              </BinaryText>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0">
            <a
              id="gamenet-consultation-btn"
              href="https://t.me/ArminSQ"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap flex-shrink-0 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs sm:text-sm shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-sky-200" />
              <span>ارتباط با پشتیبانی و دریافت مشاوره</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GameNetPartnershipSection;