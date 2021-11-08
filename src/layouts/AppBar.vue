<template>
  <v-toolbar flat   max-width="100%"  class="my-5 mx-3 rounded-lg shadow">
    <v-toolbar-title>
      <v-btn
        color="primary"
        text
        @click="$store.commit('TOGGLE_DRAWER', !$store.state.drawer)"
      >
        <v-icon size="30">mdi-notification-clear-all</v-icon>
      </v-btn>
      <!-- <v-icon class="ml-2">{{$route.meta.icon}}</v-icon> -->
      <span
        v-if="$route.meta.showTitle !== false || $store.state.drawer == false"
      >
        {{ $route.meta.title }}
      </span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- <v-btn
      color="primary"
      text
      :to="{
        name: 'theme',
      }"
    >
      <v-icon>mdi-shape</v-icon>
    </v-btn> -->
    <theme-type></theme-type>
    <user />
  </v-toolbar>
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