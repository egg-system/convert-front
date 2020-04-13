<template>
  <v-data-table
    :headers="tableHeaders"
    :items="settings"
    disable-filtering
    disable-pagination
    disable-sort
    hide-default-footer
  >
    <template #top>
      <v-toolbar flat color="white">
        <v-toolbar-title>CSV変換設定</v-toolbar-title>
        <v-spacer />
        <convert-dialog />
      </v-toolbar>
    </template>
    <template #item.id="{ item }">
      {{ item.index + 1 }}
    </template>
    <template #item.description="{ item }">
      {{ getDescription(item) }}
    </template>
    <template #item.action="{ item }">
      <v-row justify="space-around">
        <convert-dialog :setting-index="item.index" />
        <v-icon @click="confirmDelete(item.index)">mdi-delete</v-icon>
      </v-row>
    </template>
    <template #no-data>
      CSVの変換設定を登録してください。
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
import convertDialog from '../convert-form/convert-dialog'
import { headers, converters } from './convert-table'

export default {
  components: { convertDialog },
  computed: {
    tableHeaders() {
      return headers
    },
    converters() {
      return converters
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/converter', ['getDescription']),
    ...mapGetters('csv/file', ['csvHeader'])
  },
  methods: {
    confirmDelete(index) {
      if (!window.confirm('本当に削除しても、よろしいでしょうか？')) {
        return
      }

      this.deleteSetting(index)
    },
    ...mapMutations('csv/converter', ['deleteSetting'])
  }
}
</script>
