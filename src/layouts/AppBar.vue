<template>
     <v-app-bar color="primary" app dark>
          <v-toolbar-title>{{ $config.projectName }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <theme-type></theme-type>
        </v-app-bar>
</template>
<script>
import ThemeType from './ThemeType.vue'
export default {
    components:{
        ThemeType
    }
}
</script>