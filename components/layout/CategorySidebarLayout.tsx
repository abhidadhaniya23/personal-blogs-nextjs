import { CategoryType } from "@/types/category";
import Category from "../pageSections/homepage/Categories";

type PropType = {
  categories: CategoryType;
  children: JSX.Element;
};

const CategorySidebarLayout = ({ categories, children }: PropType) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-10 border-b border-solid border-white/10">
        <div className="col-span-2">
          <Category categories={categories} />
        </div>
        <div className="col-span-8 md:border-l border-solid border-white/10">
          {/* <div className="bg-black z-20 sticky top-0 py-2 border-b border-solid border-white/10">
            <Months />
          </div> */}
          <div className="py-5 md:p-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default CategorySidebarLayout;
