import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import './style.css'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.config.errorHandler = () => {
  router.replace({ name: 'error-500', query: { from: window.location.pathname, reason: 'app-error' } })
}

window.addEventListener('unhandledrejection', () => {
  router.replace({ name: 'error-500', query: { from: window.location.pathname, reason: 'unhandled-rejection' } })
})

app.mount('#app')
