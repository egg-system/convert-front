export const getters = {
  isValidSettings(state, getters, rootState) {
    const settings = rootState.csv.converter.settings
    return settings.every((setting) => {
      const isValidSetting = getters.isValidSetting
      return isValidSetting(setting)
    })
  },
  isValidConvert(state, getters) {
    return (convertSetting) => {
      return !getters.validateConvert(convertSetting)
    }
  },
  isValidSetting(state, getters) {
    return (convertSetting) => {
      const errors = getters.validateSetting(convertSetting)
      return errors.length === 0
    }
  },
  isEmptySetting(state, getters) {
    return (convertSetting) => {
      const isEmptyName = !convertSetting.name
      const isEmptyConvert = !getters.isValidConvert(convertSetting)
      return isEmptyName && isEmptyConvert
    }
  },
  validateSetting(state, getters) {
    return (convertSetting) => {
      const errors = []
      if (!convertSetting.name) {
        errors.push('列名を入力してください。')
      }

      const convertError = getters.validateConvert(convertSetting)
      if (convertError) {
        errors.push(convertError)
      }

      const fromValueError = getters.validateConvertFromIndex(convertSetting)
      if (fromValueError) {
        errors.push(fromValueError)
      }

      return errors
    }
  },
  validateConvert() {
    return (convertSetting) => {
      const hasFromIndex = convertSetting.fromIndex !== null
      const hasFixedValue = convertSetting.fixedValue

      if (hasFromIndex || hasFixedValue) {
        return null
      }

      return '変換内容を設定してください。'
    }
  },
  validateConvertFromIndex(state, getters, rootState, rootGetters) {
    return (convertSetting) => {
      if (convertSetting.fromIndex === null) {
        return null
      }

      const csvHeaders = rootGetters['csv/file/csvHeaders']
      if (!csvHeaders || convertSetting.fromIndex < csvHeaders.length) {
        return null
      }

      return '変換する前のCSV内容が変わっております。変換設定を見直してください。'
    }
  }
}
