<template>
  <v-app-bar fixed app dark flat>
    <v-btn href="https://eggsystem.co.jp/" target="blank" depressed>
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
    <v-col class="text-right">
      <v-row align="center" justify="end">
        <release-note />
        <form-link />
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
import formLink from './header/form-link'
import releaseNote from './header/release-note'

export default {
  components: { formLink, releaseNote },
  data() {
    return {
      imageSrc: require('@/assets/images/xfacelogo.png')
    }
  },
  computed: {
    title() {
      return 'Data Convert'
    }
  }
}
</script>
