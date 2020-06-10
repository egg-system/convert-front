<template>
  <v-row>
    <v-select
      v-model="fromIndex"
      :items="csvHeaders"
      label="取得元の列名を選択する"
      :rules="[(value) => value !== null || '取得元の列名を入力してください。']"
    />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import convertFormMixin from './mixins/convert-form-mixin'

export default {
  mixins: [convertFormMixin],
  computed: {
    fromIndex: {
      get() {
        return this.convertSetting.fromIndex
      },
      set(fromIndex) {
        this.convertSetting = {
          ...this.convertSetting,
          fromIndex
        }
      }
    },
    ...mapGetters('csv/file', ['csvHeaders'])
  }
}
</script>
