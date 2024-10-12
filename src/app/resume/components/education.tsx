import { EducationProps } from "@interfaces";

const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <div className="flex flex-col py-8 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Education</h3>
      {education.map((edu, index) => (
        <div key={index} className="flex flex-row lg:gap-14 gap-6 mt-6">
          <div className="flex flex-col lg:space-y-0 space-y-1">
          <div className="flex flex-col space-y-1 text-neutral-600 text-sm w-fit">
            {edu.date}
          </div>
            <h4 className="text-neutral-700 font-semibold">
              {edu.description}
            </h4>
            <h5 className="text-neutral-500">{edu.institution}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
