export const state = () => ({
  file: null,
  currentStep: null
})

export const mutations = {
  setFile(state, file) {
    state.file = file
    state.currentStep = 2
  },
  setCurrentStep(state, step) {
    state.currentStep = step
  }
}
