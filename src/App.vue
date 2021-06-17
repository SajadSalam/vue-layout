<template>
  <main-layout />
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue"

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
};
</script>
