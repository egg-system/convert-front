<template>
  <v-stepper v-model="step" vertival>
    <select-csv step="1" />
  </v-stepper>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import SelectCsv from './steps/select-csv.vue'

export default {
  components: { SelectCsv },
  data: () => ({
    file: null
  }),
  computed: {
    step: {
      get() {
        return this.currentStep
      },
      set(value) {
        this.setCurrentStep(value)
      }
    },
    ...mapState('csv', ['currentStep'])
  },
  methods: {
    ...mapMutations('csv', ['setCurrentStep'])
  }
}
</script>
