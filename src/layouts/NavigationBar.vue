<template>
  <v-navigation-drawer color="primary" app expand-on-hover clipped :mini-variant.sync="mini" right>
    <!-- <div class="d-flex align-center justify-center flex-column py-2 px-1 mb-2"> -->
      <!-- <div class="border-1">
        <v-avatar :size="mimi ? '25' : '75'" color="accent">
          <span class="white--text text-h5">CJ</span>
        </v-avatar>
      </div>
      <h4 v-if="!mini" class="white--text text-center">سجاد سلام</h4>
      <h4 v-if="!mini" class="accent--text">المالك</h4>
    </div> -->
    <v-divider></v-divider>
    <v-list  nav>
      <v-list-item >
        <v-list-item-avatar>
          <v-avatar :size="!mini ? '75' : '25'" color="accent">
          <span class="white--text text-center">CJ</span>
        </v-avatar>
        </v-list-item-avatar>

        <v-list-item-title class="white--text ">
          <p class="white--text" style="margin-bottom: 0px !important">
          سجاد سلام
          </p>
          <p class="accent--text">
          المالك
          </p>
        </v-list-item-title>

        
      </v-list-item>
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
      items: Navigation,
      mini:true
    }
  }
}
</script>