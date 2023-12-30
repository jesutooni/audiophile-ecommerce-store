// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "nuxt-icon"],

  components: ["~/components/reusables", "~/components/"],

  googleFonts: {
    families: {
      Manrope: [400, 700],
    },
  },
});
