import { ProtocolData, ClientApp } from '../types';

export const PROTOCOLS_DATA: ProtocolData[] = [
  {
    id: 'hysteria2',
    name: 'Hysteria 2 Turbo (Brisk UDP)',
    tagline: 'پروتکل فوق‌پیشرفته UDP بر پایه QUIC با جبران هوشمند پکت‌لاس و رفع نوسان پینگ',
    description: 'معماری هایستریا ۲ با الگوریتم اختصاصی کنترل ازدحام Brisk، بسته‌های گم‌شده را بلافاصله بازیابی می‌کند و برای گیمرهای حرفه‌ای و تماس‌های صوتی و تصویری بدون قطعی بهینه‌سازی شده است.',
    iconName: 'Flame',
    transport: 'UDP / QUIC Protocol',
    dpiResistance: 'High (Brisk Congestion & Obfuscation)',
    lossResistance: 'پکت‌لاس نزدیک به صفر (Zero-Drop Engine)',
    speedRating: 'حداکثر پهنای باند خط اینترنت',
    badge: 'بهینه‌ترین برای بازی‌های آنلاین و استریم',
    features: [
      'الگوریتم کنترل ازدحام Brisk اختصاصی برای خطوط با پکت‌لاس بالا',
      'پایداری فوق‌العاده در ساعات اوج مصرف اینترنت اپراتورها',
      'کاهش شدید نوسان پینگ (Jitter) در بازی‌های شوتر و رقابتی',
      'بازیابی خودکار بسته‌های UDP بدون افت پهنای باند و فریز',
      'سوییچ خودکار روی نودهای پرسرعت هتزنر و APEX اروپا'
    ],
    bestFor: [
      'تمامی بازی‌های شوتر، MOBA، بتل رویال و آنلاین',
      'حذف محدودیت‌های زیرساختی اینترنتی موجود و رفع تحریم برنامه‌ها',
      'پخش روان ویدیوهای 4K و 8K در یوتیوب',
      'استریم گیم و مسابقات در توییچ بدون بافر'
    ],
    portConfig: 'UDP Port-Hopping (Dynamic Multiplexing)',
    recommendedClients: ['v2box', 'v2rayNG', 'v2rayN']
  },
  {
    id: 'tcp-reality',
    name: 'TCP Raw Reality (Anti-DPI / TLS)',
    tagline: 'شبیه‌سازی کامل ساختار TLS وب‌سایت‌های معتبر بین‌المللی با ماندگاری دائمی',
    description: 'پروتکل VLESS Reality با تکیه بر ساختار TCP خام و جعل گواهی‌های TLS وب‌سایت‌های مطرح جهانی، ترافیک اتصال را کاملاً با ترافیک عادی اینترنت یکسان‌سازی کرده و عبور نامرئی از فیلترینگ را ممکن می‌سازد.',
    iconName: 'ShieldCheck',
    transport: 'TCP Raw with TLS Camouflage',
    dpiResistance: 'Maximum (Invisible TLS Handshake)',
    lossResistance: 'پایداری ۹۹.۹۹٪ حتی در شدیدترین محدودیت‌ها',
    speedRating: 'سرعت دانلود و وبگردی پایدار',
    badge: 'پایدارترین پروتکل در محدودیت‌های شدید',
    features: [
      'استفاده از سرتیفیکیت و هندشیک واقعی وب‌سایت‌های جهانی (Apple, Microsoft, Cloudflare)',
      'عدم نیاز به دامنه شخصی و مصون از فیلتر شدن دامنه‌ها',
      'عملکرد بی‌نقص روی تمامی اپراتورهای همراه اول، ایرانسل، رایتل و مخابرات',
      'رمزنگاری پیشرفته X25519 با کمترین مصرف پردازنده و باتری',
      'روتینگ سخت‌افزاری میکروتیک در دیتاسنترهای داخلی'
    ],
    bestFor: [
      'استفاده روزمره و باز کردن تمام وب‌سایت‌ها و اپلیکیشن‌ها',
      'حذف محدودیت‌های زیرساختی اینترنتی موجود و رفع تحریم برنامه‌ها',
      'وبگردی امن و حفظ حریم خصوصی کاربران'
    ],
    portConfig: 'TCP Port 443 (Standard HTTPS)',
    recommendedClients: ['v2box', 'v2rayNG', 'v2rayN']
  },
  {
    id: 'xhttp',
    name: 'xHTTP (SplitHTTP / TLS Reality)',
    tagline: 'فناوری نوین قطعه‌بندی جریان‌های داده HTTP/2 و HTTP/3 مقاوم در برابر فیلترینگ رفتاری',
    description: 'پروتکل مدرن xHTTP با تکه‌تکه کردن استریم داده‌ها در قالب بسته‌های استاندارد وب و تلفیق با هندشیک واقعی TLS Reality، امکان ردیابی و مسدودسازی توسط سیستم‌های فیلترینگ عمیق را کاملاً غیرممکن می‌سازد.',
    iconName: 'Sparkles',
    transport: 'SplitHTTP / HTTP/3 over Reality',
    dpiResistance: 'Maximum (Multi-Stream Camouflage)',
    lossResistance: 'پکت‌لاس نزدیک به صفر با پایداری کامل',
    speedRating: 'سرعت لود بسیار بالا و پایدار',
    badge: 'جدیدترین فناوری ضد فیلترینگ',
    features: [
      'جداسازی و مالتی‌پارسیل ترافیک آپلود و دانلود (Split Streaming)',
      'ترکیب با رمزنگاری TLS Reality برای استتار کامل در شبکه',
      'مقاومت حداکثری در برابر اختلالات اینترنت بین‌الملل و نوسان شبکه',
      'پشتیبانی در آخرین نسخه‌های نرم‌افزارهای v2box و v2rayN'
    ],
    bestFor: [
      'عبور از شدیدترین اختلالات و محدودیت‌های شبکه',
      'وبگردی پرسرعت و استفاده از تمام اپلیکیشن‌های بین‌المللی'
    ],
    portConfig: 'HTTP/2 & HTTP/3 Dynamic Ports',
    recommendedClients: ['v2box', 'v2rayNG', 'v2rayN']
  },
  {
    id: 'mkcp',
    name: 'mKCP / KCP High-Speed Multiplex',
    tagline: 'پروتکل مبتنی بر KCP با بازیابی سریع پکت‌ها در ارتباط با سرورهای اروپا',
    description: 'پروتکل mKCP برای شرایطی طراحی شده است که شبکه با تاخیر یا کندی در بسته‌های داده مواجه است؛ این پروتکل با جریان چندگانه داده‌ها، انتقال اطلاعات را تضمین می‌کند.',
    iconName: 'Zap',
    transport: 'mKCP Over UDP',
    dpiResistance: 'Stealth Multiplexing',
    lossResistance: 'مقاومت بالا در برابر نوسان شبکه',
    speedRating: 'شتاب‌دهنده دانلود فایل‌های حجیم',
    badge: 'شتاب‌دهنده دانلود و استریم',
    features: [
      'انتقال موازی پکت‌های دیتا با چند رشته همزمان',
      'بازیابی پیشرفته پکت‌های از دست رفته با شتاب سخت‌افزاری',
      'بهینه‌سازی شده برای استورهای دانلود استیم، پلی‌استیشن و ایکس‌باکس',
      'پشتیبانی در تمامی کلاینت‌های مدرن'
    ],
    bestFor: [
      'دانلود سریع آپدیت بازی‌ها از استیم و کنسول‌ها',
      'حذف محدودیت‌های زیرساختی اینترنتی موجود و رفع تحریم برنامه‌ها'
    ],
    portConfig: 'UDP / Dynamic Ports',
    recommendedClients: ['v2box', 'v2rayNG', 'v2rayN']
  },
  {
    id: 'xhttp-vip',
    name: 'xHTTP VIP (Ultra Performance)',
    tagline: 'نسخه اختصاصی و فوق‌سریع xHTTP برای کاربران حرفه‌ای',
    description: 'xHTTP VIP نسخه‌ی ویژه و پرسرعت پروتکل xHTTP است که مخصوص کاربران حرفه‌ای، استریمرها و گیمرها طراحی شده و بالاترین سطح سرعت و پایداری را تضمین می‌کند.',
    iconName: 'Star',
    transport: 'SplitHTTP / HTTP/3 with VIP Boost',
    dpiResistance: 'Maximum (Military Grade)',
    lossResistance: 'Zero-Loss with Dedicated Route',
    speedRating: '3x Faster than Standard xHTTP',
    badge: 'ویژه کاربران حرفه‌ای',
    features: [
      'بالاترین سرعت ممکن در بین همه‌ی پروتکل‌ها',
      'مناسب برای استریمرها و کاربرانی که دانلود حجیم دارن',
      'مقاومت بی‌نظیر در برابر فیلترینگ و اختلالات شبکه',
      'پشتیبانی ویژه و اختصاصی از تیم SQ Nova'
    ],
    bestFor: [
      'کاربران حرفه‌ای و سازمانی',
      'دانلود فایل‌های بسیار سنگین',
      'استریم با کیفیت فوق‌العاده'
    ],
    portConfig: 'Dynamic High-Speed Ports',
    recommendedClients: ['v2box', 'v2rayN']
  }
];

export const CLIENT_APPS: ClientApp[] = [
  {
    id: 'v2box-mobile',
    name: 'v2box (پیشنهادی برای موبایل - iOS و Android)',
    platform: 'android',
    rating: 4.9,
    recommendedFor: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'],
    downloadUrl: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690',
    githubUrl: 'https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box',
    storeBadge: 'پیشنهادی برای موبایل (iOS & Android)',
    guideSteps: [
      'اپلیکیشن v2box را از App Store یا Google Play دانلود و نصب کنید.',
      'لینک ساب هوشمند دریافتی از پشتیبانی را کپی کنید.',
      'در تب Configs دکمه + را بزنید و گزینه Import Subscription را انتخاب فرمایید.',
      'دکمه اتصال را روشن کرده و از کیفیت عالی لذت ببرید.'
    ]
  },
  {
    id: 'v2rayng-mobile',
    name: 'v2rayNG (پیشنهادی برای اندروید)',
    platform: 'android',
    rating: 4.8,
    recommendedFor: ['tcp-reality', 'hysteria2', 'xhttp', 'mkcp'],
    downloadUrl: 'https://github.com/2dust/v2rayNG/releases',
    githubUrl: 'https://play.google.com/store/apps/details?id=com.v2ray.ang',
    storeBadge: 'پیشنهادی اندروید (Google Play / GitHub)',
    guideSteps: [
      'برنامه v2rayNG را باز کنید.',
      'آیکون + در بالای صفحه را لمس کرده و لینک ساب را وارد کنید.',
      'گزینه Update Subscription را بزنید تا تمام نودها ظاهر شوند.',
      'نود مورد نظر را انتخاب و دکمه اتصال دایره‌ای پایین صفحه را بزنید.'
    ]
  },
  {
    id: 'v2rayn-pc',
    name: 'v2rayN (پیشنهادی برای کامپیوتر و ویندوز)',
    platform: 'windows',
    rating: 4.9,
    recommendedFor: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'],
    downloadUrl: 'https://github.com/2dust/v2rayN/releases',
    githubUrl: 'https://github.com/2dust/v2rayN',
    storeBadge: 'پیشنهادی PC (Windows 10 / 11)',
    guideSteps: [
      'آخرین نسخه v2rayN-With-Core را از گیت‌هاب دانلود و اجرا کنید.',
      'از منوی Subscription Setting لینک ساب هوشمند را اضافه کنید.',
      'گزینه Update Subscription را بزنید تا تمام نودها بارگذاری شوند.',
      'حالت System Proxy را روی Set system proxy قرار داده یا برای گیم از Tun Mode استفاده کنید.'
    ]
  }
];