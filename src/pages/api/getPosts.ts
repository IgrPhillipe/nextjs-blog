import { Post, StrapiResponse } from '@/domain'
import axios from '@/config/axios'

export const getPosts = async (): Promise<StrapiResponse<Post[]>> => {
  return (await axios.get('/posts?populate=*')).data;
}