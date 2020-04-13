import { generateHash } from '@/plugins/generateHash'

export const state = () => ({
  settings: [],
  settingsKey: null
})

export const mutations = {
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
  setSettingsKey(state, key) {
    state.settingsKey = key
  },
  setSettings(state, settings) {
    state.settings = settings
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
      convertSettings: state.settings,
      csvHeaders: rootGetters['csv/file/csvHeaders']
    })
  }
}

export const actions = {
  async getSettingsFile({ commit }, settingsKey) {
    commit('setSettingsKey', settingsKey)

    try {
      const { data } = await this.$axios.get(`/files/${settingsKey}`)
      commit('setSettings', data.convertSettings)
    } catch (apiError) {
      if (apiError.response.status === 404) {
        this.$router.push('/')
      }
    }
  },
  async putSettingsFile({ commit, getters, error }) {
    const settingsKey = await generateHash(getters.settingFileContent)
    commit('setSettingsKey', settingsKey)

    try {
      await this.$axios.put(`/files/${settingsKey}`, getters.settingFileContent)
    } catch (apiError) {
      error({
        statusCode: apiError.response.status,
        message: apiError.response.message
      })
    }
  }
}
