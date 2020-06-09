import { generateHash } from '~/plugins/generate-hash'

const defaultConvertSettings = {
  name: null,
  fixedValue: null,
  fromIndex: null,
  replaceKey: null
}

export const state = () => ({
  settings: [
    {
      ...defaultConvertSettings,
      index: 0
    }
  ],
  settingsKey: null,
  replaces: {}
})

export const mutations = {
  addReplace(state, replaceSetting) {
    const replaces = { ...state.replaces }
    replaces[replaceSetting.name] = replaceSetting.value
    state.replaces = replaces
  },
  addSetting(state, newIndex) {
    const convertSettings = state.settings.concat()
    convertSettings.splice(newIndex, 0, {
      ...defaultConvertSettings
    })
    state.settings = convertSettings.map((setting, index) => {
      return { ...setting, index }
    })
  },
  updateSetting(state, updateSetting) {
    const convertSettings = state.settings.concat()
    convertSettings[updateSetting.index] = updateSetting
    state.settings = convertSettings
  },
  deleteSetting(state, index) {
    const convertSettings = state.settings.concat()
    convertSettings.splice(index, 1)
    state.settings = convertSettings.map((setting, index) => {
      setting.index = index
      return setting
    })
  },
  deleteReplace(state, replaceKey) {
    const replaces = { ...state.replaces }
    delete replaces[replaceKey]
    state.replaces = replaces
  },
  setSettingsKey(state, key) {
    state.settingsKey = key
  },
  setSettings(state, { convertSettings, replaceSettings }) {
    state.settings = convertSettings
    state.replaces = replaceSettings
  }
}

export const getters = {
  settingFileContent(state, getters, rootState, rootGetters) {
    return JSON.stringify({
      replaceSettings: state.replaces,
      convertSettings: state.settings,
      csvHeaders: rootGetters['csv/file/csvHeaders']
    })
  },
  validateConvert() {
    return (convertSetting) => {
      return convertSetting.fromIndex !== null || convertSetting.fixedValue
    }
  },
  validateSetting(state, getters) {
    return (convertSetting) => {
      if (!convertSetting.name) {
        return false
      }

      return getters.validateConvert(convertSetting)
    }
  },
  isValidSettings(state, getters) {
    return state.settings.every((setting) => getters.validateSetting(setting))
  }
}

export const actions = {
  async getSettingsFile({ commit }, settingsKey) {
    commit('setSettingsKey', settingsKey)

    const { data } = await this.$axios.get('/files', {
      params: { fileKey: settingsKey }
    })

    commit('setSettings', data)
  },
  async putSettingsFile({ commit, getters }) {
    const settingsKey = await generateHash(getters.settingFileContent)
    commit('setSettingsKey', settingsKey)

    await this.$axios.put('/files', {
      fileKey: settingsKey,
      file: getters.settingFileContent
    })
  }
}
