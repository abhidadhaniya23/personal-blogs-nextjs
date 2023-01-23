import { CategoryType, CategoryItem } from "@/types/category";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const Category = ({ categories }: { categories: CategoryType }) => {
  const [isCollapsed, setIsCollapsed] = useState<Boolean>(false);
  const router = useRouter();
  const isSlugMatched = (slug: string) => {
    router.pathname.includes("tag/[tag]");
    return router.query.tag === slug ? true : false;
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.getElementById("navbar-secondary")?.classList.contains("open")
        ? setIsCollapsed(true)
        : setIsCollapsed(false);
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:sticky top-0">
        <nav
          className="w-full mx-auto md:flex md:items-center md:justify-between"
          aria-label="Global"
        >
          <div
            className="md:hidden flex items-center justify-between py-3 border-b border-solid border-white/10"
            data-hs-collapse="#navbar-secondary"
            aria-controls="navbar-secondary"
            aria-label="Toggle navigation"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <p className="text-lg font-medium text-white/70">Categories</p>
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 font-medium text-white shadow-sm align-middle duration-200 transition-all text-sm"
              data-hs-collapse="#navbar-secondary"
              aria-controls="navbar-secondary"
              aria-label="Toggle navigation"
            >
              <BsChevronDown
                size={20}
                // className={`text-white/80 focus:text-brand/90`}
                className={`text-white/80 focus:text-brand/90 ${
                  isCollapsed ? "transform rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
          <div
            id="navbar-secondary"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 grow md:block"
          >
            <ul className="flex flex-col gap-1 pr-5 py-5 text-white/60">
              {categories.items.map((category: CategoryItem) => (
                <Link
                  href={`/tag/${category.fields.slug}`}
                  key={category.fields.slug}
                >
                  <li
                    className={`cursor-pointer hover:bg-${
                      category.fields.colors
                    }-500/10 hover:text-${
                      category.fields.colors
                    }-500 px-4 text-base rounded-md py-1.5 ${
                      isSlugMatched(category.fields.slug) &&
                      `bg-${category.fields.colors}-500/10 text-${category.fields.colors}-500`
                    }`}
                  >
                    {category.fields.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Category;
