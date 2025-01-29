import { createApp } from 'vue'
import App from './App.vue'
import AppHeader from './AppHeader.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/main.css'
import './assets/style/main.scss'
import './assets/style/mixins.scss'
import './assets/style/variables.scss'
import { Quasar } from 'quasar'
import langDe from 'quasar/lang/de'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faTrash, faPlus, faMinus, faUserSecret, faFolderTree, faLock, faShirt,
    faPerson, faDivide, faCartShopping, faMoneyBill, faMoneyBillTransfer,
    faQrcode, faList, faParachuteBox, faPaperPlane, faCalendar, faThumbsUp,
    faBars, faMailForward
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

// Add icons to the library
library.add(faTrash, faPlus, faMinus, faUserSecret, faFolderTree, faLock, faShirt,
    faPerson, faDivide, faCartShopping, faMoneyBillTransfer, faQrcode, faList,
    faWhatsapp, faParachuteBox, faPaperPlane, faCalendar, faMoneyBill, faInstagram,
    faThumbsUp, faBars, faMailForward)

const app = createApp(App)
const pinia = createPinia()

app.use(Quasar, {
    config: {
        lang: langDe
    }
})

app.use(pinia)
app.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

// Mounting AppHeader to a different element
const app2 = createApp(AppHeader)
app2.use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
app2.mount('#app-header')
