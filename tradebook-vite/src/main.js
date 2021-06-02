import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import "./assets/tailwind.css";

//import { Toast } from "vue-toastification";
//import "vue-toastification/dist/index.css";
import Toast from "vue3-toast-single";
import "vue3-toast-single/dist/toast.css";
const app = createApp(App);

app.use(Toast, {
  verticalPosition: "bottom",
  duration: 1500,
});

app.use(store);
app.mount("#app");
