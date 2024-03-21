// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "shadcn-nuxt"],

  nitro: {
    experimental: {
      openAPI: true,
    },
    routeRules: {
      "/api/**": { cors: true },
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },

  googleFonts: {
    base64: true,
    fontsDir: "assets/fonts",
    overwriting: true,
    families: {
      Inter: [400, 700],
    },
  },
});
