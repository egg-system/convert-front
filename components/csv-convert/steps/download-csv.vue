<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      変換したCSVファイルをダウンロードする
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <v-btn color="primary" :href="downloadUrl">ダウンロードする</v-btn>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import stepsMixins from './steps-mixins'

export default {
  mixins: [stepsMixins],
  computed: {
    editable() {
      const query = this.$route.query
      return 'csv' in query && 'settings' in query
    },
    downloadUrl() {
      return `${this.$axios.defaults.baseURL}/convert-csv?csv=${this.fileKey}&settings=${this.settingsKey}`
    },
    ...mapState('csv/file', ['fileKey']),
    ...mapState('csv/converter', ['settingsKey'])
  }
}
</script>
