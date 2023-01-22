import { BlogsType, Item } from "@/types/blogs";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import TableOfContent from "../TableOfContent";
import ReadNext from "../ReadNext";

type PropType = {
  children: JSX.Element;
  tableOfContent: [];
  postSlug: string;
  readNextPosts: BlogsType;
};

const PostPageLayout = ({
  children,
  tableOfContent,
  postSlug,
  readNextPosts,
}: PropType) => {
  const readNext = readNextPosts.items
    .filter((post) => post.fields.slug !== postSlug)
    .slice(0, 3);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-10 border-b border-solid border-white/10">
        <div className="col-span-3">
          <div className="md:flex sticky top-5 my-4 md:mr-4 hidden flex-col gap-5">
            <TableOfContent
              tableOfContent={tableOfContent}
              postSlug={postSlug}
            />
            <ReadNext readNextPosts={readNext} />
          </div>
        </div>
        <div className="col-span-7 pt-5 md:p-5 md:border-l border-solid border-white/10">
          {children}
        </div>
      </div>
    </>
  );
};

export default PostPageLayout;
