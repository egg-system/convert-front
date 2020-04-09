<template>
  <v-data-table
    :headers="headers"
    :items="settings"
    disable-filtering
    disable-pagination
    disable-sort
    hide-default-footer
  >
    <template v-slot:item.name="{ item }">
      <v-container>
        <v-text-field
          :value="item.name"
          @input="(value) => updateItem(item.id, 'name', value)"
        />
      </v-container>
    </template>
    <template v-slot:no-data>
      <v-container>
        <p>変換設定がありません。追加してください。</p>
        <v-btn @click="addSetting" color="primary">追加する</v-btn>
      </v-container>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { headers } from './convert-table'

export default {
  computed: {
    headers() {
      return headers
    },
    ...mapState('csv', ['settings'])
  },
  methods: {
    updateItem(id, key, value) {
      const index = id - 1
      this.updateSetting({ index, key, value })
    },
    ...mapMutations('csv', ['addSetting', 'updateSetting'])
  }
}
</script>
