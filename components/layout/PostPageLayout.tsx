import { BlogsType, Item } from "@/types/blogs";
import Link from "next/link";
import { AiOutlineDoubleRight } from "react-icons/ai";

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
      <div className="grid grid-cols-10">
        <div className="col-span-3">
          <div className="sticky top-5 my-4 mr-4 flex flex-col gap-5">
            <div className="rounded-lg p-5 border-[1px] border-white/10 border-solid">
              <h1 className="text-brand pb-3 text-3xl font-medium border-b-[1px] border-white/10 border-solid">
                Table of Contents
              </h1>
              {tableOfContent.length > 0 && (
                <ul className="flex flex-col gap-1.5 pt-4 pl-5">
                  {tableOfContent.map((heading: any) => (
                    <li
                      key={heading.text}
                      className="list-disc marker:text-brand text-white/50 hover:text-white"
                    >
                      <a href={postSlug + "#" + heading.link}>{heading.text}</a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="rounded-lg p-5 border-[1px] border-white/10 border-solid">
              <h1 className="text-brand pb-3 text-3xl font-medium border-b-[1px] border-white/10 border-solid">
                Read Next
              </h1>
              <div className="grid grid-flow-row mt-3 gap-2 text-white/60">
                {readNext.map((post: Item) => (
                  <Link
                    href={post.fields.slug}
                    className="group grid grid-flow-col gap-1 items-start"
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
        <div className="col-span-7 p-5 border-l-[1px] border-solid border-white/10">
          {children}
        </div>
      </div>
    </>
  );
};

export default PostPageLayout;
