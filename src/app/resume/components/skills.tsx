import ChipCard from "./chips";
import { ChipProps } from "@interfaces";

const Skills: React.FC<ChipProps> = ({ skills }) => {
  return (
    <>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-2 w-full">
        <ChipCard skills={skills} />
      </div>
    </>
  );
};

export default Skills;
