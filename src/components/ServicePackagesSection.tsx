import React, { memo } from 'react';
import { SERVICE_PACKAGES } from '../data/vpnData';
import { CheckCircle2, Send, Sparkles } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { AmbientGlow } from './ui/AmbientGlow';
import { SectionShell } from './ui/SectionShell';

interface ServicePackagesSectionProps {
  onScrollToSection?: (sectionId: string) => void;
}

const ServicePackagesSectionComponent: React.FC<ServicePackagesSectionProps> = ({
  onScrollToSection
}) => {
  return (
    <SectionShell id="packages">
      <AmbientGlow position="top-1/3 left-1/4" color="bg-purple-900/20" size="w-[48rem] h-[48rem]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            <BinaryText binaryClassName="text-pink-500/30" leftBinary="0101" rightBinary="1010">
              پلن‌هایی متناسب با نیازهای مختلف شما ! 💎
            </BinaryText>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SERVICE_PACKAGES.map((pkg) => {
            const isPopular = pkg.popular;
            return (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col items-center space-y-5 relative group text-center shine-effect ${
                  isPopular
                    ? 'bg-slate-900/98 border-2 border-pink-500 shadow-[0_0_35px_rgba(236,72,153,0.35)] -translate-y-2'
                    : 'bg-slate-900/80 border border-white/10 hover:border-white/25 hover:-translate-y-1 shadow-xl'
                }`}
              >
                {isPopular && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500" />
                )}

                <div className="w-full flex flex-col items-center space-y-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                    isPopular
                      ? 'bg-pink-500/20 text-pink-300 border-pink-500/40'
                      : 'bg-white/5 text-slate-300 border-white/10'
                  }`}>
                    {pkg.badge || 'پلن اختصاصی'}
                  </span>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-pink-300 transition leading-snug text-center pt-1">
                    <BinaryText binaryClassName="text-white/20" leftBinary="01" rightBinary="10">
                      {pkg.name}
                    </BinaryText>
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed text-center">
                    {pkg.targetAudience}
                  </p>
                </div>

                <ul className="w-full space-y-1.5 list-none">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center justify-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="w-full pt-4 border-t border-white/10">
                  <a
                    href={pkg.telegramLink}
                    target="_blank"
                    rel="noreferrer"
                    className={`w-full py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition duration-200 shadow-lg shine-effect ${
                      isPopular
                        ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white shadow-[0_10px_25px_rgba(236,72,153,0.4)] hover:scale-105'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/10 hover:border-pink-400'
                    }`}
                  >
                    <Send className="w-3.5 h-3.5 text-sky-200" />
                    <span>تماس با پشتیبانی و دریافت قیمت</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {onScrollToSection && (
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-right">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-300 font-bold text-sm">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>هنوز پلن مدنظرت رو پیدا نکردی؟</span>
              </div>
              <p className="text-xs text-slate-400">
                با اشتراک تست می‌تونی تمام خدمات و پروتکل‌ها رو امتحان کنی، شاید آپشن مدنظرت پیدا شد!
              </p>
            </div>

            <button
              onClick={() => onScrollToSection('free-test')}
              className="px-6 py-3 rounded-2xl bg-amber-500/10 hover:bg-amber-400 border border-amber-500/40 hover:border-amber-300 text-amber-300 hover:text-slate-950 font-bold text-xs transition-all duration-200 flex items-center justify-center gap-2 hover:scale-105 group shine-effect flex-shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-400 group-hover:text-slate-950" />
              <span className="group-hover:text-slate-950 transition-colors">رایگان امتحانش کن</span>
            </button>
          </div>
        )}
      </div>
    </SectionShell>
  );
};

const ServicePackagesSection = memo(ServicePackagesSectionComponent);
export default ServicePackagesSection;