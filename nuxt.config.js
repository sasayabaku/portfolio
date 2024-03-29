import colors from 'vuetify/es5/util/colors';
import * as FontAwesome from './build/fontawesome.js';

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - sasayabaku',
    title: 'sasayabaku',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // 外部JSファイルの読み込み
    script: [
      {
        src: 'https://unpkg.com/three@0.137.4/build/three.min.js',
        async: true
      },
      {
        src: 'https://unpkg.com/three@0.137.4/examples/js/controls/OrbitControls.js',
        defer: true
      },
      {
        src: 'https://unpkg.com/three@0.137.4/examples/js/renderers/CSS3DRenderer.js',
        defer: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        integrity: 'sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==',
        crossorigin: "anonymous",
        referrerpolicy: "no-referrer"
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "~/static/css/main.scss",
    "vuesax/dist/vuesax.css",
    "boxicons/css/boxicons.min.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/main.js' },
    { src: '~/plugins/aos.js', ssr: false },
    '@/plugins/vuesax'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    ['@nuxtjs/fontawesome', { component: 'fontAwesome', suffix: true }],
    ['@nuxtjs/google-analytics', { id: process.env.GOOGLE_ANALYTICS_ID}]
  ],
  fontawesome: {
    icons: {
      solid: FontAwesome.solid,
      regular: FontAwesome.regular,
      brands: FontAwesome.brands
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // 'nuxt-svg-loader'
    '@nuxtjs/apollo'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
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
  apollo: {
    clientConfigs: {
      default: '~/apollo/client-configs/default.js'
    }
  },
  publicRuntimeConfig: {
    githubURL: process.env.GITHUB_TOKEN,
    qiitaURL: process.env.QIITA_TOKEN
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}