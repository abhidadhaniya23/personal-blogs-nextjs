import React from "react";

type PropsType = {
  tableOfContent: [];
  postSlug: string;
};

const TableOfContent = ({ tableOfContent, postSlug }: PropsType) => {
  return (
    <>
      <div className="rounded-lg prose-li:my-0 px-5 py-3 border border-white/10 border-solid">
        <h1 className="text-brand/80 pb-3 text-2xl font-medium border-b border-white/10 border-solid">
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
    </>
  );
};

export default TableOfContent;
