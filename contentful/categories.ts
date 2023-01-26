import client from "./client";

export const getCategories = async () => {
  const category = await client.getEntries({
    content_type: "category",
    order: "fields.name",
  });
  return category;
};

export default getCategories;
