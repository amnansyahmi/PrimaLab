export interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
}

export interface NavItem {
  name: string;
  path: string;
  children?: NavItem[];
}

export interface ResourceHeader {
  title: string;
  description: string;
}
