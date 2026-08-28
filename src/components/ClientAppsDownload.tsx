import { useState, memo } from 'react';
import { CLIENT_APPS } from '../data/vpnData';
import { Download, Smartphone, Monitor, ExternalLink, Star } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { AmbientGlow } from './ui/AmbientGlow';

const ClientAppsDownloadComponent = () => {
  const [activeCategory, setActiveCategory] = useState<'mobile' | 'pc'>('mobile');
  const filteredApps = CLIENT_APPS.filter((app) => {
    if (activeCategory === 'mobile') return app.platform === 'android' || app.platform === 'ios';
    return app.platform === 'windows';
  });

  return (
    <section id="apps" className="cv-800 py-24 relative overflow-hidden bg-cyber-grid border-t border-white/10 text-center">
      <AmbientGlow position="top-1/2 left-10" color="bg-purple-900/20" size="w-96 h-96" blur="blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-purple-500/30" leftBinary="101" rightBinary="010">
              دانلود نرم‌افزارهای کلاینت 📲
            </BinaryText>
          </h2>
        </div>

        <div className="flex justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory('mobile')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition duration-200 border flex items-center justify-center gap-2 backdrop-blur-sm ${
              activeCategory === 'mobile'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-pink-400/80 text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] scale-105'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>نرم‌افزارهای موبایل (v2box و v2rayNG)</span>
          </button>
          <button
            onClick={() => setActiveCategory('pc')}
            className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition duration-200 border flex items-center justify-center gap-2 backdrop-blur-sm ${
              activeCategory === 'pc'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 border-pink-400/80 text-white shadow-[0_0_20px_rgba(236,72,153,0.35)] scale-105'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/10'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>نرم‌افزار کامپیوتر و ویندوز (v2rayN)</span>
          </button>
        </div>

        <div className={`grid grid-cols-1 ${activeCategory === 'mobile' ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-6 mb-12 text-center`}>
          {filteredApps.map((app) => (
            <div key={app.id} className="rounded-3xl bg-slate-900/40 border border-white/10 hover:border-pink-500/50 p-6 sm:p-8 shadow-xl transition duration-300 flex flex-col items-center justify-between space-y-6 group hover:-translate-y-1 backdrop-blur-2xl text-center shine-effect">
              <div className="w-full flex flex-col items-center">
                <div className="flex items-center justify-between w-full mb-4">
                  <div className="text-right">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition font-['Rajdhani']">
                      <BinaryText binaryClassName="text-white/10" leftBinary="01" rightBinary="10">{app.name}</BinaryText>
                    </h3>
                    <span className="text-[11px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full font-medium mt-1 inline-block backdrop-blur-sm">{app.storeBadge}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{app.rating}</span>
                  </div>
                </div>
                <div className="mb-4 flex flex-col items-center w-full">
                  <span className="text-[11px] text-slate-400 block mb-1.5 font-medium text-center">پروتکل‌های پشتیبانی‌شده:</span>
                  <div className="flex flex-wrap items-center justify-center gap-1.5">
                    {app.recommendedFor.map((p) => (
                      <span key={p} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                        {p === 'hysteria2' ? 'Hysteria 2 Turbo' : p === 'tcp-reality' ? 'TCP Raw Reality' : p.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2.5 text-xs text-slate-300 backdrop-blur-sm text-center">
                  <div className="font-bold text-slate-200 text-center">مراحل راه‌اندازی و اتصال:</div>
                  {app.guideSteps.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center justify-center gap-2 text-xs text-slate-300 text-center">
                      <span className="w-4 h-4 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0 font-mono text-[10px] font-bold">{sIdx + 1}</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full pt-2 flex items-center justify-center gap-2">
                <a href={app.downloadUrl} target="_blank" rel="noreferrer" className="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition shadow-[0_10px_25px_rgba(147,51,234,0.35)] hover:scale-105 text-center">
                  <Download className="w-4 h-4" />
                  <span>دانلود نرم‌افزار</span>
                </a>
                {app.githubUrl && (
                  <a href={app.githubUrl} target="_blank" rel="noreferrer" className="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition backdrop-blur-sm" title="لینک دانلود جایگزین / گیت‌هاب">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientAppsDownload = memo(ClientAppsDownloadComponent);
export default ClientAppsDownload;