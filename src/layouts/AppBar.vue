<template>
  <v-app-bar id="xx" :class="isElectron()?'ele_app_bar':''" color="error" app dark>
    <v-toolbar-title>{{ $config.projectName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <theme-type></theme-type>
  </v-app-bar>
</template>
<script>
import ThemeType from "./ThemeType.vue";
import {isElectron} from "../../utils"
export default {
  components: {
    ThemeType,
  },
  methods:{
    isElectron
  }
};
</script>
<style >
.ele_app_bar{
    top: 30px !important;
}
</style>