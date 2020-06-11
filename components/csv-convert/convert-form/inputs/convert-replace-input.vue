<template>
  <v-row>
    <v-radio-group v-model="doReplace" label="コード変換の設定" width="100%">
      <v-radio :value="false" label="コード変換を設定しない" />
      <v-radio :value="true" label="コード変換を設定する" />
    </v-radio-group>
    <replace-setting-form v-if="doReplace" v-model="replaceSetting" />
  </v-row>
</template>

<script>
import replaceSettingForm from '../../replace-form/replace-setting-form.vue'
import convertReplaceInputMixin from './mixins/convert-replace-input-mixin'

export default {
  components: { replaceSettingForm },
  mixins: [convertReplaceInputMixin],
  computed: {
    doReplace: {
      get() {
        return this.replaceKey in this.replaceSettings
      },
      set(doReplace) {
        doReplace ? this.initilizeReplace() : this.doRemove()
        this.convertSetting = {
          ...this.convertSetting,
          replaceKey: doReplace ? this.replaceKey : null
        }
      }
    },
    replaceSetting: {
      get() {
        if (this.doReplace) {
          return this.replaceSettings[this.replaceKey]
        }
        return null
      },
      set(replaceSetting) {
        const replaceSettings = { ...this.replaceSettings }
        replaceSettings[this.replaceKey] = replaceSetting
        this.replaceSettings = replaceSettings
      }
    },
    replaceKey() {
      const replaceKeyIndex = this.convertSetting.index + 1
      return `列${replaceKeyIndex}の変換設定`
    }
  },
  methods: {
    initilizeReplace() {
      this.replaceSetting = [{ from: null, to: null }]
    },
    doRemove() {
      const replaceSettings = { ...this.replaceSettings }
      delete replaceSettings[this.replaceKey]
      this.replaceSettings = replaceSettings
    }
  }
}
</script>
