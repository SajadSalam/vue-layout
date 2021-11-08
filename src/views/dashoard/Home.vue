<template>
  <div>
    <top-card />
  </div>
</template>

<script>
import TopCard from './home-components/TopCard.vue'
export default {
  components: {
    TopCard
  },
  data() {
    return {
      interval: null,
      time: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  created() {
    this.interval = setInterval(() => {
      this.time = Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format();
    }, 1000);
  },
};
</script>

<style>
</style>