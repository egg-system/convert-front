<template>
  <v-container>
    <v-stepper-step :step="step" editable>
      変換元CSVの選択
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-file-input v-model="csv" accept=".csv" single-line show-size />
      <v-btn
        class="ma-5"
        color="primary"
        :disabled="!selected"
        @click="putCsvFile"
      >
        アップロードする
      </v-btn>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import stepsMixins from './steps-mixins'

export default {
  mixins: [stepsMixins],
  data: () => ({
    csv: null
  }),
  computed: {
    selected() {
      return this.csv !== null
    },
    ...mapState('csv', ['fileKey'])
  },
  methods: {
    async putCsvFile() {
      await this.putFile(this.csv)
      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep']),
    ...mapActions('csv/file', ['putFile'])
  }
}
</script>
