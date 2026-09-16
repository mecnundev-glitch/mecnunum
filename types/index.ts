export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  tagline: string;
  year: string;
  technologies: string[];
  tags: string[]; // alias for technologies backwards compatibility
  image: string;
  featured: boolean;
  color?: string;
  accentGradient?: string;
  link?: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  tags: string[];
}
