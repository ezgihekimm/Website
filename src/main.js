import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'
import i18n from './i18n'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDZ1pzaQAX8KW98sh46hD7dUu_gjdN6mR4',
    },
})

app.use(router)
app.use(i18n)
app.mount('#app')