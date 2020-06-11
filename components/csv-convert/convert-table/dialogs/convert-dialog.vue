<template>
  <v-dialog v-model="isShown" persistent>
    <template #activator="{ on }">
      <a v-on="on">{{ isValid ? '設定済み' : '未設定' }}</a>
    </template>
    <convert-form
      v-if="isShown"
      v-model="editConvertSetting"
      @cancel="isShown = false"
    />
  </v-dialog>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
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
    editConvertSetting: {
      get() {
        return this.convertSetting
      },
      set(editConvertSetting) {
        this.updateSetting(editConvertSetting)
        this.isShown = false
      }
    },
    isValid() {
      return this.validateConvert(this.convertSetting)
    },
    ...mapGetters('csv/converter', ['validateConvert'])
  },
  methods: {
    ...mapMutations('csv/converter', ['updateSetting'])
  }
}
</script>
