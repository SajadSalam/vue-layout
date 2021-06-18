<template>
  <v-navigation-drawer color="primary" app clipped   right>
    <div class="d-flex align-center justify-center flex-column py-2 px-1">
      <div class="border-1">
        <v-avatar size="50" color="accent">
          <span class="white--text text-h5">CJ</span>
        </v-avatar>
      </div>
      <h5 class="white--text text-center">سجاد سلام</h5>
      <h5 class="accent--text">ادمن</h5>
    </div>
    <v-divider></v-divider>
    <v-list  nav>
      <v-list-item v-for="item in items" class="white--text" :key="item.title" link>
        <v-list-item-icon>
          <v-icon class="white--text">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          
          <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import Navigation from "../navigation"
export default {
  data(){
    return {
      items: Navigation
    }
  }
}
</script>