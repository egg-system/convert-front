<template>
  <v-tooltip top>
    <template v-slot:activator="{ on }">
      <v-btn
        :href="downloadSettingsUrl"
        class="mx-2"
        color="primary"
        download="settings.json"
        outlined
        v-on="on"
      >
        変換設定を保存する
      </v-btn>
    </template>
    <span>
      次回から設定ファイルをアップすることで、過去に入力した設定内容を一括で読み込めます。
    </span>
  </v-tooltip>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    downloadSettingsUrl() {
      const jsonBlob = new Blob([this.settingFileContent], {
        type: 'application/json'
      })
      return URL.createObjectURL(jsonBlob)
    },
    ...mapGetters('csv/converter', ['settingFileContent'])
  }
}
</script>
