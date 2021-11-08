<template>
  <div>
    <v-app :style="colors">
      <navigation-bar />
      <v-main :style="background">
        <app-bar />
        <div class="wrapper px-5 py-3">
          <transition name="scale" mode="out-in">
            <router-view />
          </transition>
        </div>
      </v-main>
    </v-app>
  </div>
</template>
<script>
import AppBar from "./AppBar.vue";
import NavigationBar from "./NavigationBar.vue";
export default {
  computed: {
    colors() {
      let style = this.$store.state.style;
      let ret = {};
      Object.keys(style.colors).forEach((key) => {
        ret[`--${key}-color`] = style.colors[key];
      });
      ret[`--list-background`] = `var(--${
        this.$store.state.dark ? "secondary" : "primary"
      }-color)`;
      return ret;
    },
    background() {
      // let style = this.$store.state.style;
      // if (style.colors.secondary !== undefined) {
      //   if (style.backType == "gradient") {
      //     return `background-image: linear-gradient(140deg,${style.colors.secondary} 17%,${style.colors.primary} 67%) !important;`;
      //   } else if (style.backType == "onlyPrimary") {
      //     return `background-color: ${style.colors.primary} !important;`;
      //   } else if (style.backType == "onlySecondary") {
      //     return `background-color: ${style.colors.secondary} !important;`;
      //   } else if (style.backType == "image") {
      //     return `background-image: url(${style.image}) !important; background-size: cover; `;
      //   } else {
      //     if(this.$store.state.dark == false){
      //       return `background-color: #F0F6FF !important;`;
      //     }
      //     return '';
      //   }

      // }
      if (this.$store.state.dark == false) {
        return `background-color: #f1f2f3 !important;`;
      }
      return "";
    },
  },
  components: {
    AppBar,
    NavigationBar,
  },
};
</script>
<style>
body,
.v-application,
* {
  font-family: "Cairo", sans-serif !important;
  letter-spacing: 0 !important;
  /* transition: all 0.2s ease-in !important; */
}
.v-card {
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%) !important;
}
.shadow {
  box-shadow: 0 4px 24px 0 rgb(34 41 47 / 10%) !important;
}
.gradient {
  background-image: linear-gradient(-140deg, var(--secondary-color) 17%, var(--primary-color) 67%) !important;
}
.v-list .v-list-item--active {
  background-color: var(--primary-color) !important;
  color: white!important;
  max-width: 100% !important;
}
</style>