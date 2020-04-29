<template>
  <v-app dark>
    <v-app-bar fixed app dark flat>
      <a class="mr-5" href="https://eggsystem.co.jp/" target="blank">
        <img class="logo" :src="image_src" alt="x-face" />
      </a>
      <v-toolbar-title v-text="title" />
      <v-col class="text-right">
        <v-tooltip
          class="pt-10"
          color="grey darken-3"
          transition="slide-y-transition"
          nudge-bottom="6"
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
              class="ma-2"
              color="blue-grey darken-1"
              href="https://forms.gle/TsjdCb64pwLY6AyUA"
              target="blank"
              v-on="on"
            >
              Contact Us
              <v-icon dark right>
                mdi-email-edit-outline
              </v-icon>
            </v-btn>
          </template>
          <span>
            当サービスに関するご意見やご要望、<br />
            お問い合わせについてはこちらからお願いします。
          </span>
        </v-tooltip>
      </v-col>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app dark>
      <v-row class="py-2 pl-2 body-2">
        <span>&copy;{{ new Date().getFullYear() }}</span>
        <a href="https://eggsystem.co.jp/" target="blank">
          <span>&ensp;運営元: x-faCE(株式会社エッグシステム)</span>
        </a>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
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
  height: 40px;
  vertical-align: middle;
}
a {
  text-decoration: none;
}
span {
  color: white;
}
.col {
  padding: 0px;
}
</style>
