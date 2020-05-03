const parseQuery = async ({ query, redirect, store }) => {
  // stepがない場合のみリダイレクト
  if (!('step' in query)) {
    redirect(302, '/', { step: 1 })
  }

  if ('csv' in query) {
    await store.dispatch('csv/file/getFile', query.csv)
  }

  if ('settings' in query) {
    await store.dispatch('csv/converter/getSettingsFile', query.settings)
  }

  if ('step' in query) {
    store.commit('csv/setCurrentStep', query.step)
  }
}

export default parseQuery
