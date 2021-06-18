<template>
  <v-app>
    <app-bar />

      <navigation-bar />
    <v-main>

      <v-container>
        <v-row>
          <v-col cols="12" >
            <router-view />
          </v-col>
        </v-row>
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
    NavigationBar,
  },
};
</script>