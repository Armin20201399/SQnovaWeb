import { useState, memo } from 'react';
import { HelpCircle, ChevronDown, Send, ShieldCheck, Sparkles, Smartphone, RefreshCw, ExternalLink, Lock } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

interface FaqSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon: React.ElementType;
}

const FaqItemComponent = ({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
  index: number;
}) => {
  const { ref: itemRef, isVisible: itemVisible } = useRevealOnScroll<HTMLDivElement>();
  const Icon = faq.icon;

  return (
    <div
      ref={itemRef}
      style={{ transitionDelay: itemVisible ? `${index * 80}ms` : '0ms' }}
      className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
        isOpen
          ? 'bg-slate-900/80 border-pink-500/40 shadow-[0_10px_35px_rgba(236,72,153,0.12)]'
          : 'bg-slate-900/80 border-white/10 hover:border-white/20'
      } ${itemVisible ? 'reveal-active' : 'reveal-init'}`}
    >
      <button
        onClick={() => onToggle(faq.id)}
        className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-right focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3.5">
          <div className={`p-2 rounded-2xl border transition-colors ${isOpen ? 'bg-pink-500/20 text-pink-300 border-pink-500/30' : 'bg-slate-900/80 text-slate-400 border-white/5'}`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="text-base sm:text-lg font-bold text-white leading-snug">{faq.question}</span>
        </div>
        <div className={`p-1.5 rounded-full bg-slate-900/80 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-pink-400 bg-pink-500/10' : ''}`}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-250 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen ? true : undefined}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSectionComponent = ({ onScrollToSection }: FaqSectionProps) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { ref: titleRef, isVisible: titleVisible } = useRevealOnScroll<HTMLHeadingElement>();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleGoToPrivacy = () => {
    if (onScrollToSection) {
      onScrollToSection('privacy');
    } else {
      const el = document.getElementById('privacy');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const FAQS: FaqItem[] = [
    {
      id: 'faq-1',
      icon: Sparkles,
      question: 'چرا SQ nova بهتر از بقیه‌ست؟',
      answer: (
        <div className="space-y-2">
          <p>ما از پروتکل‌های پیشرفته نسل جدید مانند Hysteria 2 Turbo بر پایه الگوریتم Brisk و TCP Raw Reality به همراه روتینگ سخت‌افزاری میکروتیک در دیتاسنترهای داخلی و سرورهای اختصاصی 10G هتزنر و APEX اروپا استفاده می‌کنیم.</p>
          <p className="text-emerald-300 text-xs font-semibold">نتیجه: پکت‌لاس نزدیک به صفر، پینگ پایدار برای بازی‌های آنلاین و استریم روان ویدیوهای 4K بدون قطعی حتی در ساعات اوج مصرف.</p>
        </div>
      )
    },
    {
      id: 'faq-2',
      icon: Smartphone,
      question: 'رو گوشیم هم کار می‌کنه یا فقط کامپیوتر؟',
      answer: (
        <div className="space-y-2">
          <p>ساب هوشمند SQ nova کاملاً مالتی‌پلتفرم است و روی تمامی سیستم‌عامل‌ها شامل آیفون (iOS)، اندروید، ویندوز، مک‌بوک و لینوکس با بهترین اپلیکیشن‌های پیشنهادی مثل v2box، v2rayNG و v2rayN با یک کلیک اجرا می‌شود.</p>
        </div>
      )
    },
    {
      id: 'faq-3',
      icon: RefreshCw,
      question: 'اگه قطع بشه چیکار کنم؟',
      answer: (
        <div className="space-y-2">
          <p>به لطف سیستم سوییچ خودکار مسیر و وجود چندین نود فعال در آلمان، هلند، سوئد و ترکیه، در صورت بروز اختلال در یک مسیر کافیست در برنامه دکمه Update Subscription را بزنید تا بلافاصله به نود پایدار دیگر متصل شوید. همچنین پشتیبانی ۲۴ ساعته تلگرام همواره در دسترس است.</p>
        </div>
      )
    },
    {
      id: 'faq-4',
      icon: Lock,
      question: 'آیا لاگ نگه می‌دارید؟',
      answer: (
        <div className="space-y-3">
          <p>خیر! امنیت و حریم شخصی کاربران خط قرمز ماست. ما هیچ‌گونه لاگی از ترافیک، سایت‌های بازدید شده یا فعالیت آنلاین شما ذخیره نمی‌کنیم.</p>
          <div>
            <button onClick={handleGoToPrivacy} className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition shadow-[0_0_12px_rgba(52,211,153,0.15)]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>مشاهده تعهدنامه کامل حریم خصوصی 🔒</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: 'faq-5',
      icon: HelpCircle,
      question: 'چطوری تمدید کنم؟',
      answer: (
        <div className="space-y-2">
          <p>پیش از اتمام حجم یا زمان اشتراک، پیام یادآوری دریافت خواهید کرد و می‌توانید به راحتی با ارسال پیام به پشتیبانی تلگرام، اشتراک خود را بر روی همان لینک قبلی بدون نیاز به تنظیمات مجدد تمدید فرمایید.</p>
        </div>
      )
    }
  ];

  return (
    <SectionShell id="faq" className="pt-20 pb-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2
            ref={titleRef}
            className={`text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center ${
              titleVisible ? 'reveal-active' : 'reveal-init'
            }`}
          >
            <BinaryText binaryClassName="text-pink-500/30" leftBinary="1010" rightBinary="0101">سوالاتی که همه می‌پرسن ❓</BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">پاسخ سریع به متداول‌ترین سوالات درباره عملکرد، سازگاری و امنیت سرویس‌های SQ nova</p>
        </div>

        <div className="space-y-4 mb-10 text-right">
          {FAQS.map((faq, idx) => (
            <FaqItemComponent
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={toggleItem}
              index={idx}
            />
          ))}
        </div>

        <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right shine-effect">
          <div className="space-y-1 text-center sm:text-right">
            <h3 className="font-bold text-white text-sm sm:text-base">
              <BinaryText binaryClassName="text-white/20" leftBinary="01" rightBinary="10">درباره خدمات و شرایط سوالی دارید ؟</BinaryText>
            </h3>
            <p className="text-xs text-slate-400">پشتیبانی تلگرام به صورت ۲۴ ساعته آماده پاسخگویی به تمامی سوالات فنی شماست.</p>
          </div>
          <a id="faq-ask-telegram-btn" href="https://t.me/ArminSQ" target="_blank" rel="noreferrer" className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/10 hover:border-pink-400 transition flex items-center justify-center gap-2 flex-shrink-0 hover:scale-105">
            <Send className="w-4 h-4 text-sky-200" />
            <span>ارتباط با پشتیبانی و خرید اشتراک</span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

const FaqSection = memo(FaqSectionComponent);
export default FaqSection;