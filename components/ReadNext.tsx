import { Item } from "@/types/blogs";
import Link from "next/link";
import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type PropsType = {
  readNextPosts: Item[];
};

const ReadNext = ({ readNextPosts }: PropsType) => {
  return (
    <>
      <div className="rounded-lg px-5 py-3 border border-white/10 border-solid">
        <h1 className="text-brand/80 pb-3 text-2xl font-medium border-b border-white/10 border-solid">
          Read Next
        </h1>
        <div className="grid grid-flow-row mt-3 gap-2 text-white/60">
          {readNextPosts.map((post: Item) => (
            <Link
              key={post.fields.slug}
              href={post.fields.slug}
              className="group grid grid-flow-col gap-1 justify-start items-start"
            >
              <AiOutlineDoubleRight className="mt-1 text-brand" />
              <h3 className="group-hover:text-brand">{post.fields.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReadNext;
