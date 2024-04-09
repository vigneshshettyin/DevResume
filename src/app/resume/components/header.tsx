import Image from "next/image";
import UpArrow from "./arrow";
import { ProfileProps } from "@interfaces";

const Header: React.FC<ProfileProps> = ({ ProfileData }) => {
  return (
    <div className="flex flex-row w-full gap-6 items- justify-start">
      <Image
        alt="profile-image"
        loading="lazy"
        width="110"
        draggable={false}
        height="110"
        src={ProfileData.photo}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-3xl text-black">{ProfileData.name}</h1>
        <p className="text-neutral-700 text-sm lg:text-lg">
          {ProfileData.about_slug}
        </p>
        <div className="flex flex-row">
          <a
            href={`https://${ProfileData.website_url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
          >
            <div className="flex flex-row gap-1 items-center">
              {ProfileData.website_url} <UpArrow />
            </div>
          </a>
          <a
            href={`mailto:${ProfileData.personal_email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit ml-3"
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
