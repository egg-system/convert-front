<template>
  <replace-setting-tabs v-model="replaceSetting" />
</template>

<script>
import replaceSettingTabs from './tabs/replace-setting-tabs'

export default {
  components: { replaceSettingTabs },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    isFormValid: false,
    errorMessage: ''
  }),
  computed: {
    replaceSetting: {
      get() {
        return this.value
      },
      set(replaceSetting) {
        this.$emit('input', replaceSetting)
      }
    }
  }
}
</script>
