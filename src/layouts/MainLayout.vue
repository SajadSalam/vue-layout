<template>
  <v-app>
    <v-main>
    <app-bar />
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>5
<script>
import AppBar from "./AppBar.vue";
export default {
  components: {
    AppBar,
  },
};
</script>