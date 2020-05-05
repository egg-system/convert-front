<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      変換したCSVファイルをダウンロードする
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <v-row>
          <v-radio-group v-model="encode" label="文字コードを選択する" row>
            <v-radio
              v-for="encodeItem in encodeItems"
              :key="encodeItem"
              :label="encodeItem"
              :value="encodeItem"
              row
            />
          </v-radio-group>
        </v-row>
        <v-row>
          <v-btn color="primary" :href="downloadUrl">ダウンロードする</v-btn>
        </v-row>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import stepsMixins from './steps-mixins'

export default {
  mixins: [stepsMixins],
  data: () => ({
    encode: 'SJIS'
  }),
  computed: {
    encodeItems() {
      return ['SJIS', 'UTF8']
    },
    editable() {
      const query = this.$route.query
      return 'csv' in query && 'settings' in query
    },
    downloadUrl() {
      const queries = {
        encode: this.encode,
        csv: this.fileKey,
        settings: this.settingsKey
      }

      const queryString = Object.keys(queries)
        .map((key) => `${key}=${queries[key]}`)
        .join('&')
      return `${this.$axios.defaults.baseURL}/convert-csv?${queryString}`
    },
    ...mapState('csv/file', ['fileKey']),
    ...mapState('csv/converter', ['settingsKey'])
  }
}
</script>
