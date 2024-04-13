import { LoaderProps } from "@interfaces";

const HeaderLoader: React.FC<LoaderProps> = ({ count }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <div className="flex flex-row gap-14 mt-6 animate-pulse">
        <div className="flex flex-col">
          <div className="h-24 w-24 rounded-full bg-neutral-500 mb-3"></div>
        </div>
        <div className="flex flex-col max-w-2xl justify-center">
          <div className="h-3 rounded-full bg-neutral-500 w-24 mb-2"></div>
          <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
          <div className="flex flex-row justify-between">
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-10 lg:w-20"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-10 lg:w-20"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-10 lg:w-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLoader;
