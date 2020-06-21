export const state = () => ({
  replaceSettings: {}
})

export const mutations = {
  updateReplaces(state, replaceSettings) {
    state.replaceSettings = replaceSettings
  },
  filterReplaceSettings(state, replaceKeys) {
    const replaceSettings = { ...state.replaceSettings }
    Object.keys(replaceSettings).forEach((replaceKey) => {
      if (!replaceKeys.includes(replaceKey)) {
        delete replaceSettings[replaceKey]
      }
    })

    state.replaceSettings = replaceSettings
  }
}

export const getters = {
  validateReplaceSetting(state, getters) {
    return (replaceSetting) => {
      return replaceSetting.every((replace) => getters.validateReplace(replace))
    }
  },
  validateReplace() {
    return (replace) => {
      return replace.to && replace.from
    }
  }
}
