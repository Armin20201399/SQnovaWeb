import { useState } from 'react';
import { PROTOCOLS_DATA } from '../data/vpnData';
import { Flame, ShieldCheck, Zap, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { ProtocolType } from '../types';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

interface ProtocolDeepDiveProps {
  onScrollToSection?: (sectionId: string) => void;
}

const ProtocolDeepDive = ({ onScrollToSection }: ProtocolDeepDiveProps) => {
  const [selectedProtocolId, setSelectedProtocolId] = useState<ProtocolType>('hysteria2');
  const selectedProtocol = PROTOCOLS_DATA.find((p) => p.id === selectedProtocolId) || PROTOCOLS_DATA[0];

  const simpleDescriptions: Record<ProtocolType, string> = {
    'hysteria2': 'هاستریا ۲ با الگوریتم Brisk، پکت‌های گم‌شده رو فوری برمی‌گردونه. مخصوص گیمرهایی که تحمل کوچک‌ترین لگ رو ندارن.',
    'tcp-reality': 'TCP Reality ترافیکت رو شبیه یه سایت معمولی جا می‌زنه تا اصلاً قابل شناسایی نباشه. تو سخت‌گیرانه‌ترین شرایط هم کار می‌کنه.',
    'xhttp': 'xHTTP یه راه سریع و امن برای رد شدن از دیواره آتیشه. بدون اینکه سرعتت رو فدا کنه، خیلی راحت کارت رو راه می‌ندازه.',
    'mkcp': 'mKCP سرعتت رو با مالتی‌پلکس کردن چند برابر می‌کنه. وقتی اینترنت ضعیف یا پر از نویزه، این پروتکل واقعاً نجاتت می‌ده.',
    'xhttp-vip': 'xHTTP VIP نسخه‌ی ویژه و پرسرعت پروتکل xHTTP است که مخصوص کاربران حرفه‌ای و گیمرها طراحی شده و بهترین کیفیت اتصال رو تضمین می‌کنه.',
  };

  const simpleFeatures: Record<ProtocolType, string[]> = {
    'hysteria2': [
      'برای گیمرایی که پینگ براشون مهمه معجزه می‌کنه',
      'تو ساعت شلوغی شبکه، پکت‌لاسش صفر می‌مونه',
      'تو بازی‌های شوتر دیگه خبری از فریز و لگ نیست',
      'اگه فیلترینگ سفت باشه، خیلی راحت ازش رد می‌شه'
    ],
    'tcp-reality': [
      'ترافیکت رو شبیه یه سایت عادی نشون می‌ده، اصلاً قابل شناسایی نیست',
      'برای محیط‌هایی که فیلترینگ خیلی سفت و سخت‌گیره، بهترین گزینه‌ست',
      'سرعت و پینگش از OpenVPN خیلی بهتره',
      'روی گوشی و کامپیوتر بدون هیچ دردسری نصب و اجرا می‌شه'
    ],
    'xhttp': [
      'برای دانلود فایل‌های حجیم و سنگین فوق‌العاده‌ست',
      'سرعتش بالاست و در عین حال منابع سیستم رو هدر نمی‌ده',
      'برای استریم فیلم با کیفیت 4K خیلی به درد می‌خوره',
      'اتصالش پایداره و در طول زمان راحت قطع نمی‌شه'
    ],
    'mkcp': [
      'وقتی اینترنت پر از نویز و اختلاله، نجاتت می‌ده',
      'با مالتی‌پلکس کردن، سرعتت رو چند برابر نشون می‌ده',
      'برای پینگ پایین تو بازی‌های آنلاین خیلی موثره',
      'راه‌اندازیش خیلی ساده‌ست و روی همه دیوایس‌ها جواب می‌ده'
    ],
    'xhttp-vip': [
      'بالاترین سرعت ممکن در بین همه‌ی پروتکل‌ها',
      'مناسب برای استریمرها و کاربرانی که دانلود حجیم دارن',
      'مقاومت بی‌نظیر در برابر فیلترینگ و اختلالات شبکه',
      'پشتیبانی ویژه و اختصاصی از تیم SQ Nova'
    ],
  };

  const simpleBestFor: Record<ProtocolType, string> = {
    'hysteria2': 'استریم و گیمینگ',
    'tcp-reality': 'دور زدن فیلترینگ سخت‌گیرانه',
    'xhttp': 'وب‌گردی و دانلود',
    'mkcp': 'دانلود حجیم و اینترنت ضعیف',
    'xhttp-vip': 'کاربران حرفه‌ای و دانلودهای سنگین',
  };

  const protocolTabInfo = [
    { id: 'hysteria2' as ProtocolType, label: 'Hysteria 2 Turbo', icon: Flame },
    { id: 'tcp-reality' as ProtocolType, label: 'TCP Raw Reality', icon: ShieldCheck },
    { id: 'xhttp' as ProtocolType, label: 'xHTTP Engine', icon: Sparkles },
    { id: 'mkcp' as ProtocolType, label: 'mKCP Turbo', icon: Zap },
  ];

  return (
    <SectionShell id="protocols">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-sky-500/40" leftBinary="101001" rightBinary="010110">
              پروتکل‌های <span className="text-sky-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]">به‌روز</span> و <span className="text-amber-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]">قدرتمند</span> ⚡
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            سنگین‌ترین شرایط رو هم راحت رد می‌کنه.
          </p>
        </div>

        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex items-center justify-center gap-2 p-2 rounded-3xl bg-slate-900/90 border border-white/10 shadow-xl flex-wrap">
            {protocolTabInfo.map((tab) => {
              const isSelected = tab.id === selectedProtocolId;
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedProtocolId(tab.id)}
                  className={`relative whitespace-nowrap flex-shrink-0 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group z-10 ${
                    isSelected
                      ? 'text-white bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg'
                      : 'text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800'
                  }`}
                >
                  <TabIcon className="w-4 h-4 flex-shrink-0 relative z-10" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 shadow-2xl transition-all duration-300 text-center flex flex-col min-h-[520px]">
          
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 font-['Rajdhani']">
            <BinaryText binaryClassName="text-purple-500/30" leftBinary="011" rightBinary="110">
              {selectedProtocol.name.split(' (')[0]}
            </BinaryText>
          </h3>
          
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            {simpleDescriptions[selectedProtocol.id]}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 max-w-3xl mx-auto">
            {simpleFeatures[selectedProtocol.id].map((feat, idx) => (
              <div key={idx} className="flex items-center justify-start gap-3 text-xs sm:text-sm text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-white/5 text-right">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-200 text-xs sm:text-sm font-semibold mb-10">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span>پیشنهاد ما برای: {simpleBestFor[selectedProtocol.id]}</span>
          </div>

          <div className="mt-auto flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/10 pt-8">
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <Layers className="w-5 h-5 text-purple-400" />
              <span>با یه کلیک آپدیت شو، دیگه نیازی به تنظیمات دستی نیست.</span>
            </div>
            {onScrollToSection && (
              <button
                onClick={() => onScrollToSection('free-test')}
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-amber-500/10 hover:bg-amber-400 border border-amber-500/40 hover:border-amber-300 text-amber-300 hover:text-slate-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 shine-effect"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>رایگان امتحانش کن</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </SectionShell>
  );
};

export default ProtocolDeepDive;