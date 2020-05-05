<template>
  <v-container>
    <v-form ref="replaceFrom" v-model="isFormValid">
      <v-row align="baseline">
        <v-col>
          <v-text-field
            v-model="replaceName"
            :rules="[
              (value) => !!value || 'コード変換設定の名前を入力してください'
            ]"
            label="コード変換設定の名前を入力する"
          />
        </v-col>
        <v-col>
          <v-row justify="end" align="center">
            <v-btn class="ma-2" color="primary" outlined @click="reflect">
              反映する
            </v-btn>
            <v-btn class="ma-2" color="red" outlined @click="cancel">
              キャンセル
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
      <replace-setting-tabs
        v-model="replaceSetting"
        :error-message="errorMessage"
      />
    </v-form>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import replaceSettingTabs from './tabs/replace-setting-tabs'

export default {
  components: { replaceSettingTabs },
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    isFormValid: false,
    errorMessage: ''
  }),
  computed: {
    replaceSetting: {
      get() {
        return this.value
      },
      set(replaceSetting) {
        this.$emit('input', replaceSetting)
      }
    },
    replaceName: {
      get() {
        return this.value.name
      },
      set(replaceName) {
        this.replaceSetting = {
          ...this.value,
          name: replaceName
        }
      }
    }
  },
  methods: {
    cancel() {
      this.replaceSetting = null
    },
    reflect() {
      this.$refs.replaceFrom.validate()
      this.validation()
      if (!this.isFormValid || this.errorMessage) {
        return
      }

      this.addReplace(this.value)
      this.cancel()
    },
    validation() {
      this.errorMessage = ''

      const isValidReplaces = this.value.value.every((value) => {
        return value.from && value.to
      })

      if (!isValidReplaces) {
        this.errorMessage = '未入力のコード変換設定があります'
      }
    },
    ...mapMutations('csv/converter', ['addReplace'])
  }
}
</script>
