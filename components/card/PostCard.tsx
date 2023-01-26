import { Entry, Item } from "@/types/blogs";
import Image from "next/image";
import Link from "next/link";
import readingTime from "reading-time";

const PostCard = ({ postData }: { postData: Item }) => {
  const newDate = new Date(postData.sys.createdAt);
  const postDate = `${newDate.getDate()} ${newDate.toLocaleString("default", {
    month: "long",
  })}, ${newDate.getFullYear()}`;
  return (
    <>
      <Link
        href={`/post/${postData.fields.slug}`}
        className="rounded-lg group flex flex-col p-3 border border-solid border-white/10 hover:border-brand/60"
      >
        <div className="flex flex-col items-center justify-center w-full h-56 rounded-lg">
          <div className="w-full h-full overflow-hidden rounded-lg">
            <Image
              // src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              src={"https:" + postData.fields.image.fields.file.url}
              width={400}
              height={300}
              className="object-cover w-full h-full"
              alt="blogs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3 justify-between items-stretch flex-1">
          <div className="flex flex-col gap-2">
            <p className="text-xs text-white/40 flex flex-row gap-2 items-center">
              <span>{postDate}</span>|
              <span>{readingTime(postData.fields.body.toString()).text}</span>
            </p>

            <h2 className={`text-2xl text-white/80 group-hover:text-brand`}>
              {postData.fields.title}
            </h2>
            <p className="text-sm text-white/70 font-extralight">
              {/* {postData.body.toString().slice(0, 100)} */}
              {postData.fields.description.slice(0, 120)}
            </p>
          </div>
          <div className="flex flex-row gap-2 flex-wrap mt-1">
            {postData.fields.category.map((category: Entry) => (
              <span
                key={category.sys.id}
                className={`text-xs border-[1.2px] border-solid border-${category.fields.colors}-500/40 text-${category.fields.colors}-500 px-2.5 py-1 rounded-full`}
              >
                {category.fields.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
