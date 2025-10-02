export interface Project {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string | null;
  demo_url?: string | null;
  created_at: string;
}

export interface ProjectCreate {
  title: string;
  description: string;
  tech_stack: string;
  github_url?: string;
  demo_url?: string;
}
