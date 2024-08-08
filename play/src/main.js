import { createApp } from "vue";
import App from "./App.vue";
import YoButton from "@yo-ui/components/button";
// import CustomColumn from "@yo-ui/components/CustomColumn";
const app = createApp(App);
app.use(YoButton);
// app.use(CustomColumn);
app.mount("#app");
