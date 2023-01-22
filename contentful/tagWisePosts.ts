import client from "./client";

export const tagWisePosts = async (tagSlug: string) => {
  const categories = await client.getEntries({
    content_type: "blogs",
    // "fields.slug": "make-component-as-a-senior-developer",
    "fields.category[in]": tagSlug,
  });

  // const tag = categories.items.find(
  //   (item: CategoryItem) => item.fields.slug === tagSlug
  // );

  //   const categoryPosts = await client.getContentType("categories");
  //   console.log("categoryPosts", categoryPosts);

  //   client.getEntry(tag.sys.id).then((entry: any) => {
  //     console.log("entry", entry);
  //   });
  return categories;
};

export default tagWisePosts;
