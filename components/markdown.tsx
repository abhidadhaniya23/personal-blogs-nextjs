import Link from "next/link";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiWarning } from "react-icons/ci";
import { RxPencil2 } from "react-icons/rx";

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

const BlockQuoteComponent = ({ bqClasses, icon, children, color }: any) => (
  <div className={bqClasses}>
    <div
      className={`bg-${color}-500/10 mt-1 md:mt-0 ml-3 mr-0.5 rounded-md p-2`}
    >
      {icon}
    </div>
    <div className="flex align-middle self-center h-full">{children}</div>
  </div>
);

const blockQuote = (props: any) => {
  const iconSize = 18;
  const blockQuoteClasses = (color: string) =>
    `mt-5 border border-solid border-${color}-500/50 rounded-lg prose-p:!pr-2 flex flex-row prose-p:!my-0 py-2 items-start gap-2`;
  const types = {
    warning: {
      slug: "warning",
      color: "yellow",
      icon: <CiWarning className="text-yellow-500" size={iconSize} />,
    },
    note: {
      slug: "note",
      color: "blue",
      icon: <RxPencil2 className="text-blue-500" size={iconSize} />,
    },
    tip: {
      slug: "tip",
      color: "green",
      icon: <HiOutlineLightBulb className="text-green-500" size={iconSize} />,
    },
  };
  const check = (slug: string) =>
    props.children?.map((child: any) =>
      child?.props?.children[0]?.toString().toLowerCase().startsWith(slug)
    )[1];
  const isTip = check(types.tip.slug);
  const isWarning = check(types.warning.slug);
  const isNote = check(types.note.slug);
  // Note, warning, error, info, tip

  return (
    <>
      {isTip ? (
        <BlockQuoteComponent
          color={types.tip.color}
          bqClasses={blockQuoteClasses(types.tip.color)}
          icon={types.tip.icon}
          children={props.children}
        />
      ) : isWarning ? (
        <BlockQuoteComponent
          color={types.warning.color}
          bqClasses={blockQuoteClasses(types.warning.color)}
          icon={types.warning.icon}
          children={props.children}
        />
      ) : isNote ? (
        <BlockQuoteComponent
          color={types.note.color}
          bqClasses={blockQuoteClasses(types.note.color)}
          icon={types.note.icon}
          children={props.children}
        />
      ) : (
        <blockquote>{props.children}</blockquote>
      )}
    </>
  );
};

const image = (props: any) => {
  const { src, alt, title } = props;
  return (
    <Image
      draggable={false}
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
      className="hide-scrollbar !bg-black border border-solid border-white/10 rounded-lg"
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

export { link, hr, code, h1, h2, h3, h4, h5, image, blockQuote };
