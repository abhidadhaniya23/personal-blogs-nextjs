import { Item } from "@/types/blogs";
import PostCard from "./card/PostCard";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
        <TransitionGroup component={null}>
          {blogPosts?.map((blog) => (
            <CSSTransition
              timeout={100}
              classNames="fade"
              key={blog.fields.slug}
            >
              <PostCard postData={blog} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
};

export default BlogPosts;
