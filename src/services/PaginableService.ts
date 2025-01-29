import axios, { AxiosError } from 'axios';
import type { FetchResponse } from '../types/Paginable';

export default class PaginableService {
  static async fetchPaginable<T>(url: string, page: number = 0, size: number = 10): Promise<FetchResponse<T>> {
    try {
      const response = await axios.get<FetchResponse<T>>(`${url}?page=${page}&size=${size}`);
      return response.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.error(`Erro na resposta da API: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
          console.error('Erro na solicitação: Sem resposta do servidor', error.request);
        }
      } else {
        console.error('Erro desconhecido:', (error as Error).message);
      }
      throw error;
    }
  }
}