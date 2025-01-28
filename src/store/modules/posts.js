import PostServices from "../../services/postServices";

const CACHE_DURATION = 5 * 60 * 1000;

export default {
    state() {
        return {
            posts: [],
            loading: false,
            error: null,
            currentPage: 0,
            lastFetched: null,
        };
    },
    getters: {
        getAllPosts: (state) => state.posts,
        isLoading: (state) => state.loading,
        getError: (state) => state.error,
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        appendPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
        setLoading(state, isLoading) {
            state.loading = isLoading;
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
        async fetchAllPosts({ commit, state }, { page = null, size = 10 } = {}) {
            page = page !== null ? page : state.currentPage;

            // Verificar cache por página
            const cachedPosts = state.posts.slice(page * size, (page + 1) * size);
            if (cachedPosts.length === size) {
                console.log("Usando cache para a página", page);
                return Promise.resolve(cachedPosts);
            }

            // Verificar cache por tempo
            const now = Date.now();
            if (state.lastFetched && now - state.lastFetched < CACHE_DURATION) {
                console.log("Dados ainda válidos, usando cache");
                return Promise.resolve(state.posts);
            }

            commit('setLoading', true);
            commit('setError', null);

            try {
                const posts = await PostServices.fetchPosts(page, size);
                if (page === 0) {
                    commit('setPosts', posts);
                } else {
                    commit('appendPosts', posts);
                }
                commit('setCurrentPage', page + 1);
                commit('setLastFetched', now);
                return posts;
            } catch (error) {
                commit('setError', error.message);
                console.error('Erro ao buscar posts:', error);
                throw error;
            } finally {
                commit('setLoading', false);
            }
        },
    },
};
