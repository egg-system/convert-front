<template>
  <v-container>
    <v-stepper-step :step="step" :complete="compuleted">
      変換CSVの選択
    </v-stepper-step>
    <v-stepper-content :step="step">
      <v-file-input v-model="csv" accept=".csv" single-line show-size />
    </v-stepper-content>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    step: {
      type: String,
      required: true
    }
  },
  computed: {
    compuleted() {
      return this.file !== null
    },
    csv: {
      get() {
        return this.file
      },
      set(csv) {
        this.setFile(csv)
      }
    },
    ...mapState('csv', ['file'])
  },
  methods: {
    ...mapMutations('csv', ['setFile'])
  }
}
</script>
