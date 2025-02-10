import { type Post } from "src/types/Post";
import PaginableService from "./PaginableService";

const API_URL = `${process.env.BACKEND_URL}/posts`;

export const fetchPosts = async function (page: number = 0, size: number = 10) {
  try {
    const postsResponse = await PaginableService.fetchPaginable<Post>(API_URL, page, size);
    return postsResponse;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}
