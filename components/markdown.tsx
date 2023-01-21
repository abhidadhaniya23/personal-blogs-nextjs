import Link from "next/link";

import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import Image from "next/image";

const link = (props: any) => {
  const { href, children }: { href: string; children: JSX.Element } = props;
  if (href.startsWith("/") || href.includes("blogs.abhidadhaniya.com"))
    return <Link href={href}>{children}</Link>;

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
};

const hr = () => {
  return <hr className="my-5 border-white/10" />;
};

const image = (props: any) => {
  const { src, alt, title } = props;
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={640}
      className="rounded-lg"
      height={500}
    />
  );
};

const code = (props: any) => {
  const match = /language-(\w+)/.exec(props.className || "");
  const { children, className, inline } = props;
  const language = className?.replace(/language-/, "");
  return !inline && match ? (
    <SyntaxHighlighter
      language={language}
      className="hide-scrollbar !bg-black border-[1px] border-solid border-white/10 rounded-lg"
      style={nightOwl}
      PreTag={"div"}
    >
      {children}
    </SyntaxHighlighter>
  ) : (
    <code className={`${props.className} text-white/60`}>`{children}`</code>
  );
};

const h1 = ({ node, ...props }: any) => (
  // @ts-ignore
  <h1
    id={props.children.toString().replaceAll(" ", "-").toLowerCase()}
    {...props}
  />
);
const h2 = ({ node, ...props }: any) => (
  // @ts-ignore
  <h2
    id={props.children.toString().replaceAll(" ", "-").toLowerCase()}
    {...props}
  />
);
const h3 = ({ node, ...props }: any) => (
  // @ts-ignore
  <h3
    id={props.children.toString().replaceAll(" ", "-").toLowerCase()}
    {...props}
  />
);
const h4 = ({ node, ...props }: any) => (
  // @ts-ignore
  <h4
    id={props.children.toString().replaceAll(" ", "-").toLowerCase()}
    {...props}
  />
);
const h5 = ({ node, ...props }: any) => (
  // @ts-ignore
  <h5
    id={props.children.toString().replaceAll(" ", "-").toLowerCase()}
    {...props}
  />
);

export { link, hr, code, h1, h2, h3, h4, h5, image };
