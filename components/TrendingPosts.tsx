import getBlogs from "@/contentful/blogs";
import client from "@/contentful/client";
import { MdTrendingUp } from "react-icons/md";
import { useQuery } from "react-query";
import BlogPosts from "./BlogPosts";
import { BlogsType } from "@/types/blogs";

const TrendingPosts = () => {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    getBlogs().then((res) => res)
  );
  return (
    <>
      <div className="py-10 md:py-14 flex flex-col gap-5">
        <h1 className="text-3xl flex flex-row items-center gap-3">
          <MdTrendingUp />
          Trending Posts
        </h1>
        <BlogPosts cols={3} blogPosts={data?.items} />
      </div>
    </>
  );
};

export default TrendingPosts;
