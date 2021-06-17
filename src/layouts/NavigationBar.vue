<template>
  <v-navigation-drawer color="secondary" absolute permanent right>
    <div class="d-flex align-center justify-center flex-column py-2 px-2">
      <div class="border-1">
        <v-avatar size="75" color="red">
          <span class="white--text text-h5">CJ</span>
        </v-avatar>
      </div>
      <h4>سجاد سلام</h4>
      <h5 class="primary--text">ادمن</h5>
    </div>
    <v-divider></v-divider>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>