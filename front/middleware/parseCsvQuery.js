const parseQuery = ({ query, redirect, store }) => {
  // stepがない場合のみリダイレクト
  if (!('step' in query)) {
    redirect(302, '/', { step: 1 })
  }

  if ('csv' in query) {
    store.dispatch('csv/file/getFile', query.csv)
  }

  if ('step' in query) {
    store.commit('csv/setCurrentStep', query.step)
  }
}

export default parseQuery
