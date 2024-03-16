import { UpArrow } from "./components/arrow";

export default function Resume() {
  return (
    <>
      <div className="flex min-h-screen flex-col max-w-4xl items-center p-6 lg:p-24 mx-auto">
        <div className="flex flex-row w-full gap-6 items- justify-start">
          <img
            alt="profile-image"
            loading="lazy"
            width="110"
            height="110"
            decoding="async"
            data-nimg="1"
            src="https://github.com/vigneshshettyin.png"
            className="rounded-full"
          />
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-3xl text-black">Vignesh Shetty</h1>
            <p className="text-neutral-700 text-sm lg:text-lg">
              Dare to Dream, Dare to Create. 💫
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

        <div className="flex flex-col pt-12 max-w-3xl">
          <h3 className="text-xl py-4 text-black">About</h3>
          <p className="text-neutral-600">
            Hello! I'm a backend wizard, renowned for my ability to transform
            sluggish query response times from a painful 30 minutes to a
            lightning-fast 2-3 seconds. With hands-on expertise, I thrive on
            delving deep into code, optimizing processes, and architecting
            robust solutions that deliver unmatched performance. My track record
            speaks for itself: I'm all about squeezing every drop of efficiency
            out of systems, whether it's through query optimization, database
            wizardry, or algorithmic finesse. If you're ready to revolutionize
            your backend operations and unlock unprecedented speed and
            reliability, let's team up and make magic happen!
          </p>
        </div>
      </div>
    </>
  );
}
