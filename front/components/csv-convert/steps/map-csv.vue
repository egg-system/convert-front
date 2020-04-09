<template>
  <v-container>
    <v-stepper-step :step="step" :editable="editable">
      変換後CSVの項目作成
    </v-stepper-step>
    <v-stepper-content :step="step">
      <convert-table />
    </v-stepper-content>
  </v-container>
</template>

<script>
import stepsMixins from './steps-mixins'
import convertTable from './convert-table/convert-table.vue'

export default {
  components: { convertTable },
  mixins: [stepsMixins],
  computed: {
    editable() {
      return 'csv' in this.$route.query
    }
  }
}
</script>
