import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import './assets/all.scss'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Form, Field, ErrorMessage } from 'vee-validate';
const pinia = createPinia()
const app = createApp(App)

app.use(VueAxios, axios)
app.use(pinia)
app.use(router)
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app')

