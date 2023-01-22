export interface CategoryType {
  sys: CategoryTypeSys;
  total: number;
  skip: number;
  limit: number;
  items: CategoryItem[];
}

export interface CategoryItem {
  metadata: Metadata;
  sys: ItemSys;
  fields: Fields;
}

export interface Fields {
  name: string;
  slug: string;
  colors: string;
}

export interface Metadata {
  tags: any[];
}

export interface ItemSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  revision: number;
  contentType: ContentType;
  locale: string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}

export interface CategoryTypeSys {
  type: string;
}
