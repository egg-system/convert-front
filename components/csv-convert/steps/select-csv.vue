<template>
  <v-container>
    <v-stepper-step :step="step" editable>
      変換したいCSVファイルの選択
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <v-row>
          <v-file-input
            v-model="csv"
            label="変換したいCSVファイルを選択する"
            accept=".csv"
            single-line
            show-size
          />
        </v-row>
        <v-row>
          <v-btn
            id="btn-upload-csv"
            class="ma-5"
            color="primary"
            :disabled="!selected"
            @click="putCsvFile"
          >
            アップロードする
          </v-btn>
        </v-row>
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { putFile } from '../convert-actions'
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
      await putFile(this.csv)
      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep']),
    ...mapActions('csv/file', ['putFile'])
  }
}
</script>
