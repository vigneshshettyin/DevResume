import ChipCard from "./chips";
import { ChipProps } from "../interfaces/common";

const Skills: React.FC<ChipProps> = ({ skills }) => {
  return (
    <>
      <h3 className="text-xl py-4 text-black">Tech Stack</h3>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-4 mt-4 justify-center mx-auto">
        <ChipCard skills={skills} />
      </div>
    </>
  );
};

export default Skills;
