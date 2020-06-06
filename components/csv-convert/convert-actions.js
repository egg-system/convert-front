const getContext = () => {
  return window.$nuxt.context
}

const handleAction = async (actionKey, payload = null) => {
  const { store, error } = getContext()

  try {
    return await store.dispatch(actionKey, payload)
  } catch (apiError) {
    error({
      statusCode: apiError.response.status,
      message: apiError.response.message
    })
  }
}

export const putFile = async (csv) => {
  await handleAction('csv/file/putFile', csv)
}

export const putSettingsFile = async () => {
  await handleAction('csv/converter/putSettingsFile')
}

export const getPreview = async () => {
  const { data } = await handleAction('csv/convertCsv', 'UTF8')
  const { $axios } = getContext()

  const csv = await $axios.get('/files', {
    params: { fileKey: data.fileKey }
  })
  return csv.data
}
