import { domain } from "@/utils/config";
import Link from "next/link";

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

export { link, hr };
