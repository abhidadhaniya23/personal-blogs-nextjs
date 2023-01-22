import getBlogs from "@/contentful/blogs";
import getCategories from "@/contentful/categories";
import { CategoryType } from "@/types/category";
import { BlogsType } from "@/types/blogs";
import { GetServerSideProps } from "next";
import Head from "next/head";
import BlogPosts from "@/components/BlogPosts";
import CategorySidebarLayout from "@/components/layout/CategorySidebarLayout";
import HeroSection from "@/components/HeroSection";

type PropsType = {
  recentBlogs: BlogsType;
  categories: CategoryType;
};

export default function Home({ recentBlogs, categories }: PropsType) {
  // console.log(JSON.stringify(categories));
  return (
    <>
      <Head>
        <title>Abhi's Blogs</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <hr className="border-white/10" />
      <CategorySidebarLayout categories={categories}>
        <>
          <h1 className="text-2xl mb-5"> Recently Posted</h1>
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
