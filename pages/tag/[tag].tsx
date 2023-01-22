import BlogPosts from "@/components/BlogPosts";
import CategorySidebarLayout from "@/components/layout/CategorySidebarLayout";
import getBlogs from "@/contentful/blogs";
import getCategories from "@/contentful/categories";
import tagWisePosts from "@/contentful/tagWisePosts";
import { BlogsType, Item } from "@/types/blogs";
import { CategoryItem } from "@/types/category";
import { CategoryType } from "@/types/category";
import { GetStaticPaths, GetStaticProps } from "next";

type PropsType = {
  blogPosts: BlogsType;
  categories: CategoryType;
};

// const category = ({ blogPosts, categories }: PropsType) => {
const category = () => {
  return (
    <>
      <h1>Category</h1>
      {/* <CategorySidebarLayout categories={categories}>
        <BlogPosts blogPosts={blogPosts} />
      </CategorySidebarLayout> */}
    </>
  );
};

type ParamsType = {
  params: {
    tag: string;
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  // await tagWisePosts("programming");
  const res: any = await getCategories();
  const paths = res.items.map((category: CategoryItem) => ({
    params: { tag: category.fields.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  // console.log("tagwiseposts : ", await tagWisePosts("programming"));
  const response: any = await tagWisePosts(params.tag);
  // console.log("item", response.items[0].fields);
  // const getResponse = async () => {};
  const res: any = await getCategories();
  const data: CategoryItem[] = res.items.filter(
    (category: CategoryItem) => category.fields.slug === params.tag
  )[0];
  // console.log("data", data);
  return {
    props: { blogPosts: res, categories: data },
  };
};

export default category;
