export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  link?: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  capabilities: string[];
}

export interface SceneProps {
  className?: string;
  enableInteraction?: boolean;
}
