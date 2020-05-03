<template>
  <div>
    <v-row>
      <v-select
        v-model="fromIndex"
        :items="csvHeaders"
        label="取得元の列名を選択する"
        :rules="[
          (value) => value !== null || '取得元の列名を入力してください。'
        ]"
      />
    </v-row>
    <convert-replace-input v-model="convertSetting" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import convertFormMixins from '../mixins/convert-form-mixins'
import convertReplaceInput from './convert-replace-input'

export default {
  components: { convertReplaceInput },
  mixins: [convertFormMixins],
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
