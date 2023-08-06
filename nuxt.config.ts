// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  build: {
    transpile: ["primevue"]
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
  css: [
    "primeicons/primeicons.css",
    "@/assets/scss/common.scss",
  ],
})
