<template>
  <main-layout />
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue"

export default {
  name: 'App',
  beforeCreate(){
    if(this.$store.state.isRTL === null){
      this.$store.commit('UPDATE_RTL', this.$config.isRTL)
    }
  },
  components:{
    MainLayout,
  },
  data: () => ({
    //
  }),
};
</script>
