<template>
  <v-app-bar color="primary" elevation="0" app width="100%" dark>
    <v-toolbar-title>{{ $config.projectName }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <theme-type></theme-type>
    <user />
  </v-app-bar>
</template>
<script>
import ThemeType from "./ThemeType.vue";
import User from "./User.vue";
export default {
  components: {
    ThemeType,
    User
  },
};
</script>