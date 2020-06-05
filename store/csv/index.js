export const state = () => ({
  currentStep: null
})

export const mutations = {
  setCurrentStep(state, step) {
    state.currentStep = step
  },
  resetCsv(state) {
    state.file.fileKey = null
    state.currentStep = 1
  },
  resetSettingFile(state) {
    state.converter.settingsKey = null
    state.currentStep = 2
  }
}

export const getters = {
  convertQuery(state) {
    const query = { step: state.currentStep }

    if (state.file.fileKey) {
      query.csv = state.file.fileKey
    }

    if (state.converter.settingsKey) {
      query.settings = state.converter.settingsKey
    }

    return query
  }
}

export const actions = {
  pushStep({ commit, getters }, step) {
    commit('setCurrentStep', step)
    this.$router.push({
      path: '/',
      query: getters.convertQuery
    })
  }
}
