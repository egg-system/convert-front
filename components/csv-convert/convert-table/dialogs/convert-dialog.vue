<template>
  <v-dialog v-model="isShown" persistent>
    <template #activator="{ on }">
      <a v-on="on">{{ isValid ? '設定済み' : '未設定' }}</a>
    </template>
    <convert-form
      v-if="convertSetting"
      v-model="convertSetting"
      @cancel="isShown = false"
    />
  </v-dialog>
</template>

<script>
import { mapGetters } from 'vuex'
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
      return this.validateConvert(this.convertSetting)
    },
    ...mapGetters('csv/converter', ['validateConvert'])
  }
}
</script>
