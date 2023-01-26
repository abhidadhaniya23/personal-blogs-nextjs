import Navbar from "@/components/navbar/Navbar";
import NewsLetter from "./NewsLetter";
import Head from "next/head";
import TrendingPosts from "../TrendingPosts";
import Footer from "../Footer";
import Gigaweb from "../Gigaweb";
import SocialMetaData from "../metadata/SocialMetaData";
import { metaDescription, siteImage, siteUrl, title } from "@/utils/metaData";
import Script from "next/script";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <SocialMetaData
        title={title}
        description={metaDescription}
        image={siteImage}
        url={siteUrl}
      />
      <div className="text-white lg:px-10 px-5 max-w-6xl mx-auto">
        <Navbar />
        {children}
        <TrendingPosts />
        {/* <LineBreak /> */}
        <NewsLetter />
        {/* <LineBreak /> */}
        <Gigaweb />
        <LineBreak />
        <Footer />
      </div>

      <Script
        id="g_analytics_id"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-N12HB3TGYB`}
      />
      <Script id="g_analytics_script" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-N12HB3TGYB', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </>
  );
};

const LineBreak = () => {
  return <hr className="border-white/10" />;
};

export default Layout;
