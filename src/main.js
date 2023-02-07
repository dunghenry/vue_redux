import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import { createRedux } from './storePlugin';
import router from './routes/routes';
const app = createApp(App);
app.use(createRedux(store));
app.use(router);
app.mount('#app');
