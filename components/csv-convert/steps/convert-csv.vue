<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      CSVの変換設定を入力する
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <convert-table />
        <v-btn
          id="btn-save-convert-config"
          class="ma-5"
          color="primary"
          :disabled="!isValidSettings"
          @click="postSettings"
        >
          保存する
        </v-btn>
        <preview-dialog />
      </v-container>
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { putSettingsFile } from '../convert-actions'
import convertTable from '../convert-table/convert-table.vue'
import previewDialog from '../preview-table/preview-dialog.vue'
import stepsMixins from './steps-mixins'

export default {
  components: { convertTable, previewDialog },
  mixins: [stepsMixins],
  computed: {
    editable() {
      return 'csv' in this.$route.query
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/converter', ['isValidSettings'])
  },
  methods: {
    async postSettings() {
      await putSettingsFile()
      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep'])
  }
}
</script>
