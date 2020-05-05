import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const isProd = process.env.NODE_ENV === 'production'

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name:
          '『オンラインで完結、無料のかんたんデータ変換サービス』異なるシステム間でデータをやり取りする際に必要となる「フォーマット変換」「コード値変換」「固定値セット」などを、手軽に誰でも無料で行うことが出来ます。アップロードしたデータは保存されず、変換処理後すぐに削除されるためセキュリティも問題なし。',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Data Convert' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://convert-service.x-face.net/?step=1'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'convert-service.x-face'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: '共通ディスクリプション'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://eggsystem.co.jp/_nuxt/img/4c7532d.jpg'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/storage.js', ssr: false }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  server: {
    host: process.env.BASE_HOST || 'localhost',
    port: process.env.BASE_PORT || 3000
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: isProd ? process.env.PROD_API_URL : process.env.API_URL
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
