import { useCallback, memo } from 'react';
import FlameLogo from './FlameLogo';
import { BinaryText } from './BinaryText';
import { Send, Sparkles, Heart, ChevronLeft } from 'lucide-react';

interface FooterProps {
  onScrollToSection?: (sectionId: string) => void;
}

const FooterComponent = ({ onScrollToSection }: FooterProps) => {
  const handleNav = useCallback((sectionId: string) => {
    if (onScrollToSection) {
      onScrollToSection(sectionId);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onScrollToSection]);

  const quickLinks = [
    { label: 'خانه', target: 'hero-section' },
    { label: 'پلن‌های اشتراک', target: 'packages' },
    { label: 'دانلود نرم‌افزار', target: 'apps' },
    { label: 'وضعیت سرورها', target: 'status' },
    { label: 'حریم خصوصی', target: 'privacy' },
    { label: 'قوانین و مقررات', target: 'terms' },
    { label: 'سوالات متداول', target: 'faq' },
  ];

  return (
    <footer id="site-footer" className="border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs relative overflow-hidden bg-cyber-grid text-center sm:text-right">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-purple-900/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5 space-y-4 flex flex-col items-center md:items-start text-center md:text-right">
            <a href="#" className="inline-block focus:outline-none"><FlameLogo size="lg" /></a>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">SQ nova با هدف رفع اختلالات اینترنت، دور زدن محدودیت‌ها و تجربه وب‌گردی و گیمینگ روان با پکت‌لاس نزدیک به صفر و روتینگ سخت‌افزاری پایدار ساخته شده است.</p>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed max-w-sm">SQ nova محصول اختصاصی تیم ArminSQ هست 🚀 — از صفر تا صد طراحی و توسعه‌ش رو ما زدیم</p>
          </div>
          <div className="md:col-span-4 space-y-4 flex flex-col items-center md:items-start text-center md:text-right">
            <h4 className="text-sm font-bold text-white tracking-wide flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-pink-500" /><span>دسترسی سریع</span></h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 w-full max-w-xs text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button onClick={() => handleNav(link.target)} className="text-slate-400 hover:text-pink-300 transition-colors duration-200 flex items-center gap-1.5 focus:outline-none group text-right">
                    <ChevronLeft className="w-3 h-3 text-slate-600 group-hover:text-pink-400 transition-colors" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-3 space-y-4 flex flex-col items-center md:items-start text-center md:text-right">
            <h4 className="text-sm font-bold text-white tracking-wide flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-400" /><span>ارتباط با ما</span></h4>
            <div className="space-y-3 w-full max-w-xs flex flex-col items-center md:items-start">
              <a href="https://t.me/ArminSQ" target="_blank" rel="noreferrer" className="w-full p-3 rounded-2xl bg-white/5 hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 transition-all flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-white group shine-effect">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 group-hover:scale-110 transition-transform"><Send className="w-4 h-4" /></div>
                <div className="text-right"><div className="font-bold text-xs">پشتیبانی تلگرام</div></div>
              </a>
              <button onClick={() => handleNav('free-test')} className="w-full p-2.5 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition flex items-center justify-center gap-2">
                <Sparkles className="w-3.5 h-3.5" /><span>دریافت تست ۲۴ ساعته</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center">
          <div className="font-mono text-center sm:text-right"><BinaryText binaryClassName="text-slate-700" leftBinary="01" rightBinary="10">© 2026 SQ nova • All Rights Reserved.</BinaryText></div>
          <div className="flex items-center justify-center gap-1.5 text-center"><span>Designed with</span><Heart className="w-3 h-3 text-pink-500 fill-pink-500" /><span>by ArminSQ</span></div>
        </div>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);