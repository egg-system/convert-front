<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      CSVの変換設定を入力する
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-container>
        <convert-table />
        <v-row>
          <v-btn
            id="btn-save-convert-config"
            class="ma-5"
            color="primary"
            @click="postSettings"
          >
            保存する
          </v-btn>
          <preview-dialog :is-valid="isValid" @validate="validate" />
        </v-row>
        <p v-if="!isValid" class="red--text font-weight-bold">
          列名が入力されていないか、変換内容が未設定の行があります。
        </p>
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
  data: () => ({ isValid: true }),
  computed: {
    editable() {
      return 'csv' in this.$route.query
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/converter', ['isValidSettings'])
  },
  methods: {
    validate() {
      this.isValid = this.isValidSettings
    },
    async postSettings() {
      this.validate()
      if (this.isValid) {
        await this.doPostSettings
      }
    },
    async doPostSettings() {
      await putSettingsFile()
      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep'])
  }
}
</script>
