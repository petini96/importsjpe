import { type Post } from "src/types/Post";
import PaginableService from "./PaginableService";
import { getApiUrl } from "src/utils/environmentUtils";

const API_URL = `${getApiUrl()}/posts`;

export const fetchPosts = async function (page: number = 0, size: number = 10) {
  try {
    const postsResponse = await PaginableService.fetchPaginable<Post>(API_URL, page, size);
    return postsResponse;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}
