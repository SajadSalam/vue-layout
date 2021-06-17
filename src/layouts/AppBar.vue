<template>
  <v-app-bar color="error" app dark>
    <v-toolbar-title>{{ $config.projectName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <theme-type></theme-type>
  </v-app-bar>
</template>
<script>
import ThemeType from "./ThemeType.vue";
export default {
  components: {
    ThemeType,
  },
};
</script>