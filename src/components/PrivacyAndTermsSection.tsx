import React, { useState, memo } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  CheckCircle2, 
  Send, 
  RotateCcw, 
  Smartphone, 
  Share2, 
  Clock, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { BinaryText } from './BinaryText';

interface PrivacyAndTermsSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const PrivacyAndTermsSectionComponent: React.FC<PrivacyAndTermsSectionProps> = ({
  onScrollToSection
}) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  return (
    <section
      id="privacy-terms"
      className="cv-900 py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center"
    >
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-emerald-900/20 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'privacy'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.3)]'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            حریم خصوصی
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                : 'bg-white/5 hover:bg-white/10 text-slate-400 border border-white/10'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            قوانین و شرایط
          </button>
        </div>

        {activeTab === 'privacy' && (
          <div id="privacy" className="mb-20 scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
                <BinaryText binaryClassName="text-emerald-500/30" leftBinary="0101" rightBinary="1010">
                  حریم خصوصیت، خط قرمز ماست 🔒
                </BinaryText>
              </h2>
              <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed text-center">
                نه لاگ نگه می‌داریم، نه سرک می‌کشیم توی ترافیکت
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
                ما توی SQ nova به امنیت دیتای شما به‌عنوان یه اصل غیرقابل‌مذاکره نگاه می‌کنیم، نه یه شعار تبلیغاتی. برای همین:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10 text-right">
              
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)] shine-effect flex gap-4 items-start">
                <div className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">عدم ذخیره هرگونه لاگ ارتباطی</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    هیچ لاگی از ترافیک، سایت‌های بازدیدشده، مقصد اتصال یا فعالیت آنلاینت ذخیره نمی‌کنیم — نه موقت، نه دائم.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)] shine-effect flex gap-4 items-start">
                <div className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">دیتابیس اختصاصی و رمزنگاری‌شده</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    اطلاعات حساب کاربری (مثل شماره تماس یا یوزرنیم تلگرام) توی یه دیتابیس اختصاصی و ایمن نگهداری می‌شه و فقط برای صدور اشتراک و پشتیبانی ازش استفاده می‌شه.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)] shine-effect flex gap-4 items-start">
                <div className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">حریم مطلق بدون اشتراک‌گذاری شخص ثالث</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    هیچ اطلاعاتی از شما به شخص یا سازمان سومی فروخته، اجاره داده یا به اشتراک گذاشته نمی‌شه. نقطه.
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-[0_10px_35px_rgba(16,185,129,0.12)] shine-effect flex gap-4 items-start">
                <div className="p-2 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-white text-base">حق فراموشی و حذف فوری اطلاعات</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    هر وقت خواستی می‌تونی از طریق پشتیبانی درخواست حذف کامل اطلاعاتت رو بدی و ما در سریع‌ترین زمان انجامش می‌دیم.
                  </p>
                </div>
              </div>

            </div>

            <div className="max-w-3xl mx-auto p-5 rounded-3xl bg-slate-900/50 border border-emerald-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right">
              <div className="text-xs sm:text-sm text-slate-300">
                اگه سوال یا نگرانی خاصی درباره حریم خصوصیت داری، همیشه می‌تونی از طریق پشتیبانی تلگرام مستقیم باهامون در میون بذاری.
              </div>
              <a
                href="https://t.me/ArminSQ"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-bold transition flex items-center justify-center gap-2 flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-emerald-300" />
                <span>گفتگو با پشتیبانی</span>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div id="terms" className="scroll-mt-28">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
                <BinaryText binaryClassName="text-purple-500/30" leftBinary="1010" rightBinary="0101">
                  قانون بازی رو بلدیم، رعایتش می‌کنیم 📜
                </BinaryText>
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center max-w-2xl mx-auto">
                شرایط شفاف بازگشت وجه، محدودیت دیوایس‌ها، امنیت لینک اختصاصی و تضمین جبران قطعی
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-right">
              
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-pink-500/40 hover:shadow-[0_10px_35px_rgba(236,72,153,0.12)] shine-effect flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
                      <RotateCcw className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">بازگشت وجه و انصراف</h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>اگه مشکل از سمت ما باشه (اختلال یا نقص فنی در سرویس)، کل مبلغ پرداختی بدون کم‌وکاست بهت برمی‌گرده.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>اگه بخوای بدون دلیل فنی انصراف بدی، امکان بازگشت وجه هست، ولی با کسر ۳۰٪ از مبلغ اولیه به‌علاوه هزینه‌ی حجم/زمان مصرفی محاسبه می‌شه.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-sky-500/40 hover:shadow-[0_10px_35px_rgba(56,189,248,0.12)] shine-effect flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">محدودیت دیوایس و کاربران</h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>هر پلن بسته به نوعش سقف تعداد کاربر/دیوایس همزمان متفاوتی داره. اگه نیاز به افزایش این سقف داری، کافیه از طریق پشتیبانی درخواست بدی.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-sky-300 font-mono">
                  Multi-device concurrency control
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_10px_35px_rgba(251,191,36,0.12)] shine-effect flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">اشتراک‌گذاری لینک</h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>اشتراک‌گذاری لینک اختصاصی‌ات در فضاهای عمومی یا مجازی (گروه‌ها، کانال‌ها و...) ممنوعه.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>اگه تعداد کاربران فعال روی لینکت از سقف مجاز پلن بیشتر بشه، هرگونه کندی یا اختلال ناشی از اون، مسئولیتش با خود کاربره.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_10px_35px_rgba(168,85,247,0.12)] shine-effect flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">سیاست جبران قطعی سرویس</h3>
                  </div>
                  <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>در صورت بروز اختلال فنی از سمت ما، مدت‌زمان اشتراکت به همون میزان تمدید می‌شه.</p>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <p>در مواردی به‌عنوان جبران و اعتمادسازی، حتی زمان اضافه تری هم به حساب کاربر اضافه می‌کنیم.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-xs text-purple-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>تضمین پایبندی به کیفیت خدمات</span>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const PrivacyAndTermsSection = memo(PrivacyAndTermsSectionComponent);
export default PrivacyAndTermsSection;