<template>
  <v-container>
    <v-container class="ml-3">
      <v-row class="font-weight-bold subtitle-1">
        オンラインで完結、無料のかんたんCSV変換サービス
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
