import { LoaderProps } from "@interfaces";

const SocailLoader: React.FC<LoaderProps> = ({ count }) => {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Contact</h3>
      <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-start">
        {[...Array(count)].map((_, index) => (
          <div
            key={index}
            className="flex flex-row gap-1 items-center animate-pulse"
          >
            <div className="h-3 rounded-full bg-neutral-500 w-24"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocailLoader;
