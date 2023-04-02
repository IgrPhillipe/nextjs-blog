import { Author, Category } from "@/domain";

export type CreatedBy = {
  id: number;
  firstname: string;
  lastname: string;
  username: null;
};

export type CoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type Cover = CoverFormat & {
  id: number;
  alternativeText: string;
  caption: string;
  previewUrl: null;
  provider: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  formats: {
    thumbnail: CoverFormat;
    small: CoverFormat;
    medium: CoverFormat;
    large: CoverFormat;
  };
};

export type Post = {
  id: number;
  attributes: {
    id: number;
    title: string;
    content: string;
    slug: string;
    author: Author;
    category: Category;
    createdAt: string;
    updatedAt: string;
    cover: Cover;
  }
};