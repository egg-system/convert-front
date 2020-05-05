<template>
  <v-dialog v-model="dialog" max-width="50%">
    <template v-slot:activator="{ on }">
      <v-btn class="ma-2" color="warning" fab small v-on="on">
        <v-icon>mdi-bell-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>お知らせ</v-card-title>
      <v-card-text>
        <v-row class="caption">
          <v-col cols="2">2020年5月7日</v-col>
          <v-col>α版リリース</v-col>
        </v-row>
        <v-row class="caption">
          <v-col cols="2">2020年5月18日</v-col>
          <v-col>
            <ul>
              <li>
                変換機能の追加
                <ul>
                  <li>2項目の結合</li>
                  <li>日付/金額のフォーマット変換</li>
                  <li>レコード分割</li>
                  <li>コード採番</li>
                  <li>文字列付与</li>
                  <li>超過文字列カット</li>
                </ul>
              </li>
              <li>変換設定の保存機能</li>
              <li>ドラッグ＆ドロップによるファイルアップロード</li>
              <li>ヘルプページ開設</li>
            </ul>
          </v-col>
        </v-row>
        <v-row class="caption">
          <v-col cols="2">2020年7月頃</v-col>
          <v-col>正式版リリース</v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>
