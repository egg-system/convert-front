<template>
  <div>
    <v-row>
      <v-radio-group
        v-model="isFixedValue"
        label="変換元データの取得元を選択する"
        width="100%"
      >
        <v-radio :value="false" label="変換元CSVから値を取得する" />
        <v-radio :value="true" label="固定の値にする" />
      </v-radio-group>
    </v-row>
    <v-row v-if="isFixedValue">
      <v-text-field v-model="fixedValue" label="固定値を入力する" required />
    </v-row>
    <convert-from-setting-inputs v-else v-model="convertSetting" />
  </div>
</template>

<script>
import { defaultConvert } from '../convert-form/convert-constants'
import convertFormMixins from './mixins/convert-form-mixins'
import convertFromSettingInputs from './inputs/convert-from-setting-inputs'

export default {
  components: { convertFromSettingInputs },
  mixins: [convertFormMixins],
  computed: {
    isFixedValue: {
      get() {
        return this.fixedValue !== null
      },
      set(isFixedValue) {
        if (isFixedValue) {
          this.fixedValue = ''
        } else {
          this.fixedValue = null
        }
      }
    },
    fixedValue: {
      get() {
        return this.convertSetting.fixedValue
      },
      set(fixedValue) {
        // 変換元データ周りの入力データをクリアする
        this.convertSetting = {
          ...defaultConvert,
          name: this.convertSetting.name,
          fixedValue
        }
      }
    }
  }
}
</script>
