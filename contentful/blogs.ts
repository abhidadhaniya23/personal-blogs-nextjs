import client from "./client";

export const getBlogs = async () => {
  const blogs = await client.getEntries({
    content_type: "blogs",
    order: "-sys.createdAt",
  });
  return blogs;
};

export const getLimitedPosts = async (limit: number) => {
  const posts = await client.getEntries({
    content_type: "blogs",
    limit: limit,
  });
  return posts;
};

export const getPostsByPage = async (page: number) => {
  const limit = 2;
  const pageNumber = page - 1;
  const posts = await client.getEntries({
    content_type: "blogs",
    order: "-sys.createdAt",
    skip: pageNumber * limit,
    limit: limit,
  });
  return posts;
};

export default getBlogs;
