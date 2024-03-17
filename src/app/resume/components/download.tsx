import { DownloadResumeProps } from "../interfaces/common";

const DownloadResume: React.FC<DownloadResumeProps> = ({ resume_url }) => {
  return (
    <div className="bottom-4 right-4 fixed">
      <a
        href={resume_url}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg border border-gray-900 py-1.5 px-3 text-gray-700 text-center hover:bg-gray-50"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadResume;
