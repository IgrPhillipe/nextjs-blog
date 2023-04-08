import { Category, StrapiResponse } from '@/domain'
import axios from '@/config/axios'

interface SortParams {
  [key: string]: 'ASC' | 'DESC';
}

interface RequestConfig {
  sort?: SortParams;
  populate?: string
}

export const getAllCategories = async ({ sort, populate }: RequestConfig): Promise<StrapiResponse<Category[]>> => {
  const { data } = await axios.get('/categories', {
    params: {
      ...sort,
      ...(populate ? { populate } : {}),
    }
  })

  return data;
}