export const state = () => ({
  replaceSettings: {}
})

export const mutations = {
  updateReplaces(state, replaceSettings) {
    state.replaceSettings = replaceSettings
  }
}
