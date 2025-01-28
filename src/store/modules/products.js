import ProductServices from "../../services/productServices";

const CACHE_DURATION = 5 * 60 * 1000;

export default {
    state() {
        return {
            products: [],
            loadingProduct: false,
            error: null,
            currentPage: 0,
            lastFetched: null,
        };
    },
    getters: {
        getAllProducts: (state) => state.products,
        isLoadingProduct: (state) => state.loadingProduct,
        getErrorProduct: (state) => state.error,
    },
    mutations: {
        setProducts(state, products) {
            state.products = products;
        },
        appendProducts(state, products) {
            state.products = [...state.products, ...products];
        },
        setLoading(state, isLoadingProduct) {
            state.loadingProduct = isLoadingProduct;
        },
        setError(state, error) {
            state.error = error;
        },
        setCurrentPage(state, page) {
            state.currentPage = page;
        },
        setLastFetched(state, timestamp) {
            state.lastFetched = timestamp;
        },
    },
    actions: {
        async fetchAllProducts({ commit, state }, { page = null, size = 10 } = {}) {
            page = page !== null ? page : state.currentPage;

            // Verificar cache por página
            const cachedProducts = state.products.slice(page * size, (page + 1) * size);
            if (cachedProducts.length === size) {
                console.log("Usando cache para a página", page);
                return Promise.resolve(cachedProducts);
            }

            // Verificar cache por tempo
            const now = Date.now();
            if (state.lastFetched && now - state.lastFetched < CACHE_DURATION) {
                console.log("Dados ainda válidos, usando cache");
                return Promise.resolve(state.products);
            }

            commit('setLoading', true);
            commit('setError', null);

            try {
                const products = await ProductService.fetchProducts(page, size);
                if (page === 0) {
                    commit('setProducts', products);
                } else {
                    commit('appendProducts', products);
                }
                commit('setCurrentPage', page + 1);
                commit('setLastFetched', now);
                return products;
            } catch (error) {
                commit('setError', error.message);
                console.error('Erro ao buscar products:', error);
                throw error;
            } finally {
                commit('setLoading', false);
            }
        },
    },
};
