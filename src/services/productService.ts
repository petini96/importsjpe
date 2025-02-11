import axios, { AxiosError } from "axios";
import type { ListProduct, Product } from "../types/Product";
import PaginableService from "./PaginableService";
import { getApiUrl } from "src/utils/environmentUtils";

const API_URL = `${getApiUrl()}/products`;

export const fetchProducts = async function (page: number = 0, size: number = 10) {
  try {
    const productsResponse = await PaginableService.fetchPaginable<ListProduct>(API_URL, page, size);
    return productsResponse;
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

export const getProduct = async function (productId: number): Promise<Product> {
  try {
    const response = await axios.get<Product>(`${API_URL}/${productId}`);
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