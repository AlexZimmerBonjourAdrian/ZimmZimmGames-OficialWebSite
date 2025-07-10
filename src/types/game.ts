export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  platforms: string[];
  features: string[];
  status: 'released' | 'development';
  universe: string;
  repository?: string;
  steamUrl?: string;
} 