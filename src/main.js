import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './AppHeader.vue'
import router from './router'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFolderTree, faLock, faShirt, faPerson, faDivide, faCartShopping, faMoneyBill, faMoneyBillTransfer, faQrcode, faList, faParachuteBox, faPaperPlane, faCalendar, faThumbsUp, faBars, faMailForward } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

import { createStore } from 'vuex'
// Create a new store instance.
const store = createStore({
    state() {
        return {
            ok: false,
            isActive: false,
            isSleeping: false,
            catalogPicked: null,
            teamPicked: null,
            leagueTitle: null,
            leagueComponent: null,
            leaguePicked: null
        }
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
        },
    },
    mutations: {
        setTeamPicked(state, teamPicked) {
            state.teamPicked = teamPicked;
        },
        setCatalogPicked(state, catalogPicked) {
            state.catalogPicked = catalogPicked;
        },
        setLeaguePicked(state, leaguePicked) {
            state.leaguePicked = leaguePicked;
        },
        setLeagueTitle(state, leagueTitle) {
            state.leagueTitle = leagueTitle;
        },
        sleepBG(state) {
            if (state.isSleeping) {
                state.isSleeping = false;
            } else {
                state.isSleeping = true;
            }
        },
        showMenuMobile(state) { 
            if (state.ok) {
                state.ok = false;
                state.isActive = false;
            } else {
                state.ok = true;
                state.isActive = true;
            } 
        }
        
    }
})
/* add icons to the library */
library.add(faUserSecret)
library.add(faFolderTree)
library.add(faLock)
library.add(faShirt)
library.add(faPerson)
library.add(faDivide)
library.add(faCartShopping)
library.add(faMoneyBillTransfer)
library.add(faQrcode)
library.add(faList)
library.add(faWhatsapp)
library.add(faParachuteBox)
library.add(faPaperPlane)
library.add(faCalendar)
library.add(faMoneyBill)
library.add(faInstagram)
library.add(faThumbsUp)
library.add(faBars)
library.add(faMailForward)

const app = createApp(App)

app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
app.use(store)
app.mount('#app')

const app2 = createApp(AppHeader)
app2.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
app2.mount('#app-header')