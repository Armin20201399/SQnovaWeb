export type ProtocolType = 'hysteria2' | 'tcp-reality' | 'xhttp' | 'mkcp';

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
  speedRating?: string | number;
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
  status: 'optimal' | 'good' | 'maintenance';
  uptime: string;
  ipType: string;
  supportedProtocols: ProtocolType[];
  ipPrefix: string;
  role: string;
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
  avgJitter: number; // e.g. 2.1 ms
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
  recommendedFor: ProtocolType[];
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
