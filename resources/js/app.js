/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import store from './store';
import App from './App.vue'

const app = createApp(App);

app.use(router);
app.use(store);
app.mount('#app');
