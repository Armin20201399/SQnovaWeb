export type ProtocolType = 'hysteria2' | 'tcp-reality' | 'xhttp' | 'mkcp' | 'xhttp-vip';

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