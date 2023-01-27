import { author, metaDescription, siteImage, siteUrl } from "@/utils/metaData";
import Head from "next/head";

type PropsType = {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  pageType?: string;
};

const SocialMetaData = (props: PropsType) => {
  const { title, description, image, url, pageType } = props;
  const pageTitle = `${pageType === "tag" ? "Category - " : ""} ${title} ${
    pageType === "post" || pageType === "tag" ? " | Abhi's Blogs" : ""
  }`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="theme-color" content="#000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="google-site-verification"
          content="VsmjAnwqQzU4V2OyZHMBAEz3_h26oLzvfFRzvMKPYbs"
        />
        <meta
          name="description"
          content={!description ? metaDescription : description}
        />

        {/* Open graph meta data */}
        <meta property="og:title" content={pageTitle} key="title" />
        <meta
          property="og:description"
          content={!description ? metaDescription : description}
          key="description"
        />
        <meta
          property="og:image"
          content={!image ? siteImage : image}
          key="image"
        />
        <meta property="og:url" content={!url ? siteUrl : url} key="url" />
        <meta property="og:site_name" content="Abhi's Blogs" key="site_name" />
        <meta property="og:type" content="website" key="type" />

        {/* Twitter Meta data */}
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter_card"
        />
        <meta
          name="twitter:creator"
          content="@AbhiDadhaniya3"
          key="twitter_creator"
        />
        <meta name="twitter:title" content={pageTitle} key="twitter_title" />
        <meta
          name="twitter:description"
          content={!description ? metaDescription : description}
          key="twitter_description"
        />
        <meta
          name="twitter:image"
          content={!image ? siteImage : image}
          key="twitter_image"
        />

        {/* Other Meta data */}
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content={author} />
      </Head>
    </>
  );
};

export default SocialMetaData;
