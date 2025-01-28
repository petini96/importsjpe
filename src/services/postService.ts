import PaginableService from "./paginableService";

const API_URL = 'http://localhost:8080/posts';

export interface Post {
  id: number;
  media: string;
  title: string;
  description: string;
  order: number;
}

export const fetchPosts = async function (page: number = 0, size: number = 10) {
  try {
    const postsResponse = await PaginableService.fetchPaginable<Post>(API_URL, page, size);
    return postsResponse;
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    throw error;
  }
}
