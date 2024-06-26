import ChipCard from "./chips";
import { ChipProps } from "@interfaces";

const Skills: React.FC<ChipProps> = ({ skills }) => {
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 mt-4 justify-center mx-auto">
        <ChipCard skills={skills} />
      </div>
    </>
  );
};

export default Skills;
