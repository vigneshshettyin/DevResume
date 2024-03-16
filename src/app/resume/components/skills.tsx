import ChipCard from "./chips";

const skills: string[] = [
  "Clickhouse",
  "Django",
  "PostgreSQL",
  "Snowflake",
  "AWS",
  "Docker",
];

export default function Skills() {
  return (
    <>
      <h3 className="text-xl py-4 text-black">Tech Stack</h3>
      <div className="grid md:grid-cols-6 grid-cols-3 gap-4 mt-4 justify-center mx-auto">
        <ChipCard skill={skills} />
      </div>
    </>
  );
}
