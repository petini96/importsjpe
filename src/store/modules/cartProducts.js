export default {
    state() {
        return {
            cartProducts: [],

            totalProductsItems: 0,
            subTotalPrice: 0,
            totalCartPrice: 0,
            coupon: 0
        };
    },
    getters: {
        getCartProducts: (state) => state.cartProducts,

        isProductInCart: (state) => (id) => {
            return state.cartProducts.find((product) => product.id === id);
        },
        
        getTotalProductsItems: (state) => state.totalProductsItems,

        getSubTotalPrice: (state) => state.subTotalPrice,

        getTotalCartPrice: (state) => state.totalCartPrice,

        getCoupon: (state) => state.coupon
    },
    mutations: {
        
        setTotalProductsItems(state, products) {
            const totalItems = products.reduce((total, product) => {
                return total + product.quantity;
            }, 0);
            state.totalProductsItems = totalItems;
        },
        
        setCoupon(state, coupon) {
            state.coupon = coupon;
        },
        
        setSubTotalPrice(state, products) {
            const subTotal = products.reduce((total, product) => {
                return total + (product.originalPrice * product.quantity);
            }, 0);
            state.subTotalPrice = subTotal;
        },
        
        setTotalCartPrice(state, products) {
            const subTotal = products.reduce((total, product) => {
                return total + (product.originalPrice * product.quantity);
            }, 0);
            const total = subTotal - state.coupon;
            state.totalCartPrice = total;
        },

        addProductQuantity(state, id) {
            const productIndex = state.cartProducts.findIndex(
                (product) => product.id === id
            );
            if (productIndex !== -1) {
                state.cartProducts[productIndex].quantity += 1;
            }
        },

        removeProductQuantity(state, id) {
            const productIndex = state.cartProducts.findIndex(
                (product) => product.id === id
            );
            if (productIndex !== -1 && state.cartProducts[productIndex].quantity > 1) {
                state.cartProducts[productIndex].quantity -= 1;
            }
        },

        setCartProducts(state, cartProduct) {
            state.cartProducts.push(cartProduct);
        },

        removeCartProduct(state, id) {
            const productIndex = state.cartProducts.findIndex(
                (product) => product.id === id
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
        addProductQuantity({commit}, product) {
            commit('addProductQuantity', product)
        },

        removeProductQuantity({commit}, product) {
            commit('removeProductQuantity', product)
        },

        updateCartProducts({ commit }, product) {
            commit('setCartProducts', product);
        },

        removeCartProduct({ commit }, id) {
            commit('removeCartProduct', id);
        },

        updateTotalProductsItems({ commit }, products) {
            commit('setTotalProductsItems', products);
        },
        
        updateTotalCartPrice({ commit }, products) {
            commit('setTotalCartPrice', products);
        },
        
        updateSubTotalPrice({ commit }, products) {
            commit('setSubTotalPrice', products);
        },
        
        updateCoupon({ commit }, coupon) {
            commit('setCoupon', coupon);
        },
    },
};
