<template>
  <v-container>
    <v-container class="ml-3">
      <v-row class="my-3 font-weight-bold subtitle-1">
        オンラインで完結、無料の簡単CSV変換サービス
      </v-row>
      <v-row class="subtitle-2">
        異なるシステム間でデータをやり取りする際に必要となる
      </v-row>
      <v-row class="subtitle-2">
        「フォーマット変換」「コード値変換」「固定値セット」などを手軽に誰でも無料で行うことが出来ます。
      </v-row>
      <v-row class="subtitle-2">
        アップロードしたデータや変換処理後のデータは1時間後に削除されます。
      </v-row>
      <v-row class="subtitle-2">
        また、セキュリティで保護された環境で処理が行われているため、セキュリティ面も安心してご利用可能です！
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
  components: { convertSteps },
  middleware: ['parse-csv-query'],
  head() {
    return { title: 'CSV変換サービス' }
  }
}
</script>
