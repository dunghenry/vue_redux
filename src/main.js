import { createApp } from 'vue';
import App from './App.vue';
import store from './store/store';
import { createRedux } from './storePlugin';
const app = createApp(App);
app.use(createRedux(store));
app.mount('#app');
