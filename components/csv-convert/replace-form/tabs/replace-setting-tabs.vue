<template>
  <div class="replace-setting-tab">
    <v-tabs v-model="inputTab">
      <v-tab v-for="(inputTabItem, index) in inputTabItems" :key="index">
        {{ inputTabItem.name }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="inputTab">
      <v-tab-item v-for="(inputTabItem, index) in inputTabItems" :key="index">
        <component :is="inputTabItem.component" v-model="replaceValues" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import replaceSettingTable from '../table/replace-setting-table.vue'
import replaceSettingBulkInput from '../bulk-input/replace-setting-bulk-input.vue'
import { inputTabItems } from './replace-setting-tabs-constants'

export default {
  components: { replaceSettingTable, replaceSettingBulkInput },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    inputTab: 'replace-setting-table'
  }),
  computed: {
    inputTabItems() {
      return inputTabItems
    },
    replaceValues: {
      get() {
        return this.value
      },
      set(replaceValues) {
        this.$emit('input', replaceValues)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.replace-setting-tab {
  width: 100%;
}
</style>
