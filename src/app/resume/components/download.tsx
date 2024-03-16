export default function DownloadResume() {
  return (
    <>
      <div className="fixed bottom-4 right-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-900 py-1.5 px-3 text-gray-700 text-center hover:bg-gray-50"
        >
          Download Resume
        </a>
      </div>
    </>
  );
}
