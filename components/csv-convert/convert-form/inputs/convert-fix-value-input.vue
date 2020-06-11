<template>
  <v-row>
    <v-text-field v-model="fixedValue" label="固定値を入力する" required />
  </v-row>
</template>

<script>
import convertFormMixin from './mixins/convert-form-mixin'

export default {
  mixins: [convertFormMixin],
  computed: {
    fixedValue: {
      get() {
        return this.convertSetting.fixedValue
      },
      set(fixedValue) {
        // 変換元データ周りの入力データをクリアする
        this.convertSetting = {
          ...this.convertSetting,
          fixedValue
        }
      }
    }
  }
}
</script>
