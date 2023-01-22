import { BlogsType } from "@/types/blogs";
import PostCard from "./card/PostCard";

const BlogPosts = ({ blogPosts }: { blogPosts: BlogsType }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {blogPosts.items.map((blog) => (
          <PostCard key={blog.fields.slug} postData={blog} />
        ))}
      </div>
    </>
  );
};

export default BlogPosts;
