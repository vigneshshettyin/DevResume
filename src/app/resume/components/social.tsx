import UpArrow from "./arrow";
import { SocialLinksProps } from "@interfaces";

const Social: React.FC<SocialLinksProps> = ({ SocialLinks }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Contact</h3>
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start">
        {SocialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
          >
            <div className="flex flex-row gap-1 items-center">
              {social.name}
              <UpArrow />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
