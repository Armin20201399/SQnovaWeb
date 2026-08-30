import { useState, useEffect, memo } from 'react';
import { Lock, FileText, Database, EyeOff, Trash2, RotateCcw, Smartphone, Share2, Clock } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

const PrivacyAndTermsSectionComponent = () => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  useEffect(() => {
    const handleTabChange = (event: CustomEvent<{ tab: 'privacy' | 'terms' }>) => {
      setActiveTab(event.detail.tab);
    };
    window.addEventListener('sq-scroll-to-tab', handleTabChange as EventListener);
    return () => window.removeEventListener('sq-scroll-to-tab', handleTabChange as EventListener);
  }, []);

  const privacyFeatures = [
    {
      icon: EyeOff,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      title: 'عدم ذخیره هیچ لاگی',
      desc: 'هیچ لاگی از ترافیک، سایت‌های بازدیدشده یا فعالیت آنلاینت ذخیره نمی‌کنیم. نه موقت، نه دائم!'
    },
    {
      icon: Database,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      title: 'دیتابیس اختصاصی',
      desc: 'اطلاعات حساب کاربری (شماره تماس، یوزرنیم تلگرام) فقط برای صدور اشتراک استفاده می‌شه و کاملاً امنه.'
    },
    {
      icon: Lock,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      title: 'حریم مطلق بدون استثنا',
      desc: 'اطلاعات شما هرگز به شخص یا سازمان سومی فروخته یا اجاره داده نمی‌شه. نقطه!'
    },
    {
      icon: Trash2,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      title: 'حق فراموشی',
      desc: 'هر وقت خواستی، می‌تونی از پشتیبانی بخوای اطلاعاتت رو کامل و فوری حذف کنیم.'
    }
  ];

  const termsFeatures = [
    {
      icon: RotateCcw,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      title: 'بازگشت وجه',
      desc: 'اگه مشکل از سمت ما باشه (نقص فنی)، کل مبلغ بدون کم‌وکاست برمی‌گرده.'
    },
    {
      icon: Smartphone,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      title: 'محدودیت دیوایس',
      desc: 'هر پلن سقف تعداد دیوایس همزمان خاص خودش رو داره. برای افزایش سقف با پشتیبانی در میون بذار.'
    },
    {
      icon: Share2,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      title: 'اشتراک‌گذاری لینک',
      desc: 'لینک اختصاصیت رو توی فضاهای عمومی به اشتراک نذار! اگه تعداد کاربران از سقف بیشتر بشه، مسئولیتش با خودته.'
    },
    {
      icon: Clock,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      title: 'جبران قطعی سرویس',
      desc: 'اگه سرویس قطع بشه، مدت‌زمان اشتراکت به همون میزان تمدید می‌شه. حتی به عنوان اعتمادسازی، زمان اضافه هم می‌گیرید!'
    }
  ];

  const activeFeatures = activeTab === 'privacy' ? privacyFeatures : termsFeatures;

  return (
    <SectionShell id="privacy-terms">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex items-center justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'privacy'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : 'bg-slate-900/80 hover:bg-slate-800/80 text-slate-400 border border-white/10'
            }`}
          >
            <Lock className="w-4 h-4" /> حریم خصوصی
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'terms'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                : 'bg-slate-900/80 hover:bg-slate-800/80 text-slate-400 border border-white/10'
            }`}
          >
            <FileText className="w-4 h-4" /> قوانین و شرایط
          </button>
        </div>

        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-emerald-500/30" leftBinary="0101" rightBinary="1010">
              {activeTab === 'privacy' ? 'حریم خصوصیت، خط قرمز ماست 🔒' : 'قانون بازی رو بلدیم و رعایتش می‌کنیم 📜'}
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
            {activeTab === 'privacy'
              ? 'خیال راحت باش، ما با امنیتت شوخی نداریم!'
              : 'شرایط شفاف، بدون هیچ متن پیچیده‌ای.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {activeFeatures.map((feature, idx) => (
            <div 
              key={idx} 
              className="group p-6 rounded-3xl bg-slate-900/80 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:shadow-[0_10px_35px_rgba(236,72,153,0.12)] flex gap-4 items-start shine-effect"
            >
              <div className={`p-3.5 rounded-2xl border ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-right">
                <h3 className="font-bold text-white text-lg group-hover:text-slate-100 transition">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SectionShell>
  );
};

const PrivacyAndTermsSection = memo(PrivacyAndTermsSectionComponent);
export default PrivacyAndTermsSection;