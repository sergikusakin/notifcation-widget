import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "floating-vue/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.mount("#app");
