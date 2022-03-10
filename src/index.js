import Vue from "vue";
import Vuetify from "vuetify/lib";

import KangButton from "./components/KangButton/KangButton.vue";

Vue.use(Vuetify);

const Components = {
  KangButton,
};

Vue.component("KangButton", KangButton);

export { KangButton };

// Export the library as a plugin
export default Components;
