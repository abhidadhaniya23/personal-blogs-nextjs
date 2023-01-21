import Image from "next/image";
import Link from "next/link";

const PostCard = () => {
  const categories = [
    { id: 3, name: "Next", color: "yellow" },
    { id: 2, name: "React", color: "pink" },
    { id: 4, name: "Tailwind", color: "green" },
  ];
  return (
    <>
      <Link
        href="/post/make-component-as-a-senior-developer"
        className="rounded-lg group flex flex-col p-3 border-[1px] border-solid border-white/10 hover:border-brand/40"
      >
        <div className="flex flex-col items-center justify-center w-full h-56 bg-gray-100 rounded-lg">
          {/* <img
            // src="https://picsum.photos/200/300"
            src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
            alt="post"
            className="object-cover w-full h-full rounded-md"
          /> */}
          <div className="w-full h-full overflow-hidden rounded-md">
            <Image
              // src="https://picsum.photos/200/300"
              src="https://images.unsplash.com/photo-1502989642968-94fbdc9eace4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwxMDY1OTc2fHxlbnwwfHx8fA%3D%3D&w=1000&q=80"
              width={400}
              height={300}
              className="object-cover w-full h-full"
              alt="blogs"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 pt-3">
          <p className="text-xs text-white/40">20 Aug 2023</p>
          <h2 className={`text-2xl text-white/80 group-hover:text-brand`}>
            Learn NextJs in 15 Minutes like a Pro
          </h2>
          <p className="text-sm text-white/70 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod.
          </p>
          <div className="flex flex-row gap-2 flex-wrap mt-1">
            {categories.map((category) => (
              <span
                key={category.id}
                className={`text-xs border-[1.2px] border-solid border-${category.color}-500/40 text-${category.color}-500 px-2.5 py-1 rounded-full`}
              >
                {category.name}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </>
  );
};

export default PostCard;
