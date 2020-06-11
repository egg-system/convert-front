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
        <settings-dialog />
      </v-toolbar>
    </template>
    <template #item.state="{ item }">
      <convert-row-status :convert-setting="item" />
    </template>
    <template #item.id="{ item }">
      {{ item.index + 1 }}
    </template>
    <template #item.name="{ item }">
      <name-dialog :index="item.index" />
    </template>
    <template #item.convert="{ item }">
      <convert-dialog :convert-setting="item" />
    </template>
    <template #item.action="{ item }">
      <v-icon class="ma-1" color="primary" @click="addSetting(item.index + 1)">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon
        v-if="settings.length > 1"
        class="ma-1"
        color="red"
        @click="doDeleteSetting(item)"
      >
        mdi-minus-circle-outline
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import { headers, converters } from './convert-table'
import nameDialog from './dialogs/name-dialog.vue'
import convertDialog from './dialogs/convert-dialog.vue'
import convertRowStatus from './convert-row-status.vue'
import settingsDialog from './dialogs/settings-dialog'

export default {
  components: {
    nameDialog,
    convertDialog,
    convertRowStatus,
    settingsDialog
  },
  computed: {
    tableHeaders() {
      return headers
    },
    converters() {
      return converters
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/converter/validator', ['isEmptySetting'])
  },
  methods: {
    doDeleteSetting(convertSetting) {
      const shouldDelete =
        this.isEmptySetting(convertSetting) ||
        window.confirm('変換設定を削除します。よろしいでしょうか？')

      if (shouldDelete) {
        this.deleteSetting(convertSetting.index)
      }
    },
    ...mapActions('csv/converter', ['deleteSetting']),
    ...mapMutations('csv/converter', ['addSetting'])
  }
}
</script>
