import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import config from "../config"

Vue.use(Vuetify);

export default new Vuetify({
    rtl: this.$store.state.isRTL,
    theme:{
        themes: {
            light: config.colors,
            dark: config.colors
        }
    }
});