<template>
  <v-form ref="convertForm" v-model="isValid">
    <v-card>
      <v-container>
        <v-row>
          <v-card-title>
            変換し終わったCSVの変換内容を設定する
          </v-card-title>
        </v-row>
        <convert-value-inputs
          :edit-convert-setting.sync="convertSetting"
          :edit-replace-settings.sync="editReplaceSettings"
        />
        <p v-if="errorMessage" class="red--text font-weight-bold">
          {{ errorMessage }}
        </p>
        <convert-form-actions
          :is-valid="isValid"
          @validate="validate"
          @update="update"
          @cancel="cancel"
        />
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import convertFormActions from './convert-form-actions'
import convertValueInputs from './convert-value-inputs.vue'

export default {
  components: { convertFormActions, convertValueInputs },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isValid: false,
    convertSetting: null,
    editReplaceSettings: null,
    errorMessage: null
  }),
  computed: {
    editReplaceSetting() {
      const replaceKey = this.convertSetting.replaceKey
      if (!replaceKey) {
        return null
      }

      return this.editReplaceSettings[replaceKey]
    },
    ...mapState('csv/converter/replacer', ['replaceSettings']),
    ...mapGetters('csv/converter/replacer', ['validateReplaceSetting'])
  },
  watch: {
    value: {
      handler() {
        this.initialize()
      },
      deep: true
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.convertSetting = { ...this.value }
      this.editReplaceSettings = { ...this.replaceSettings }
    },
    cancel() {
      this.initialize()
      this.$emit('cancel')
    },
    validate() {
      this.$refs.convertForm.validate()
      this.doValidateReplaceSetting()
    },
    doValidateReplaceSetting() {
      this.errorMessage = null

      const replaceSetting = this.editReplaceSetting
      if (!replaceSetting || this.validateReplaceSetting(replaceSetting)) {
        return
      }

      this.errorMessage = '入力されていないコード変換設定があります。'
      this.isValid = false
    },
    update() {
      this.$emit('input', this.convertSetting)
      this.updateReplaces(this.editReplaceSettings)
    },
    ...mapMutations('csv/converter/replacer', ['updateReplaces'])
  }
}
</script>
