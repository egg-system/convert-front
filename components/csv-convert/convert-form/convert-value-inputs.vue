<template>
  <v-card-text>
    <convert-is-fixed-input v-model="isFixedValue" />
    <convert-fix-value-input v-if="isFixedValue" v-model="convertSetting" />
    <template v-else>
      <convert-from-value-input v-model="convertSetting" />
      <convert-replace-input
        :edit-convert-setting.sync="convertSetting"
        :edit-replace-settings.sync="replaceSettings"
      />
    </template>
  </v-card-text>
</template>

<script>
import convertIsFixedValueMixin from './mixins/convert-is-fixed-mixins'
import convertIsFixedInput from './inputs/convert-is-fixed-input.vue'
import convertFixValueInput from './inputs/convert-fix-value-input.vue'
import convertFromValueInput from './inputs/convert-from-value-input.vue'
import convertReplaceInput from './inputs/convert-replace-input.vue'

export default {
  components: {
    convertIsFixedInput,
    convertFixValueInput,
    convertFromValueInput,
    convertReplaceInput
  },
  mixins: [convertIsFixedValueMixin],
  props: {
    editConvertSetting: {
      type: Object,
      required: true
    },
    editReplaceSettings: {
      type: Object,
      required: true
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
</script>
