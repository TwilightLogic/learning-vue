import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/base.css'
import './assets/main.css'

const app = createApp(App)

// `use` methods allow us to register the plugins
app.use(createPinia())
app.use(router)

app.mount('#app')
