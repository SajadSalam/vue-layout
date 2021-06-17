<template>
  <v-app>
    <v-main>
      <navigation-bar />
    <app-bar />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import AppBar from "./AppBar.vue";
import NavigationBar from "./NavigationBar.vue";
export default {
  components: {
    AppBar,
    NavigationBar
  },
};
</script>