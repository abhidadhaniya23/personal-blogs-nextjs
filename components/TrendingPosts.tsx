import { MdTrendingUp } from "react-icons/md";
import { useQuery } from "react-query";
import BlogPosts from "./BlogPosts";
import { getPostBySlug } from "@/contentful/getPostBySlug";
import { Item } from "@/types/blogs";

const TrendingPosts = () => {
  const trendingPosts = [
    {
      slug: "how-i-master-full-stack-development",
    },
    {
      slug: "guide-to-learn-react-js",
    },
    {
      slug: "how-we-have-started-gigaweb-company",
    },
  ];
  const response = useQuery(
    "trendingPostsData",
    () =>
      Promise.all(
        trendingPosts.map((post: { slug: string }) =>
          getPostBySlug(post.slug).then((res) => res)
        )
      )
        .then((res) => res)
        .then((res) => res),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const data = response?.data?.map((post: any) => post?.items[0]) as Item[];

  return (
    <>
      {!response?.isLoading && (
        <div className="py-10 md:py-14 flex flex-col gap-5">
          <h2 className="text-3xl flex flex-row items-center gap-3">
            <MdTrendingUp />
            Trending Posts
          </h2>
          <BlogPosts cols={3} blogPosts={data} />
        </div>
      )}
    </>
  );
};

export default TrendingPosts;
