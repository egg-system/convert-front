export const state = () => ({
  file: null,
  currentStep: 1,
  settings: []
})

const newSetting = {
  name: null,
  from: null,
  converter: null
}

export const mutations = {
  setFile(state, file) {
    state.file = file
  },
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
  csvContent(state) {
    const fileReader = new FileReader()
    return fileReader.readAsText(state.csv)
  }
}
