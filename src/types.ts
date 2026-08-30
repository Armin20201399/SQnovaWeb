export type ProtocolType = 'hysteria2' | 'tcp-reality' | 'xhttp' | 'mkcp' | 'xhttp-vip';

export type ServerRole = 'edge' | 'hub' | 'relay';
export type IpType = 'ipv4' | 'ipv6';
export type RecommendedProtocol = ProtocolType;
export type ServerStatus = 'optimal' | 'good' | 'maintenance';

export interface ProtocolInfo {
  id: ProtocolType;
  name: string;
  badge: string;
  category?: 'gaming' | 'anti-censorship' | 'download';
  iconName: string;
  tagline: string;
  description: string;
  features: string[];
  transport: string;
  lossResistance: string;
  dpiResistance: string;
  speedRating?: string;
  pingScore?: number;
  bestFor: string[];
  portConfig: string;
  recommendedClients?: string[];
}

export type ProtocolData = ProtocolInfo;

export interface ServerNode {
  id: string;
  country: string;
  countryFa: string;
  city: string;
  cityFa: string;
  flag: string;
  datacenter: string;
  ping: number;
  directPingWithoutSq: number;
  load: number;
  status: ServerStatus;
  uptime: string;
  ipType: string; // به string برگشت تا با داده‌های فعلی سازگار باشد
  supportedProtocols: ProtocolType[];
  ipPrefix: string;
  role: string; // به string برگشت تا با داده‌های فعلی سازگار باشد
  autoFailover: boolean;
}

export interface GameBenchmark {
  id: string;
  name: string;
  genre: string;
  ispDefaultPing: number;
  ispDefaultLoss: number;
  sqNovaPing: number;
  sqNovaLoss: number;
  avgJitter: number;
  recommendedProtocol: string;
  serverRegion: string;
  testedNote: string;
}

export interface InternationalServiceBenchmark {
  id: string;
  name: string;
  category: string;
  iconName: string;
  speedRating: string;
  pingBenefit: string;
  statusText: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  trafficLabel: string;
  userLimit: string;
  protocols: string[];
  smartSubIncluded: boolean;
  features: string[];
  colorTheme: 'orange' | 'pink' | 'purple' | 'cyan';
  targetAudience: string;
  telegramLink: string;
}

export interface ClientApp {
  id: string;
  name: string;
  platform: 'android' | 'ios' | 'windows' | 'macos' | 'linux';
  rating: number;
  recommendedFor: RecommendedProtocol[];
  downloadUrl: string;
  githubUrl?: string;
  storeBadge?: string;
  guideSteps: string[];
}

export interface GameNetFeature {
  id: string;
  title: string;
  description: string;
  desc?: string;
  icon: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'protocols' | 'servers' | 'gamenet' | 'support' | 'sub';
}