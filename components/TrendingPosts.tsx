import getBlogs from "@/contentful/blogs";
import { MdTrendingUp } from "react-icons/md";
import { useQuery } from "react-query";
import BlogPosts from "./BlogPosts";

const TrendingPosts = () => {
  const { isLoading, error, data }: any = useQuery("repoData", () =>
    getBlogs().then((res) => res)
  );
  return (
    <>
      <div className="py-10 md:py-14 flex flex-col gap-5">
        <h2 className="text-3xl flex flex-row items-center gap-3">
          <MdTrendingUp />
          Trending Posts
        </h2>
        <BlogPosts cols={3} blogPosts={data?.items.slice(0, 3)} />
      </div>
    </>
  );
};

export default TrendingPosts;
