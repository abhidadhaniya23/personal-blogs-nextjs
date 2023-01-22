import Navbar from "@/components/navbar/Navbar";
import NewsLetter from "./NewsLetter";
import Head from "next/head";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#000" />
      </Head>
      <div className="text-white lg:px-10 px-5 max-w-6xl mx-auto">
        <Navbar />
        {children}
        <div className="py-16 border-y border-solid border-white/10">
          <NewsLetter />
        </div>
      </div>
    </>
  );
};

export default Layout;
