<template>
  <v-app dark>
    <v-app-bar fixed app>
      <a href="https://eggsystem.co.jp/" target="blank">
        <img class="logo" :src="image_src" alt="x-face" />
      </a>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// src="~/assets/images/xfacelogo.png"
export default {
  data() {
    return {
      image_src: require('@/assets/images/xfacelogo.png')
    }
  },
  computed: {
    title() {
      return 'Data Convert'
    }
  }
}
</script>

<style scoped>
.logo {
  height: 20px;
  margin-right: 10px;
}
</style>
