import { Cover } from "./cover";
import { StrapiDataInstance } from "./strapi";

export interface Author {
  id: number;
  name: string;
  profile: StrapiDataInstance<Cover>;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;

}