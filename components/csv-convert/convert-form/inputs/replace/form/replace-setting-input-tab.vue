<template>
  <v-container>
    <v-row v-if="errorMessage">
      <v-alert type="error">{{ errorMessage }}</v-alert>
    </v-row>
    <v-row>
      <replace-setting-table v-model="replaceValues" />
    </v-row>
  </v-container>
</template>

<script>
import replaceSettingTable from './table/replace-setting-table'

export default {
  components: { replaceSettingTable },
  props: {
    value: {
      type: Object,
      required: true
    },
    errorMessage: {
      type: null,
      required: true
    }
  },
  computed: {
    replaceValues: {
      get() {
        return this.value.value
      },
      set(replaceValues) {
        this.$emit('input', {
          ...this.value,
          value: replaceValues
        })
      }
    }
  }
}
</script>
