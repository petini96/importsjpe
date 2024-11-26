// src/store/modules/user.js
export default {
    state() {
        return {
            ok: false,
            isActive: false,
            isSleeping: false
        };
    },
    getters: {
        getIsSleeping(state) {
            return state.isSleeping;
        },
        getOk(state) {
            return state.ok;
        },
        getIsActive(state) {
            return state.isActive;
        }
    },
    mutations: {
        sleepBG(state) {
            state.isSleeping = !state.isSleeping;
        },
        showMenuMobile(state) {
            state.ok = !state.ok;
            state.isActive = !state.isActive;
        }
    }
};
