<template>
  <v-app-bar fixed app dark flat>
    <v-col cols="10">
      <v-btn href="/" depressed>
        <v-img
          :src="imageSrc"
          class="mr-5"
          height="40"
          width="40"
          alt="x-face"
          contain
        />
        <v-toolbar-title v-text="title" />
      </v-btn>
    </v-col>
    <client-only>
      <!-- <template v-if="$vuetify.breakpoint.xs">
        <v-col cols="2">
          <v-row justify="end">
            <v-icon dark color="white" @click="isShown = true">
              mdi-dots-vertical
            </v-icon>
            <v-navigation-drawer v-model="isShown" app>
              <v-list-item v-for="nav in navList" :key="nav.icon" link>
                <v-list-item-icon>
                  <v-icon color="white">{{ nav.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <a href="">{{ nav.text }}</a>
                </v-list-item-content>
              </v-list-item>
            </v-navigation-drawer>
          </v-row>
        </v-col>
      </template> -->
      <!-- ドロップダウンのメニューを、別途実装する -->
      <v-col v-if="!$vuetify.breakpoint.xs" class="text-right">
        <v-row align="center" justify="end">
          <template v-for="nav in navList">
            <component :is="nav.component" :key="nav.icon" />
          </template>
        </v-row>
      </v-col>
    </client-only>
  </v-app-bar>
</template>

<script>
import formLink from './header/form-link'
import releaseNote from './header/release-note/release-note'

export default {
  components: { formLink, releaseNote },
  data: () => ({
    imageSrc: require('@/assets/images/xface-logo-white.png'),
    isShown: false
  }),
  computed: {
    title() {
      return 'Data Convert'
    },
    navList() {
      return [
        {
          icon: 'mdi-bell-outline',
          text: 'リリースノート',
          component: 'release-note'
        },
        {
          icon: 'mdi-email-edit-outline',
          text: 'お問い合わせ',
          component: 'form-link'
        }
      ]
    }
  }
}
</script>
