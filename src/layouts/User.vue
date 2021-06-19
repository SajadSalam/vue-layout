<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark text v-bind="attrs" v-on="on">
          <v-avatar size="25" color="accent"> SJ </v-avatar>
          <label class="white--text"> سجاد سلام </label>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-btn text><v-icon>mdi-logout</v-icon>الاعدادات</v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn text><v-icon>mdi-logout</v-icon>تسجيل خروج</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>