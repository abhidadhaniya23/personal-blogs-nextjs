import getBlogs from "@/contentful/blogs";
import getCategories from "@/contentful/categories";
import { CategoryType } from "@/types/category";
import { BlogsType } from "@/types/blogs";
import { GetServerSideProps } from "next";
import BlogPosts from "@/components/BlogPosts";
import CategorySidebarLayout from "@/components/layout/CategorySidebarLayout";
import HeroSection from "@/components/HeroSection";
import { RiNewspaperLine } from "react-icons/ri";
import SocialMetaData from "@/components/metadata/SocialMetaData";
import { metaDescription, siteImage, siteUrl, title } from "@/utils/metaData";

type PropsType = {
  recentBlogs: BlogsType;
  categories: CategoryType;
};

export default function Home({ recentBlogs, categories }: PropsType) {
  // console.log(JSON.stringify(categories));
  return (
    <>
      <SocialMetaData
        title={title}
        description={metaDescription}
        image={siteImage}
        url={siteUrl}
      />

      <HeroSection />
      <hr className="border-white/10" />
      <CategorySidebarLayout categories={categories}>
        <>
          <h2 className="text-3xl mb-5 flex flex-row gap-2 items-center text-white/90">
            <RiNewspaperLine /> Recently Posted
          </h2>
          <BlogPosts blogPosts={recentBlogs.items} />
        </>
      </CategorySidebarLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const recentBlogs = await getBlogs();
  const categories = await getCategories();
  return {
    props: {
      recentBlogs,
      categories,
    },
  };
};
