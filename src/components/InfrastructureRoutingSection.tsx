import { memo, useCallback } from 'react';
import { Cpu, Layers, Server, Zap } from 'lucide-react';
import { BinaryText } from './BinaryText';

interface InfrastructureRoutingSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const SAMPLE_LOCATIONS = [
  { flag: '🇩🇪', country: 'آلمان (Frankfurt)', datacenter: 'Hetzner Online Dedicated Center', ping: '58 ms' },
  { flag: '🇳🇱', country: 'هلند (Amsterdam)', datacenter: 'APEX Datacenter 10G Port', ping: '59 ms' },
  { flag: '🇫🇮', country: 'فنلاند (Helsinki)', datacenter: 'Hetzner Low-Traffic Hub', ping: '63 ms' },
  { flag: '🇹🇷', country: 'ترکیه (Istanbul)', datacenter: 'Istanbul BGP Direct Hub', ping: '56 ms' },
  { flag: '🇮🇷', country: 'ایران (تهران و سراسر کشور)', datacenter: 'نودهای تجمیعی میکروتیک شاتل، آسیاتک، های‌وب', ping: '8 ms' },
] as const;

const FEATURE_CARDS = [
  {
    title: 'سوییچ و بهینه‌سازی خودکار مسیر',
    description: 'در صورت بروز هرگونه اختلال یا افت سرعت روی یک مسیر، سیستم به صورت آنی و خودکار ترافیک شما را به پایدارترین نود اروپایی دیگر هدایت می‌کند.',
    Icon: Zap,
    iconClass: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
    hoverClass: 'hover:border-orange-500/30',
    titleBinary: '01',
    rightBinary: '10',
  },
  {
    title: 'دیتاسنترهای معتبر اروپایی (APEX و Hetzner)',
    description: 'بهره‌گیری از سرورهای اختصاصی با پورت‌های پرسرعت 10G در آلمان، هلند، فنلاند و ترکیه با آی‌پی‌های تمیز و معتبر.',
    Icon: Server,
    iconClass: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    hoverClass: 'hover:border-purple-500/30',
    titleBinary: '01',
    rightBinary: '10',
  },
  {
    title: 'نودهای سخت‌افزاری میکروتیک در ایران',
    description: 'استقرار در دیتاسنترهای شاتل، آسیاتک و های‌وب برای تضمین سازگاری کامل با تمامی اینترنت‌های ثابت و همراه کشور.',
    Icon: Cpu,
    iconClass: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
    hoverClass: 'hover:border-pink-500/30',
    titleBinary: '01',
    rightBinary: '10',
  },
] as const;

type FeatureCardData = typeof FEATURE_CARDS[number];

const FeatureCard = memo(({
  title,
  description,
  Icon,
  iconClass,
  hoverClass,
  titleBinary,
  rightBinary,
}: FeatureCardData) => (
  <div className={`p-6 rounded-3xl bg-slate-900/50 border border-white/10 backdrop-blur-2xl space-y-4 flex flex-col items-center justify-center text-center ${hoverClass} transition shine-effect`}>
    <div className={`p-3.5 rounded-2xl border ${iconClass}`}><Icon className="w-6 h-6" /></div>
    <h3 className="text-base font-bold text-white text-center">
      <BinaryText binaryClassName="text-white/10" leftBinary={titleBinary} rightBinary={rightBinary}>{title}</BinaryText>
    </h3>
    <p className="text-xs text-slate-400 leading-relaxed text-center">{description}</p>
  </div>
));

interface LocationCardProps {
  flag: string;
  country: string;
  datacenter: string;
  ping: string;
}

const LocationCard = memo(({ flag, country, datacenter, ping }: LocationCardProps) => (
  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition flex items-center justify-between gap-3 text-center shine-effect">
    <div className="flex items-center gap-3 min-w-0">
      <span className="text-2xl flex-shrink-0" aria-hidden="true">{flag}</span>
      <div className="text-right min-w-0">
        <h4 className="font-bold text-white text-xs sm:text-sm">{country}</h4>
        <p className="text-[11px] text-slate-400 truncate">{datacenter}</p>
      </div>
    </div>
    <div className="text-left font-mono flex-shrink-0">
      <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">~{ping}</span>
    </div>
  </div>
));

const InfrastructureRoutingSectionComponent = ({ onScrollToSection }: InfrastructureRoutingSectionProps) => {
  const handlePackagesClick = useCallback(() => {
    onScrollToSection?.('packages');
  }, [onScrollToSection]);

  return (
    <section id="infrastructure" className="py-24 bg-[#020617] relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-900/20 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-600/15 rounded-full blur-[130px] pointer-events-none" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-orange-500/30" leftBinary="0101" rightBinary="1010">مسیریابی هوشمند شبکه</BinaryText>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14 text-center">
          {FEATURE_CARDS.map((card) => <FeatureCard key={card.title} {...card} />)}
        </div>
        <div className="rounded-3xl bg-slate-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-2xl space-y-6 text-center shine-effect">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/10 pb-4 text-center sm:text-right">
            <div>
              <h3 className="text-lg font-bold text-white">نمونه‌ای از لوکیشن‌ها و سرورهای خروجی فعال</h3>
              <p className="text-xs text-slate-400 mt-0.5">تمام این موقعیت‌ها درون لینک ساب هوشمند تجمیعی شما فعال هستند</p>
            </div>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 rounded-full">توزیع بار هوشمند و خودکار</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SAMPLE_LOCATIONS.map((location) => (
              <LocationCard key={`${location.country}-${location.datacenter}`} {...location} />
            ))}
          </div>
          {onScrollToSection && (
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <button type="button" onClick={handlePackagesClick} className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg transition flex items-center justify-center gap-2">
                <Layers className="w-4 h-4" /><span>مشاهده پلن‌های ساب هوشمند</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const InfrastructureRoutingSection = memo(InfrastructureRoutingSectionComponent);
export default InfrastructureRoutingSection;