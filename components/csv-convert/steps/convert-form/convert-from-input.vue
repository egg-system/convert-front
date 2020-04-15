<template>
  <v-container>
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
      <v-text-field v-model="fixedValue" label="固定値を入力する" />
    </v-row>
    <v-row v-else>
      <v-select
        v-model="fromIndex"
        :items="csvHeaders"
        label="取得元の列名を選択する"
      />
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import convertFormMixins from './convert-form-mixins'

export default {
  mixins: [convertFormMixins],
  computed: {
    isFixedValue: {
      get() {
        return this.fixedValue !== null
      },
      set(isFixedValue) {
        this.clearFromValue()

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
        this.convertSetting = {
          ...this.convertSetting,
          fixedValue
        }
      }
    },
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
  },
  methods: {
    clearFromValue() {
      this.fromIndex = null
      this.fixedValue = null
    }
  }
}
</script>
