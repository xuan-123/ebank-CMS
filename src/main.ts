import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { element } from './global/element/index'
import { setupStore } from './store'
import '@/assets/css/base.css'
const app = createApp(App)
// app.use(element)
element(app)
app.use(router)
app.use(store)
setupStore()
app.mount('#app')
