import React, { useState, useEffect, useCallback, memo } from 'react';
import FlameLogo from './FlameLogo';
import {
  Menu,
  X,
  Sparkles,
  Send,
  Globe2,
  Gamepad2,
  ShieldCheck,
  Download,
  Layers,
  Users2,
  Activity,
  Lock,
  HelpCircle,
  FileText
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface NavbarProps {
  onScrollToSection?: (sectionId: string) => void;
}

const NavbarComponent: React.FC<NavbarProps> = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#packages', label: 'پلن‌های اشتراک', icon: Layers },
    { href: '#status', label: 'وضعیت سرورها', icon: Activity },
    { href: '#apps', label: 'دانلود نرم‌افزارها', icon: Download },
    { href: '#privacy', label: 'حریم خصوصی', icon: Lock },
    { href: '#terms', label: 'قوانین', icon: FileText },
    { href: '#faq', label: 'سوالات متداول', icon: HelpCircle },
  ];

  const handleNavClick = useCallback((href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    if (onScrollToSection) {
      onScrollToSection(targetId);
    } else {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [onScrollToSection]);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_35px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 lg:gap-8">
            <a href="#" className="flex items-center focus:outline-none" id="brand-logo-link">
              <FlameLogo size="md" />
            </a>

            <nav className="hidden xl:flex items-center gap-5 text-xs font-medium text-slate-300">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="hover:text-pink-400 transition-colors py-1 flex items-center gap-1.5 focus:outline-none"
                >
                  <span>{link.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-3">
            <button
              id="free-trial-nav-btn"
              onClick={() => handleNavClick('#free-test')}
              className="whitespace-nowrap flex-shrink-0 relative group text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-400 border border-amber-500/30 hover:border-amber-300 px-4 py-2 rounded-full transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.15)] hover:scale-105 shine-effect"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:text-slate-950 animate-spin" style={{ animationDuration: '6s' }} />
              <BinaryText binaryClassName="text-amber-500/40" leftBinary="01" rightBinary="10" className="group-hover:text-slate-950 transition-colors">
                رایگان امتحانش کن
              </BinaryText>
            </button>

            <a
              id="buy-subscription-nav-btn"
              href="https://t.me/ArminSQ"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap flex-shrink-0 relative group text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-5 py-2 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.6)] flex items-center justify-center gap-2 hover:scale-105 shine-effect"
            >
              <Send className="w-3.5 h-3.5 text-sky-200" />
              <BinaryText binaryClassName="text-sky-300/40" leftBinary="01" rightBinary="10">
                ارتباط با پشتیبانی و خرید اشتراک
              </BinaryText>
            </a>
          </div>

          <div className="flex xl:hidden items-center gap-2">
            <a
              href="https://t.me/ArminSQ"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1.5 rounded-full flex items-center justify-center gap-1 shadow-md sm:hidden"
            >
              <Send className="w-3 h-3 text-sky-200" />
              <span>پشتیبانی</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="منوی سایت"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#020617]/95 border-b border-white/10 backdrop-blur-2xl px-5 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-start gap-2.5 text-sm font-medium text-slate-200 hover:text-pink-400 hover:bg-white/5 px-3.5 py-2.5 rounded-xl transition text-right w-full"
              >
                <link.icon className="w-4 h-4 text-pink-400" />
                <span>{link.label}</span>
              </button>
            ))}

            <div className="h-px bg-white/10 my-2"></div>

            <div className="flex flex-col gap-2.5 text-center">
              <button
                onClick={() => handleNavClick('#free-test')}
                className="w-full text-center text-sm font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-400 border border-amber-500/30 hover:border-amber-300 py-2.5 rounded-xl flex items-center justify-center gap-2 group transition-all duration-200 shine-effect"
              >
                <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
                <span className="group-hover:text-slate-950 transition-colors">رایگان امتحانش کن</span>
              </button>

              <a
                href="https://t.me/ArminSQ"
                target="_blank"
                rel="noreferrer"
                className="w-full text-center text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 py-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center justify-center gap-2 shine-effect"
              >
                <Send className="w-4 h-4 text-sky-200" />
                <span>ارتباط با پشتیبانی و خرید اشتراک</span>
              </a>

              <div className="flex items-center justify-center pt-2 text-xs text-slate-400 text-center">
                <span>پشتیبانی اختصاصی 24/7 توسط ArminSQ و SQteam</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Navbar = memo(NavbarComponent);