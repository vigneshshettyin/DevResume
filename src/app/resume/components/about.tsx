import { AboutMeProps } from "../interfaces/common";

const AboutMe: React.FC<AboutMeProps> = ({ AboutMeText }) => {
  return (
    <div className="flex flex-col pt-12 max-w-3xl">
      <h3 className="text-xl py-4 text-black">About</h3>
      <p className="text-neutral-600">{AboutMeText}</p>
    </div>
  );
};

export default AboutMe;
