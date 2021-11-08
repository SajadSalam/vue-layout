<template>
  <v-navigation-drawer
    v-model="$store.state.drawer"
    bottom
    floating
    width="255"
    app
    right
    class=""
    style="
      border-top-left-radius: 40px !important;
      box-shadow: 0 0 15px 0 rgb(34 41 47 / 5%);
    "
  >
    <v-list nav class="text-center">
      <v-list-item>
        <v-list-item-title
          class="d-flex flex-column justify-center align-center"
        >
          <img
            src="../assets/logo.png"
            height="100"
            width="100"
            class="mt-3"
            style="transform: rotate(180deg)"
            alt=""
          />
          <!-- <v-container> -->
          <h3 class="my-4">ادارة منصات التواصل</h3>
          <!-- </v-container> -->
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <v-list nav>
      <v-list-item
        v-for="item in items"
        class="white--text"
        :key="item.title"
        link
        :to="typeof item.route == 'string' ? { name: item.route } : item.route"
      >
        <v-list-item-icon>
          <v-icon class="">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Navigation from "../navigation";
export default {
  data() {
    return {
      items: Navigation,
      mini: true,
    };
  },
};
</script>
