<template>
  <v-data-table
    :headers="replaceHeader"
    :items="replaceItems"
    class="replace-setting-table elevation-1"
    calculate-widths
    hide-default-footer
    disable-sort
  >
    <template v-slot:item.state="{ item }">
      <v-icon :color="validate(item) ? 'green' : 'red'">
        {{ validate(item) ? 'mdi-check' : 'mdi-alert' }}
      </v-icon>
    </template>
    <template v-slot:item.from="{ item }">
      <replace-setting-edit-dialog
        v-model="replaceValues"
        :index="item.index"
        property="from"
      />
    </template>
    <template v-slot:item.to="{ item }">
      <replace-setting-edit-dialog
        v-model="replaceValues"
        :index="item.index"
        property="to"
      />
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon class="ma-1" color="primary" @click="addReplace(item.index + 1)">
        mdi-plus-circle-outline
      </v-icon>
      <v-icon
        v-if="item.index > 0"
        class="ma-1"
        color="red"
        @click="removeReplace(item.index)"
      >
        mdi-minus-circle-outline
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { replaceHeader } from './replace-table-constants'
import replaceSettingEditDialog from './replace-setting-edit-dialog.vue'

export default {
  components: { replaceSettingEditDialog },
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  computed: {
    replaceItems: {
      get() {
        return this.replaceValues.map((replaceValue, index) => {
          return {
            ...replaceValue,
            index
          }
        })
      }
    },
    replaceValues: {
      get() {
        return this.value
      },
      set(replaceValues) {
        this.$emit('input', replaceValues)
      }
    },
    replaceHeader() {
      return replaceHeader
    }
  },
  methods: {
    validate(item) {
      return item.from && item.to
    },
    addReplace(newIndex) {
      const replaceValues = this.replaceValues.concat().splice(newIndex, 0, {
        from: null,
        to: null
      })
      this.$emit('input', replaceValues)
    },
    removeReplace(index) {
      const replaceValues = this.replaceValues.concat().splice(index, 1)
      this.$emit('input', replaceValues)
    }
  }
}
</script>

<style scoped>
.replace-setting-table {
  width: 100%;
}
</style>
