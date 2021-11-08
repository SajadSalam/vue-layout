import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import config from "@/config"
import store from "../store";
Vue.use(Vuetify);

export default new Vuetify({
  rtl: store.state.isRTL,
  customVariables: ['@/assets/variables.scss'],
  treeShake: true,
  options: {
    customProperties: true,
    // ...store.state.style.colors
  },
  theme: {
    dark: store.state.dark,
    themes: {
      light: { ...config.colors, background: "#F1F6FA" },
      dark: { ...config.colors, background: "#1E1E1E" },
    },
  },
});
