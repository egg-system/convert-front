<template>
  <v-dialog v-model="isShown" persistent>
    <template #activator="{ on }">
      <a v-on="on">{{ validate ? '設定済み' : '未設定' }}</a>
    </template>
    <convert-form
      v-if="convertSetting"
      v-model="convertSetting"
      @cancel="isShown = false"
    />
  </v-dialog>
</template>

<script>
import { validateConvert } from '../validate-convert-setting'
import convertForm from '../../convert-form/convert-form'

export default {
  components: { convertForm },
  props: {
    convertSetting: {
      type: Object,
      required: true
    }
  },
  data: () => ({ isShown: false }),
  computed: {
    isValid() {
      return validateConvert(this.convertSetting)
    }
  }
}
</script>
