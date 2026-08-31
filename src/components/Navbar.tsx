import { useState, useCallback } from 'react';
import { Menu, X, Send, Sparkles } from 'lucide-react';
import FlameLogo from './FlameLogo';

interface NavbarProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function Navbar({ onScrollToSection }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = useCallback(
    (target: string) => {
      onScrollToSection(target);
      setIsMenuOpen(false);
    },
    [onScrollToSection]
  );

  const navLinks = [
    { label: 'خانه', target: 'hero-section' },
    { label: 'مقایسه و مزیت‌ها', target: 'comparison' },
    { label: 'دانلود نرم‌افزار', target: 'apps' },
    { label: 'پلن‌ها و تعرفه‌ها', target: 'packages' },
    { label: 'گیم‌نت و همکاری', target: 'gamenet' },
    { label: 'سوالات متداول', target: 'faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button onClick={() => handleNavigation('hero-section')} className="focus:outline-none shrink-0" aria-label="بازگشت به خانه">
            <FlameLogo size="lg" />
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.target}
                type="button"
                onClick={() => handleNavigation(link.target)}
                className="relative text-sm font-bold text-slate-300 hover:text-white transition-colors group"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            {/* دکمه تست ۲۴ ساعته - با هاور رنگ عوض می‌شود */}
            <button
              type="button"
              onClick={() => handleNavigation('free-trial-banner')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold hover:bg-amber-400 hover:border-amber-300 hover:text-slate-950 transition-colors duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>تست ۲۴ ساعته</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigation('packages')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105 transition-all duration-300 shine-effect"
            >
              <Send className="w-4 h-4" />
              <span>خرید اشتراک</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label="باز و بسته کردن منو"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-white/10 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3 bg-slate-950/95">
          {navLinks.map((link) => (
            <button
              key={link.target}
              type="button"
              onClick={() => handleNavigation(link.target)}
              className="w-full text-right py-2 px-4 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </button>
          ))}
          
          <div className="pt-2 border-t border-white/10 flex flex-col gap-3">
            {/* دکمه تست ۲۴ ساعته در منوی موبایل */}
            <button
              type="button"
              onClick={() => handleNavigation('free-trial-banner')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm font-bold hover:bg-amber-400 hover:border-amber-300 hover:text-slate-950 transition-colors duration-300"
            >
              <Sparkles className="w-4 h-4" />
              <span>دریافت تست ۲۴ ساعته</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavigation('packages')}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold transition-all"
            >
              <Send className="w-4 h-4" />
              <span>خرید اشتراک</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}