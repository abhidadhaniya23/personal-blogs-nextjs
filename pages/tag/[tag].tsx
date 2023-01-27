import BlogPosts from "@/components/BlogPosts";
import CategorySidebarLayout from "@/components/layout/CategorySidebarLayout";
import SocialMetaData from "@/components/metadata/SocialMetaData";
import getBlogs from "@/contentful/blogs";
import getCategories from "@/contentful/categories";
import { Entry, Item } from "@/types/blogs";
import { CategoryItem } from "@/types/category";
import { CategoryType } from "@/types/category";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

type PropsType = {
  blogPosts: Item[];
  categories: CategoryType;
};

const Category = ({ blogPosts, categories }: PropsType) => {
  const router = useRouter();
  const { tag }: any = router.query;
  const categoryLabel = categories.items.filter(
    (categoryItem: CategoryItem) => categoryItem.fields.slug === tag
  )[0].fields.name;

  return (
    <>
      <SocialMetaData title={categoryLabel} pageType="tag" />
      <CategorySidebarLayout categories={categories}>
        <>
          <h2 className="text-2xl mb-5">
            {categoryLabel} Category : {blogPosts.length} posts
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
  // export const getServerSideProps: GetServerSideProps = async ({
  //   params,
  // }: any) => {
  const res: any = await getBlogs();
  const categoriesData: any = await getCategories();

  const filteredPosts: Item[] = res.items.filter((blog: Item) =>
    blog.fields.category.some(
      (category: Entry) => category.fields.slug === params.tag
    )
  );

  if (filteredPosts.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: { blogPosts: filteredPosts, categories: categoriesData },
  };
};

export default Category;
