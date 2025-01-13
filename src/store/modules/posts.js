import PostService from "../../services/postService"

export default {
    state() {
        return {
            posts: []
        };
    },
    getters: {
        getAllPosts: (state) => state.posts,
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        appendPosts(state, posts) {
            state.posts = [...state.posts, ...posts];
        },
    },
    actions: {
        async fetchAllPosts({ commit }, { page = 0, size = 10 }) {
            try {
                const posts = await PostService.fetchPosts(page, size);
                if (page === 0) {
                    commit('setPosts', posts);
                } else {
                    commit('appendPosts', posts);
                }
            } catch (error) {
                console.error('Erro ao buscar posts:', error);
            }
        },
    },

};