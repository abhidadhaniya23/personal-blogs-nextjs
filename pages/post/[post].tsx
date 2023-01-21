import PostPageLayout from "@/components/layout/PostPageLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getBlogs } from "@/contentful/blogs";
import { BlogsType, Item } from "@/types/blogs";
import ReactMarkdown from "react-markdown";
import {
  code,
  h1,
  h2,
  h3,
  h4,
  h5,
  hr,
  image,
  link,
} from "@/components/markdown";
import { useRouter } from "next/router";
import Image from "next/image";
import { RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import readingTime from "reading-time";

type PropType = { readNextPosts: BlogsType; data: Item; content: any };

const PostContent = ({ readNextPosts, data, content }: PropType) => {
  const router = useRouter();

  const newDate = new Date(data.sys.createdAt);
  const postDate = `${newDate.getDate()} ${newDate.toLocaleString("default", {
    month: "long",
  })}, ${newDate.getFullYear()}`;

  const regXHeader = /#{1,6}.+/g;
  const headings = content.match(regXHeader)?.map((heading: any) => {
    const text = heading.replace(/#{1,6}/, "").slice(1);
    const link = text.replace(/ /g, "-").toLowerCase();
    return { text, link };
  });
  return (
    <>
      {/* <PortableText value={content} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}
      <PostPageLayout
        readNextPosts={readNextPosts}
        postSlug={router.query.post as string}
        tableOfContent={headings}
      >
        <article className="prose-base prose-li:list-disc prose-li:marker:text-brand prose-blockquote:bg-gray-700/10 prose-blockquote:rounded-br-lg prose-blockquote:rounded-tr-lg prose-blockquote:px-5 prose-strong:text-white/70 prose-code:!font-code prose-pre:!bg-black prose-pre:p-0 prose-pre:m-0 prose-blockquote:py-0.5 prose-blockquote:border-l-2 prose-blockquote:border-solid prose-blockquote:border-white/50 prose-blockquote:text-white/60 mx-auto prose-headings:text-white/80 prose-headings:font-semibold  prose-a:no-underline prose-a:border-b-[1px] prose-a:pb-0.5 prose-a:border-dashed prose-a:border-brand/70 hover:prose-a:border-solid hover:prose-a:border-brand prose-p:font-normal prose-a:text-white/60 hover:prose-a:text-white prose-a:mx-1 text-white/50">
          <Image
            src={"https://" + data.fields.image.fields.file.url}
            quality={50}
            priority={true}
            width={640}
            height={300}
            alt={data.fields.title}
            className="rounded-lg"
          />
          <h1 className="text-5xl !text-brand my-2">{data.fields.title}</h1>
          <p className="flex gap-4 text-white/70">
            <span className="flex gap-2 items-center">
              <RiCalendarCheckLine size={18} /> {postDate}
            </span>
            |
            <span className="flex gap-2 items-center">
              <AiOutlineFieldTime size={20} />{" "}
              {readingTime(content.toString()).text}
            </span>
          </p>
          <ReactMarkdown
            components={{
              img: image,
              code: code,
              h1: h1,
              h2: h2,
              h3: h3,
              h4: h4,
              h5: h5,
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

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await getBlogs();
  const paths = res.items.map((post: Item) => ({
    params: { post: post.fields.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res: any = await getBlogs();
  const data: Item = res.items.filter(
    (post: Item) => post.fields.slug === params.post
  )[0];
  return {
    props: { readNextPosts: res, data: data, content: data.fields.body },
  };
};

export default PostContent;
