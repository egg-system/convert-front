export const state = () => ({
  settings: []
})

const newSetting = {
  name: null,
  from: null,
  converter: null,
  default: null
}

export const mutations = {
  addSettings(state) {
    const setting = { ...newSetting }
    setting.id = state.settings.length + 1

    state.settings.push(setting)
  },
  updateSettings(state, { index, key, value }) {
    const settings = state.settings.concat()
    settings[index][key] = value

    state.settings = settings
  }
}
