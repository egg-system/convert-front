import { mapMutations } from 'vuex'

export default {
  props: {
    step: {
      type: String,
      required: true
    }
  },
  computed: {
    nextStep() {
      return Number(this.step) + 1
    },
    previousStep() {
      if (this.step === '1') {
        return this.step
      }

      return Number(this.step) - 1
    }
  },
  methods: {
    ...mapMutations('csv', ['setCurrentStep'])
  }
}
