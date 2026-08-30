import {
  ProtocolData,
  ServerNode,
  GameBenchmark,
  ServicePackage,
  GameNetFeature,
  ClientApp,
  FaqItem,
  InternationalServiceBenchmark
} from '../types';

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

export const SERVERS_DATA: ServerNode[] = [
  { id: 'de-hetzner-core', country: 'Germany', countryFa: 'آلمان (Hetzner Dedicated)', city: 'Frankfurt', cityFa: 'فرانکفورت - پورت گیگابیتی 10G', flag: '🇩🇪', datacenter: 'Hetzner Online Center', ping: 58, directPingWithoutSq: 125, load: 28, status: 'optimal', uptime: '99.99%', ipType: 'Germany Static Clean IP', supportedProtocols: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], ipPrefix: 'Hetzner Cluster (Frankfurt)', role: 'Core European Node', autoFailover: true },
  { id: 'nl-apex-core', country: 'Netherlands', countryFa: 'هلند (APEX Datacenter)', city: 'Amsterdam', cityFa: 'آمستردام - نود پرسرعت APEX', flag: '🇳🇱', datacenter: 'APEX Datacenter Amsterdam', ping: 59, directPingWithoutSq: 128, load: 24, status: 'optimal', uptime: '99.99%', ipType: 'Netherlands High-Bandwidth', supportedProtocols: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], ipPrefix: 'APEX NL-AMS Direct', role: 'Core European Node', autoFailover: true },
  { id: 'fi-hetzner-hub', country: 'Finland', countryFa: 'فنلاند (Hetzner Hub)', city: 'Helsinki', cityFa: 'هلسینکی - روتینگ کم‌ترافیک', flag: '🇫🇮', datacenter: 'Hetzner HEL1 Hub', ping: 63, directPingWithoutSq: 130, load: 19, status: 'optimal', uptime: '99.99%', ipType: 'Nordic Dedicated IP', supportedProtocols: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], ipPrefix: 'Hetzner HEL-DC', role: 'Core European Node', autoFailover: true },
  { id: 'tr-istanbul-direct', country: 'Turkey', countryFa: 'ترکیه (Istanbul BGP Direct)', city: 'Istanbul', cityFa: 'استانبول - نزدیک‌ترین نود به ایران', flag: '🇹🇷', datacenter: 'Istanbul BGP Direct Hub', ping: 56, directPingWithoutSq: 110, load: 34, status: 'optimal', uptime: '99.99%', ipType: 'Turkey BGP Core', supportedProtocols: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], ipPrefix: 'Turkey Low-Latency BGP', role: 'Core Turkey Node', autoFailover: true },
  { id: 'ir-mikrotik-hub', country: 'Iran', countryFa: 'ایران (نودهای روتینگ سخت‌افزاری میکروتیک)', city: 'Tehran / Nationwide', cityFa: 'میکروتیک تجمیعی در شاتل، آسیاتک، های‌وب', flag: '🇮🇷', datacenter: 'MikroTik IR Core Datacenters', ping: 8, directPingWithoutSq: 8, load: 21, status: 'optimal', uptime: '99.99%', ipType: 'MikroTik IR Edge', supportedProtocols: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], ipPrefix: 'MikroTik Hardware Cloud Edge', role: 'Iran MikroTik Routing', autoFailover: false }
];

export const GAME_BENCHMARKS: GameBenchmark[] = [
  { id: 'valorant', name: 'Valorant', genre: '', ispDefaultPing: 115, ispDefaultLoss: 25, sqNovaPing: 58, sqNovaLoss: 0, avgJitter: 2.1, recommendedProtocol: 'Hysteria 2 Turbo (مسیر مستقیم اروپا)', serverRegion: 'Istanbul / Frankfurt', testedNote: 'تست‌شده با اوریج جیتر 2.1 ms • ریجستر دقیق تیرها بدون فریز' },
  { id: 'cs2', name: 'Counter-Strike 2', genre: '', ispDefaultPing: 110, ispDefaultLoss: 20, sqNovaPing: 60, sqNovaLoss: 0, avgJitter: 2.3, recommendedProtocol: 'Hysteria 2 Turbo', serverRegion: 'Vienna / Frankfurt', testedNote: 'تست‌شده با ساب‌تیک پایدار و جیتر 2.3 ms بدون قطعی' },
  { id: 'dota2', name: 'Dota 2', genre: '', ispDefaultPing: 112, ispDefaultLoss: 19, sqNovaPing: 57, sqNovaLoss: 0, avgJitter: 2.0, recommendedProtocol: 'Hysteria 2 Turbo', serverRegion: 'Europe East / Stockholm', testedNote: 'تست‌شده با اجرای بدون تاخیر اسکیل‌ها و پکت‌لاس نزدیک به 0' },
  { id: 'eafc', name: 'EA Sports FC 26', genre: '', ispDefaultPing: 118, ispDefaultLoss: 22, sqNovaPing: 61, sqNovaLoss: 0, avgJitter: 2.4, recommendedProtocol: 'Hysteria 2 Turbo', serverRegion: 'Frankfurt / Turkey', testedNote: 'تست‌شده با حذف دیلی پاس و دریبل روان بدون لتنسی' },
  { id: 'warzone', name: 'Call of Duty: Warzone', genre: '', ispDefaultPing: 125, ispDefaultLoss: 30, sqNovaPing: 63, sqNovaLoss: 0, avgJitter: 2.5, recommendedProtocol: 'Hysteria 2 Turbo', serverRegion: 'Middle East / Europe', testedNote: 'Open NAT تضمینی و ویس چت باکیفیت بدون قطعی' },
  { id: 'r6', name: 'Rainbow Six Siege', genre: '', ispDefaultPing: 120, ispDefaultLoss: 21, sqNovaPing: 64, sqNovaLoss: 0, avgJitter: 2.2, recommendedProtocol: 'Hysteria 2 Turbo', serverRegion: 'Europe Central', testedNote: 'تست‌شده با اتصال پایدار به سرورهای یوبی‌سافت' }
];

export const INTERNATIONAL_SERVICES: InternationalServiceBenchmark[] = [
  { id: 'youtube', name: 'YouTube & Streaming 4K/8K', category: 'استریم ویدیو', iconName: 'PlaySquare', speedRating: '4K/8K No Buffer', pingBenefit: 'پخش فوری ویدیو', statusText: 'آزاد کردن حداکثر پهنای باند و بدون افت کیفیت' },
  { id: 'social', name: 'Instagram, Telegram & X', category: 'پیام‌رسان و شبکه اجتماعی', iconName: 'Send', speedRating: 'Instant Media Download', pingBenefit: 'ویس و تماس ویدیویی HD', statusText: 'اتصال دائمی 24 ساعته بدون کوچکترین قطعی' },
  { id: 'trading', name: 'TradingView & Binance & Crypto', category: 'ترید و بازارهای مالی', iconName: 'TrendingUp', speedRating: 'Zero-Delay Order Execution', pingBenefit: 'Clean Static IP', statusText: 'امنیت حداکثری با عدم شناسایی هویت ایرانی' },
  { id: 'ai-tools', name: 'ChatGPT, Claude & AI Platforms', category: 'هوش مصنوعی', iconName: 'Sparkles', speedRating: 'Real-time Streaming Output', pingBenefit: 'Unrestricted Access', statusText: 'سازگار با سرویس‌های مسدودشده OpenAI و Anthropic' },
  { id: 'downloads', name: 'Steam, Epic, PSN & Xbox Downloads', category: 'گیمینگ و استور', iconName: 'Download', speedRating: 'Max Bandwidth Line Rate', pingBenefit: 'mKCP Turbo Protocol', statusText: 'دانلود سریع آپدیت‌های پرحجم بازی‌ها' }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  { id: 'package-universal-smart', name: 'اشتراک جامع با لینک ساب هوشمند', badge: 'محبوب‌ترین و کامل‌ترین', popular: true, trafficLabel: 'ترافیک متنوع بر اساس نیاز شما', userLimit: 'تک‌کاربره و چندکاربره اختصاصی', protocols: ['Hysteria 2 Turbo', 'TCP Raw Reality', 'xHTTP (SplitHTTP)', 'mKCP High-Speed', 'Dynamic Port Hopping'], smartSubIncluded: true, features: ['شامل ۱ لینک ساب هوشمند با تجمیع خودکار تمام پروتکل‌ها', 'پکت‌لاس نزدیک به صفر و آپتایم ۹۹.۹۹٪ برای تمام گیم‌ها و سرویس‌ها', 'پشتیبانی کامل از تمامی اپراتورهای ثابت و همراه (شاتل، آسیاتک، های‌وب، همراه اول، ایرانسل و...)', 'آی‌پی تمیز مناسب ترید، سوشال مدیا، یوتیوب 4K و تماس‌های صوتی', 'پشتیبانی فنی ۲۴/۷ فعال و پاسخگویی سریع'], colorTheme: 'orange', targetAudience: 'انتخاب ایده‌آل برای کاربرانی که به دنبال نهایت سرعت، کیفیت گیمینگ و استفاده روزمره بدون دردسر هستند.', telegramLink: 'https://t.me/ArminSQ' },
  { id: 'package-gaming-esports', name: 'اشتراک حرفه‌ای گیمینگ و تورنمنت (Gaming Pro)', badge: 'ویژه گیمرهای حساس', popular: false, trafficLabel: 'ترافیک گیمینگ بدون محدودیت سرعت', userLimit: 'مناسب PC، کنسول‌های PS5/Xbox و موبایل', protocols: ['Hysteria 2 Turbo (Brisk UDP)', 'TCP Reality', 'xHTTP', 'Dynamic Port Hopping'], smartSubIncluded: true, features: ['شامل لینک ساب هوشمند چند پروتکله با آپدیت خودکار نودها', 'روتینگ اختصاصی میکروتیک از داخل ایران به سرورهای اروپا', 'پشتیبانی کامل از Open NAT و ویس چت دیسکورد بدون تاخیر', 'پشتیبانی ۲۴/۷ مستقیم با مانیتورینگ اختصاصی پینگ'], colorTheme: 'pink', targetAudience: 'مخصوص بازیکنان رنکد، شوتر، MOBA، استریمرها و گیمرهای رقابتی.', telegramLink: 'https://t.me/ArminSQ' },
  { id: 'package-family-multi', name: 'اشتراک چندکاربره خانوادگی و ترید (Multi-User)', badge: 'اقتصادی و پایدار', popular: false, trafficLabel: 'حجم‌های متناسب با مصرف خانوادگی', userLimit: 'اتصال همزمان ۲ الی ۶ کاربر', protocols: ['TCP Raw Reality (TLS)', 'xHTTP (SplitHTTP)', 'Hysteria 2 Turbo', 'mKCP Turbo'], smartSubIncluded: true, features: ['شامل لینک ساب هوشمند با قابلیت استفاده همزمان روی چند دستگاه', 'سازگاری قطعی با تمامی اپراتورهای همراه و شرکت‌های اینترنت خانگی', 'آی‌پی‌های امن و معتبر برای صرافی‌ها و حساب‌های بین‌المللی', 'پشتیبانی ۲۴ ساعته در ۷ روز هفته'], colorTheme: 'purple', targetAudience: 'مناسب استفاده خانگی، چند کاربره، وبگردی بدون قطعی و فعالیت در بازارهای مالی.', telegramLink: 'https://t.me/ArminSQ' },
  { id: 'package-gamenet-enterprise', name: 'پلن اختصاصی گیم‌نت‌ها و کلاب‌های بازی (GameNet)', badge: 'همکاری سازمانی و کلاب‌ها', popular: false, trafficLabel: 'پهنای باند نامحدود اختصاصی گیم‌نت', userLimit: 'پشتیبانی از ۱۰ الی ۱۰۰+ کلاینت در بستر LAN', protocols: ['پیکربندی مستقیم روی MikroTik RouterOS', 'Hysteria 2 Tunneling', 'TCP Reality Backup', 'xHTTP Engine'], smartSubIncluded: true, features: ['پیاده‌سازی مستقیم اسکریپت‌های روتینگ روی روترهای میکروتیک', 'پینگ پایدار ~60 ms و پکت‌لاس نزدیک به صفر روی تمام سیستم‌های گیم‌نت', 'بدون افت کیفیت حتی در زمان پر بودن کامل ظرفیت کلاب بازی', 'کانال اختصاصی پشتیبانی و مانیتورینگ ۲۴/۷ با تیم فنی'], colorTheme: 'cyan', targetAudience: 'ویژه مدیران گیم‌نت‌ها، مجموعه‌های بازی، مراکز واقعیت مجازی و کافه‌گیم‌ها.', telegramLink: 'https://t.me/ArminSQ' }
];

export const GAMENET_FEATURES: GameNetFeature[] = [
  { id: 'mikrotik-integration', title: 'کانفیگ مستقیم روی روترهای میکروتیک', description: 'راه‌اندازی تونل اختصاصی Hysteria 2 و روتینگ بر روی روتربوردهای MikroTik (RouterOS v7) جهت پوشش سراسری شبکه گیم‌نت بدون نیاز به نصب نرم‌افزار روی تک‌تک کلاینت‌ها.', icon: 'Router', highlight: 'پشتیبانی از RouterOS v7 & CCR' },
  { id: 'traffic-isolation', title: 'تفکیک هوشمند ترافیک گیم از دانلود', description: 'سیاست‌های روتینگ پیشرفته برای اولویت‌بندی پکت‌های گیمینگ و دیسکورد، تا حتی در صورت دانلود یا آپدیت یک سیستم، پینگ سایر سیستم‌ها بالا نرود.', icon: 'Split', highlight: 'QoS پیشرفته و ضد لگ' },
  { id: 'stable-low-ping', title: 'پکت‌لاس نزدیک به صفر و آپتایم ۹۹.۹۹٪', description: 'کاهش پینگ سرورهای اروپا و ترکیه با رفع کامل پرش کاراکتر و رجیستر دقیق تیرها در مسابقات و گیم‌پلی مشتریان گیم‌نت.', icon: 'Flame', highlight: 'مناسب تورنمنت‌ها و مسابقات' },
  { id: 'dedicated-support', title: 'پشتیبانی فنی و مانیتورینگ ۲۴/۷ اختصاصی', description: 'ارتباط مستقیم و بی‌واسطه مدیران گیم‌نت با تیم فنی ArminSQ و SQteam جهت مانیتورینگ و تست اختصاصی.', icon: 'Headphones', highlight: 'پشتیبانی ۲۴ ساعته' }
];

export const GAMENET_BENEFITS = GAMENET_FEATURES;

export const CLIENT_APPS: ClientApp[] = [
  { id: 'v2box-mobile', name: 'v2box (پیشنهادی برای موبایل - iOS و Android)', platform: 'android', rating: 4.9, recommendedFor: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], downloadUrl: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690', githubUrl: 'https://play.google.com/store/apps/details?id=dev.hexasoftware.v2box', storeBadge: 'پیشنهادی برای موبایل (iOS & Android)', guideSteps: ['اپلیکیشن v2box را از App Store یا Google Play دانلود و نصب کنید.', 'لینک ساب هوشمند دریافتی از پشتیبانی را کپی کنید.', 'در تب Configs دکمه + را بزنید و گزینه Import Subscription را انتخاب فرمایید.', 'دکمه اتصال را روشن کرده و از کیفیت عالی لذت ببرید.'] },
  { id: 'v2rayng-mobile', name: 'v2rayNG (پیشنهادی برای اندروید)', platform: 'android', rating: 4.8, recommendedFor: ['tcp-reality', 'hysteria2', 'xhttp', 'mkcp'], downloadUrl: 'https://github.com/2dust/v2rayNG/releases', githubUrl: 'https://play.google.com/store/apps/details?id=com.v2ray.ang', storeBadge: 'پیشنهادی اندروید (Google Play / GitHub)', guideSteps: ['برنامه v2rayNG را باز کنید.', 'آیکون + در بالای صفحه را لمس کرده و لینک ساب را وارد کنید.', 'گزینه Update Subscription را بزنید تا تمام نودها ظاهر شوند.', 'نود مورد نظر را انتخاب و دکمه اتصال دایره‌ای پایین صفحه را بزنید.'] },
  { id: 'v2rayn-pc', name: 'v2rayN (پیشنهادی برای کامپیوتر و ویندوز)', platform: 'windows', rating: 4.9, recommendedFor: ['hysteria2', 'tcp-reality', 'xhttp', 'mkcp'], downloadUrl: 'https://github.com/2dust/v2rayN/releases', githubUrl: 'https://github.com/2dust/v2rayN', storeBadge: 'پیشنهادی PC (Windows 10 / 11)', guideSteps: ['آخرین نسخه v2rayN-With-Core را از گیت‌هاب دانلود و اجرا کنید.', 'از منوی Subscription Setting لینک ساب هوشمند را اضافه کنید.', 'گزینه Update Subscription را بزنید تا تمام نودها بارگذاری شوند.', 'حالت System Proxy را روی Set system proxy قرار داده یا برای گیم از Tun Mode استفاده کنید.'] }
];

export const FAQ_DATA: FaqItem[] = [
  { id: 'faq-1', category: 'sub', question: 'لینک ساب هوشمند چیست و چه مزیتی دارد؟', answer: 'تمامی پلن‌های اشتراک SQ nova دارای یک لینک ساب هوشمند جامع هستند. این لینک تمامی پروتکل‌های فعال (Hysteria 2 Turbo, TCP Raw Reality, xHTTP, mKCP) و نودهای اروپایی (هتزنر، APEX و ترکیه) را در خود جای داده است. با بهینه‌سازی سرورها، کانفیگ‌های شما به صورت خودکار و بدون نیاز به دریافت دستی کانفیگ جدید آپدیت خواهند شد.' },
  { id: 'faq-2', category: 'protocols', question: 'پروتکل‌های Hysteria 2، TCP Reality و xHTTP چگونه پکت‌لاس را به نزدیک صفر رسانده و آپتایم ۹۹.۹۹٪ را تضمین می‌کنند؟', answer: 'پروتکل Hysteria 2 بر بستر پیشرفته UDP/QUIC و با الگوریتم کنترل ازدحام Brisk، بسته‌های گم‌شده را بلافاصله بازیابی می‌کند و نوسان پینگ را به حداقل می‌رساند. پروتکل‌های TCP Raw Reality و xHTTP نیز با استتار کامل در ساختار ارتباطی وب‌سایت‌های معتبر، ترافیک را کاملاً نامرئی کرده و از سیستم‌های فیلترینگ عمیق عبور می‌دهند.' },
  { id: 'faq-3', category: 'servers', question: 'روتینگ داخلی میکروتیک در دیتاسنترهای ایران چگونه عمل می‌کند؟', answer: 'برای عبور از اختلالات و محدودیت‌های داخلی، نودهای روتینگ مجهز به سخت‌افزارهای میکروتیک در مراکز داده معتبر ایران (شاتل، آسیاتک، های‌وب و...) مستقر شده‌اند. ترافیک شما ابتدا با سرعت بسیار بالا به نزدیک‌ترین نود داخلی هدایت شده و سپس از طریق تونل‌های امن و پرسرعت به سرورهای اصلی اروپا (هتزنر و APEX) منتقل می‌شود.' },
  { id: 'faq-4', category: 'servers', question: 'آیا این سرویس تمامی بازی‌های آنلاین و سرویس‌های اینترنتی را پوشش می‌دهد؟', answer: 'بله، کاهش پینگ و رفع پکت‌لاس شامل تمامی بازی‌های روز (از شوترهای رقابتی نظیر Valorant و CS2 گرفته تا بازی‌های استراتژیک LoL، Dota 2، ورزشی FC 26 و MMOها) و همچنین تمامی سرویس‌های بین‌المللی اعم از یوتیوب 4K، تلگرام، اینستاگرام، صرافی‌های ترید و ابزارهای هوش مصنوعی می‌شود.' },
  { id: 'faq-5', category: 'gamenet', question: 'شرایط راه‌اندازی و همکاری با گیم‌نت‌ها و کلاب‌های بازی چگونه است؟', answer: 'ما برای گیم‌نت‌ها اسکریپت‌ها و کانفیگ‌های اختصاصی جهت پیاده‌سازی مستقیم روی روترهای میکروتیک گیم‌نت، تفکیک ترافیک گیم از دانلود با QoS، پکت‌لاس نزدیک به صفر و پشتیبانی فنی ۲۴ ساعته ارائه می‌دهیم. جهت مشاوره و تست رایگان در گیم‌نت با پشتیبانی در ارتباط باشید.' },
  { id: 'faq-6', category: 'support', question: 'آیا قبل از خرید اشتراک می‌توانم سوالات و مشاوره‌های لازم را از پشتیبانی بپرسم؟', answer: 'بله حتماً! تیم پشتیبانی به صورت ۲۴ ساعته و با صبوری کامل آماده پاسخگویی به هرگونه سوال، تست سرعت و پینگ روی اینترنت شما، بررسی سازگاری با گیم یا دستگاه‌های شما و ارائه مشاوره رایگان پیش از خرید است.' },
  { id: 'faq-7', category: 'support', question: 'پشتیبانی و نحوه خرید اشتراک و دریافت تست چگونه است؟', answer: 'پشتیبانی فنی SQ nova به صورت ۲۴ ساعته و ۷ روز هفته فعال است. شما می‌توانید جهت ارتباط با پشتیبانی و خرید اشتراک یا دریافت تست رایگان ۲۴ ساعته، از طریق تلگرام با آیدی ArminSQ@ در ارتباط باشید.' }
];

export const FAQ_ITEMS = FAQ_DATA;