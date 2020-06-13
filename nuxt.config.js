import colors from 'vuetify/es5/util/colors'
import { head } from './plugins/inject-nuxt-config.js'

require('dotenv').config()

const nodeEnv = process.env.NODE_ENV || 'development'
const envValues = require(`./configs/${nodeEnv}.js`).default

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  env: envValues,
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/inject-storage.js', mode: 'client' },
    { src: '~/plugins/inject-axios-config.js', mode: 'client' },
    // APIを叩くため、inject-axios-configの後ろにする必要がある
    { src: '~/middleware/parse-csv-query.js', mode: 'client' }
  ],
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
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
    [
      '@nuxtjs/google-tag-manager',
      {
        id: nodeEnv === 'development' ? '' : process.env.GTM_ID,
        pageTracking: true
      }
    ]
  ],
  server: {
    host: process.env.BASE_HOST || 'localhost',
    port: process.env.BASE_PORT || 3000
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
  dotenv: {
    only: ['API_URL', 'API_KEY']
  },
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['fab']
      }
    ]
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
