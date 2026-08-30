import { useState, memo } from 'react';
import { ChevronDown, Send, ShieldCheck, Smartphone, RefreshCw, Lock, Zap, Wallet } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

interface FaqSectionProps { onScrollToSection?: (sectionId: string) => void; }

interface FaqItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  icon: React.ElementType;
}

const FaqItemComponent = ({ faq, isOpen, onToggle }: { faq: FaqItem; isOpen: boolean; onToggle: (id: string) => void; }) => {
  const Icon = faq.icon;
  return (
    <div className={`group rounded-3xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-slate-900/80 border-pink-500/40 shadow-[0_10px_35px_rgba(236,72,153,0.12)]' : 'bg-slate-900/80 border-white/10 hover:border-pink-500/30'}`}>
      <button type="button" onClick={() => onToggle(faq.id)} aria-expanded={isOpen} aria-controls={`faq-panel-${faq.id}`} className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 text-right focus:outline-none">
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-2xl border transition-colors ${isOpen ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-300 border-pink-500/30' : 'bg-slate-900/80 text-slate-400 border-white/10 group-hover:text-pink-300'}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className="text-base sm:text-lg font-bold text-white group-hover:text-slate-100 transition leading-snug">{faq.question}</span>
        </div>
        <div className={`p-1.5 rounded-full bg-slate-900/80 text-slate-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-pink-400 bg-pink-500/10' : ''}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div id={`faq-panel-${faq.id}`} hidden={!isOpen} className="grid transition-[grid-template-rows,opacity] duration-300 ease-in-out">
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
};

const FaqSectionComponent = ({ onScrollToSection }: FaqSectionProps) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const toggleItem = (id: string) => setOpenId((prev) => (prev === id ? null : id));
  
  const FAQS: FaqItem[] = [
    { id: 'faq-1', icon: Zap, question: 'خب، چرا انقدر خاص و بهتر از بقیه‌اید؟', answer: <div className="space-y-2"><p>ما از جدیدترین و قوی‌ترین پروتکل‌های دنیا استفاده می‌کنیم و روی سرورهای اختصاصی 10G با روتینگ سخت‌افزاری اجرا کردیم. نتیجه‌ش پینگ پایین و پکت‌لاس نزدیک به صفر است!</p></div> },
    { id: 'faq-2', icon: Smartphone, question: 'روی گوشی هم جواب می‌ده؟', answer: <div className="space-y-2"><p>همه‌جا! گوشی، کامپیوتر و مک. فقط کافیه اپ پیشنهادی ما رو نصب کنی و لینک ساب هوشمند رو داخلش بزنی.</p></div> },
    { id: 'faq-3', icon: RefreshCw, question: 'اگه یهو قطع بشه چیکار کنم؟', answer: <div className="space-y-2"><p>سیستم هوشمند ما خودکار مسیرت رو عوض می‌کنه. فقط کافیه دکمه Update Subscription رو بزنی.</p></div> },
    { id: 'faq-4', icon: Lock, question: 'برامون لاگ می‌گیرید؟', answer: <div className="space-y-3"><p>نه! حریم خصوصی شما برامون مقدسه.</p><button onClick={() => onScrollToSection && onScrollToSection('privacy-terms')} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold transition"><ShieldCheck className="w-4 h-4" /> تعهدنامه حریم خصوصی</button></div> },
    { id: 'faq-5', icon: Wallet, question: 'تمدیدش چقدر راحته؟', answer: <div className="space-y-2"><p>خیلی راحت! کافیه یه پیام به پشتیبانی بدی و بقیه زمانت رو اضافه کنن.</p></div> }
  ];

  return (
    <SectionShell id="faq" className="pt-20 pb-16 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center"><BinaryText binaryClassName="text-pink-500/30" leftBinary="1010" rightBinary="0101">سوالاتی که خیلی‌ها می‌پرسن ❓</BinaryText></h2>
        </div>
        <div className="space-y-4 mb-10 text-right">
          {FAQS.map((faq) => <FaqItemComponent key={faq.id} faq={faq} isOpen={openId === faq.id} onToggle={toggleItem} />)}
        </div>
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/50 via-slate-900/80 to-pink-950/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-right shine-effect">
          <div className="space-y-1 text-center sm:text-right"><h3 className="font-bold text-white text-base sm:text-lg">هنوز سوالی داری؟ 🤔</h3></div>
          <a href="https://t.me/ArminSQ" target="_blank" rel="noreferrer" className="whitespace-nowrap px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105 transition duration-300 flex items-center justify-center gap-2 group">
            <Send className="w-4 h-4 text-sky-200 group-hover:translate-x-1 transition-transform" /><span>ارتباط با پشتیبانی</span>
          </a>
        </div>
      </div>
    </SectionShell>
  );
};

const FaqSection = memo(FaqSectionComponent);
export default FaqSection;