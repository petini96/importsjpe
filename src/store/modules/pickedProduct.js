// src/store/modules/pickedProduct.js
export default {
    state() {
        return {
            pickedProduct: {
                id: "",
                name: "",
                category: "",
                brand: "",
                originalPrice: "",
                discountPercentage: "",
                discountedPrice: "",
                installmentPrice: "",
                installmentsCount: "",
                additionalInfo: "",
                description: "",
                photos: [],
                link: ""
            }
        };
    },
    getters: {
        getPickedProduct: (state) => state.pickedProduct
    },
    mutations: {
        setPickedProduct(state, pickedProduct) {
            state.pickedProduct = pickedProduct;
        }
    },
    actions: {
        updatePickedProduct({ commit }, pickedProduct) {
            commit('setPickedProduct', pickedProduct);
        }
    }
};
