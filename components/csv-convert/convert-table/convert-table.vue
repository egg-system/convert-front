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
      </v-toolbar>
    </template>
    <template #item.state="{ item }">
      <v-icon :color="validate(item) ? 'green' : 'red'">
        {{ validate(item) ? 'mdi-check' : 'mdi-alert' }}
      </v-icon>
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
        @click="deleteSetting(item.index)"
      >
        mdi-minus-circle-outline
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { headers, converters } from './convert-table'
import nameDialog from './dialogs/name-dialog.vue'
import convertDialog from './dialogs/convert-dialog.vue'

export default {
  components: { nameDialog, convertDialog },
  computed: {
    tableHeaders() {
      return headers
    },
    converters() {
      return converters
    },
    ...mapState('csv/converter', ['settings']),
    ...mapGetters('csv/converter', ['validateSetting'])
  },
  methods: {
    validate(convertSetting) {
      return this.validateSetting(convertSetting)
    },
    ...mapMutations('csv/converter', ['addSetting', 'deleteSetting'])
  }
}
</script>
