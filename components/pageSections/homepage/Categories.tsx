import { CategoryType, Item } from "@/types/category";
import Link from "next/link";

const Category = ({ categories }: { categories: CategoryType }) => {
  // const categories = [
  //   { id: 1, name: "All", color: "gray" },
  //   { id: 2, name: "React", color: "cyan" },
  //   { id: 3, name: "Next", color: "red" },
  //   { id: 4, name: "Tailwind", color: "yellow" },
  //   { id: 5, name: "CSS", color: "amber" },
  //   { id: 6, name: "JavaScript", color: "green" },
  //   { id: 7, name: "TypeScript", color: "blue" },
  //   { id: 8, name: "Node", color: "indigo" },
  //   { id: 9, name: "Express", color: "purple" },
  //   { id: 10, name: "MongoDB", color: "pink" },
  //   { id: 11, name: "Mongoose", color: "fuchsia" },
  //   { id: 12, name: "GraphQL", color: "teal" },
  //   { id: 13, name: "Apollo", color: "lime" },
  //   { id: 14, name: "React Native", color: "orange" },
  //   { id: 15, name: "Flutter", color: "rose" },
  //   { id: 16, name: "Dart", color: "violet" },
  //   { id: 17, name: "Firebase", color: "sky" },
  //   { id: 18, name: "AWS", color: "teal" },
  //   { id: 20, name: "Docker", color: "cyan" },
  //   { id: 21, name: "Git", color: "yellow" },
  //   { id: 22, name: "GitHub", color: "green" },
  //   { id: 23, name: "Discord", color: "blue" },
  //   { id: 24, name: "Zoom", color: "indigo" },
  //   { id: 25, name: "Socket.io", color: "purple" },
  // ];
  return (
    <>
      <div className="flex flex-col sticky top-0">
        <ul className="pr-2 py-2">
          {categories.items.map((category: Item) => (
            <Link
              href={`/category/${category.fields.slug}`}
              key={category.fields.slug}
            >
              <li
                className={`cursor-pointer text-white/60 hover:bg-${category.fields.color}-500/10 hover:text-${category.fields.color}-500 px-4 text-base rounded-md py-1.5`}
              >
                {category.fields.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Category;
