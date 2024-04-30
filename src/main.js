import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'

import './assets/styles/globalStyle.css'
import './assets/styles/tailwind.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fas} from '@fortawesome/free-solid-svg-icons'
import { library, dom} from '@fortawesome/fontawesome-svg-core'

import { registerGlobalComponents } from './utils/import'

import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

library.add(fab,far,fas)
dom.watch()
app.use(router)
app.use(VueKinesis)
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)

registerGlobalComponents(app)

app.mount('#app')
