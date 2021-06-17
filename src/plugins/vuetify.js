import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import config from "../config"
import store from "../store"
Vue.use(Vuetify);

export default new Vuetify({
    rtl: store.state.isRTL,
    theme:{
        dark: store.state.dark,
        themes: {
            light: config.colors,
            dark: config.colors
        }
    }
});
