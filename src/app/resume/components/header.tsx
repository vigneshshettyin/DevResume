import Image from "next/image";
import UpArrow from "./arrow";
import { ProfileProps } from "@interfaces";

const Header: React.FC<ProfileProps> = ({ ProfileData }) => {
  return (
    <div className="flex flex-col lg:items-start items-center lg:flex-row lg:w-fit space-x-0 lg:space-x-12 space-y-6 w-full">
      <img src="./pic.webp" className="w-32 h-32 rounded-full" />
      <div className="flex flex-col space-y-1">
        <h1 className="text-3xl text-black text-center lg:text-left">{ProfileData.name}</h1>
        <p className="text-neutral-700 text-sm text-center lg:text-lg">
          {ProfileData.about_slug}
        </p>
        <div className="flex flex-row lg:justify-start justify-center">
          <a
            href={`mailto:${ProfileData.personal_email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
          >
            <div className="flex flex-row gap-1 items-center">
              {ProfileData.personal_email} <UpArrow />
            </div>
          </a>
          <a
            href={`${ProfileData.resume_url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit ml-3"
          >
            <div className="flex flex-row gap-1 items-center">
              resume <UpArrow />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
