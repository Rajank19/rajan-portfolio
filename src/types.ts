export interface JobExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  tags: string[];
  bulletPoints: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  bullets: string[];
  bannerUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface CertificateData {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  credentialId?: string;
  type: 'ibm' | 'nptel_cloud' | 'nptel_edge' | 'internship';
  score?: string;
  details: string[];
}
