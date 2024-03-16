import Image from "next/image";
import UpArrow from "./arrow";

export default function Header() {
  return (
    <div className="flex flex-row w-full gap-6 items- justify-start">
      <Image
        alt="profile-image"
        loading="lazy"
        width="110"
        height="110"
        src="https://github.com/vigneshshettyin.png"
        className="rounded-full"
      />
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-3xl text-black">Vignesh Shetty</h1>
        <p className="text-neutral-700 text-sm lg:text-lg">
          Backend alchemist transforming sluggish to lightning-fast. 💫
        </p>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
        >
          <div className="flex flex-row gap-1 items-center">
            vshetty.dev <UpArrow />
          </div>
        </a>
      </div>
    </div>
  );
}
