<template>
  <v-dialog v-model="isShown" persistent>
    <template v-slot:activator="{ on }">
      <v-btn outlined color="primary" v-on="on">
        変換設定を読み込む
      </v-btn>
    </template>
    <v-card>
      <v-container>
        <v-row>
          <v-card-title>保存した変換設定を読み込む</v-card-title>
          <v-card-text>
            ※ 変換設定は「保存するボタン」を押すと保存できます
          </v-card-text>
        </v-row>
        <v-row>
          <v-card-text>
            <v-file-input v-model="settingFile" accept=".json" />
            <v-btn class="ma-2" color="primary" @click="readSettingFile">
              読み込む
            </v-btn>
            <v-btn class="ma-2" @click="close">キャンセルする</v-btn>
            <p v-if="errorMessage" class="red--text font-weight-bold">
              {{ errorMessage }}
            </p>
          </v-card-text>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    isShown: false,
    settingFile: null,
    errorMessage: null
  }),
  methods: {
    close() {
      Object.assign(this.$data, this.$options.data())
    },
    readSettingFile() {
      this.errorMessage = null
      if (!this.settingFile) {
        this.errorMessage = '変換設定ファイルを選択してください。'
        return
      }

      this.doReadSettingFile()
    },
    doReadSettingFile() {
      const fileReader = new FileReader()
      fileReader.readAsText(this.settingFile)

      fileReader.onload = () => {
        const settings = JSON.parse(fileReader.result)
        this.setSettings(settings)
        this.close()
      }

      fileReader.onerror = () => {
        this.errorMessage = '変換設定ファイルの読み込みに失敗しました。'
      }
    },
    ...mapMutations('csv/converter', ['setSettings'])
  }
}
</script>
