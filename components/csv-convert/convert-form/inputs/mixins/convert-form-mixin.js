export default {
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    convertSetting: {
      get() {
        return this.value
      },
      set(convertSetting) {
        this.$emit('input', convertSetting)
      }
    }
  }
}
