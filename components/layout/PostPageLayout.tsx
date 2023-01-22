import { BlogsType, Item } from "@/types/blogs";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";
import TableOfContent from "../TableOfContent";

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
  const readNext = readNextPosts.items.filter(
    (post) => post.fields.slug !== postSlug
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-10">
        <div className="col-span-3">
          <div className="md:flex sticky top-5 my-4 md:mr-4 hidden flex-col gap-5">
            <TableOfContent
              tableOfContent={tableOfContent}
              postSlug={postSlug}
            />
            <div className="rounded-lg px-5 py-3 border border-white/10 border-solid">
              <h1 className="text-brand pb-3 text-2xl font-medium border-b border-white/10 border-solid">
                Read Next
              </h1>
              <div className="grid grid-flow-row mt-3 gap-2 text-white/60">
                {readNext.map((post: Item) => (
                  <Link
                    key={post.fields.slug}
                    href={post.fields.slug}
                    className="group grid grid-flow-col gap-1 justify-start items-start"
                  >
                    <AiOutlineDoubleRight className="mt-1 text-brand" />
                    <h3 className="group-hover:text-brand">
                      {post.fields.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-7 pt-5 lg:p-5 md:border-l border-solid border-white/10">
          {children}
        </div>
      </div>
    </>
  );
};

export default PostPageLayout;
