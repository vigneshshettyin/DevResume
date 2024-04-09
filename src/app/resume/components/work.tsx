import UpArrow from "./arrow";
import Skills from "./skills";
import { WorkProps } from "@interfaces";

const WorkSection: React.FC<WorkProps> = ({ WorkData }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Work Experience</h3>
      {WorkData.map((work, index) => (
        <div key={index} className="flex flex-row gap-14 mt-6">
          <div className="flex flex-col text-neutral-600 text-sm w-fit">
            {work.date}
          </div>
          <div className="flex flex-col">
            <h4 className="text-neutral-800 font-semibold">{work.position}</h4>
            <a
              href={work.company_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
            >
              <div className="flex flex-row gap-1 items-center">
                {work.company}
                <UpArrow />
              </div>
            </a>
            <p className="text-neutral-600 max-w-2xl">
              {work.initial_description}
            </p>
            <p className="text-neutral-600 max-w-2xl mt-4">
              {work.description}
            </p>
            <Skills skills={work.skills} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkSection;
