// src/store/modules/catalog.js
export default {
    state() {
        return {
            catalogPicked: null
        };
    },
    mutations: {
        setCatalogPicked(state, catalogPicked) {
            state.catalogPicked = catalogPicked;
        }
    }
};
