import { generateHash } from '~/plugins/generate-hash'

export const state = () => ({
  settings: [],
  settingsKey: null,
  replaces: {}
})

export const mutations = {
  addReplace(state, replaceSetting) {
    const replaces = { ...state.replaces }
    replaces[replaceSetting.name] = replaceSetting.value
    state.replaces = replaces
  },
  addSetting(state, newSetting) {
    const convertSettings = state.settings.concat()
    convertSettings.push({
      ...newSetting,
      index: convertSettings.length
    })
    state.settings = convertSettings
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
  getCsvColumnName(state, getters, rootState, rootGetters) {
    return (fromIndex) => {
      const csvHeaders = rootGetters['csv/file/csvHeaders']
      if (fromIndex !== null && csvHeaders[fromIndex]) {
        return csvHeaders[fromIndex].text
      }

      return null
    }
  },
  getDescription(state, getters) {
    return (convertSetting) => {
      if (convertSetting.fixedValue) {
        return `固定値「${convertSetting.fixedValue}」で補完する`
      }

      if (getters.getCsvColumnName(convertSetting.fromIndex)) {
        const columnName = getters.getCsvColumnName(convertSetting.fromIndex)
        const displayFromIndex = convertSetting.fromIndex + 1
        return `変換元CSVの${displayFromIndex}列目「${columnName}」からデータを取得する`
      }

      return null
    }
  },
  settingFileContent(state, getters, rootState, rootGetters) {
    return JSON.stringify({
      replaceSettings: state.replaces,
      convertSettings: state.settings,
      csvHeaders: rootGetters['csv/file/csvHeaders']
    })
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
  },
  getPreview({ rootState }) {
    const fileKey = rootState.file.fileKey
    console.log(fileKey)
  }
}
