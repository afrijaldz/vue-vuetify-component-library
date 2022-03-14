import Vue from "vue";
import Vuetify, { VApp } from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

import KangButton from "./components/KangButton/KangButton.vue";

Vue.use(Vuetify);

const Components = {
  KangButton,
  VApp
};

Vue.component("KangButton", KangButton);
Vue.component("KangApp", VApp);

export { Vapp as KangApp, KangButton };

// Export the library as a plugin
export default Components;
