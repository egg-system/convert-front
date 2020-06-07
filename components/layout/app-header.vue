<template>
  <v-app-bar fixed app dark flat>
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
    <v-col class="text-right">
      <v-row align="center" justify="end">
        <release-note />
        <form-link />
        <help-link />
      </v-row>
    </v-col>
  </v-app-bar>
</template>

<script>
import formLink from './header/form-link'
import releaseNote from './header/release-note/release-note'
import helpLink from './header/help-link'

export default {
  components: { formLink, releaseNote, helpLink },
  data() {
    return {
      imageSrc: require('@/assets/images/xface-logo-white.png')
    }
  },
  computed: {
    title() {
      return 'Data Convert'
    }
  }
}
</script>
