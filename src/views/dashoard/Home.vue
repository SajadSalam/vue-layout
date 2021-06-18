<template>
  <div>
    <v-card rounded="" height="150" raised class="">
      <v-card-title class="text-h4">
        تيست تايتيل
        <v-spacer></v-spacer>
        <v-card color="green" shaped raised>
          <v-card-title class="text-h5 white--text">
            <v-icon class="ml-1 white--text">mdi-account-check</v-icon>
            ادمن
          </v-card-title>
        </v-card>
      </v-card-title>
      <v-card-text>
        {{ time }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
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