import { BlogsType } from "@/types/blogs";
import client from "./client";
import { EntryCollection } from "contentful";

export const getPostBySlug = async (postSlug: string): Promise<any> => {
  const posts: EntryCollection<BlogsType> = await client.getEntries({
    content_type: "blogs",
    "fields.slug": postSlug,
  });
  return posts;
};
