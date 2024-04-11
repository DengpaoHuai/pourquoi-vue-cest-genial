import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import CustomBalise from "./components/CustomBalise.vue";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);
app.component("CustomBalise", CustomBalise);

app.use(VueQueryPlugin);

app.mount("#app");
