<template>
  <v-data-table
    :headers="tableHeaders"
    :items="settings"
    disable-filtering
    disable-pagination
    disable-sort
    hide-default-footer
  >
    <template v-slot:no-data>
      <v-container>
        <p>変換設定がありません。追加してください。</p>
        <v-btn color="primary" @click="addSettings">追加する</v-btn>
      </v-container>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import { headers, converters } from './convert-table'

export default {
  computed: {
    tableHeaders() {
      return headers
    },
    converters() {
      return converters
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/file', ['csvHeader'])
  },
  methods: {
    updateItem(id, key, value) {
      const index = id - 1
      this.updateSettings({ index, key, value })
    },
    ...mapMutations('csv/converter', ['addSettings', 'updateSettings'])
  }
}
</script>
