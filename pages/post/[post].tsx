import PostPageLayout from "@/components/layout/PostPageLayout";
import { GetStaticPaths, GetStaticProps } from "next";
import { getBlogs } from "@/contentful/blogs";
import { BlogsType, Entry, Item } from "@/types/blogs";
import ReactMarkdown from "react-markdown";
import {
  blockQuote,
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
import { RiCalendarCheckLine } from "react-icons/ri";
import { AiOutlineFieldTime } from "react-icons/ai";
import readingTime from "reading-time";
import { getPostBySlug } from "@/contentful/getPostBySlug";
import { EntryCollection } from "contentful";
import TableOfContent from "@/components/TableOfContent";
import ReadNext from "@/components/ReadNext";
import SocialMetaData from "@/components/metadata/SocialMetaData";
import Link from "next/link";
import getTimeAgo from "@/utils/timeAgo";

type PropType = { readNextPosts: BlogsType; data: Item; content: any };

const PostContent = ({ readNextPosts, data, content }: PropType) => {
  const router = useRouter();
  const postSlug = router.query.post as string;

  const newDate = new Date(data.sys.createdAt);
  const postDate = getTimeAgo(newDate);

  const regXHeader = /# {1,6}.+/g;
  const headings = content.match(regXHeader)?.map((heading: any) => {
    const text = heading.replace(/#{1,6}/, "").slice(1);
    const link = text.replace(/ /g, "-").toLowerCase();
    return { text, link };
  });
  const readNext = readNextPosts.items
    .filter((post) => post.fields.slug !== postSlug)
    .slice(0, 3);

  return (
    <>
      {/* <PortableText value={content} /> */}
      {/* <div dangerouslySetInnerHTML={{ __html: content }}></div> */}

      <SocialMetaData
        title={data.fields.title}
        description={data.fields.description}
        image={"https://" + data.fields.image.fields.file.url}
        pageType="post"
        url={`https://blogs.abhidadhaniya.com/post/${data.fields.slug}`}
      />

      <PostPageLayout readNextPosts={readNextPosts} postSlug={postSlug}>
        <>
          <div className="p-5 rounded-lg">
            <img
              src={"https://" + data.fields.image.fields.file.url}
              // quality={50}
              draggable={false}
              width={640}
              height={300}
              alt={data.fields.title}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 my-8">
            <h1 className="text-3xl sm:text-4xl !text-brand/90">
              {data.fields.title}
            </h1>
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

            <div className="flex flex-row gap-2 flex-wrap mt-1">
              {data.fields.category.map((category: Entry) => (
                <Link
                  href={`/tag/${category.fields.slug}`}
                  key={category.sys.id}
                  className={`text-sm hover:bg-${category.fields.colors}-500/20 border-[1.2px] border-solid border-${category.fields.colors}-500/40 text-${category.fields.colors}-500 px-2.5 py-1 rounded-full`}
                >
                  {category.fields.name}
                </Link>
              ))}
            </div>
          </div>
          <article className="prose-base prose-p:font-normal prose-li:list-disc prose-li:marker:text-brand prose-blockquote:rounded-lg prose-blockquote:px-5 prose-strong:text-white/70 prose-code:!font-code prose-pre:!bg-black prose-pre:p-0 prose-pre:m-0 prose-blockquote:py-0.5 prose-blockquote:border prose-blockquote:border-solid prose-blockquote:border-white/10 prose-blockquote:text-white/60 mx-auto prose-headings:text-white/70 prose-headings:font-semibold  prose-a:no-underline prose-a:border-b prose-a:pb-0.5 prose-a:border-dashed prose-a:border-brand/70 hover:prose-a:border-solid hover:prose-a:border-brand prose-a:text-white/60 hover:prose-a:text-white prose-a:mx-1 text-white/50">
            <ReactMarkdown
              components={{
                // quote: quoteBlock,
                blockquote: blockQuote,
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
          <div className="my-7 md:my-5 block md:hidden">
            <ReadNext readNextPosts={readNext} />
          </div>
        </>
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
  // export const getServerSideProps: GetServerSideProps = async ({
  //   params,
  // }: any) => {
  const res: EntryCollection<BlogsType> =
    (await getBlogs()) as EntryCollection<BlogsType>;
  const data: BlogsType = await getPostBySlug(params.post);

  if (data.items.length === 0) {
    return {
      notFound: true,
    };
  }

  const content = data.items[0].fields.body;
  return {
    props: {
      readNextPosts: res,
      data: data.items[0],
      content,
    },
  };
};

export default PostContent;
