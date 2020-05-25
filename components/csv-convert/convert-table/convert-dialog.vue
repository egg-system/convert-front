<template>
  <v-dialog v-model="isShown" persistent>
    <template #activator="{ on }">
      <v-icon v-if="doUpdate" v-on="on">
        mdi-pencil
      </v-icon>
      <v-btn v-else color="primary" dark v-on="on">変換設定の追加</v-btn>
      <!-- <v-btn class="ma-2" color="primary" @click="reflectSetting">
        {{ '登録する' }}
      </v-btn> -->
    </template>
    <convert-form
      v-if="convertSetting"
      v-model="convertSetting"
      :do-update="doUpdate"
      @cancel="isShown = false"
    />
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
import { defaultConvert } from '../convert-form/convert-constants'
import convertForm from '../convert-form/convert-form'

export default {
  components: { convertForm },
  props: {
    settingIndex: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    convertSetting: null,
    isValid: false
  }),
  computed: {
    doUpdate() {
      return this.settingIndex !== null
    },
    propSetting() {
      if (this.doUpdate) {
        return this.settings[this.settingIndex]
      }

      return defaultConvert
    },
    isShown: {
      get() {
        return this.convertSetting !== null
      },
      set(isShown) {
        this.convertSetting = isShown ? this.propSetting : null
      }
    },
    ...mapState('csv/converter', ['settings'])
  }
}
</script>
