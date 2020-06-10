import injectStorageState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    injectStorageState({
      storage: window.sessionStorage,
      key: 'csv',
      paths: [
        'csv.converter.settings',
        'csv.converter.replacer.replaceSettings',
        'csv.fileKey'
      ]
    })(store)
  })
}
