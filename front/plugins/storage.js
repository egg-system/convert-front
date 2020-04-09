import injectStorageState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    injectStorageState({
      storage: window.sessionStorage,
      key: 'csv',
      paths: ['csv.settings', 'csv.fileKey']
    })(store)
  })
}
