export const separaters = [
  {
    text: 'タブ（エクセルからコピーした場合）',
    value: '\t'
  },
  {
    text: 'カンマ（テキストエディタなどからコピーした場合）',
    value: ','
  }
]

export const convertBulkInput = (textInput, separater) => {
  return textInput
    .split('\n')
    .filter((replaceText) => !!replaceText)
    .map((replaceText) => {
      const replaceArray = replaceText.split(separater)
      if (replaceText.split(separater).length !== 2) {
        return null
      }
      return { from: `${replaceArray[0]}`, to: `${replaceArray[1]}` }
    })
}

export const parseReplaces = (replaces, separater) => {
  return replaces
    .map((replace) => {
      if (!replace.from && !replace.to) {
        return null
      }
      return `${replace.from}${separater}${replace.to}`
    })
    .filter((replace) => !!replace)
    .join('\n')
}
