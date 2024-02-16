// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  modules: [
    "@pinia/nuxt",
    "@nuxt/test-utils/module",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Poppins: true,
        },
      },
    ],
  ],
});
