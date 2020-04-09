<template>
  <v-stepper v-model="step" vertival>
    <select-csv step="1" />
    <map-csv step="2" />
  </v-stepper>
</template>

<script>
import { mapState } from 'vuex'
import selectCsv from './steps/select-csv.vue'
import mapCsv from './steps/map-csv.vue'

export default {
  components: { selectCsv, mapCsv },
  data: () => ({
    file: null
  }),
  computed: {
    step() {
      return this.currentStep
    },
    ...mapState('csv', ['currentStep'])
  }
}
</script>
