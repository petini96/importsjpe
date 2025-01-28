import axios from "axios";
import type { ListProduct, Product } from "../types/Product";
import PaginableService from "./paginableService";

const API_URL = 'http://localhost:8080/products';

export const fetchProducts = async function (page: number = 0, size: number = 10) {
  try {
    const productsResponse = await PaginableService.fetchPaginable<ListProduct>(API_URL, page, size);
    return productsResponse;
  } catch (error) {
    console.error('Erro ao buscar products:', error);
    throw error;
  }
}

export const getProduct = async function (productId: number): Promise<Product> {
  try {
    const response = await axios.get<Product>(`${API_URL}/${productId}`);
    return response.data;
  } catch (error: any) {
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