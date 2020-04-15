<template>
  <v-dialog v-model="isShown" persistent>
    <template #activator="{ on }">
      <v-icon v-if="doUpdate" v-on="on">
        mdi-pencil
      </v-icon>
      <v-btn v-else color="primary" dark v-on="on">変換設定の追加</v-btn>
    </template>
    <v-card>
      <v-card-title>
        {{ doUpdate ? 'CSV設定の更新' : 'CSV設定の登録' }}
      </v-card-title>
      <v-card-text>
        <convert-form v-if="isShown" v-model="convertSetting" />
      </v-card-text>
      <v-card-actions>
        <v-row justify="center">
          <v-btn class="ma-2" color="primary" @click="reflectSetting">
            {{ doUpdate ? '更新する' : '登録する' }}
          </v-btn>
          <v-btn class="ma-2" @click="isShown = false">キヤンセル</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import convertForm from './convert-form'

export default {
  components: { convertForm },
  props: {
    settingIndex: {
      type: Number,
      default: null
    }
  },
  data: () => ({
    convertSetting: null
  }),
  computed: {
    doUpdate() {
      return this.settingIndex !== null
    },
    propSetting() {
      if (this.doUpdate) {
        return this.settings[this.settingIndex]
      }

      return {
        name: null,
        fixedValue: null,
        fromIndex: null
      }
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
  },
  methods: {
    reflectSetting() {
      const reflectSetting = this.doUpdate
        ? this.updateSetting
        : this.addSetting

      reflectSetting(this.convertSetting)
      this.convertSetting = null
    },
    ...mapMutations('csv/converter', ['addSetting', 'updateSetting'])
  }
}
</script>
