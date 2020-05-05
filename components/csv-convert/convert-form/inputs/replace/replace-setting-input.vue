<template>
  <div>
    <v-row>
      <v-select
        v-model="replaceKey"
        :items="replaceItems"
        label="コード変換設定を選択する"
        no-data-text="利用可能なコード変換設定がありません。追加してください"
        :rules="[validateReplaceSetting]"
        clearable
      />
    </v-row>
    <v-row>
      <replace-setting-actions :replace-key="replaceKey" />
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import convertFormMixins from '../../mixins/convert-form-mixins'
import replaceSettingActions from './replace-setting-actions.vue'

export default {
  components: { replaceSettingActions },
  mixins: [convertFormMixins],
  computed: {
    replaceKey: {
      get() {
        return this.convertSetting.replaceKey
      },
      set(replaceKey) {
        this.convertSetting = {
          ...this.convertSetting,
          replaceKey
        }
      }
    },
    replaceItems() {
      return Object.keys(this.replaces).map((replaceKey) => {
        return { text: replaceKey, value: replaceKey }
      })
    },
    ...mapState('csv/converter', ['replaces'])
  },
  methods: {
    validateReplaceSetting(value) {
      if (Object.keys(this.replaces).includes(value)) {
        return true
      }

      return 'コード変換設定を選択してください。'
    }
  }
}
</script>
