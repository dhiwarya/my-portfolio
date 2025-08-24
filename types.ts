
export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  type: 'professional' | 'personal';
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}
