import PostPageLayout from "@/components/layout/PostPageLayout";
import { GetServerSideProps } from "next";
import { getBlogs } from "@/contentful/blogs";
import { Item } from "@/types/blogs";
import ReactMarkdown from "react-markdown";
import { hr, link } from "@/components/markdown";

const PostContent = ({
  post,
  data,
  content,
}: {
  post: any;
  data: any;
  content: any;
}) => {
  return (
    <>
      {/* <PortableText value={content} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      <PostPageLayout>
        <article className="prose-base prose-li:list-disc prose-li:marker:text-brand prose-blockquote:bg-gray-700/10 prose-blockquote:rounded-br-lg prose-blockquote:rounded-tr-lg prose-blockquote:px-5 prose-strong:text-white/70 prose-code:bg-white/10 prose-code:mx-1 prose-code:p-1 prose-code:rounded-lg prose-blockquote:py-0.5 prose-blockquote:border-l-2 prose-blockquote:border-solid prose-blockquote:border-white/50 prose-blockquote:text-white/60 mx-auto prose-headings:text-white/80 prose-headings:font-semibold  prose-a:no-underline prose-a:border-b-[1px] prose-a:pb-0.5 prose-a:border-dashed prose-a:border-brand/70 hover:prose-a:border-solid hover:prose-a:border-brand prose-p:font-normal prose-a:text-white/60 hover:prose-a:text-white prose-a:mx-1 text-white/50">
          <ReactMarkdown
            components={{
              // img: ({ node, ...props }) => (
              //   <img className="text-base" {...props} />
              // ),
              // code: ({ node, ...props }) => (
              //   <code className="text-base" {...props} />
              // ),
              // pre: ({ node, ...props }) => (
              //   <pre className="text-base" {...props} />
              // ),
              hr: hr,
              a: link,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      </PostPageLayout>
    </>
  );
};

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res: any = await getBlogs();
//   const paths = res.items.map((post: Item) => ({
//     params: { post: post.fields.slug },
//   }));
//   return { paths, fallback: false };
// };

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: any) => {
  const res: any = await getBlogs();
  const data: Item = res.items.filter(
    (post: Item) => post.fields.slug === params.post
  )[0];
  return {
    props: { post: params.post, data: data, content: data.fields.body },
  };
};

export default PostContent;
