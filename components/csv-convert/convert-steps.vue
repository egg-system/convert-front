<template>
  <v-stepper v-model="step" vertival>
    <select-csv step="1" />
    <convert-csv step="2" />
    <download-csv step="3" />
  </v-stepper>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import selectCsv from './steps/select-csv.vue'
import convertCsv from './steps/convert-csv.vue'
import downloadCsv from './steps/download-csv.vue'

export default {
  components: { selectCsv, convertCsv, downloadCsv },
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
