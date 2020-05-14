<template>
  <div>
    <v-row>
      <v-radio-group v-model="doReplace" label="コード変換の設定" width="100%">
        <v-radio :value="false" label="コード変換を設定しない" />
        <v-radio :value="true" label="コード変換を設定する" />
      </v-radio-group>
    </v-row>
    <replace-setting-input v-if="doReplace" v-model="convertSetting" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import convertFormMixins from '../mixins/convert-form-mixins'
import replaceSettingInput from './replace/replace-setting-input.vue'

export default {
  components: { replaceSettingInput },
  mixins: [convertFormMixins],
  data: () => ({
    doReplace: false
  }),
  computed: {
    ...mapState('csv/converter', ['replaces'])
  },
  watch: {
    doReplace() {
      if (!this.doReplace) {
        this.convertSetting = {
          ...this.convertSetting,
          replaceKey: null
        }
      }
    }
  },
  created() {
    const replaceKey = this.convertSetting.replaceKey
    if (!Object.keys(this.replaces).includes(replaceKey)) {
      this.convertSetting = {
        ...this.convertSetting,
        replaceKey: null
      }
    }

    this.doReplace = !!this.convertSetting.replaceKey
  }
}
</script>
