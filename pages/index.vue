<template>
  <v-container>
    <v-container class="ml-3">
      <v-row class="font-weight-bold subtitle-1">
        オンラインで完結、無料のかんたんデータ変換サービス
      </v-row>
      <v-row class="subtitle-2">
        異なるシステム間でデータをやり取りする際に必要となる
      </v-row>
      <v-row class="subtitle-2">
        「フォーマット変換」「コード値変換」「固定値セット」などを手軽に誰でも無料で行うことが出来ます。
      </v-row>
      <v-row class="subtitle-2">
        アップロードしたデータは保存されず、変換処理後すぐに削除されるためセキュリティも問題なし！
      </v-row>
    </v-container>
    <v-container>
      <convert-steps />
    </v-container>
    <!-- release note -->
    <v-container class="release_note">
      <v-flex class="ml-3 justify-center align-center">
        <v-row class="font-weight-bold subtitle-2">
          お知らせ
        </v-row>
        <v-row class="caption">
          <v-col cols="1">2020/5/7</v-col>
          <v-col>α版リリース</v-col>
        </v-row>
        <v-row class="caption">
          <v-col cols="1">2020/5/18</v-col>
          <v-col>
            <p>
              ・変換機能の追加（2項目の結合、日付/金額のフォーマット変換、レコード分割、コード採番、文字列付与、超過文字列カット）
            </p>
            <p>・変換設定の保存機能</p>
            <p>・ドラッグ＆ドロップによるファイルアップロード</p>
            <p>・ヘルプページ開設</p>
          </v-col>
        </v-row>
        <v-row class="caption">
          <v-col cols="1">2020/7頃</v-col>
          <v-col>正式版リリース</v-col>
        </v-row>
      </v-flex>
    </v-container>
  </v-container>
</template>

<script>
import convertSteps from '@/components/csv-convert/convert-steps.vue'

export default {
  components: { convertSteps },
  layout: 'input',
  middleware: ['parse-csv-query']
}
</script>

<style scoped>
.release_note {
  width: 98%;
  height: 150px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.col {
  padding: 3px;
}
p {
  margin-bottom: none;
}
</style>
