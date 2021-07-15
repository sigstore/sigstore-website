export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    fallback: true
  },

  loading: {
    color: 'blue',
    height: '5px'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sigstore',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/base'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/components.client'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',

    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    '@nuxtjs/axios',

    '@nuxtjs/svg',

    '@nuxtjs/pwa',

    '@nuxtjs/apollo',

    '@nuxtjs/dotenv',

    '@nuxtjs/proxy',

    '@nuxtjs/redirect-module',

    '@nuxtjs/sitemap',

    '@nuxt/content',

    '@nuxtjs/markdownit'

  ],

  markdownit: {
    runtime: true // Support `$md()`
  },

  googleFonts: {
    families: {
      Inter: [400],
    },
    display: 'swap' // 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
  },

  content: {
    fullTextSearchFields: ['title', 'description', 'slug', 'text']
  },

  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.VUE_APP_FRONTEND,
    generate: true,
    cacheTime: 86400,
    trailingSlash: true
  },

  apollo: {
    clientConfigs: {
      default: '@/plugins/apollo-config.js',
    },
    includeNodeModules: true
  },

  /**
     * Proxy module configuration
     */
  proxy: {
    // target: "http://localhost:3000",
    // [process.env.GRAPHQL_PATH]: process.env.VUE_APP_BACKEND,
    // '/actions': process.env.VUE_APP_BACKEND,
    // '/robots.txt': process.env.VUE_APP_BACKEND,
    // '/humans.txt': process.env.VUE_APP_BACKEND,
    // '/sitemaps_*.xml': process.env.VUE_APP_BACKEND,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}