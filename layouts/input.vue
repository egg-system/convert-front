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
              color="primary"
              href="https://forms.gle/TsjdCb64pwLY6AyUA"
              target="blank"
              fab
              small
              v-on="on"
            >
              <v-icon dark>
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
    <v-footer min-height="56" app dark>
      <v-row class="py-2 pl-2 body-2 text-center">
        <v-col>
          <v-dialog v-model="dialog" width="70%">
            <template v-slot:activator="{ on }">
              <button color="primary" dark v-on="on">
                &ensp;Terms of service
              </button>
            </template>
            <v-card>
              <v-flex>
                <v-row class="term-header">
                  <v-col cols="11">
                    <v-card-title>
                      <h3>利用規約</h3>
                    </v-card-title>
                  </v-col>
                  <v-col cols="1">
                    <v-card-actions class="pt-3">
                      <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-col>
                </v-row>
              </v-flex>
              <v-card-text>
                <termOfService />
              </v-card-text>
            </v-card>
          </v-dialog>
          <span>&ensp;/</span>
          <a href="https://eggsystem.co.jp/" target="blank">
            <span>
              &ensp;Team x-faCE (EGG SYSTEM Inc.)
            </span>
          </a>
          <span>&copy;{{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import termOfService from '@/components/term-of-service.vue'
export default {
  components: {
    termOfService
  },

  data() {
    return {
      image_src: require('@/assets/images/xfacelogo.png'),
      showModal: false,
      currentModalComponent: termOfService
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
.headline {
  color: #333333;
}
.col {
  padding: 0px;
}
h3 {
  text-align: center;
  width: 100%;
  color: #303030;
}
.term-header {
  vertical-align: middle;
}
</style>
