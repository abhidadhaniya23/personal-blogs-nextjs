import { BlogsType } from "@/types/blogs";
import ReadNext from "../ReadNext";

type PropType = {
  children: JSX.Element;
  // tableOfContent: [];
  postSlug: string;
  readNextPosts: BlogsType;
};

const PostPageLayout = ({ children, postSlug, readNextPosts }: PropType) => {
  const readNext = readNextPosts.items
    .filter((post) => post.fields.slug !== postSlug)
    .slice(0, 3);

  return (
    <>
      <div className="flex flex-col gap-5 justify-center border-b border-solid border-white/10">
        <div className="pt-5 md:p-5 w-full sm:w-4/5 md:w-3/4 mx-auto">
          {children}
          <div className="my-10 md:block hidden">
            <ReadNext readNextPosts={readNext} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostPageLayout;
