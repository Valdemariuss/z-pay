const path = require('path')
const env = require('dotenv').config()

module.exports = {
  mode: 'universal',
  /*
  ** Environment
  */
  env: env.parsed,
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#ccc' },
  /*
  ** Global CSS
  */
  css: [
    {src: "~/assets/scss/index.scss", lang: 'sass'}
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/filters.js'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module',
    '@nuxtjs/svg-sprite',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      const apiClient = process.env.NUXT_APP_API_CLIENT // mock or server
      config.resolve.alias['api-client'] = path.resolve(__dirname, `api/${apiClient}`)
    }
  }
}
