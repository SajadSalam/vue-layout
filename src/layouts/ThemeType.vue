<template>
  <div class="d-flex align-center justify-around">
      <div class="d-flex align-center justify-around">
        <v-switch inset class="mt-5" @change="updateDarkMode" :prepend-icon="dark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny'" color="error" dark #dense v-model="dark"></v-switch>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dark: this.$store.state.dark,
    };
  },
  methods:{
      updateDarkMode(){
        this.$store.commit('UPDATE_RTL', this.dark)
        this.$vuetify.theme.dark =  this.dark
      }
  }
};
</script>