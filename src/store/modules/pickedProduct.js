// src/store/modules/pickedProduct.js
export default {
    state() {
        return {
            pickedProduct: {
                productName: "",
                productCategory: "",
                productBrand: "",
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
