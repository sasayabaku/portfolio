// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [
        '@nuxt/content',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    runtimeConfig: {
        public: {
            githubToken: process.env.NUXT_PUBLIC_GITHUB_TOKEN,
            qiitaToken: process.env.NUXT_PUBLIC_QIITA_TOKEN
        }
    }
})
