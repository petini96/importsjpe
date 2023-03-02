import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faFolderTree, faLock, faShirt, faPerson, faDivide, faCartShopping, faMoneyBill, faMoneyBillTransfer, faQrcode, faList, faParachuteBox, faPaperPlane, faCalendar } from '@fortawesome/free-solid-svg-icons' 
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

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
const app = createApp(App)

app.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
