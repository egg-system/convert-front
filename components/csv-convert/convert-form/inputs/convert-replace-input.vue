<template>
  <div>
    <v-row>
      <v-radio-group v-model="doReplace" label="コード変換の設定" width="100%">
        <v-radio :value="false" label="コード変換を設定しない" />
        <v-radio :value="true" label="コード変換を設定する" />
      </v-radio-group>
    </v-row>
    <replace-setting-Form v-if="doReplace" v-model="replaceSetting" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import convertFormMixins from '../mixins/convert-form-mixins'
import replaceSettingForm from './replace/replace-setting-form.vue'

export default {
  components: { replaceSettingForm },
  mixins: [convertFormMixins],
  computed: {
    doReplace: {
      get() {
        return this.replaceKey in this.replaces
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
          return this.replaces[this.replaceKey]
        }
        return null
      },
      set(replaceSetting) {
        this.updateReplace({
          name: this.replaceKey,
          value: replaceSetting
        })
      }
    },
    replaceKey() {
      return `列${this.convertSetting.index + 1}の変換設定`
    },
    ...mapState('csv/converter', ['replaces'])
  },
  methods: {
    initilizeReplace() {
      this.updateReplace({
        name: this.replaceKey,
        value: [{ from: null, to: null }]
      })
    },
    doRemove() {
      this.removeReplace(this.replaceKey)
    },
    ...mapMutations('csv/converter', ['updateReplace', 'removeReplace'])
  }
}
</script>
