import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <h5 className="flex flex-row items-center gap-4 text-black">
        Built with ❤️ using
        <a href="https://nextjs.org" target="_blank">
          <Image
            draggable={false}
            alt="next-logo"
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
            data-nimg="1"
            src="https://cdn.vshetty.dev/DevResume/next.svg"
          />
        </a>
      </h5>
    </footer>
  );
};

export default Footer;
