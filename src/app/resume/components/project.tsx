import UpArrow from "./arrow";
import Skills from "./skills";
import { ProjectProps } from "@interfaces";

const ProjectSection: React.FC<ProjectProps> = ({ ProjectData }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Projects</h3>
      <div className="flex flex-col space-y-12 mt-4">
      {ProjectData.map((project, index) => (
        <div key={index} className="flex flex-row gap-14">
          <div className="flex flex-col space-y-2">
          <div className="text-neutral-600 text-sm">
            {project.date}
          </div>
            <h4 className="text-neutral-800 font-semibold">{project.name}</h4>
            <div className="flex flex-row">
              <a
                href={project.repo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
              >
                <div className="flex flex-row gap-1 items-center">
                  GitHub URL
                  <UpArrow />
                </div>
              </a>
              {project.live_url && (
                <a
                  href={project.live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit pl-3"
                >
                  <div className="flex flex-row gap-1 items-center">
                    Live URL
                    <UpArrow />
                  </div>
                </a>
              )}
            </div>
            <p className="text-neutral-600 max-w-2xl mt-4">
              {project.description}
            </p>
            <Skills skills={project.skills} />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProjectSection;
