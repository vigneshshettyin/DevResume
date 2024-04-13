import { WorkLoaderProps } from "@interfaces";

const WorkLoader: React.FC<WorkLoaderProps> = ({ count, headerText }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">{headerText}</h3>
      {[...Array(count)].map((_, index) => (
        <div key={index} className="flex flex-row gap-14 mt-6 animate-pulse">
          <div className="flex flex-col">
            <div className="h-2 rounded-full bg-neutral-500 w-24 mb-3"></div>
            <div className="h-2 rounded-full bg-neutral-500 w-12 mb-4"></div>
          </div>
          <div className="flex flex-col max-w-2xl">
            <div className="h-2.5 rounded-full bg-neutral-500 w-24 mb-2"></div>
            <div className="h-2 rounded-full bg-neutral-500 w-24 mb-4"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-96"></div>
            <div className="h-2 rounded-full bg-neutral-500 mb-2.5 w-48 lg:w-64"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkLoader;
