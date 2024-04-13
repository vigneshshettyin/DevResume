import Header from "@components/header";
import AboutMe from "@components/about";
import WorkSection from "@components/work";
import Education from "@components/education";
import WorkLoader from "@components/work-loader";
// Removed in v0.0.1
// import DownloadResume from "@components/download";
import {
  WorkDataProperties,
  ProfileDataProperties,
  ProjectDataProperties,
  SocialLinkProperties,
  EducationDataProperties,
} from "@interfaces";
import Footer from "@components/footer";
import Project from "@components/project";
import Social from "@components/social";

const ProjectSectionData: ProjectDataProperties[] = [
  {
    name: "Meetly",
    display_image: "https://cdn.vshetty.dev/DevResume/vshetty.png",
    type: "Personal Project",
    date: "June 2021 - July 2021",
    description:
      "Meetly is a comprehensive platform that integrates meeting management and video conferencing, offering users a seamless experience for organizing and participating in meetings. The platform is designed to streamline the meeting process, from scheduling to follow-up, and is equipped with advanced features like screen sharing, file sharing, and real-time chat.",
    live_url:
      "https://play.google.com/store/apps/details?id=com.vs.meetly&hl=en_IN&gl=US",
    repo_url: "https://github.com/vigneshshettyin/Meetly",
    skills: ["Kotlin", "Firebase", "Android", "MVVM", "Jitsi SDK"],
  },
];

const WorkSectionData: WorkDataProperties[] = [
  {
    company: "Clarivate",
    company_url: "https://www.clarivate.com",
    position: "Associate Software Engineer",
    date: "July 2022 - Present",
    initial_description:
      "I'm a seasoned developer specializing in life sciences and healthcare platforms. Notable achievements include integrating OLAP engines for real-time analytics solutions. I design robust backend systems, ensuring seamless data management while meeting industry standards.",
    description:
      "I collaborate with cross-functional teams to refine solutions for optimal performance and usability. Actively involved in continuous improvement initiatives, like performance optimization and scalability enhancements, to keep the platform innovative.",
    skills: [
      "Clickhouse",
      "Django",
      "PostgreSQL",
      "Snowflake",
      "AWS",
      "Docker",
      "Big Data",
      "Redis",
      "RabbitMQ",
      "Celery",
      "Grafana k6",
    ],
  },
];

const ProfileSectionData: ProfileDataProperties = {
  name: "<Vignesh />",
  photo: "https://cdn.vshetty.dev/DevResume/image.png",
  about:
    "Unlock unprecedented speed and reliability with a backend wizard renowned for transforming sluggish query response times into lightning-fast results. Let's team up and revolutionize your backend operations with unparalleled efficiency and performance optimization",
  about_slug: "Backend alchemist transforming sluggish to lightning-fast. 💫",
  website_url: "vshetty.dev",
  personal_email: "vignesh@vshetty.dev",
  resume_url: "https://cdn.vshetty.dev/DevResume/resume.pdf",
};

const SocailLinksData: SocialLinkProperties[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vigneshshettyin",
  },
  {
    name: "GitHub",
    url: "https://github.com/vigneshshettyin",
  },
  {
    name: "Personal Blog",
    url: "https://blogs.vshetty.dev",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/vigneshshettyin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/vigneshshettyin",
  },
];

const EducationData: EducationDataProperties[] = [
  {
    date: "Aug 2018 - Jul 2022",
    description: "Bachelor of Engineering in Computer Science",
    institution: "St Joseph Engineering College, Mangaluru",
  },
  {
    date: "Mar 2016 - Mar 2018",
    description: "Pre-University Education, Science Stream (PCMS)",
    institution: "Sharada Pre-University College, Mangaluru",
  },
  {
    date: "Mar 2015 - Mar 2016",
    description: "Secondary School Education, 10th Grade",
    institution: "Sri Sathya Sai Loka Seva High School, Alike",
  },
];

export default function Resume() {
  return (
    <>
      <div className="flex min-h-screen flex-col max-w-4xl items-center p-6 lg:p-24 mx-auto">
        <Header ProfileData={ProfileSectionData} />
        <AboutMe AboutMeText={ProfileSectionData.about} />
        <WorkSection WorkData={WorkSectionData} />
        <Project ProjectData={ProjectSectionData} />
        <Education education={EducationData} />
        <Social SocialLinks={SocailLinksData} />
        <Footer />
      </div>
    </>
  );
}
