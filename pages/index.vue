<template>
  <v-container>
    <v-container class="ml-3">
      <v-row class="font-weight-bold">
        『オンラインで完結、無料のかんたんデータ変換サービス』
      </v-row>
      <v-row class="subtitle-2">
        異なるシステム間でデータをやり取りする際に必要となる、
      </v-row>
      <v-row class="subtitle-2">
        「フォーマット変換」「コード値変換」「固定値セット」などを、手軽に誰でも無料で行うことが出来ます。
      </v-row>
      <v-row class="subtitle-2">
        アップロードしたデータは保存されず、変換処理後すぐに削除されるためセキュリティも問題なし！
      </v-row>
    </v-container>
    <v-container>
      <convert-steps />
    </v-container>
  </v-container>
</template>

<script>
import convertSteps from '@/components/csv-convert/convert-steps.vue'

export default {
  layout: 'input',
  components: { convertSteps },
  middleware: ['parse-csv-query']
}
</script>
