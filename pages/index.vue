<template>
  <v-container>
    <v-container>
      <twitter-follow-btn />
    </v-container>
    <v-container class="ml-3">
      <v-row class="my-3 font-weight-bold subtitle-1">
        オンラインで完結、無料の簡単CSV変換サービス
      </v-row>
      <v-row class="subtitle-2">
        システムから出力したCSVファイルを、別のシステムへ取り込む際にご利用ください！
      </v-row>
      <v-row class="subtitle-2">
        取り込み先のシステムに合わせて「項目の並び順を変える」「コード値を変換する」「決まった値をセットする」などを手軽に誰でも無料で行うことが出来ます。
      </v-row>
      <v-row class="subtitle-2">
        アップロードしたCSVファイルと、変換後のCSVファイルは1時間後に自動削除されます。
      </v-row>
      <v-row class="subtitle-2">
        また、セキュリティで保護された環境で処理を行っているため、セキュリティ面も安心してご利用可能です！
      </v-row>
    </v-container>
    <v-container>
      <convert-steps />
    </v-container>
  </v-container>
</template>

<script>
import convertSteps from '@/components/csv-convert/convert-steps.vue'
import twitterFollowBtn from '@/components/ui/twitter-follow-btn.vue'

export default {
  components: { convertSteps, twitterFollowBtn },
  middleware: ['parse-csv-query'],
  head() {
    return { title: 'CSV変換サービス' }
  }
}
</script>
