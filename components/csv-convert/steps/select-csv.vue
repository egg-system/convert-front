<template>
  <v-container>
    <v-stepper-step :step="step" editable>
      変換したいCSVファイルを選択する
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <v-row
          @dragleave.prevent="checkDrag($event, 'new', false)"
          @dragover.prevent="checkDrag($event, 'new', true)"
          @drop.prevent="onDrop"
        >
          <v-file-input
            v-model="csv"
            label="変換したいCSVファイルを選択する、またはドラッグ&ドロップしてください"
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
            次へ進む
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
    checkDrag(event, key, status) {},
    onDrop(event) {
      const dropFile = event.dataTransfer.files[0]
      this.csv = dropFile
    },
    ...mapActions('csv', ['pushStep']),
    ...mapActions('csv/file', ['putFile'])
  }
}
</script>
