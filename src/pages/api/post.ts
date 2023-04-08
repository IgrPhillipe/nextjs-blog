import { Post, StrapiResponse } from '@/domain'
import axios from '@/config/axios'
import { formatFilterParams } from '@/helpers/formatFilters';

interface SortParams {
  [key: string]: 'ASC' | 'DESC';
}

interface FilterParams {
  filter: string;
  value?: string | number;
  operation: string;
  field?: string;
}

interface RequestConfig {
  slug?: string;
  sort?: SortParams;
  filters?: FilterParams;
  fields?: string[];
  populate?: string
}

export const getAllPosts = async ({ sort, filters, fields, populate }: RequestConfig): Promise<StrapiResponse<Post[]>> => {
  const { data } = await axios.get('/posts', {
    params: {
      ...sort,
      ...fields,
      ...(populate ? { populate: 'cover, author.profile' } : {}),
      ...(filters ? formatFilterParams(filters) : {}),
    }
  })

  return data;
}

export const countAllPosts = async (): Promise<StrapiResponse<Post[]>> => {
  const { data } = await axios.get('/posts/count');

  return data;
}

export const getPostBySlug = async ({ filters, populate }: RequestConfig): Promise<StrapiResponse<Post[]>> => {
  const { data } = await axios.get('/posts', {
    params: {
      ...(populate ? { populate } : {}),
      ...(filters ? formatFilterParams(filters) : {}),
    }
  })

  return data;
}