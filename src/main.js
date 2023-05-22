import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'

import './assets/styles/globalStyle.css'
import './assets/styles/tailwind.css'

import { registerGlobalComponents } from './utils/import'

const app = createApp(App)

app.use(router)
app.use(VueKinesis)

registerGlobalComponents(app)

app.mount('#app')
