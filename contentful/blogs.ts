import client from "./client";

export const getBlogs = async () => {
  const blogs = await client.getEntries({ content_type: "blogs" });
  return blogs;
};

export default getBlogs;
