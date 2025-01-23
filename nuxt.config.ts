// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt", "@nuxtjs/i18n"],

  build: {
    transpile: ["primevue"],
  },

  i18n: {
    locales: [
      { code: "en", language: "en-US", file: 'en.js' },
      { code: "it", language: "it-IT", file: 'it.js' },
    ],
    langDir: 'locales',
    defaultLocale: "it",
    detectBrowserLanguage: {
      useCookie: true,
    },
    strategy: 'prefix',
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/var.scss";',
        },
      },
    },
  },

  css: ["primeicons/primeicons.css", "@/assets/scss/common.scss"],
  compatibilityDate: "2025-01-23",
});