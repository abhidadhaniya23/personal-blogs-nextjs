import Link from "next/link";

type PropsType = {
  children: any;
  link: string;
  external?: boolean;
};

const LinkButton = ({ children, link, external }: PropsType) => {
  return (
    <>
      {external ? (
        <a
          href={link}
          target={"_blank"}
          rel="noreferrer"
          className={`btn w-36 items-center`}
        >
          {children}
        </a>
      ) : (
        <Link href={link} className={`btn w-64 text-center items-center`}>
          {children}
        </Link>
      )}
    </>
  );
};

export default LinkButton;
