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

export interface LoaderProps {
  count: number;
}

export interface WorkLoaderProps {
  count: number;
  headerText: string;
}

export interface EducationDataProperties {
  date: string;
  description: string;
  institution: string;
}

export interface EducationProps {
  education: EducationDataProperties[];
}

export interface SocialLinkProperties {
  name: string;
  url: string;
}

export interface SocialLinksProps {
  SocialLinks: SocialLinkProperties[];
}

export interface ProjectDataProperties {
  name: string;
  display_image: string;
  type: string;
  date: string;
  description: string;
  live_url: string;
  repo_url: string;
  skills: string[];
}

export interface ProjectProps {
  ProjectData: ProjectDataProperties[];
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
