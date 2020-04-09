export const state = () => ({
  currentStep: null,
  settings: []
})

const newSetting = {
  name: null,
  from: null,
  converter: null
}

export const mutations = {
  setCurrentStep(state, step) {
    state.currentStep = step
  },
  addSetting(state) {
    const setting = { ...newSetting }
    setting.id = state.settings.length + 1

    state.settings.push(setting)
  },
  updateSetting(state, { index, key, value }) {
    const settings = state.settings.concat()
    settings[index][key] = value

    state.settings = settings
  }
}

export const getters = {
  convertQuery(state) {
    const query = { step: state.currentStep }

    if (state.file.fileKey) {
      query.csv = state.file.fileKey
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
