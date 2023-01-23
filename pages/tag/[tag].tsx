import BlogPosts from "@/components/BlogPosts";
import CategorySidebarLayout from "@/components/layout/CategorySidebarLayout";
import SocialMetaData from "@/components/metadata/SocialMetaData";
import getBlogs from "@/contentful/blogs";
import getCategories from "@/contentful/categories";
import { BlogsType, Entry, Item } from "@/types/blogs";
import { CategoryItem } from "@/types/category";
import { CategoryType } from "@/types/category";
import { GetStaticPaths, GetStaticProps } from "next";

type PropsType = {
  blogPosts: Item[];
  categories: CategoryType;
};

const category = ({ blogPosts, categories }: PropsType) => {
  return (
    <>
      <SocialMetaData title={categories.items[0].fields.name} pageType="tag" />
      <CategorySidebarLayout categories={categories}>
        <>
          <h2 className="text-2xl mb-5">
            {categories.items[0].fields.name} Category : {blogPosts.length}{" "}
            posts
          </h2>
          <BlogPosts blogPosts={blogPosts} />
        </>
      </CategorySidebarLayout>
    </>
  );
};

type ParamsType = {
  params: {
    tag: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res: any = await getCategories();
  const paths: ParamsType[] = res.items.map((categoryItem: CategoryItem) => ({
    params: { tag: categoryItem.fields.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const res: any = await getBlogs();
  const categoriesData: any = await getCategories();

  const filteredPosts: BlogsType = res.items.filter((blog: Item) =>
    blog.fields.category.some(
      (category: Entry) => category.fields.slug === params.tag
    )
  );
  return {
    props: { blogPosts: filteredPosts, categories: categoriesData },
    revalidate: 3600,
  };
};

export default category;
