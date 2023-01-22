import { MdTrendingUp } from "react-icons/md";
import { useQuery } from "react-query/types/react";

const TrendingPosts = () => {
  // const { isLoading, error, data } = useQuery("repoData", () =>

  // );
  return (
    <>
      <div className="py-10 md:py-14 flex flex-col gap-5">
        <h1 className="text-3xl flex flex-row items-center gap-3">
          <MdTrendingUp />
          Trending Posts
        </h1>
      </div>
    </>
  );
};

export default TrendingPosts;
