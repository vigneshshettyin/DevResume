import exp from "constants";

export interface ChipProps {
  skills: string[];
}

export interface WorkDataProperties {
  company: string;
  company_url: string;
  position: string;
  date: string;
  initial_description: string;
  description: string;
  skills: string[];
}

export interface WorkProps {
  WorkData: WorkDataProperties[];
}

export interface ProfileDataProperties {
  name: string;
  photo: string;
  about: string;
  about_slug: string;
  website_url: string;
  personal_email: string;
  resume_url: string;
}

export interface ProfileProps {
  ProfileData: ProfileDataProperties;
}

export interface AboutMeProps {
  AboutMeText: string;
}

export interface DownloadResumeProps {
  resume_url: string;
}