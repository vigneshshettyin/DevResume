import Header from "@components/header";
import AboutMe from "@components/about";
import WorkSection from "@components/work";
import DownloadResume from "@components/download";
import { WorkDataProperties, ProfileDataProperties } from "./interfaces/common";

const workSectionData: WorkDataProperties[] = [
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

export default function Resume() {
  return (
    <>
      <div className="flex min-h-screen flex-col max-w-4xl items-center p-6 lg:p-24 mx-auto">
        <Header ProfileData={ProfileSectionData} />
        <AboutMe AboutMeText={ProfileSectionData.about} />
        <WorkSection WorkData={workSectionData} />
        <DownloadResume resume_url={ProfileSectionData.resume_url} />
      </div>
    </>
  );
}
