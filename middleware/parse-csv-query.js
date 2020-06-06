const getCsvfile = async ({ store, query, redirect }) => {
  try {
    await store.dispatch('csv/file/getFile', query.csv)
  } catch (error) {
    store.commit('csv/resetCsv')
    redirect(302, '/', { step: 1 })
  }
}

const getSettingsFile = async ({ store, query, redirect }) => {
  try {
    await store.dispatch('csv/converter/getSettingsFile', query.settings)
  } catch {
    store.commit('csv/resetSettingFile')
    redirect(302, '/', store.getters['csv/convertQuery'])
  }
}

const parseQuery = async ({ query, redirect, store }) => {
  // serverの場合、axiosの初期化が完了していないので、実行しない
  if (process.server) {
    return
  }

  if ('step' in query) {
    store.commit('csv/setCurrentStep', query.step)
  } else {
    redirect(302, '/', { step: 1 })
  }

  if ('csv' in query) {
    await getCsvfile({ store, redirect, query })
  }

  if ('settings' in query) {
    await getSettingsFile({ store, redirect, query })
  }
}

export default parseQuery
