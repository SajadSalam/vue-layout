<template>
  <div>
    <v-checkbox
      class="mt-5"
      v-model="dark"
      @change="updateDarkMode"
      color="primary"
      on-icon="mdi-moon-waxing-crescent"
      off-icon="mdi-white-balance-sunny"
    ></v-checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dark: this.$store.state.dark,
    };
  },
  methods: {
    updateDarkMode() {
      this.$store.commit("UPDATE_DARK", this.dark);
      this.$vuetify.theme.dark = this.dark;
    },
  },
};
</script>