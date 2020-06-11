export default {
  props: {
    editConvertSetting: {
      type: Object,
      required: true
    },
    editReplaceSettings: {
      type: Object,
      reqired: true
    }
  },
  computed: {
    convertSetting: {
      get() {
        return this.editConvertSetting
      },
      set(convertSetting) {
        this.$emit('update:edit-convert-setting', convertSetting)
      }
    },
    replaceSettings: {
      get() {
        return this.editReplaceSettings
      },
      set(replaceSettings) {
        this.$emit('update:edit-replace-settings', replaceSettings)
      }
    }
  }
}
