import { LoaderProps } from "@interfaces";

const AboutLoader: React.FC<LoaderProps> = ({ count }) => {
  return (
    <div className="flex flex-col py-12 w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">About</h3>
      <div className="flex flex-col max-w-3xl animate-pulse">
        <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
        <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
        <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
        <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
      </div>
    </div>
  );
};

export default AboutLoader;
