<template>
  <v-stepper v-model="step" vertival>
    <select-csv step="1" />
    <map-csv step="2" />
  </v-stepper>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import selectCsv from './steps/select-csv.vue'
import mapCsv from './steps/map-csv.vue'

export default {
  components: { selectCsv, mapCsv },
  data: () => ({
    file: null
  }),
  computed: {
    step: {
      get() {
        return this.currentStep
      },
      set(step) {
        this.pushStep(step)
      }
    },
    ...mapState('csv', ['currentStep'])
  },
  methods: {
    ...mapActions('csv', ['pushStep'])
  }
}
</script>
