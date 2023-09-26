import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSuitcase } from "@fortawesome/free-solid-svg-icons";

library.add(faLinkedinIn);
library.add(faGithub);
library.add(faSuitcase);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
