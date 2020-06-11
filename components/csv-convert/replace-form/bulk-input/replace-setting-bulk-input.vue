<template>
  <div>
    <v-radio-group v-model="separater" label="区切り文字を選択する">
      <v-radio
        v-for="separaterItem in separaterItems"
        :key="separaterItem.value"
        :value="separaterItem.value"
        :label="separaterItem.text"
      />
    </v-radio-group>
    <v-textarea
      v-model="textInput"
      :rules="[
        (value) => !!value || 'コード変換設定を入力してください',
        validateBulkInput
      ]"
      label="csvからコピーした値を貼り付けてください"
      auto-grow
    />
  </div>
</template>

<script>
import {
  separaters,
  convertBulkInput,
  parseReplaces
} from './replace-setting-bulk-input-convert.js'

export default {
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    separater: '\t',
    textInput: ''
  }),
  computed: {
    replaces: {
      get() {
        return this.value
      },
      set(replaces) {
        this.$emit('input', replaces)
      }
    },
    separaterItems() {
      return separaters
    },
    bulkInput() {
      return convertBulkInput(this.textInput, this.separater)
    }
  },
  watch: {
    replaces() {
      this.initialize()
    },
    separater() {
      this.initialize()
    },
    textInput() {
      if (this.validateBulkInput(this.textInput) !== true) {
        return
      }

      this.replaces = this.bulkInput
    }
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize() {
      this.textInput = parseReplaces(this.replaces, this.separater)
    },
    validateBulkInput(textInput) {
      const bulkInput = convertBulkInput(textInput, this.separater)

      if (bulkInput.some((replace) => replace === null)) {
        return '2列のcsvを貼り付けてください。あるいは、区切り文字を確認してください'
      }

      if (bulkInput.some((replace) => !replace.from)) {
        return '変換元コードは空にできません ※ 左列が変換元コードになります'
      }

      return true
    }
  }
}
</script>
