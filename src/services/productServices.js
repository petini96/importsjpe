import axios from 'axios';

const API_URL = 'http://localhost:8080/products';

export default class productServices {
  static async fetchProducts(page = 0, size = 10) {
    try {
      const response = await axios.get(`${API_URL}?page=${page}&size=${size}`);
      console.log(response.data.content);
      return response.data.content;
    } catch (error) {
      if (error.response) {
        console.error(`Erro na resposta da API: ${error.response.status} - ${error.response.data}`);
      } else if (error.request) {
        console.error('Erro na solicitação: Sem resposta do servidor', error.request);
      } else {
        console.error('Erro desconhecido:', error.message);
      }
      throw error;
    }
  }
}
