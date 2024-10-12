import { ChipProps } from "@interfaces";

const ChipCard: React.FC<ChipProps> = ({ skills }) => {
  return skills.map((skill, index) => (
    <div
      key={index}
      className="flex justify-center items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 text-gray-700 text-center"
    >
      <p className="text-neutral-600"> {skill}</p>
    </div>
  ));
};

export default ChipCard;
