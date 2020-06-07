export const validateConvert = (convertSetting) => {
  return convertSetting.fromIndex || convertSetting.fixedValue
}

export const validate = (convertSetting) => {
  if (!convertSetting.name) {
    return false
  }
  return validateConvert(convertSetting)
}
