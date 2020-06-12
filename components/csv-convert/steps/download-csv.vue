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
          <v-btn
            id="btn-download-csv"
            class="ma-2"
            color="primary"
            :disabled="loading"
            @click="doConvert"
          >
            ダウンロードする
          </v-btn>
          <!-- 自動でダウンロードさせるための疑似要素 -->
          <a v-show="false" ref="download" :href="downloadUrl" download />
        </v-row>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import stepsMixins from './steps-mixins'

export default {
  mixins: [stepsMixins],
  data: () => ({
    encode: 'SJIS',
    downloadUrl: null,
    loading: false
  }),
  computed: {
    encodeItems() {
      return ['SJIS', 'UTF8']
    },
    editable() {
      const query = this.$route.query
      return 'csv' in query && 'settings' in query
    }
  },
  methods: {
    async doConvert() {
      this.loading = true

      const { data } = await this.convertCsv(this.encode)
      this.downloadUrl = data.url

      this.$nextTick(() => {
        // $refs.downloadはaタグになる
        this.$refs.download.click()
        this.loading = false
      })
    },
    ...mapActions('csv', ['convertCsv'])
  }
}
</script>
