import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import id from "vuetify/lib/locale/id";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { id },
    current: "id",
  },
});
