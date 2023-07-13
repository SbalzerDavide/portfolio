declare module 'nuxt/schema' {
  interface AppConfigInput {
    /** Theme configuration */
    theme?: {
      /** Primary app color */
      primaryColor?: string
    },
    title?: string,
    language?: string
  }
}
export default defineAppConfig({
  theme: {
    primaryColor: '#ababab',
  },
  title: "Davide Sbalzer",
  language: "it"
})