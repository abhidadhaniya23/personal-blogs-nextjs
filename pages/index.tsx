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

type PropsType = {
  recentBlogs: BlogsType;
  categories: CategoryType;
};

export default function Home({ recentBlogs, categories }: PropsType) {
  // console.log(recentBlogs.skip + recentBlogs.limit);
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState<any>(recentBlogs.items);

  const response = useQuery(
    "blogs",
    () => {
      console.log("refetching, Page: ", page);
      return getPostsByPage(page);
    },
    {
      // @ts-ignore
      mutation: true,
      refetchOnWindowFocus: true,
    }
  );

  // const data = response.data as EntryCollection<BlogsType>;
  useEffect(() => {
    console.log("response?.data: ", response?.data);
    if (page > 1 && response?.data) {
      console.log("In Condition response?.data: ", response?.data);
      // setBlogs([...(response?.data?.items ?? [])]);
      setBlogs([...blogs, ...(response?.data?.items ?? [])]);
    }
  }, [response.data]);

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
              // response?.data?.skip + response?.data?.limit >=
              response?.data?.total === blogs.length ? "hidden" : "block"
            }`}
          >
            <LoadingButton
              onClick={() => {
                if (response?.data?.total === blogs.length) {
                  return;
                }
                setPage(page + 1);
                console.log("Page: ", page);
                response.refetch();
              }}
              disable={
                response?.isLoading || response?.data?.total === blogs.length
              }
              label="Load More"
              loading={response?.isLoading}
            />
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
