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
          :disabled="disabled"
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
import { mapState, mapActions } from 'vuex'
import convertTable from '../convert-table/convert-table.vue'
import previewDialog from '../preview-dialog/preview-dialog.vue'
import stepsMixins from './steps-mixins'

export default {
  components: { convertTable, previewDialog },
  mixins: [stepsMixins],
  computed: {
    editable() {
      return 'csv' in this.$route.query
    },
    disabled() {
      return this.settings.length === 0
    },
    ...mapState('csv/converter', ['settings'])
  },
  methods: {
    async postSettings() {
      try {
        await this.putSettingsFile()
      } catch (error) {
        this.$root.context.error({
          statusCode: error.response.status,
          message: error.response.message
        })
      }

      this.pushStep(this.nextStep)
    },
    ...mapActions('csv', ['pushStep']),
    ...mapActions('csv/converter', ['putSettingsFile'])
  }
}
</script>
