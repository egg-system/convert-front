const getContext = () => {
  return window.$nuxt.context
}

const handleAction = async (actionKey, payload = null) => {
  const { store, error } = getContext()

  try {
    await store.dispatch(actionKey, payload)
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
  await handleAction('csv/getPreview')
}
