// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
  ],
  css: [
    "primeicons/primeicons.css",
    "@/assets/scss/common.scss"
  ],
  build: {
		transpile: ["primevue"]
	}
})
