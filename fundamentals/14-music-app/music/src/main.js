import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import { auth } from './includes/firebase'

import './assets/base.css'
import './assets/main.css'

let app

// We've loaded Firebase so that we can check if the user is authenticated when the application starts ⬇️
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    // `use` methods allow us to register the plugins
    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)

    app.mount('#app')
  }
})
