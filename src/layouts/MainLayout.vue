<template>
  <v-app>
    <app-bar />
    <navigation-bar />
    <v-main>
      <!-- <v-container> -->
        <div class="px-3 py-3">
          <router-view />
        </div>
      <!-- </v-container> -->
    </v-main>
  </v-app>
</template>
<script>
import AppBar from "./AppBar.vue";
import NavigationBar from "./NavigationBar.vue";
export default {
  components: {
    AppBar,
    NavigationBar,
  },
};
</script>