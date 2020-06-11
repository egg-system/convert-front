import { mapGetters } from 'vuex'

export default {
  computed: {
    isFixedValue: {
      get() {
        return this.convertSetting.fixedValue !== null
      },
      set(isFixedValue) {
        this.convertSetting = {
          ...this.baseConvertSetting,
          fixedValue: isFixedValue ? '' : null
        }
      }
    },
    baseConvertSetting() {
      return {
        ...this.defaultConvertSettings,
        name: this.convertSetting.name,
        index: this.convertSetting.index
      }
    },
    ...mapGetters('csv/converter', ['defaultConvertSettings'])
  }
}
