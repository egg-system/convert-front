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
  settingsKey: null
})

export const mutations = {
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
  removeSetting(state, index) {
    const convertSettings = state.settings.concat()
    convertSettings.splice(index, 1)
    state.settings = convertSettings.map((setting, index) => {
      setting.index = index
      return setting
    })
  },
  setSettingsKey(state, key) {
    state.settingsKey = key
  },
  setSettings(state, { convertSettings, replaceSettings }) {
    state.settings = convertSettings
    state.replacer.replaceSettings = replaceSettings
  }
}

export const getters = {
  defaultConvertSettings() {
    return defaultConvertSettings
  },
  settingFileContent(state, getters, rootState, rootGetters) {
    return JSON.stringify({
      replaceSettings: state.replacer.replaceSettings,
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
  },
  replaceKeys(state) {
    const replaceKeys = state.settings.map((setting) => setting.replaceKey)
    return Array.from(new Set(replaceKeys))
  }
}

export const actions = {
  deleteSetting({ commit, getters }, index) {
    commit('removeSetting', index)
    commit('replacer/filterReplaceSettings', getters.replaceKeys)
  },
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
