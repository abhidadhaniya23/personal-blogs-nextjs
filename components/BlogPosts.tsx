import { Item } from "@/types/blogs";
import PostCard from "./card/PostCard";

type PropsType = {
  blogPosts: Item[];
  cols?: number;
};

const BlogPosts = ({ blogPosts, cols }: PropsType) => {
  return (
    <>
      <div
        className={`grid grid-cols-1 gap-4 ${
          cols ? `lg:grid-cols-${cols} sm:grid-cols-2` : "sm:grid-cols-2"
        }`}
      >
        {blogPosts?.map((blog) => (
          <PostCard key={blog.fields.slug} postData={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
