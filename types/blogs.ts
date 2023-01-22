export interface BlogsType {
  sys: BlogsTypeSys;
  total: number;
  skip: number;
  limit: number;
  items: Item[];
  includes: Includes;
}

export interface Includes {
  Entry: Entry[];
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export interface AssetFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface AssetSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: ID;
  type: PurpleType;
  linkType: LinkType;
}

export enum ID {
  Blogs = "blogs",
  Category = "category",
  Master = "master",
  Z7J1Uytbtcam = "z7j1uytbtcam",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface Entry {
  metadata: Metadata;
  sys: AssetSys;
  fields: EntryFields;
}

export interface EntryFields {
  name: string;
  slug: string;
  colors: string;
}

export interface Item {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export interface ItemFields {
  title: string;
  body: string;
  image: Asset;
  slug: string;
  category: Entry[];
  description: string;
}

export interface BlogsTypeSys {
  type: string;
}
