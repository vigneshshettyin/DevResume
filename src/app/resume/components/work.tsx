import UpArrow from "./arrow";
import Skills from "./skills";

export default function WorkSection() {
  return (
    <div className="flex flex-col py-12 max-w-3xl w-full items-start min-w-xl">
      <h3 className="text-xl py-4 text-black">Work Experience</h3>
      <div className="flex flex-row gap-14 mt-6">
        <div className="flex flex-col text-neutral-600 text-sm w-fit">
          July 2022 - Present
        </div>
        <div className="flex flex-col">
          <h4 className="text-neutral-800 font-semibold">
            Associate Software Engineer
          </h4>
          <a
            href="https://clarivate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-950 hover:text-neutral-900 hover:underline transition-all ease-in-out w-fit"
          >
            <div className="flex flex-row gap-1 items-center">
              Clarivate
              <UpArrow />
            </div>
          </a>
          <p className="text-neutral-600 max-w-2xl">
            I'm a seasoned developer specializing in life sciences and
            healthcare platforms. Notable achievements include integrating OLAP
            engines for real-time analytics solutions. I design robust backend
            systems, ensuring seamless data management while meeting industry
            standards. I collaborate with cross-functional teams to refine
            solutions for optimal performance and usability. Actively involved
            in continuous improvement initiatives, like performance optimization
            and scalability enhancements, to keep the platform innovative.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}