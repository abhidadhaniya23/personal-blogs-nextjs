import { SiInstagram } from "react-icons/si";
import { FiTwitter, FiGithub, FiMail } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { SiMedium, SiDevdotto, SiHashnode } from "react-icons/si";
import { RiShareCircleFill } from "react-icons/ri";

// social media links, blogs platforms, products, author card

type LinksProps = {
  label: string;
  link: string;
  icon?: JSX.Element;
};

const iconStyle = "text-white/70 text-lg";

const Footer = () => {
  const productLinks = [
    { label: "Foodie VVN", link: "https://foodievvn.com/" },
    { label: "GigaResources", link: "https://gigaresources.xyz/" },
  ];
  const blogLinks = [
    {
      label: "Medium",
      icon: <SiMedium className={iconStyle} />,
      link: "https://abhidadhaniya.medium.com/",
    },
    {
      label: "Dev.to",
      icon: <SiDevdotto className={iconStyle} />,
      link: "https://dev.to/abhidadhaniya23",
    },
    {
      label: "Hashnode",
      icon: <SiHashnode className={iconStyle} />,
      link: "https://abhisblogs.hashnode.dev/",
    },
  ];

  return (
    <>
      <footer className="py-10 grid grid-cols-1 sm:grid-cols-2 justify-center md:grid-cols-4 gap-5">
        <div className="col-span-1 flex flex-col gap-4 rounded-lg border border-white/10 p-5">
          <h4 className="text-2xl font-normal text-brand">Author</h4>
          <hr className="border-white/10" />
          <div className="flex flex-col gap-2">
            <h4 className="text-lg">Abhi Dadhaniya</h4>
            <p className="text-white/50">
              I am a full stack developer. I create stunning websites and
              applications.
            </p>
            <a
              className="flex flex-row items-center gap-2"
              href={"https://abhidadhaniya.com/"}
            >
              <RiShareCircleFill className={iconStyle} />
              Portfolio
            </a>
          </div>
        </div>

        <ConnectSocialsComponent />
        <LinksComponent productLinks={productLinks} heading="Products" />
        <LinksComponent blogLinks={blogLinks} heading="Blog Platforms" />
      </footer>
      <hr className="border-white/10" />
      <div className="py-10 w-full text-center text-white/50 [word-spacing:2px]">
        Made with ❤️ by{" "}
        <a
          className="border-b border-dashed border-brand text-white/80 hover:text-brand"
          href={"https://abhidadhaniya.com/"}
        >
          Abhi Dadhaniya
        </a>
      </div>
    </>
  );
};

type LinksComponentProps = {
  productLinks?: { label: string; link: string }[];
  socialLinks?: { label: string; link: string; icon: JSX.Element }[];
  blogLinks?: { label: string; link: string; icon: JSX.Element }[];
  heading: string;
};

const LinksComponent = ({
  productLinks,
  socialLinks,
  blogLinks,
  heading,
}: LinksComponentProps) => {
  return (
    <>
      <div className="col-span-1 flex flex-col border border-solid border-white/10 gap-4 p-5 rounded-lg">
        <h3 className="text-xl md:text-2xl font-normal text-brand">
          {heading}
        </h3>
        <hr className="border-white/10" />
        <div className="flex flex-col gap-2 pl-2">
          {(productLinks || socialLinks || blogLinks)?.map(
            (link: LinksProps) => (
              <a
                key={link.link}
                href={link.link}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-white flex gap-2 items-center"
              >
                {productLinks ? (
                  <RiShareCircleFill className={iconStyle} />
                ) : (
                  link.icon
                )}
                {link.label}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
};

export const ConnectSocialsComponent = () => {
  const socialLinks = [
    {
      label: "Instagram",
      link: "https://www.instagram.com/_abhi_dadhaniya_/",
      icon: <SiInstagram className={iconStyle} />,
    },
    {
      label: "Twitter",
      link: "https://twitter.com/abhidadhaniya3",
      icon: <FiTwitter className={iconStyle} />,
    },
    {
      label: "Github",
      link: "https://github.com/abhidadhaniya23",
      icon: <FiGithub className={iconStyle} />,
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/abhidadhaniya/",
      icon: <RiLinkedinLine className={iconStyle} />,
    },
    {
      label: "Email",
      link: "mailto:abhidadhaniya23@gmail.com",
      icon: <FiMail className={iconStyle} />,
    },
  ];
  return (
    <>
      <LinksComponent socialLinks={socialLinks} heading="Let's Connect" />
    </>
  );
};

export default Footer;
