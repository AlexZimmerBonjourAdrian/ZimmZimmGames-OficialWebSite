export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  platforms: string[];
  features: string[];
  status: 'released' | 'coming_soon';
  universe: string;
} 