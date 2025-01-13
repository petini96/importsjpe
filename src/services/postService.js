import axios from 'axios';

const API_URL = 'http://localhost:8080/posts';

export default class PostService {
  static async fetchPosts(page = 0, size = 10) {
    try {
      const response = await axios.get(`${API_URL}?page=${page}&size=${size}`);
      console.log(response.data.content);
      return response.data.content;
    } catch (error) {
      console.error('Erro ao buscar posts:', error);
      throw error;
    }
  }
}
