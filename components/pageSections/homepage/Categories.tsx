import { CategoryType, CategoryItem } from "@/types/category";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Category = ({ categories }: { categories: CategoryType }) => {
  return (
    <>
      <div className="flex flex-col md:sticky top-16">
        <nav
          className="w-full mx-auto sm:flex sm:items-center sm:justify-between"
          aria-label="Global"
        >
          <div
            className="sm:hidden flex items-center justify-between py-3 border-b border-solid border-white/10"
            data-hs-collapse="#navbar-secondary"
            aria-controls="navbar-secondary"
            aria-label="Toggle navigation"
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
                className="text-white/80 focus:text-brand/90"
              />
            </button>
          </div>
          <div
            id="navbar-secondary"
            className="hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <ul className="pr-2 py-2">
              {categories.items.map((category: CategoryItem) => (
                <Link
                  href={`/tag/${category.fields.slug}`}
                  key={category.fields.slug}
                >
                  <li
                    className={`cursor-pointer text-white/60 hover:bg-${category.fields.colors}-500/10 hover:text-${category.fields.colors}-500 px-4 text-base rounded-md py-1.5`}
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
