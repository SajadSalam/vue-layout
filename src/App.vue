<template>
  <main-layout />
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue"
import config from "./config"
export default {
  name: 'App',
  // beforeCreate(){
  //   if(this.$store.state.isRTL == false){
  //     this.$store.commit('UPDATE_RTL', this.$config.isRTL)
  //     this.$vuetify.rtl = this.$config.isRTL
  //   }
  // },
  components:{
    MainLayout,
  },
  data: () => ({
    //
  }),
  created(){
    localStorage.setItem('theme', JSON.stringify(config))
  },
};
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css? family=Cairo:300,400,700&display=swap');
$body-font-family: 'Cairo', sans-serif !important;
.v-application {
  font-family: $body-font-family;
}
</style>