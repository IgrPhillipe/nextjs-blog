import {
  Author,
  Category,
  Cover,
  StrapiDataInstance,
  StrapiInstance
} from "@/domain";

export interface Post extends StrapiInstance<{
  title: string;
  content: string;
  slug: string;
  author: StrapiDataInstance<Author>;
  category: StrapiDataInstance<Category>;
  createdAt: string;
  updatedAt: string;
  cover: StrapiDataInstance<Cover>;
}> { }
