import { getPostsByPage } from "@/contentful/blogs";
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
import { useQuery } from "react-query";
import LoadingButton from "@/components/buttons/LoadingButton";
import { useEffect, useState } from "react";
import { BsChevronDoubleDown } from "react-icons/bs";

type PropsType = {
  recentBlogs: BlogsType;
  categories: CategoryType;
};

export default function Home({ recentBlogs, categories }: PropsType) {
  const [blogs, setBlogs] = useState<any>(recentBlogs.items);

  const response = useQuery(
    "blogs",
    () => getPostsByPage(blogs.length / recentBlogs.limit + 1),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    // @ts-ignore
    if (response?.data?.skip >= 2) {
      setBlogs([...blogs, ...(response?.data?.items ?? [])]);
    }
  }, [response?.data]);

  if (response?.isLoading) {
    return <div>Loading...</div>;
  }
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
          <BlogPosts blogPosts={blogs} />
          <div
            className={`flex flex-row gap-2 justify-center items-center mt-4 ${
              response?.data?.total === blogs.length ? "hidden" : "block"
            }`}
          >
            <LoadingButton
              onClick={() => {
                response.refetch();
              }}
              disable={
                response?.isLoading || response?.data?.total === blogs.length
              }
              loading={response?.isLoading}
            >
              <div className="flex flex-row items-center gap-2">
                Load More <BsChevronDoubleDown />
              </div>
            </LoadingButton>
          </div>
        </>
      </CategorySidebarLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const recentBlogs = await getPostsByPage(1);
  const categories = await getCategories();
  return {
    props: {
      recentBlogs,
      categories,
    },
  };
};
