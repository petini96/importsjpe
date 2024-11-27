export default {
    state() {
        return {
            cartProducts: [],
        };
    },
    getters: {
        getCartProducts: (state) => state.cartProducts,
        isProductInCart: (state) => (productId) => {
            return state.cartProducts.find((product) => product.productId === productId);
        },
    },
    mutations: {
        setCartProducts(state, cartProduct) {
            state.cartProducts.push(cartProduct)
        },
        removeCartProduct(state, productId) {
            const productIndex = state.cartProducts.findIndex(
                (product) => product.productId === productId
            );

            if (productIndex !== -1) {
                if (state.cartProducts[productIndex].quantity > 1) {
                    state.cartProducts[productIndex].quantity -= 1;
                } else {
                    state.cartProducts.splice(productIndex, 1);
                }
            }
        },
    },
    actions: {
        updateCartProducts({ commit }, product) {
            commit('setCartProducts', product);
        },
        removeCartProduct({ commit }, productId) {
            commit('removeCartProduct', productId);
        },
    },
};
