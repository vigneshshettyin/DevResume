interface ChipProps {
  skill: string[];
}

const ChipCard: React.FC<ChipProps> = ({ skill }) => {
  return skill.map((skill, index) => (
    <div
      key={index}
      className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 text-gray-700 text-center"
    >
      {skill}
    </div>
  ));
};

export default ChipCard;
