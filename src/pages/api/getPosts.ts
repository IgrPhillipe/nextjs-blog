import { Post, StrapiResponse } from '@/domain'
import axios from '@/config/axios'

type GetAllPostsProps = {
  query?: string;
}

export const getAllPosts = async ({ query }: GetAllPostsProps): Promise<StrapiResponse<Post[]>> => {
  const url = query ? `/posts?populate=*&${query}` : '/posts?populate=*&'
  const { data } = await axios.get(url)

  return data;
}