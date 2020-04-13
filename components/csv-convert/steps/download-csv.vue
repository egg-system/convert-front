<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      変換したCSVファイルをダウンロードする
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <v-btn color="primary" @click="downloadCsv">ダウンロードする</v-btn>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import stepsMixins from './steps-mixins'

export default {
  mixins: [stepsMixins],
  computed: {
    editable() {
      const query = this.$route.query
      return 'csv' in query && 'settings' in query
    }
  },
  methods: {
    async downloadCsv() {
      await this.doConvert()
    },
    ...mapActions('csv', ['doConvert'])
  }
}
</script>
