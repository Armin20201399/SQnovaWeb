import React, { useState, useMemo } from 'react';
import { Send, Database, Clock, ShieldCheck, Star, Check } from 'lucide-react';
import { BinaryText } from './BinaryText';
import { SectionShell } from './ui/SectionShell';

const InteractivePackagesSectionComponent = () => {
  const [gig, setGig] = useState<number>(25);
  const [months, setMonths] = useState<number>(3);
  const [protocols, setProtocols] = useState<string[]>(['hysteria2', 'tcp-reality']);

  const hasGoldProtocol = protocols.includes('hysteria2') || protocols.includes('xhttp-vip');

  const price = useMemo(() => {
    const pricePerGig = hasGoldProtocol
      ? (gig <= 50 ? 7000 : gig <= 200 ? 5500 : 4500)
      : (gig <= 50 ? 3500 : gig <= 200 ? 3000 : 2500);

    const monthlyFee = 1000 * gig * months;
    return (gig * pricePerGig) + monthlyFee;
  }, [gig, months, hasGoldProtocol]);

  const formattedPrice = price.toLocaleString('fa-IR');

  const gigPercentage = ((gig - 10) / (200 - 10)) * 100;
  const monthPercentage = ((months - 1) / (12 - 1)) * 100;

  const handleGigChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = Number(e.target.value);
    if (val < 10) {
      val = 10;
    } else if (val >= 200) {
      val = 200;
    } else if (Math.abs(val - 50) <= 10) {
      val = 50;
    } else if (Math.abs(val - 100) <= 10) {
      val = 100;
    } else if (Math.abs(val - 150) <= 10) {
      val = 150;
    } else {
      val = Math.round(val / 10) * 10;
    }
    setGig(val);
  };

  const toggleProtocol = (proto: string) => {
    setProtocols(prev => 
      prev.includes(proto) ? prev.filter(p => p !== proto) : [...prev, proto]
    );
  };

  const specialProtocols = [
    { id: 'hysteria2', label: 'Hysteria 2 Turbo', isVip: true },
    { id: 'xhttp-vip', label: 'xHTTP VIP', isVip: true }
  ];

  const normalProtocols = [
    { id: 'tcp-reality', label: 'TCP Raw Reality', isVip: false },
    { id: 'xhttp', label: 'xHTTP Engine', isVip: false },
    { id: 'mkcp', label: 'mKCP Turbo', isVip: false }
  ];

  const allProtocols = [...specialProtocols, ...normalProtocols];

  const handleOrderClick = () => {
    const protocolNames = protocols.map(p => allProtocols.find(o => o.id === p)?.label).join('، ');
    const message = `سلام! می‌خوام پلن ${gig.toLocaleString('fa-IR')} گیگابایتی برای ${months.toLocaleString('fa-IR')} ماه با پروتکل‌های (${protocolNames}) سفارش بدم. لطفاً قیمت نهایی رو اعلام کنید.`;
    const telegramUrl = `https://t.me/ArminSQ?text=${encodeURIComponent(message)}`;
    window.open(telegramUrl, '_blank');
  };

  return (
    <SectionShell id="packages">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-center">
            <BinaryText binaryClassName="text-pink-500/30" leftBinary="0101" rightBinary="1010">
              پلن خودت رو بساز! 💎
            </BinaryText>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed text-center">
            حجم دلخواهت رو انتخاب کن، پروتکل‌های مورد نظرت رو تیک بزن و قیمت نهایی رو همین الان ببین.
          </p>
        </div>

        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-10 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* بخش تنظیمات */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-sm font-bold text-white">
                  <Database className="w-4 h-4 text-emerald-400" /> حجم سرویس
                </label>
                <span className="text-emerald-300 font-bold text-lg">{gig.toLocaleString('fa-IR')} گیگابایت</span>
              </div>
              <input 
                type="range" 
                min={10} 
                max={200} 
                step={1}
                value={gig} 
                onChange={handleGigChange}
                className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer transition-all duration-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-emerald-400 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-slate-900 [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(16,185,129,0.8)] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-emerald-400 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-slate-900"
                dir="rtl"
                style={{
                  background: `linear-gradient(to left, #10b981 0%, #10b981 ${gigPercentage}%, #334155 ${gigPercentage}%, #334155 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>۱۰</span>
                <span>۵۰</span>
                <span>۱۰۰</span>
                <span>۱۵۰</span>
                <span>۲۰۰</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 text-sm font-bold text-white">
                  <Clock className="w-4 h-4 text-sky-400" /> مدت زمان (هر ۳۰ روز)
                </label>
                <span className="text-sky-300 font-bold text-lg">{months.toLocaleString('fa-IR')} ماه</span>
              </div>
              <input 
                type="range" 
                min={1} 
                max={12} 
                step={1}
                value={months} 
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-3 bg-slate-700 rounded-full appearance-none cursor-pointer transition-all duration-300 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-sky-400 [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-slate-900 [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(56,189,248,0.8)] [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-sky-400 [&::-moz-range-thumb]:border-4 [&::-moz-range-thumb]:border-slate-900"
                dir="rtl"
                style={{
                  background: `linear-gradient(to left, #3b82f6 0%, #3b82f6 ${monthPercentage}%, #334155 ${monthPercentage}%, #334155 100%)`
                }}
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2">
                <span>۱</span>
                <span>۱۲</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-white mb-4">پروتکل‌های مورد نظر را انتخاب کنید:</label>
              
              <div className="space-y-3">
                {/* پروتکل‌های ویژه (طلایی - کنار هم) */}
                <div className="grid grid-cols-2 gap-3">
                  {specialProtocols.map((proto) => (
                    <div 
                      key={proto.id} 
                      onClick={() => toggleProtocol(proto.id)}
                      className={`flex items-center justify-center gap-2 p-3 rounded-xl cursor-pointer border-2 transition-all ${
                        protocols.includes(proto.id) 
                          ? 'bg-amber-500/20 border-amber-500/60 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.3)]' 
                          : 'bg-slate-800/80 border-amber-500/20 text-slate-400 hover:border-amber-500/50'
                      }`}
                    >
                      <Star className={`w-4 h-4 ${protocols.includes(proto.id) ? 'fill-amber-400 text-amber-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-black">{proto.label}</span>
                    </div>
                  ))}
                </div>

                {/* سایر پروتکل‌ها */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {normalProtocols.map((proto) => (
                    <div 
                      key={proto.id} 
                      onClick={() => toggleProtocol(proto.id)}
                      className={`group flex items-center justify-between gap-2 p-3 rounded-xl cursor-pointer border-2 transition-all duration-300 ${
                        protocols.includes(proto.id) 
                          ? 'bg-pink-500/20 border-pink-500/50 text-white' 
                          : 'bg-slate-800/50 border-white/10 text-slate-400 hover:border-pink-500/30 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`w-5 h-5 flex items-center justify-center rounded-md border-2 transition-all duration-200 ${
                          protocols.includes(proto.id) 
                            ? 'bg-pink-500 border-pink-500 scale-110' 
                            : 'border-slate-500 bg-transparent'
                        }`}>
                          <Check className={`w-3.5 h-3.5 text-white transition-opacity duration-200 ${
                            protocols.includes(proto.id) ? 'opacity-100' : 'opacity-0'
                          }`} />
                        </span>
                        <span className="text-xs font-bold">{proto.label}</span>
                      </div>
                      <span className={`w-2 h-2 rounded-full transition-colors ${
                        protocols.includes(proto.id) ? 'bg-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.8)]' : 'bg-slate-600'
                      }`} />
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-slate-500 mt-3">بر اساس گزینه‌های انتخابی، کانفیگ اختصاصی شما ساخته می‌شود.</p>
            </div>
          </div>

          {/* بخش قیمت (اصلاح شده برای جلوگیری از تغییر سایز) */}
          <div className="bg-slate-900/95 border border-white/10 rounded-3xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden w-full max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/50 via-transparent to-pink-950/50 pointer-events-none" />
            
            <div className="relative z-10 w-full">
              <span className="text-sm font-bold text-slate-400">قیمت نهایی سرویس شما</span>
              
              {/* باکس قیمت با ارتفاع ثابت و عدم شکستن خط */}
              <div className="my-4 flex items-center justify-center min-h-[80px]">
                <span dir="ltr" className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 whitespace-nowrap">
                  {formattedPrice}
                </span>
                <span className="text-xl font-bold text-white mr-1">تومان</span>
              </div>
              
              {protocols.length > 0 && (
                <div className="space-y-2 text-xs text-slate-300 mb-6">
                  <p>حجم: {gig.toLocaleString('fa-IR')} گیگابایت</p>
                  <p>مدت زمان: {months.toLocaleString('fa-IR')} ماه</p>
                  <div className="flex justify-center gap-2 mt-3">
                    {protocols.map(p => (
                      <span key={p} className="px-2 py-1 rounded bg-white/10 text-[10px]">{allProtocols.find(o => o.id === p)?.label}</span>
                    ))}
                  </div>
                </div>
              )}

              {/* دکمه با عرض ثابت و بدون اسکیل روی هاور */}
              <button 
                onClick={handleOrderClick}
                className="w-full max-w-[300px] mx-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm shadow-[0_10px_25px_rgba(236,72,153,0.4)] transition-colors duration-200 shine-effect"
              >
                <Send className="w-4 h-4 text-sky-200" />
                <span>ثبت سفارش این پلن</span>
              </button>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" /> تمامی قیمت ها بروز هستن
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};

export const InteractivePackagesSection = React.memo(InteractivePackagesSectionComponent);
export default InteractivePackagesSection;