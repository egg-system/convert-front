<template>
  <v-container>
    <replace-setting-form v-if="replace" v-model="replace" />
    <v-row v-else>
      <v-row v-if="doDelete" align="center">
        <v-col cols="2">
          本当に削除しますか？
        </v-col>
        <v-col col="10">
          <v-btn
            class="ma-2"
            color="red"
            outlined
            @click="removeReplaceSetting"
          >
            削除する
          </v-btn>
          <v-btn class="ma-2" outlined @click="doDelete = false">
            キャンセル
          </v-btn>
        </v-col>
      </v-row>
      <template v-else>
        <v-btn class="ma-2" color="primary" outlined @click="newReplaceSetting">
          追加する
        </v-btn>
        <template v-if="hasReplaceKey">
          <v-btn class="ma-2" outlined @click="editReplaceSetting">
            編集する
          </v-btn>
          <v-btn class="ma-2" outlined color="red" @click="doDelete = true">
            削除する
          </v-btn>
        </template>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import replaceSettingForm from './replace-setting-form'

export default {
  components: { replaceSettingForm },
  props: {
    replaceKey: {
      type: null,
      required: true
    }
  },
  data: () => ({
    replace: null,
    doDelete: false
  }),
  computed: {
    hasReplaceKey() {
      return this.replaceKey !== null && this.replaceKey !== undefined
    },
    ...mapState('csv/converter', ['replaces'])
  },
  methods: {
    editReplaceSetting() {
      this.replace = {
        name: this.replaceKey,
        value: this.replaces[this.replaceKey]
      }
    },
    newReplaceSetting() {
      this.replace = {
        name: null,
        value: [{ from: null, to: null }]
      }
    },
    removeReplaceSetting() {
      this.deleteReplace(this.replaceKey)
      this.doDelete = false
    },
    ...mapMutations('csv/converter', ['deleteReplace'])
  }
}
</script>
