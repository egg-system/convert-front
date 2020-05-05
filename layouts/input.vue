<template>
  <v-app dark>
    <app-header />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer min-height="56" dark>
      <v-row class="py-2 pl-2 body-2 text-center">
        <v-col class="pa-0">
          <service-term-dialog />
          <span>&ensp;/</span>
          <v-btn href="https://eggsystem.co.jp/" target="blank" depressed>
            <span>
              &ensp;Team x-faCE (EGG SYSTEM Inc.)
            </span>
          </v-btn>
          <span>&copy;{{ new Date().getFullYear() }}</span>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import appHeader from '@/components/layout/app-header'
import serviceTermDialog from '@/components/service-term/service-term-dialog.vue'

export default {
  components: {
    appHeader,
    serviceTermDialog
  }
}
</script>
